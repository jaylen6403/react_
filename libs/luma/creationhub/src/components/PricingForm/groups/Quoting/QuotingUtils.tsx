import { useTimer } from 'react-timer-hook';
import {
  IssuerId,
  PricingInProgress,
  PricingOperations,
  PricingState,
  Rfq,
  RfqCancelRequestInitiator,
  RfqClientAction,
  RfqIssuer,
  RfqQuotedIndicative,
  RfqQuotedTradable,
  RfqQuoteRejected,
  RfqTradeRejected,
  RfqQuoteRequested,
  RfqState,
  RfqTradeCancelled,
  RfqTraded,
  RfqTradeRequested,
  RfqTradingCancelled,
  RfqTypeEnum,
  UpdatePricingUsingPostApiArg,
} from '@luma-fe-workspace/redux';
import {
  LumaButton,
  LumaButtonDropdown,
} from '@luma-fe-workspace/design-system';
import {
  barcLogo,
  bnpLogo,
  bofaLogo,
  msLogo,
  socgenLogo,
  citiLogo,
  cibcLogo,
  csLogo,
  rbcLogo,
  ubsLogo,
} from '../../../../assets/logos';
import { QuoteStatusIcon } from './Quoting.styles';

type IssuerDisplayData = {
  label?: string;
  icon?: string;
};

// TODO proper data have to be extracted and filled once issuers specification is complete
export const issuersDisplayData: Record<IssuerId, IssuerDisplayData> = {
  Barclays: { icon: barcLogo },
  BANK_OF_AMERICA: { icon: bofaLogo },
  BNP: { icon: bnpLogo },
  MORGAN_STANLEY: { icon: msLogo },
  SocGen: { icon: socgenLogo },
  RBC: { icon: rbcLogo },
  'Citi Bank': { icon: citiLogo },
  'Canadian Imperial Bank of Commerce': { icon: cibcLogo },
  'Credit Suisse': { icon: csLogo },
  UBS: { icon: ubsLogo },
};

export function getRfqStatus(rfq: Rfq) {
  if (!rfq) {
    return null;
  }

  const icon = rfq.isAPI ? (
    <QuoteStatusIcon iconCode="arrows-rotate" type="regular" />
  ) : (
    <QuoteStatusIcon iconCode="user-clock" type="solid" />
  );

  switch (rfq.state) {
    case RfqState.TRADED: {
      const { cancelRequestedBy, quote } = rfq as RfqTraded;
      if (cancelRequestedBy === RfqCancelRequestInitiator.CLIENT) {
        return `${quote} Requesting Trade Cancellation`;
      } else if (cancelRequestedBy === RfqCancelRequestInitiator.ISSUER) {
        return `${quote} Traded - Cancel Requested`;
      } else {
        return `${quote} Traded`;
      }
    }
    case RfqState.QUOTE_REQUESTED:
      return icon;
    case RfqState.REQUEST_CANCELLED:
      return 'Cancelled';
    case RfqState.QUOTE_REJECTED:
      return `Quote Rejected: ${(rfq as RfqQuoteRejected).message}`;
    case RfqState.QUOTED_INDICATIVE:
      return (rfq as RfqQuotedIndicative).quote;
    case RfqState.QUOTED_TRADABLE:
      return (rfq as RfqQuotedTradable).quote;
    case RfqState.TRADE_REQUESTED: {
      const { cancelRequestedByClient, quote } = rfq as RfqTradeRequested;
      if (cancelRequestedByClient) {
        return `${quote} Trading - Cancel Requested`;
      } else {
        return `${quote} Trade requested...`;
      }
    }
    case RfqState.TRADE_REJECTED: {
      const { message, quote } = rfq as RfqTradeRejected;
      return `${quote} Trade Rejected: ${message}`;
    }
    case RfqState.TRADING_CANCELLED:
      return `${(rfq as RfqTradingCancelled).quote} Trading - Cancelled`;
    case RfqState.TRADE_CANCELLED:
      return `${(rfq as RfqTradeCancelled).quote} Traded - Cancelled`;
    case RfqState.ACCEPT_POST_TRADE_CANCEL:
      return `${(rfq as RfqTradeCancelled).quote} Traded - Cancelled`;
    case RfqState.ACCEPT_PRE_TRADE_CANCEL:
      return `${(rfq as RfqTradingCancelled).quote} Trading - Cancelled`;
    default:
      return null;
  }
}

