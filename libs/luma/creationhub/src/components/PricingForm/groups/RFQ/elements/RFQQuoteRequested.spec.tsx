import { render } from '@testing-library/react';
import { RfqQuoteRequested, RfqState } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQQuoteRequested } from './RFQQuoteRequested';

describe('RFQQuoteRequested', () => {
  it('should render properly', () => {
    const props = {
      isUpdateRfqPending: false,
      updateRfq: jest.fn(),
    };
    const rfq = {
      ...rfqMock,
      state: RfqState.QUOTE_REQUESTED,
    } as RfqQuoteRequested;
    const { baseElement } = render(<RFQQuoteRequested rfq={rfq} {...props} />);
    expect(baseElement).toBeInTheDocument();
  });
});
