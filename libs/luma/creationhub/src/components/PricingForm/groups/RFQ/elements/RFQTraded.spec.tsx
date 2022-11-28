import { render } from '@testing-library/react';
import { RfqState, RfqTraded } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQTraded } from './RFQTraded';

describe('RFQTraded', () => {
  it('should render properly', () => {
    const rfq = {
      ...rfqMock,
      state: RfqState.TRADED,
      quote: 'quote',
      cancelRequestedBy: undefined,
    } as RfqTraded;
    const updateRfq = jest.fn();
    const { baseElement } = render(
      <RFQTraded rfq={rfq} updateRfq={updateRfq} />
    );
    expect(baseElement).toBeInTheDocument();
  });
});
