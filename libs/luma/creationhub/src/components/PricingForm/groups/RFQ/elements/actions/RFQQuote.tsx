import {
  RfqOperations,
  RfqQuoteRequested,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQQuoteProps = {
  rfq: RfqQuoteRequested;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
  quoteType: 'INDICATIVE' | 'TRADABLE';
};

export function RFQQuote({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
  quoteType,
}: RFQQuoteProps) {
  const submitQuotedIndicativeHandler = ({ quote }: { quote: string }) => {
    updateRfq({
      rfqId,
      updateRequest: {
        quote,
        version,
      },
      operationName: RfqOperations.QuoteIndicatively,
    });
  };
  const submitQuotedTradableHandler = ({
    quote,
    validUntil,
  }: {
    quote: string;
    validUntil: number;
  }) => {
    let validUntilTimestamp = null;
    if (validUntil || validUntil === 0) {
      const tempDate = new Date();
      tempDate.setMinutes(tempDate.getMinutes() + validUntil);
      validUntilTimestamp = tempDate.toISOString();
    }
    updateRfq({
      rfqId,
      updateRequest: {
        quote,
        validUntilTimestamp,
        version,
      },
      operationName: RfqOperations.QuoteTradable,
    });
  };
  if (quoteType === 'INDICATIVE') {
    return {
      label: 'Submit Indicative',
      action: submitQuotedIndicativeHandler,
      isDisabled: isUpdateRfqPending,
    };
  } else if (quoteType === 'TRADABLE') {
    return {
      label: 'Submit Tradable',
      action: submitQuotedTradableHandler,
      isDisabled: isUpdateRfqPending,
    };
  }
  return null;
}
