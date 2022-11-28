import { RfqTradeRequested } from '@luma-fe-workspace/redux';

type RFQTradeRequestedProps = {
  rfq: RfqTradeRequested;
};

export function RFQTradeRequested({
  rfq: { quote, id: rfqId, cancelRequestedByClient },
}: RFQTradeRequestedProps) {
  return (
    <div>
      <div>RFQ {rfqId}</div>
      {cancelRequestedByClient ? (
        'TRADE CANCEL REQUESTED'
      ) : (
        <div>
          TRADE REQUESTED
          <div>Quote: {quote} </div>
        </div>
      )}
    </div>
  );
}
