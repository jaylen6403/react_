import { RfqQuotedIndicative } from '@luma-fe-workspace/redux';

export function RFQQuotedIndicative({
  rfq: { id, quote },
}: {
  rfq: RfqQuotedIndicative;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>QUOTED INDICATIVE</div>
      <br />
      <div>Quote: {quote}</div>
    </div>
  );
}
