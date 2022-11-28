import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQRejectTrade } from './RFQRejectTrade';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQRejectTrade', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const rejectTrade = RFQRejectTrade({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    rejectTrade.action({ rejectionReason: 'test' });
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
