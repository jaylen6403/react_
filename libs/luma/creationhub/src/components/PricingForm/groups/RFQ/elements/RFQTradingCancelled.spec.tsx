import { render } from '@testing-library/react';
import { RfqState, RfqTradingCancelled } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTradingCancelled } from './RFQTradingCancelled';

describe('RFQTradingCancelled', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.TRADING_CANCELLED,
      quote: 'quote',
    } as RfqTradingCancelled;
    const props = {
      rfq,
      isUpdateRfqPending: false,
      updateRfq: jest.fn(),
    };
    const { baseElement } = render(<RFQTradingCancelled {...props} />);
    expect(baseElement).toBeInTheDocument();
  });
});
