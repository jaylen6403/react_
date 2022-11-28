import { DateHelper } from '@luma-fe-workspace/utility';
import { SeriesColumnOptions } from 'highcharts';
import {
  DISPLAY_EVENT_TYPE,
  PayoutBreakdownData,
  PayoutHorizonData,
  PayoutSummaryData,
} from '../types';

export const mockSummaryData: PayoutSummaryData = {
  notional: { amount: 10000, percentage: 0.048 },
  holdings: { amount: 910, percentage: 0.5 },
  totalPayoutAmount: { amount: 1250000, percentage: 0.49 },
  totalEventCount: { amount: 230, percentage: 0.680086 },
};

// Payout Horizon
export const getMockPayoutHorizonData = (
  numDays = 400, // Over one year to allow selection of the 1Y button
  individualValueMaximum = 100000
) => {
  const payoutHorizonData: PayoutHorizonData[] = [];
  for (let dayOffset = 0; dayOffset < numDays; dayOffset++) {
    payoutHorizonData.push({
      date: DateHelper.addDays(new Date(), dayOffset).toISOString(),
      events: [
        {
          eventType: 'Maturing',
          value: Math.random() * individualValueMaximum,
        },
        {
          eventType: 'Coupon',
          value: Math.random() * individualValueMaximum,
        },
        {
          eventType: 'Call',
          value: Math.random() * individualValueMaximum,
        },
      ],
    });
  }
  return payoutHorizonData;
};

const mockedConvertedData: {
  /**
   * Each of these is effectively a `[number, number][]` where the first value is
   * the offset from the first value and the second is the value. For datetimes,
   * Highcharts prefers milliseconds. See the related property `relativeXValue`
   */
  [key in DISPLAY_EVENT_TYPE]: SeriesColumnOptions['data'][];
} = {
  Maturing: [],
  'Call Opportunity': [],
  'Coupon Opportunity': [],
};

// Events Data 400 Days in the Future
// 400 is arbitrary - just needs to be more than 365 so the 1Y button can be clicked
const mockPayoutHorizonData400 = getMockPayoutHorizonData(400);
mockPayoutHorizonData400.forEach((day) => {
  day.events.forEach((event) => {
    mockedConvertedData[DISPLAY_EVENT_TYPE[event.eventType]].push([
      new Date(day.date).getTime(),
      event.value,
    ]);
  });
});

export const mockConvertedPayoutHorizonData400 = [
  ...Object.keys(mockedConvertedData).map((eventType) => {
    return {
      name: eventType,
      data: mockedConvertedData[eventType as DISPLAY_EVENT_TYPE],
    };
  }),
];

// Payout Breakdown
export const mockPayoutBreakdownData: PayoutBreakdownData = {
  groupByValue: 'ISSUER',
  groups: [
    {
      groupByName: 'BARC',
      breakdownValue: 153900,
    },
    {
      groupByName: 'CITI',
      breakdownValue: 938100,
    },
    {
      groupByName: 'MS',
      breakdownValue: 1530000,
    },
    {
      groupByName: 'HSBC USA',
      breakdownValue: 762000,
    },
    {
      groupByName: 'MORGAN',
      breakdownValue: 521000,
    },
    {
      groupByName: 'Americas',
      breakdownValue: 521000,
    },
    {
      groupByName: 'MORGAN',
      breakdownValue: 521000,
    },
    {
      groupByName: 'MORGAN',
      breakdownValue: 521000,
    },
  ],
};

/**
 * Currency Dropdown items, of type 'DataItemProps[]'
 * Note: cannot be typed here because of circular dependency
 * so type is asserted where used
 */
export const mockCurrencyDropdownItems = [
  { label: '$ USD', iconCode: 'times' },
  { label: '€ EUR', isDisabled: true }, // TODO: Remove isDisabled after MVP demo
  { label: '£ GBP', isDisabled: true }, // TODO: Remove isDisabled after MVP demo
];
