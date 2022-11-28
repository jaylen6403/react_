import {
  RfqOperations,
  RfqTradeRequested,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQAcceptPreTradeCancelProps = {
  rfq: RfqTradeRequested;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQAcceptPreTradeCancel({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQAcceptPreTradeCancelProps) {
  const rejectHandler = () => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
      },
      operationName: RfqOperations.AcceptPreTradeCancel,
    });
  };
  return {
    label: 'Cancel',
    action: rejectHandler,
    isDisabled: isUpdateRfqPending,
  };
}
