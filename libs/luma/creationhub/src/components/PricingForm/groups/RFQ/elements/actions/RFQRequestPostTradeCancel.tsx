import {
  RfqOperations,
  RfqTraded,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQRequestPostTradeCancelProps = {
  rfq: RfqTraded;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQRequestPostTradeCancel({
  rfq: { id: rfqId, version, cancelRequestedBy },
  updateRfq,
  isUpdateRfqPending,
}: RFQRequestPostTradeCancelProps) {
  const requestPostTradeCancel = () => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
      },
      operationName: RfqOperations.RequestPostTradeCancel,
    });
  };
  return !cancelRequestedBy
    ? {
        label: 'Cancel',
        action: requestPostTradeCancel,
        disabled: isUpdateRfqPending,
      }
    : null;
}
