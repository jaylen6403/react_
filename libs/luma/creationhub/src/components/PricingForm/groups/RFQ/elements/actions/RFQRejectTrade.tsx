import {
  RfqOperations,
  RfqTradeRequested,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQRejectTradeProps = {
  rfq: RfqTradeRequested;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQRejectTrade({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQRejectTradeProps) {
  const rejectHandler = ({ rejectionReason }: { rejectionReason: string }) => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
        message: rejectionReason,
      },
      operationName: RfqOperations.RejectTrade,
    });
  };
  return {
    label: 'Reject',
    action: rejectHandler,
    isDisabled: isUpdateRfqPending,
  };
}
