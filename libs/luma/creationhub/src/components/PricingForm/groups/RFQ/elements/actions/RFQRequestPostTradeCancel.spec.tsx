import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQRequestPostTradeCancel } from './RFQRequestPostTradeCancel';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQRequestPostTradeCancel', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const requestPostTradeCancel = RFQRequestPostTradeCancel({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    requestPostTradeCancel?.action();
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
