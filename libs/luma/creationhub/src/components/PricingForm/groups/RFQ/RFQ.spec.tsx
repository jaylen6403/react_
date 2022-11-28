import { Rfq, RfqIssuerAction, RfqState } from '@luma-fe-workspace/redux';
import { render, screen } from '@testing-library/react';
import RFQ, { getRfqIssuerActions } from './RFQ';
import rfqMock from '../../mocks/rfqMock';

describe('RFQ', () => {
  const updateRfq = jest.fn();

  it.each([
    { state: RfqState.QUOTE_REQUESTED },
    { state: RfqState.QUOTE_REJECTED },
    { state: RfqState.QUOTED_INDICATIVE },
    { state: RfqState.QUOTED_TRADABLE },
    { state: RfqState.TRADE_REQUESTED },
    { state: RfqState.TRADE_REJECTED },
    { state: RfqState.TRADED },
  ])('should render properly for %s', ({ state }) => {
    const props = {
      rfq: { state } as Rfq,
      isUpdateRfqPending: false,
      updateRfq,
    };
    const { baseElement } = render(<RFQ {...props} />);
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByText('Quote Requests')).toBeInTheDocument();
  });

  it('should accept all available actions', () => {
    const props = {
      rfq: {
        ...rfqMock,
        actions: [
          RfqIssuerAction.QUOTE_INDICATIVE,
          RfqIssuerAction.QUOTE_TRADABLE,
          RfqIssuerAction.REJECT_QUOTE,
          RfqIssuerAction.ACCEPT_PRE_TRADE_CANCEL,
          RfqIssuerAction.REJECT_TRADE,
          RfqIssuerAction.CONFIRM_TRADE,
          RfqIssuerAction.REQUEST_POST_TRADE_CANCEL,
          RfqIssuerAction.REJECT_POST_TRADE_CANCEL,
          RfqIssuerAction.ACCEPT_POST_TRADE_CANCEL,
        ],
      },
      isUpdateRfqPending: false,
      updateRfq,
    };
    expect(getRfqIssuerActions(props)).toBeTruthy();
  });
});
