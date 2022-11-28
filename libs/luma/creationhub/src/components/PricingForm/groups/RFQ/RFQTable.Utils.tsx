import { useState } from 'react';
import {
  HistoricalRfq,
  IssuerPricing,
  Rfq,
  RfqCancelRequestInitiator,
  RfqId,
  RfqIssuerAction,
  RfqQuotedIndicative,
  RfqQuotedTradable,
  RfqQuoteRejected,
  RfqState,
  RfqTradeCancelled,
  RfqTraded,
  RfqTradeRejected,
  RfqTradeRequested,
  RfqTradingCancelled,
} from '@luma-fe-workspace/redux';
import {
  LumaTextEntry,
  LumaValidUntil,
  LumaButtonDropdown,
} from '@luma-fe-workspace/design-system';
import { TableColumn, TableRow } from '../../elements';
import { DropdownItem } from './RFQ';
import {
  ExternalIdInput,
  ExternalIdInputWrapper,
  IssuerCell,
  TableInputWrapper,
} from './RFQ.styles';

type RfqQuotedState =
  | RfqQuotedIndicative
  | RfqQuotedTradable
  | RfqTradeRequested
  | RfqTradeRejected
  | RfqTraded
  | RfqTradingCancelled
  | RfqTradeCancelled;

interface Props {
  rfq: IssuerPricing;
  isEditQuote?: boolean;
  isEditValidUntil?: boolean;
  actions?: DropdownItem[];
  externalId: string | undefined;
  setExternalId: (value: string) => void;
  patchExternalId: () => void;
  rejectionReason: string;
}

export function getValidUntilText(
  validUntilTimestamp: number | string | undefined
) {
  return validUntilTimestamp != null
    ? new Date(validUntilTimestamp).toLocaleString()
    : undefined;
}

export function getTradedText(
  cancelRequestedBy: RfqCancelRequestInitiator | undefined
) {
  if (cancelRequestedBy === RfqCancelRequestInitiator.ISSUER) {
    return 'TRADED - Requesting Cancellation';
  }
  if (cancelRequestedBy === RfqCancelRequestInitiator.CLIENT) {
    return 'TRADED - Cancel Requested';
  }
  return 'TRADED';
}

export function getStateText(rfq: Rfq | HistoricalRfq) {
  const isTradeLost = (rfq as Rfq)?.lost && rfq.state !== RfqState.TRADED;
  if (isTradeLost) {
    return 'TRADE LOST';
  }
  const state = rfq.state;
  const rejectionMessage =
    (rfq as RfqQuoteRejected).message || (rfq as HistoricalRfq).rejectedReason
      ? `: ${(rfq as RfqQuoteRejected).message}`
      : '';
  const stateTexts = {
    [RfqState.QUOTE_REQUESTED]: 'QUOTE REQUESTED',
    [RfqState.QUOTE_REJECTED]: `REJECTED${rejectionMessage}`,
    [RfqState.QUOTED_INDICATIVE]: 'QUOTED INDICATIVE',
    [RfqState.QUOTED_TRADABLE]: 'QUOTED TRADABLE',
    [RfqState.REQUEST_CANCELLED]: 'CANCELLED',
    [RfqState.TRADED]: getTradedText((rfq as RfqTraded).cancelRequestedBy),
    [RfqState.TRADE_CANCELLED]: 'TRADE CANCELLED',
    [RfqState.TRADE_REJECTED]: `TRADE REJECTED${rejectionMessage}`,
    [RfqState.TRADE_REQUESTED]: (rfq as RfqTradeRequested)
      .cancelRequestedByClient
      ? 'TRADE CANCEL REQUESTED'
      : 'TRADE REQUESTED',
    [RfqState.TRADING_CANCELLED]: 'TRADING CANCELLED',
    [RfqState.ACCEPT_PRE_TRADE_CANCEL]: '',
    [RfqState.REQUEST_POST_TRADE_CANCEL]: '',
    [RfqState.REJECT_POST_TRADE_CANCEL]: '',
    [RfqState.ACCEPT_POST_TRADE_CANCEL]: '',
  };
  return stateTexts[state];
}

