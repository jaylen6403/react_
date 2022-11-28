export interface EventFilters {
  [key: string]: CategoryFilter;
}
export interface CategoryFilter {
  [key: string]: string[];
}

export interface DateObject {
  startDate: string;
  endDate: string;
  rangeAbbreviation: string;
}

export type DateRange = 'T' | '1W' | '2W' | '1M' | '3M' | '6M' | '12M' | '18M';

export type PayoutSummaryData = {
  [key: string]: {
    /**
     * The value to show above the percentage bars, returned in scientific notation (e.g. 1.234567E8)
     */
    amount: number;
    /**
     * The percentage to show at the end (right-side) of the percent bar
     */
    percentage: number;
  };
};

// Payout Horizon
export enum DISPLAY_EVENT_TYPE {
  Maturing = 'Maturing',
  Coupon = 'Coupon Opportunity',
  Call = 'Call Opportunity',
}
export interface PayoutHorizonAggregateEvent {
  eventType: keyof typeof DISPLAY_EVENT_TYPE;
  value: number;
}
export interface PayoutHorizonData {
  date: string;
  events: PayoutHorizonAggregateEvent[];
}

// Payout Breakdown
export const GROUP_BY_VALUE_OPTIONS = [
  'ISSUER',
  'STRUCTURE_TYPE',
  'BASKET_TYPE',
  'PROTECTION_TYPE',
] as const;
export type GroupByValueOption = typeof GROUP_BY_VALUE_OPTIONS[number];

export interface PayoutBreakdownData {
  groupByValue: GroupByValueOption;
  groups: PayoutBreakdownGroup[];
}

export interface PayoutBreakdownGroup {
  groupByName: string;
  breakdownValue: number;
}

export type PayoutBreakdownBreakdownType = 'AMOUNTS' | 'EVENT';

export type PayoutBreakdownWidgetData = {
  groupingData: PayoutBreakdownData;
  breakdownType: PayoutBreakdownBreakdownType;
};

export type PayoutBreakdownSelectedOptions = {
  groupByValue: GroupByValueOption;
  breakdownType: PayoutBreakdownBreakdownType;
};

export type PayoutBreakdownTableData = PayoutBreakdownGroup & {
  percentage?: string;
};
