import { render } from '@testing-library/react';
import { RfqRequestCancelled, RfqState } from '@luma-fe-workspace/redux';
import rfqMock from '../../../mocks/rfqMock';
import { RFQRequestCancelled } from './RFQRequestCancelled';

describe('RFQRequestCancelled', () => {
  it('should render properly', () => {
    const props = {
      isUpdateRfqPending: false,
      updateRfq: jest.fn(),
    };
    const rfq = {
      ...rfqMock,
      state: RfqState.REQUEST_CANCELLED,
    } as RfqRequestCancelled;
    const { baseElement } = render(
      <RFQRequestCancelled rfq={rfq} {...props} />
    );
    expect(baseElement).toBeInTheDocument();
  });
});