export function useRowsAndColumns({
  rfq,
  isEditQuote,
  isEditValidUntil,
  actions,
  externalId,
  setExternalId,
  patchExternalId,
  rejectionReason,
}: Props): [TableRow[], TableColumn[]] {
  const [quote, setQuote] = useState('');
  const [validUntil, setValidUntil] = useState<number | null>(null);
  const columns: TableColumn[] = [
    {
      label: 'Request #',
      field: ({ id }: { id: RfqId }) => {
        return <IssuerCell>{id?.slice(0, 8)}</IssuerCell>;
      },
    },
    {
      label: 'Extern. Id',
      field: ({
        externalId,
        editable,
      }: {
        externalId: string | undefined;
        editable?: boolean;
      }) => {
        return editable ? (
          <TableInputWrapper>
            <ExternalIdInputWrapper>
              <ExternalIdInput
                sizeVariant="small"
                value={externalId}
                onChange={(e) => {
                  setExternalId(e.target.value);
                }}
                onBlur={patchExternalId}
                data-testid="input-externalId"
              />
            </ExternalIdInputWrapper>
          </TableInputWrapper>
        ) : (
          <IssuerCell>{externalId}</IssuerCell>
        );
      },
    },
    {
      label: 'Quote',
      field: ({
        quote,
        editable,
      }: {
        quote: string | undefined;
        editable?: boolean;
      }) => {
        return editable ? (
          <TableInputWrapper>
            <LumaTextEntry
              sizeVariant="small"
              value={quote}
              onChange={(e) => {
                setQuote(e.target.value);
              }}
              data-testid="input-quote"
            />
          </TableInputWrapper>
        ) : (
          <IssuerCell>{quote}</IssuerCell>
        );
      },
    },
    {
      label: 'Valid Until',
      field: ({
        validUntil,
        editable,
      }: {
        validUntil: number | string | undefined;
        editable?: boolean;
      }) => {
        return editable ? (
          <TableInputWrapper>
            <LumaValidUntil
              onChange={(newVal) => {
                if (newVal) {
                  setValidUntil(newVal);
                }
              }}
              inputDataTestId="input-valid_until"
              buttonDataTestId="button-valid_until"
            />
          </TableInputWrapper>
        ) : (
          <IssuerCell>{getValidUntilText(validUntil)}</IssuerCell>
        );
      },
    },
    {
      // the same column for displaying state of old rfqs and actions of current rfq
      label: '',
      field: ({ state }: { state: string | DropdownItem[] | null }) => {
        if (state && Array.isArray(state)) {
          return (
            <IssuerCell>
              <LumaButtonDropdown
                id="IssuerActionsDropdown"
                variant="primary"
                size="x_small"
                type="button"
                split={true}
                fullWidth={true}
                onChangeDropdown={(item) => {
                  if (item && item.action) {
                    item?.action({ quote, validUntil, rejectionReason });
                  }
                }}
                dropdownItems={actions}
                data-testid="button-action_select"
                splitDataTestId="button-action_select_split"
              >
                Select
              </LumaButtonDropdown>
            </IssuerCell>
          );
        }
        return <IssuerCell>{state}</IssuerCell>;
      },
    },
  ];

  const row = [
    {
      id: rfq.id,
    },
    {
      externalId,
      editable: rfq.actions?.includes(RfqIssuerAction.SET_EXTERNAL_ID),
    },
    {
      quote: isEditQuote ? quote : (rfq as RfqQuotedState)?.quote,
      editable: isEditQuote,
    },
    {
      validUntil: isEditValidUntil
        ? validUntil
        : (rfq as RfqQuotedTradable)?.validUntilTimestamp,
      editable: isEditValidUntil,
    },
    {
      state: actions || getStateText(rfq),
    },
  ];

  const rows: TableRow[] = [
    ...(rfq?.historicalRfqs || []).map((hRfq) => {
      return {
        id: hRfq.rfqId,
        values: [
          {
            id: hRfq.rfqId,
          },
          {
            externalId: hRfq.externalId,
          },
          {
            quote: hRfq.quote,
          },
          {
            validUntil: hRfq.validUntilTimestamp,
          },
          {
            state: getStateText(hRfq),
          },
        ],
      };
    }),
    {
      id: rfq.id,
      values: row,
    },
  ];

  return [rows, columns];
}
