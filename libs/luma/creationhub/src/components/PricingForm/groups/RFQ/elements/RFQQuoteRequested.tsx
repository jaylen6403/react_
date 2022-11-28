import { RfqQuoteRequested } from '@luma-fe-workspace/redux';

type RFQQuoteRequestedProps = {
  rfq: RfqQuoteRequested;
};

export function RFQQuoteRequested({
  rfq: { id: rfqId },
}: RFQQuoteRequestedProps) {
  return (
    <div>
      <div>RFQ {rfqId}</div>
      <div>QUOTE REQUESTED</div>
    </div>
  );
}
