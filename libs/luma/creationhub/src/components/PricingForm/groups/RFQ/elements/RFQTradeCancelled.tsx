import { RfqTradeCancelled } from '@luma-fe-workspace/redux';

export function RFQTradeCancelled({
  rfq: { id, quote },
}: {
  rfq: RfqTradeCancelled;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>TRADE Cancelled</div>
      <br />
      <div>Quote: {quote} Cancelled</div>
    </div>
  );
}
