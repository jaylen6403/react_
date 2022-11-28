import { RfqTradeRejected } from '@luma-fe-workspace/redux';

export function RFQTradeRejected({
  rfq: { id, message, quote },
}: {
  rfq: RfqTradeRejected;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>TRADE REJECTED</div>
      <br />
      <div>Rejection Reason: {message}</div>
      <div>Quote: {quote}</div>
    </div>
  );
}
