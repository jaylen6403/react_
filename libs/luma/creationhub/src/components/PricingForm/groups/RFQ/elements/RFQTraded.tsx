import { RfqCancelRequestInitiator, RfqTraded } from '@luma-fe-workspace/redux';

type RFQTradedProps = {
  rfq: RfqTraded;
};

export function RFQTraded({
  rfq: { id: rfqId, quote, cancelRequestedBy },
}: RFQTradedProps) {
  return (
    <div>
      <div>RFQ {rfqId}</div>
      <div>
        TRADED
        {cancelRequestedBy === RfqCancelRequestInitiator.ISSUER && (
          <div>Requesting Cancellation</div>
        )}
        {cancelRequestedBy === RfqCancelRequestInitiator.CLIENT && (
          <div>Cancel Requested</div>
        )}
      </div>
      <br />
      <div>Quote: {quote}</div>
    </div>
  );
}
