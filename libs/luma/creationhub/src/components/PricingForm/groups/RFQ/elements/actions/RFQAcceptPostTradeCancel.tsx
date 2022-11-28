import {
  RfqOperations,
  RfqTraded,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQAcceptPostTradeCancelProps = {
  rfq: RfqTraded;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQAcceptPostTradeCancel({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQAcceptPostTradeCancelProps) {
  const acceptPostTradeCancel = () => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
      },
      operationName: RfqOperations.AcceptPostTradeCancel,
    });
  };

  return {
    label: 'Accept',
    action: acceptPostTradeCancel,
    isDisabled: isUpdateRfqPending,
  };
}
