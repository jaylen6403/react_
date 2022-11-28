import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQRejectPostTradeCancel } from './RFQRejectPostTradeCancel';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQRejectPostTradeCancel', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const rejectPostTradeCancel = RFQRejectPostTradeCancel({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    rejectPostTradeCancel.action();
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
