import { RfqTradingCancelled } from '@luma-fe-workspace/redux';

export function RFQTradingCancelled({
  rfq: { id, quote },
}: {
  rfq: RfqTradingCancelled;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>TRADING Cancelled</div>
      <br />
      <div>Quote: {quote} Cancelled</div>
    </div>
  );
}
