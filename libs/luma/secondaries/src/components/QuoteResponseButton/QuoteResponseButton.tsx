import { CellButton } from './QuoteResponseButton.styles';
import { ICellRendererParams } from 'ag-grid-community';
import {
  RFQSearchQuoted,
  secondariesSlice,
  SecondaryQuote,
  SecondaryRequestForQuote,
  selectSecondaries,
  selectJwt,
  useAppDispatch,
  useAppSelector,
  useCreateQuoteUsingPostMutation,
} from '@luma-fe-workspace/redux';
import { DateHelper } from '@luma-fe-workspace/utility';

export interface QuoteResponseButtonProps {
  /**
   *  Button Text
   */
  children: React.ReactNode;
  /**
   * Style variant.
   */
  variant: 'primary' | 'secondary' | 'disabled';
  /**
   * AG-Grid cellRendererParams
   */
  cellRendererParams: ICellRendererParams;
}

export const QuoteResponseButton = ({
  children,
  variant,
  cellRendererParams,
}: QuoteResponseButtonProps) => {
  const JWT = useAppSelector(selectJwt);
  const secondariesStore = useAppSelector(selectSecondaries);
  const RFQs = secondariesStore.availableRFQs;
  const [createResponse] = useCreateQuoteUsingPostMutation();
  const dispatch = useAppDispatch();

  const handleRfqResponse = async () => {
    const rowData: RFQSearchQuoted = cellRendererParams.data;
    if (rowData.price) {
      // activeResponse is a valid response by the user that has not expired
      // We are checking if it exists to determine whether we are creating a new quote
      if (!rowData.activeResponse && rowData.requestId) {
        try {
          const response = await createResponse({
            secondaryQuote: {
              requestId: rowData.requestId,
              quoteProvider: JWT?.company,
              quoteAmount: rowData.price,
              goodUntilTime:
                typeof rowData.quoteDeadline === 'number'
                  ? DateHelper.convertToUTC(
                      DateHelper.addMilliseconds(
                        new Date().setSeconds(0, 0),
                        rowData.quoteDeadline
                      )
                    ).toISOString()
                  : DateHelper.convertToUTC(
                      rowData.endTime ?? ''
                    ).toISOString(),
            },
          }).unwrap();
          if (response) {
            updateRowData(rowData, response);
            updateSecondariesSlice(response, true);
            dispatch(
              secondariesSlice.actions.setMessageObject({
                title: `${
                  JWT?.firstName ? JWT.firstName + "'s" : 'Your'
                } bid for ${rowData.quantity} x ${
                  rowData.productIdentifier?.securityIdentifierValue
                } @ ${response.quoteAmount} has been submitted.`,
                messageType: 'success',
                isMessageShowing: true,
              })
            );
          }
        } catch (error) {
          dispatch(
            secondariesSlice.actions.setMessageObject({
              title: `Unable to create quote response for security ${rowData.productIdentifier?.securityIdentifierValue}.`,
              messageType: 'error',
              isMessageShowing: true,
            })
          );
        }
      }
    }
  };

  const updateRowData = (
    rowData: RFQSearchQuoted,
    response?: SecondaryQuote
  ) => {
    if (response) {
      rowData.price = response.quoteAmount;
      rowData.activeResponse = response;
      rowData.quoteDeadline = DateHelper.convertToUTC(
        response.goodUntilTime
      ).getTime();
      cellRendererParams.api.refreshCells({
        columns: ['account'],
        force: true,
      });
    } else {
      // Resetting it to the old values will trigger a grid update for those cells
      rowData.price = rowData.activeResponse?.quoteAmount;
      rowData.quoteDeadline =
        rowData.activeResponse !== undefined
          ? DateHelper.convertToUTC(
              rowData.activeResponse.goodUntilTime
            ).getTime()
          : DateHelper.convertToUTC(new Date()).getTime();
    }
    cellRendererParams.api.applyTransaction({ update: [rowData] });
  };

  const updateSecondariesSlice = (
    quote: SecondaryQuote,
    isNewQuote: boolean
  ) => {
    if (RFQs && isNewQuote) {
      const updatedRFQs: SecondaryRequestForQuote[] = RFQs.map(
        (RFQ: SecondaryRequestForQuote) => {
          if (RFQ.requestId === quote.requestId && RFQ.quotes) {
            const newRFQ = { ...RFQ, quotes: [quote] };
            return newRFQ;
          }
          return RFQ;
        }
      );

      dispatch(secondariesSlice.actions.setAvailableRFQs(updatedRFQs));
    } else if (RFQs) {
      const updatedRFQs: SecondaryRequestForQuote[] = RFQs.map(
        (RFQ: SecondaryRequestForQuote) => {
          if (RFQ.requestId === quote.requestId && RFQ.quotes) {
            const newQuotes = RFQ.quotes.map((existingQuote) => {
              if (quote.responseId === existingQuote.responseId) {
                return quote;
              }
              return existingQuote;
            });

            const newRFQ = { ...RFQ, quotes: newQuotes };
            return newRFQ;
          }
          return RFQ;
        }
      );
      dispatch(secondariesSlice.actions.setAvailableRFQs(updatedRFQs));
    }
  };
  if (variant === 'disabled') {
    return <span>{children}</span>;
  }
  return (
    <CellButton
      variant={variant}
      onClick={handleRfqResponse}
      disabled={!!cellRendererParams.data.activeResponse}
    >
      {children}
    </CellButton>
  );
};