export function getRfqDisplayType(
  state: RfqState | undefined,
  type: RfqTypeEnum | undefined
) {
  switch (state) {
    case RfqState.QUOTED_INDICATIVE:
      return 'Indicative';
    case RfqState.QUOTED_TRADABLE:
      return 'LIVE';
    default:
      return type ?? '';
  }
}

export function formatTypeLabel(type: keyof typeof RfqTypeEnum) {
  const t1 = type.slice(0, 1).toUpperCase();
  const t2 = type.slice(1).toLowerCase();
  return t1 + t2;
}

export function formatDisplayedDate(date: number[]) {
  return date
    .map((datePart) => {
      if (datePart < 10) {
        return `0${datePart}`;
      }
      return datePart.toString();
    })
    .toString()
    .replace(/,/g, ':');
}

export function ValidUntilTimer({
  expiryTimestamp,
}: {
  expiryTimestamp: Date;
}) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return <>({formatDisplayedDate([days, hours, minutes, seconds])})</>;
}

type GetRfqActionParams = {
  rfqIssuer: RfqIssuer;
  pricing: PricingInProgress;
  updatePricing: (body: UpdatePricingUsingPostApiArg) => void;
  isMutationPending: boolean;
  cancelRfq: (body: UpdatePricingUsingPostApiArg) => void;
  createRfq: (body: UpdatePricingUsingPostApiArg) => void;
};

export function newRequestDropDown({
  dropdownItems,
  issuerId,
  version,
  pricingId,
  createRfq,
  isMutationPending,
}: {
  dropdownItems: Array<{ label: string; value: RfqTypeEnum }>;
  issuerId: string;
  version: string;
  pricingId: string;
  createRfq: (body: UpdatePricingUsingPostApiArg) => void;
  isMutationPending: boolean;
}) {
  const createRfqHandler = (rfqType: RfqTypeEnum) => {
    const createRfqRequest = {
      issuer: issuerId,
      rfqType,
      version,
    };
    createRfq({
      updateRequest: createRfqRequest,
      pricingId,
      operationName: PricingOperations.CreateRfq,
    });
  };
  return (
    <LumaButtonDropdown
      id={pricingId}
      onChangeDropdown={(item) => {
        if (!item) {
          return;
        }
        createRfqHandler(item.value as RfqTypeEnum);
      }}
      disabled={isMutationPending}
      variant="secondary"
      size="x_small"
      dropdownItems={dropdownItems}
      type="button"
      fullWidth={true}
    >
      Actions
    </LumaButtonDropdown>
  );
}

export function postTradeCancelActions(
  rfq: RfqTraded,
  pricing: PricingInProgress,
  updatePricing: (body: UpdatePricingUsingPostApiArg) => void,
  isMutationPending: boolean,
  action: 'Accept' | 'Reject' | 'Cancel'
) {
  const { id: rfqId } = rfq;
  switch (action) {
    case 'Accept': {
      const postTradeCancelAcceptHandler = () => {
        const updateRequest = {
          rfqId,
          version: pricing.version,
        };
        updatePricing({
          updateRequest,
          pricingId: pricing.id,
          operationName: PricingOperations.AcceptPostTradeCancellation,
        });
      };
      return (
        <LumaButton
          variant="tertiary_positive"
          size="x_small"
          onClick={postTradeCancelAcceptHandler}
          disabled={isMutationPending}
          fullWidth={true}
        >
          Accept
        </LumaButton>
      );
    }
    case 'Reject': {
      const postTradeCancelRejectHandler = () => {
        const updateRequest = {
          rfqId,
          version: pricing.version,
        };
        updatePricing({
          updateRequest,
          pricingId: pricing.id,
          operationName: PricingOperations.RejectPostTradeCancellation,
        });
      };
      return (
        <LumaButton
          variant="tertiary_negative"
          size="x_small"
          onClick={postTradeCancelRejectHandler}
          disabled={isMutationPending}
          fullWidth={true}
          data-testid="button-reject"
        >
          Reject
        </LumaButton>
      );
    }
    case 'Cancel': {
      const postTradeCancelHandler = () => {
        const updateRequest = {
          rfqId,
          version: pricing.version,
        };
        updatePricing({
          updateRequest,
          pricingId: pricing.id,
          operationName: PricingOperations.RequestPostTradeCancellation,
        });
      };
      return (
        <LumaButton
          variant="tertiary_negative"
          size="x_small"
          onClick={postTradeCancelHandler}
          disabled={isMutationPending}
          fullWidth={true}
          data-testid={`button-cancel`}
        >
          Cancel
        </LumaButton>
      );
    }
    default:
      return null;
  }
}

