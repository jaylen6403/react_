import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQAcceptPreTradeCancel } from './RFQAcceptPreTradeCancel';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQAcceptPreTradeCancel', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const acceptPreTradeCancel = RFQAcceptPreTradeCancel({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    acceptPreTradeCancel.action();
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
