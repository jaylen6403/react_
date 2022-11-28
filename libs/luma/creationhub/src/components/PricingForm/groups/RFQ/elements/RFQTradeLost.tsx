import { RfqTradeLost } from '@luma-fe-workspace/redux';

export function RFQTradeLost({ rfq: { id } }: { rfq: RfqTradeLost }) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>TRADE LOST</div>
    </div>
  );
}
