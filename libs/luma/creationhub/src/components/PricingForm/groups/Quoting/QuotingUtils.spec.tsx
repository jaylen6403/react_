import { render, screen } from '@testing-library/react';
import {
  PricingState,
  Rfq,
  RfqQuotedTradable,
  RfqState,
  PricingInProgress,
  RfqCancelRequestInitiator,
  RfqTradeRequested,
  RfqTypeEnum,
  RfqClientAction,
} from '@luma-fe-workspace/redux';
import {
  formatDisplayedDate,
  getRfqAction,
  getRfqDisplayType,
  getRfqStatus,
  newRequestDropDown,
} from './QuotingUtils';
import rfqMock from '../../mocks/rfqMock';
import pricingMock from '../../mocks/pricingMock';
import { QuoteStatusIcon } from './Quoting.styles';

const genericRfq = {
  ...rfqMock,
  type: RfqTypeEnum.INDICATIVE,
  version: '2',
  externalId: 'test',
  quote: '2.3%',
  state: RfqState.QUOTE_REQUESTED,
} as RfqTradeRequested;
const icon = genericRfq.isApi ? (
  <QuoteStatusIcon iconCode="arrows-rotate" type="regular" />
) : (
  <QuoteStatusIcon iconCode="user-clock" type="solid" />
);
const pricing: PricingInProgress = {
  ...pricingMock,
  constraints: {},
  rfqIssuers: [
    {
      issuerId: 'edc3ea4b-6030-4486-a1a5-a7bc306ae546',
      rfq: genericRfq,
      actions: [
        RfqClientAction.REQUEST_FOR_INDICATIVE_QUOTE,
        RfqClientAction.REQUEST_FOR_LIVE_QUOTE,
        RfqClientAction.REQUEST_FOR_MANUAL_QUOTE,
      ],
    },
  ],
  product: {
    params: {},
  },
};
const mockRequestDropdown = (
  dropdownItems: Array<{
    label: string;
    value: RfqTypeEnum;
  }>
) =>
  newRequestDropDown({
    dropdownItems,
    issuerId: genericRfq.issuer,
    version: '2',
    pricingId: pricing.id,
    createRfq: jest.fn(),
    isMutationPending: false,
  });
const QUOTE = 'Test quote';

