import { render } from '@testing-library/react';
import { RfqQuotedTradable, RfqState } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQQuotedTradable } from './RFQQuotedTradable';

describe('RFQQuotedTradable', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.QUOTED_TRADABLE,
      quote: 'quote',
      validUntilTimestamp: '2023-01-01T12:00:00.000Z',
    } as RfqQuotedTradable;
    const { baseElement } = render(<RFQQuotedTradable rfq={rfq} />);
    expect(baseElement).toBeInTheDocument();
  });
});
