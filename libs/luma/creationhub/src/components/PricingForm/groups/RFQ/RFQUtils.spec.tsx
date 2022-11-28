import { RfqCancelRequestInitiator, RfqState } from '@luma-fe-workspace/redux';
import { getStateText, getTradedText } from './RFQTable.Utils';
import rfqMock from '../../mocks/rfqMock';

describe('RFQUtils', () => {
  it('should return proper traded text', () => {
    expect(getTradedText(undefined)).toEqual('TRADED');
    expect(getTradedText(RfqCancelRequestInitiator.CLIENT)).toEqual(
      'TRADED - Cancel Requested'
    );
    expect(getTradedText(RfqCancelRequestInitiator.ISSUER)).toEqual(
      'TRADED - Requesting Cancellation'
    );
  });

  it('should return proper state text', () => {
    expect(
      getStateText({ ...rfqMock, lost: true, state: RfqState.QUOTE_REJECTED })
    ).toEqual('TRADE LOST');
  });
});