describe('QuotingUtils', () => {
  describe('getRfqStatus', () => {
    it.each([
      {
        rfq: null,
        result: null,
      },
      {
        rfq: { ...rfqMock, state: RfqState.TRADED, quote: QUOTE },
        result: `${QUOTE} Traded`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.TRADED,
          cancelRequestedBy: RfqCancelRequestInitiator.CLIENT,
          quote: QUOTE,
        },
        result: `${QUOTE} Requesting Trade Cancellation`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.TRADED,
          cancelRequestedBy: RfqCancelRequestInitiator.ISSUER,
          quote: QUOTE,
        },
        result: `${QUOTE} Traded - Cancel Requested`,
      },
      {
        rfq: { ...rfqMock, state: RfqState.QUOTE_REQUESTED },
        result: icon,
      },
      {
        rfq: { ...rfqMock, state: RfqState.REQUEST_CANCELLED },
        result: 'Cancelled',
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.QUOTE_REJECTED,
          message: 'Test message',
        },
        result: 'Quote Rejected: Test message',
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.QUOTED_INDICATIVE,
          quote: QUOTE,
        },
        result: `${QUOTE}`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.QUOTED_TRADABLE,
          quote: QUOTE,
        },
        result: QUOTE,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.TRADE_REQUESTED,
          cancelRequestedByClient: true,
          quote: QUOTE,
        },
        result: `${QUOTE} Trading - Cancel Requested`,
      },
      {
        rfq: { ...rfqMock, state: RfqState.TRADE_REQUESTED, quote: QUOTE },
        result: `${QUOTE} Trade requested...`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.TRADE_REJECTED,
          message: 'Test message',
          quote: QUOTE,
        },
        result: `${QUOTE} Trade Rejected: Test message`,
      },
      {
        rfq: { ...rfqMock, state: RfqState.TRADING_CANCELLED, quote: QUOTE },
        result: `${QUOTE} Trading - Cancelled`,
      },
      {
        rfq: { ...rfqMock, state: RfqState.TRADE_CANCELLED, quote: QUOTE },
        result: `${QUOTE} Traded - Cancelled`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.ACCEPT_POST_TRADE_CANCEL,
          quote: QUOTE,
        },
        result: `${QUOTE} Traded - Cancelled`,
      },
      {
        rfq: {
          ...rfqMock,
          state: RfqState.ACCEPT_PRE_TRADE_CANCEL,
          quote: QUOTE,
        },
        result: `${QUOTE} Trading - Cancelled`,
      },
      {
        rfq: { ...rfqMock, state: '' },
        result: null,
      },
    ])('should return proper value', ({ rfq, result }) => {
      expect(getRfqStatus(rfq as Rfq)).toEqual(result);
    });
  });

  describe('getRfqAction', () => {
    it.each([
      {
        action: RfqClientAction.REQUEST_FOR_INDICATIVE_QUOTE,
        rfq: genericRfq,
        result: (
          <>
            {mockRequestDropdown([
              {
                label: 'INDICATIVE',
                value: RfqTypeEnum.INDICATIVE,
              },
            ])}
          </>
        ),
      },
      {
        action: RfqClientAction.REQUEST_FOR_LIVE_QUOTE,
        rfq: genericRfq,
        result: (
          <>
            {mockRequestDropdown([
              {
                label: 'LIVE',
                value: RfqTypeEnum.LIVE,
              },
            ])}
          </>
        ),
      },
      {
        action: RfqClientAction.REQUEST_FOR_MANUAL_QUOTE,
        rfq: genericRfq,
        result: (
          <>
            {mockRequestDropdown([
              {
                label: 'MANUAL',
                value: RfqTypeEnum.MANUAL,
              },
            ])}
          </>
        ),
      },
      {
        action: RfqClientAction.CANCEL_REQUEST,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Cancel/i,
        },
      },
      {
        action: RfqClientAction.REQUEST_TRADE,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Trade/i,
        },
      },
      // expired quote
      {
        action: RfqClientAction.REQUEST_TRADE,
        rfq: {
          ...genericRfq,
          validUntilTimestamp: '2012-01-01T01:01:01.000Z',
        },
        result: {
          resultType: 'text',
          value: /Expired/i,
        },
      },
      {
        action: RfqClientAction.REQUEST_PRE_TRADE_CANCEL,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Cancel/i,
        },
      },
      // cancel requested by client
      {
        action: RfqClientAction.REQUEST_PRE_TRADE_CANCEL,
        rfq: {
          ...genericRfq,
          cancelRequestedByClient: true,
        },
        // eslint-disable-next-line react/jsx-no-useless-fragment
        result: <></>,
      },
      {
        action: RfqClientAction.REQUEST_POST_TRADE_CANCEL,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Cancel/i,
        },
      },
      {
        action: RfqClientAction.ACCEPT_POST_TRADE_CANCEL,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Accept/i,
        },
      },
      {
        action: RfqClientAction.REJECT_POST_TRADE_CANCEL,
        rfq: genericRfq,
        result: {
          resultType: 'button',
          value: /Reject/i,
        },
      },
    ])(
      'should display available actions based on the backend response',
      ({ action, rfq, result }) => {
        if ('resultType' in result) {
          render(
            <>
              {getRfqAction({
                rfqIssuer: { actions: [action], rfq, issuerId: rfq.issuer },
                pricing,
                updatePricing: jest.fn(),
                isMutationPending: false,
                cancelRfq: jest.fn(),
                createRfq: jest.fn(),
              })}
            </>
          );
          if (result.resultType === 'button') {
            expect(
              screen.getByRole('button', { name: result?.value })
            ).toBeTruthy();
          }
          expect(screen.getByText(result?.value)).toBeTruthy();
        } else {
          expect(
            getRfqAction({
              rfqIssuer: { actions: [action], rfq, issuerId: rfq.issuer },
              pricing,
              updatePricing: jest.fn(),
              isMutationPending: false,
              cancelRfq: jest.fn(),
              createRfq: jest.fn(),
            })?.toString()
          ).toBe(result.toString());
        }
      }
    );

    it('should render cancel action during trade if the cancel is not requested yet', () => {
      const rfq = {
        ...genericRfq,
        state: RfqState.TRADE_REQUESTED,
        cancelRequestedByClient: false,
      } as RfqTradeRequested;
      render(
        <>
          {getRfqAction({
            rfqIssuer: {
              issuerId: rfq.issuer,
              rfq,
              actions: [RfqClientAction.REQUEST_PRE_TRADE_CANCEL],
            },
            pricing,
            updatePricing: jest.fn(),
            isMutationPending: false,
            cancelRfq: jest.fn(),
            createRfq: jest.fn(),
          })}
        </>
      );
      expect(screen.getByRole('button', { name: /Cancel/i })).toBeTruthy();
    });

    it('should return empty action during trade if the cancel is already requested', () => {
      const rfq = {
        ...genericRfq,
        state: RfqState.TRADE_REQUESTED,
        cancelRequestedByClient: true,
      } as RfqTradeRequested;
      const result = getRfqAction({
        rfqIssuer: {
          issuerId: rfq.issuer,
          rfq,
          actions: [RfqClientAction.REQUEST_PRE_TRADE_CANCEL],
        },
        pricing,
        updatePricing: jest.fn(),
        isMutationPending: false,
        cancelRfq: jest.fn(),
        createRfq: jest.fn(),
      });
      // eslint-disable-next-line react/jsx-no-useless-fragment
      expect(result?.toString()).toBe((<></>).toString());
    });

    it('should render trading action if the quote is tradable and not expired', () => {
      const rfq = {
        ...genericRfq,
        state: RfqState.QUOTED_TRADABLE,
        validUntilTimestamp: new Date(Date.now() + 90061000).toString(),
      } as RfqQuotedTradable;
      render(
        <>
          {getRfqAction({
            rfqIssuer: {
              issuerId: rfq.issuer,
              rfq,
              actions: [RfqClientAction.REQUEST_TRADE],
            },
            pricing,
            updatePricing: jest.fn(),
            isMutationPending: false,
            cancelRfq: jest.fn(),
            createRfq: jest.fn(),
          })}
        </>
      );
      expect(
        screen.getByRole('button', { name: /Trade \(01:01:01:01\)/i })
      ).toBeTruthy();
    });

    it('should render "Expired" if the quote is tradable but expired', () => {
      const rfq = {
        ...genericRfq,
        state: RfqState.QUOTED_TRADABLE,
        validUntilTimestamp: new Date().toString(),
      } as RfqQuotedTradable;
      render(
        <>
          {getRfqAction({
            rfqIssuer: {
              issuerId: rfq.issuer,
              rfq,
              actions: [RfqClientAction.REQUEST_TRADE],
            },
            pricing,
            updatePricing: jest.fn(),
            isMutationPending: false,
            cancelRfq: jest.fn(),
            createRfq: jest.fn(),
          })}
        </>
      );
      expect(screen.getByText('Expired')).toBeTruthy();
    });

    it('should return null if the pricing state is TRADE_CANCELLED - no matter the available actions', () => {
      const allPossibleActions = Object.keys(
        RfqClientAction
      ) as Array<RfqClientAction>;
      const result = getRfqAction({
        rfqIssuer: {
          issuerId: genericRfq.issuer,
          rfq: genericRfq,
          actions: allPossibleActions,
        },
        pricing: { ...pricing, state: PricingState.Cancelled },
        updatePricing: jest.fn(),
        isMutationPending: false,
        cancelRfq: jest.fn(),
        createRfq: jest.fn(),
      });

      expect(result).toBeNull();
    });

    it('should disable action buttons if any state mutation is pending', () => {
      const allPossibleActions = Object.keys(
        RfqClientAction
      ) as Array<RfqClientAction>;
      render(
        <>
          {getRfqAction({
            rfqIssuer: {
              issuerId: genericRfq.issuer,
              rfq: genericRfq,
              actions: allPossibleActions,
            },
            pricing,
            updatePricing: jest.fn(),
            isMutationPending: true,
            cancelRfq: jest.fn(),
            createRfq: jest.fn(),
          })}
        </>
      );

      expect(
        screen
          .getAllByRole('button')
          .filter(
            (button: HTMLElement) => !(button as HTMLButtonElement).disabled
          ).length
      ).toBe(0);
    });
  });

  describe('formatDisplayedDate', () => {
    it.each([
      { date: [], result: '' },
      { date: [1, 1, 1], result: '01:01:01' },
      { date: [9, 10, 11], result: '09:10:11' },
    ])('should return proper value', ({ date, result }) => {
      expect(formatDisplayedDate(date)).toEqual(result);
    });
  });

  describe('getRfqDisplayType', () => {
    it.each([
      {
        state: RfqState.QUOTED_INDICATIVE,
        type: RfqTypeEnum.LIVE,
        result: 'Indicative',
      },
      {
        state: RfqState.QUOTED_TRADABLE,
        type: RfqTypeEnum.INDICATIVE,
        result: 'LIVE',
      },
      {
        state: RfqState.QUOTE_REQUESTED,
        type: RfqTypeEnum.MANUAL,
        result: RfqTypeEnum.MANUAL,
      },
    ])('should return proper display rfq type', ({ state, type, result }) => {
      expect(getRfqDisplayType(state, type)).toEqual(result);
    });
  });
});
