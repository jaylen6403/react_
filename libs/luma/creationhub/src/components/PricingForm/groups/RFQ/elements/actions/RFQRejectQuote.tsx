import {
  RfqOperations,
  RfqQuoteRequested,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQRejectQuoteProps = {
  rfq: RfqQuoteRequested;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQRejectQuote({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQRejectQuoteProps) {
  const submitQuoteRejectedHandler = ({
    rejectionReason,
  }: {
    rejectionReason: string;
  }) => {
    const message = rejectionReason || null;
    updateRfq({
      rfqId,
      updateRequest: {
        message,
        version,
      },
      operationName: RfqOperations.RejectQuote,
    });
  };

  return {
    label: 'Reject',
    action: submitQuoteRejectedHandler,
    isDisabled: isUpdateRfqPending,
  };
}
