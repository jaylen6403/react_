import {
  RfqOperations,
  RfqTradeRequested,
  UpdateRFQUsingPostApiArg,
} from '@luma-fe-workspace/redux';

type RFQConfirmTradeProps = {
  rfq: RfqTradeRequested;
  updateRfq: (body: UpdateRFQUsingPostApiArg) => void;
  isUpdateRfqPending: boolean;
};

export function RFQConfirmTrade({
  rfq: { id: rfqId, version },
  updateRfq,
  isUpdateRfqPending,
}: RFQConfirmTradeProps) {
  const tradeHandler = () => {
    updateRfq({
      rfqId,
      updateRequest: {
        version,
      },
      operationName: RfqOperations.ConfirmTrade,
    });
  };
  return {
    label: 'Trade',
    action: tradeHandler,
    isDisabled: isUpdateRfqPending,
  };
}
