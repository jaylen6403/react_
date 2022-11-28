import { RfqQuotedTradable } from '@luma-fe-workspace/redux';

export function RFQQuotedTradable({
  rfq: { id, quote, validUntilTimestamp },
}: {
  rfq: RfqQuotedTradable;
}) {
  const validUntil =
    validUntilTimestamp != null
      ? new Date(validUntilTimestamp).toString()
      : undefined;

  return (
    <div>
      <div>RFQ {id}</div>
      <div>QUOTED TRADABLE</div>
      <br />
      <div>Quote: {quote}</div>
      {validUntil ?? <div>Valid until: {validUntil}</div>}
    </div>
  );
}
