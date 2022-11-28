import { RfqRequestCancelled } from '@luma-fe-workspace/redux';

export function RFQRequestCancelled({
  rfq: { id },
}: {
  rfq: RfqRequestCancelled;
}) {
  return (
    <div>
      <div>RFQ {id}</div>
      <div>CANCELLED</div>
      <br />
    </div>
  );
}
