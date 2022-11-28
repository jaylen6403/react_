import { render } from '@testing-library/react';
import { RfqState, RfqTradeRejected } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTradeRejected } from './RFQTradeRejected';

describe('RFQTradeRejected', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.TRADE_REJECTED,
      quote: 'quote',
      message: 'message',
    } as RfqTradeRejected;
    const { baseElement } = render(<RFQTradeRejected rfq={rfq} />);
    expect(baseElement).toBeInTheDocument();
  });
});