export function preTradeCancelActions(
  rfq: RfqTradeRequested,
  pricing: PricingInProgress,
  updatePricing: (body: UpdatePricingUsingPostApiArg) => void,
  isMutationPending: boolean
) {
  const { id: rfqId, cancelRequestedByClient } = rfq;
  const preTradeCancelHandler = () => {
    const updateRequest = {
      rfqId,
      version: pricing.version,
    };
    updatePricing({
      updateRequest,
      pricingId: pricing.id,
      operationName: PricingOperations.RequestPreTradeCancellation,
    });
  };
  if (!cancelRequestedByClient) {
    return (
      <LumaButton
        variant="tertiary_negative"
        size="x_small"
        onClick={preTradeCancelHandler}
        disabled={isMutationPending}
        fullWidth={true}
        data-testid={`button-cancel`}
      >
        Cancel
      </LumaButton>
    );
  }
  return null;
}

export function tradeAction(
  rfq: RfqQuotedTradable,
  pricing: PricingInProgress,
  updatePricing: (body: UpdatePricingUsingPostApiArg) => void,
  isMutationPending: boolean
) {
  const { id: rfqId, validUntilTimestamp } = rfq;
  const validUntilDate = validUntilTimestamp
    ? new Date(validUntilTimestamp)
    : undefined;

  const hasTimeout = validUntilDate !== undefined;
  const expired = validUntilDate !== undefined && validUntilDate < new Date();
  const canTrade = !expired && pricing.state === PricingState.InProgress;

  const tradeHandler = () => {
    const updateRequest = {
      rfqId,
      version: pricing.version,
    };
    updatePricing({
      updateRequest,
      pricingId: pricing.id,
      operationName: PricingOperations.RequestTrade,
    });
  };

  return (
    <>
      {canTrade && (
        <LumaButton
          variant="tertiary_positive"
          size="x_small"
          disabled={isMutationPending}
          onClick={tradeHandler}
          fullWidth={true}
        >
          Trade{' '}
          {hasTimeout &&
            (expired ? (
              'expired'
            ) : (
              <ValidUntilTimer expiryTimestamp={validUntilDate} />
            ))}
        </LumaButton>
      )}
      {expired && hasTimeout && 'Expired'}
    </>
  );
}

export function preQuoteCancelActions(
  rfq: RfqQuoteRequested,
  pricing: PricingInProgress,
  isMutationPending: boolean,
  cancelRfq: (body: UpdatePricingUsingPostApiArg) => void
) {
  const { id: rfqId } = rfq;
  const cancelRfqHandler = () => {
    const cancelRfqRequest = {
      rfqId,
      version: pricing.version,
    };
    cancelRfq({
      updateRequest: cancelRfqRequest,
      pricingId: pricing.id,
      operationName: PricingOperations.CancelRfq,
    });
  };

  return (
    <LumaButton
      variant="tertiary_negative"
      size="x_small"
      disabled={isMutationPending}
      onClick={cancelRfqHandler}
      fullWidth={true}
      data-testid={`button-cancel`}
    >
      Cancel
    </LumaButton>
  );
}

