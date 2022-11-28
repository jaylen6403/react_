import { RfqQuoteRejected } from '@luma-fe-workspace/redux';

export function RFQQuoteRejected({
  rfq: { id, message },
}: {
  rfq: RfqQuoteRejected;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>REJECTED</div>
      <br />
      <div>Rejection Reason: {message}</div>
    </div>
  );
}
