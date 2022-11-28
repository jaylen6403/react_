import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQAcceptPostTradeCancel } from './RFQAcceptPostTradeCancel';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQAcceptPostTradeCancel', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const acceptPostTradeCancel = RFQAcceptPostTradeCancel({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    acceptPostTradeCancel.action();
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
