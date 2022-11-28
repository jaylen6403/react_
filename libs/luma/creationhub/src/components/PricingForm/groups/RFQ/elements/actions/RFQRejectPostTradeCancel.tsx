import {
  RfqOperations,
  RfqTraded,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQRejectPostTradeCancelProps = {
  rfq: RfqTraded;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQRejectPostTradeCancel({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQRejectPostTradeCancelProps) {
  const rejectPostTradeCancel = () => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
      },
      operationName: RfqOperations.RejectPostTradeCancel,
    });
  };

  return {
    label: 'Reject',
    action: rejectPostTradeCancel,
    isDisabled: isUpdateRfqPending,
  };
}
