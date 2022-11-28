import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQRejectQuote } from './RFQRejectQuote';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQRejectQuote', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const rejectQuote = RFQRejectQuote({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    rejectQuote.action({ rejectionReason: 'test' });
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