export function newRfqAction({
  pricing: { state },
  rfqType,
}: {
  pricing: PricingInProgress;
  rfqType: RfqTypeEnum;
}) {
  if (state === PricingState.InProgress) {
    const dropdownItems = {
      INDICATIVE: {
        label: 'INDICATIVE',
        value: RfqTypeEnum.INDICATIVE,
      },
      LIVE: {
        label: 'LIVE',
        value: RfqTypeEnum.LIVE,
      },
      MANUAL: {
        label: 'MANUAL',
        value: RfqTypeEnum.MANUAL,
      },
    };
    return dropdownItems[rfqType];
  } else {
    return null;
  }
}

export function getRfqAction({
  rfqIssuer: { actions, rfq, issuerId },
  pricing,
  updatePricing,
  isMutationPending,
  cancelRfq,
  createRfq,
}: GetRfqActionParams): string | JSX.Element | null {
  const availableActions: Array<JSX.Element | null> = [];
  const newRfqActions: Array<{ label: string; value: RfqTypeEnum } | null> = [];
  if (pricing?.state === PricingState.Cancelled) {
    return null;
  }
  for (const action of actions) {
    switch (action) {
      case RfqClientAction.REQUEST_TRADE:
        availableActions.push(
          tradeAction(
            rfq as RfqQuotedTradable,
            pricing,
            updatePricing,
            isMutationPending
          )
        );
        break;
      case RfqClientAction.REQUEST_FOR_INDICATIVE_QUOTE:
        newRfqActions.push(
          newRfqAction({
            pricing,
            rfqType: RfqTypeEnum.INDICATIVE,
          })
        );
        break;
      case RfqClientAction.REQUEST_FOR_LIVE_QUOTE:
        newRfqActions.push(
          newRfqAction({
            pricing,
            rfqType: RfqTypeEnum.LIVE,
          })
        );
        break;
      case RfqClientAction.REQUEST_FOR_MANUAL_QUOTE:
        newRfqActions.push(
          newRfqAction({
            pricing,
            rfqType: RfqTypeEnum.MANUAL,
          })
        );
        break;
      case RfqClientAction.REQUEST_PRE_TRADE_CANCEL:
        availableActions.push(
          preTradeCancelActions(
            rfq as RfqTradeRequested,
            pricing,
            updatePricing,
            isMutationPending
          )
        );
        break;
      case RfqClientAction.CANCEL_REQUEST:
        availableActions.push(
          preQuoteCancelActions(
            rfq as RfqQuoteRequested,
            pricing,
            isMutationPending,
            cancelRfq
          )
        );
        break;
      case RfqClientAction.REQUEST_POST_TRADE_CANCEL:
        availableActions.push(
          postTradeCancelActions(
            rfq as RfqTraded,
            pricing,
            updatePricing,
            isMutationPending,
            'Cancel'
          )
        );
        break;
      case RfqClientAction.ACCEPT_POST_TRADE_CANCEL:
        availableActions.push(
          postTradeCancelActions(
            rfq as RfqTraded,
            pricing,
            updatePricing,
            isMutationPending,
            'Accept'
          )
        );
        break;
      case RfqClientAction.REJECT_POST_TRADE_CANCEL:
        availableActions.push(
          postTradeCancelActions(
            rfq as RfqTraded,
            pricing,
            updatePricing,
            isMutationPending,
            'Reject'
          )
        );
        break;
    }
  }
  const dropdownItems = newRfqActions.filter(
    (action) => action !== null
  ) as Array<{ label: string; value: RfqTypeEnum }>;
  if (dropdownItems.length > 0) {
    availableActions.push(
      newRequestDropDown({
        dropdownItems,
        issuerId,
        version: pricing.version,
        pricingId: pricing.id,
        createRfq,
        isMutationPending,
      })
    );
  }
  if (availableActions.length === 0) {
    return null;
  }
  return <>{availableActions}</>;
}
