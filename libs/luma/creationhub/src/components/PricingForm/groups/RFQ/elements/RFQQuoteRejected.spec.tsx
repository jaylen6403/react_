import { render } from '@testing-library/react';
import { RfqQuoteRejected, RfqState } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQQuoteRejected } from './RFQQuoteRejected';

describe('RFQQuoteRejected', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.QUOTE_REJECTED,
      message: 'message',
    } as RfqQuoteRejected;
    const { baseElement } = render(<RFQQuoteRejected rfq={rfq} />);
    expect(baseElement).toBeInTheDocument();
  });
});
