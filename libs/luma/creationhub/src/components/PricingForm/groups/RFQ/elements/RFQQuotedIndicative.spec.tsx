import { render } from '@testing-library/react';
import { RfqQuotedIndicative, RfqState } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQQuotedIndicative } from './RFQQuotedIndicative';

describe('RFQQuotedIndicative', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.QUOTED_INDICATIVE,
      quote: 'quote',
    } as RfqQuotedIndicative;
    const { baseElement } = render(<RFQQuotedIndicative rfq={rfq} />);
    expect(baseElement).toBeInTheDocument();
  });
});
