import { render } from '@testing-library/react';
import { RfqState, RfqTradeRequested } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTradeRequested } from './RFQTradeRequested';

describe('RFQTradeRequested', () => {
  it('should render properly', () => {
    const props = {
      isUpdateRfqPending: false,
      updateRfq: jest.fn(),
    };
    const rfq = {
      ...rfqMock,
      quote: 'quote',
      state: RfqState.TRADE_REQUESTED,
    } as RfqTradeRequested;
    const { baseElement } = render(<RFQTradeRequested rfq={rfq} {...props} />);
    expect(baseElement).toBeInTheDocument();
  });
});
