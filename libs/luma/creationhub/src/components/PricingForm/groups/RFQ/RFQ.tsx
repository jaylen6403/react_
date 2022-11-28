import {
  RfqState,
  RfqIssuerAction,
  RfqOperations,
  RfqQuotedTradable,
  RfqQuoteRequested,
  RfqTraded,
  RfqTradeRequested,
  UpdateRFQUsingPostApiArg,
  IssuerPricing,
} from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import { QuotingWrapper, Title } from '../Quoting/Quoting.styles';
import { RFQAcceptPostTradeCancel } from './elements/actions/RFQAcceptPostTradeCancel';
import { RFQAcceptPreTradeCancel } from './elements/actions/RFQAcceptPreTradeCancel';
import { RFQConfirmTrade } from './elements/actions/RFQConfirmTrade';
import { RFQQuote } from './elements/actions/RFQQuote';
import { RFQRejectPostTradeCancel } from './elements/actions/RFQRejectPostTradeCancel';
import { RFQRejectQuote } from './elements/actions/RFQRejectQuote';
import { RFQRejectTrade } from './elements/actions/RFQRejectTrade';
import { RFQRequestPostTradeCancel } from './elements/actions/RFQRequestPostTradeCancel';
import { RFQTable } from './RFQTable';
import { RFQISIN } from './RFQISIN';

export interface RFQProps {
  rfq: IssuerPricing;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
}

export type DropdownItem = {
  label: string;
  action: () => void;
  isDisabled: boolean;
  dataTestId: string;
};

export function getRfqIssuerActions({
  rfq,
  updateRfq,
  isUpdateRfqPending,
}: RFQProps) {
  let isEditQuote = false;
  let isEditValidUntil = false;
  let isEditRejectionReason = false;
  const availableActions = rfq.actions
    ?.map((action) => {
      switch (action) {
        case RfqIssuerAction.QUOTE_INDICATIVE:
          isEditQuote = true;
          return RFQQuote({
            rfq: rfq as RfqQuoteRequested,
            updateRfq,
            isUpdateRfqPending,
            quoteType: 'INDICATIVE',
          });
        case RfqIssuerAction.QUOTE_TRADABLE:
          isEditQuote = true;
          isEditValidUntil = true;
          return RFQQuote({
            rfq: rfq as RfqQuoteRequested,
            updateRfq,
            isUpdateRfqPending,
            quoteType: 'TRADABLE',
          });
        case RfqIssuerAction.REJECT_QUOTE:
          isEditRejectionReason = true;
          return RFQRejectQuote({
            rfq: rfq as RfqQuoteRequested,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.ACCEPT_PRE_TRADE_CANCEL:
          return RFQAcceptPreTradeCancel({
            rfq: rfq as RfqQuotedTradable,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.REJECT_TRADE:
          isEditRejectionReason = true;
          return RFQRejectTrade({
            rfq: rfq as RfqTradeRequested,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.CONFIRM_TRADE:
          return RFQConfirmTrade({
            rfq: rfq as RfqTradeRequested,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.REQUEST_POST_TRADE_CANCEL:
          return RFQRequestPostTradeCancel({
            rfq: rfq as RfqTraded,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.REJECT_POST_TRADE_CANCEL:
          return RFQRejectPostTradeCancel({
            rfq: rfq as RfqTraded,
            updateRfq,
            isUpdateRfqPending,
          });
        case RfqIssuerAction.ACCEPT_POST_TRADE_CANCEL:
          return RFQAcceptPostTradeCancel({
            rfq: rfq as RfqTraded,
            updateRfq,
            isUpdateRfqPending,
          });
        default:
          return null;
      }
    })
    .filter((x) => x) as DropdownItem[];
  if (availableActions && availableActions.length > 0) {
    return {
      actions: availableActions,
      isEditQuote,
      isEditValidUntil,
      isEditRejectionReason,
    };
  } else {
    return {
      actions: undefined,
      isEditQuote,
      isEditValidUntil,
      isEditRejectionReason,
    };
  }
}

export function RFQ({ rfq, updateRfq, isUpdateRfqPending }: RFQProps) {
  const [externalId, setExternalId] = useState<string | undefined>(undefined);
  const [isin, setIsin] = useState<string | undefined>(undefined);
  useEffect(() => {
    setExternalId(rfq.externalId ?? undefined);
  }, [rfq.externalId]);
  useEffect(() => {
    setIsin(rfq.isin ?? undefined);
  }, [rfq.isin]);

  const patchExternalId = () => {
    const { id, version } = rfq;
    updateRfq({
      rfqId: id,
      updateRequest: {
        version,
        externalId,
      },
      operationName: RfqOperations.SetExternalId,
    });
  };
  const patchIsin = () => {
    const { id, version } = rfq;
    updateRfq({
      rfqId: id,
      updateRequest: {
        version,
        isin,
      },
      operationName: RfqOperations.SetIsin,
    });
  };

  const { actions, isEditQuote, isEditValidUntil, isEditRejectionReason } =
    getRfqIssuerActions({
      rfq,
      updateRfq,
      isUpdateRfqPending,
    });

  return (
    <QuotingWrapper>
      <Title>Quote Requests</Title>
      <RFQTable
        rfq={rfq}
        externalId={externalId}
        setExternalId={setExternalId}
        patchExternalId={patchExternalId}
        actions={actions}
        isEditQuote={isEditQuote}
        isEditValidUntil={isEditValidUntil}
        isEditRejectionReason={isEditRejectionReason}
      />
      {rfq.state === RfqState.TRADED && (
        <RFQISIN isin={isin} setIsin={setIsin} patchIsin={patchIsin} />
      )}
    </QuotingWrapper>
  );
}

export default RFQ;
