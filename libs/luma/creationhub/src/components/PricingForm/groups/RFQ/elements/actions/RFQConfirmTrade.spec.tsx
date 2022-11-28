import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQConfirmTrade } from './RFQConfirmTrade';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQConfirmTrade', () => {
  it('should render properly', () => {
    const updateRfqMock = jest.fn();
    const rfq = {
      ...rfqMock,
      id: 'test',
      version: 'versionTest',
    } as RfqTraded;

    const confirmTrade = RFQConfirmTrade({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
    });

    confirmTrade.action();
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
