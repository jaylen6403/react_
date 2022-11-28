import { RfqState, RfqTradeLost } from '@luma-fe-workspace/redux';
import { render } from '@testing-library/react';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTradeLost } from './RFQTradeLost';

describe('RFQTradeLost', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.TRADE_LOST,
    } as RfqTradeLost;
    const { baseElement } = render(<RFQTradeLost rfq={rfq} />);
    expect(baseElement).toBeInTheDocument();
  });
});
