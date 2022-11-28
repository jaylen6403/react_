import { render } from '@testing-library/react';
import { RfqState, RfqTradeCancelled } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTradeCancelled } from './RFQTradeCancelled';

describe('RFQTradeCancelled', () => {
  it('should render properly', () => {
    const props = {
      isUpdateRfqPending: false,
      updateRfq: jest.fn(),
    };
    const rfq = {
      ...rfqMock,
      quote: 'quote',
      state: RfqState.TRADE_CANCELLED,
    } as RfqTradeCancelled;
    const { baseElement } = render(<RFQTradeCancelled rfq={rfq} {...props} />);
    expect(baseElement).toBeInTheDocument();
  });
});
