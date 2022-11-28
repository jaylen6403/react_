import {
  LifecycleEventLM,
  PayoutHorizonData,
  PayoutSummaryData,
  PayoutBreakdownData,
} from '../lifecycle';

// Filters
export type FiltersApiArg = {
  dateRange: { startDate: string; endDate: string };
  portfolioAttributes: {
    [key: string]: string[] | null;
  };
  productAttributes: {
    [key: string]: string[] | null;
  };
};

export type GetFiltersUsingGetApiResponse = {
  portfolioAttributes: {
    country: string[];
    region: string[];
    office: string[];
    financialAdvisor: string[];
    representative: string[];
    beneficiary: string[];
    accounts: string[];
  };
  productAttributes: {
    currency: string[];
    structureType: string[];
    eventType: string[];
    productStatus: string[];
    eventProximity: string[];
    issuers: string[];
  };
};

export type GetFiltersUsingGetApiArg = DisplayCurrencyApiArg;

// Events
export type GetEventsByUsingPostApiArg = FiltersApiArg &
  DisplayCurrencyApiArg & {
    pageNumber: number;
    pageSize: number;
  };

export type GetEventsByUsingPostApiResponse = {
  content: LifecycleEventLM[];
  pageable: {
    sort: {
      unsorted: false;
      sorted: true;
      empty: false;
    };
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: true;
    unpaged: false;
  };
  totalPages: number;
  totalElements: number;
  last: true;
  first: false;
  numberOfElements: number;
  sort: {
    unsorted: false;
    sorted: true;
    empty: false;
  };
  size: number;
  number: number;
  empty: false;
};

// Payout Horizon
export type GetPayoutHorizonByUsingPostApiArg = FiltersApiArg &
  DisplayCurrencyApiArg;

export type GetPayoutHorizonByUsingPostApiResponse = PayoutHorizonData[];

// PayoutSummary
export type GetPayoutSummaryUsingPostApiArg = FiltersApiArg &
  DisplayCurrencyApiArg;

export type GetPayoutSummaryUsingPostApiResponse = PayoutSummaryData;

// PayoutBreakdown
export type GetPayoutBreakdownUsingPostApiArg = FiltersApiArg &
  DisplayCurrencyApiArg &
  BreakdownValuesApiArg;

export type GetPayoutBreakdownUsingPostApiResponse = PayoutBreakdownData;

// Accounts by Representatives
export type GetAccountsByRepresentativeUsingPostApiArg = FiltersApiArg &
  DisplayCurrencyApiArg &
  EventIdArg;

export type GetAccountsByRepresentativeUsingPostApiResponse =
  AccountsByRepresentative[];

// Additional Types
export interface AccountsByRepresentative {
  representative: string;
  accountNotionals: AccountNotional[];
}

interface AccountNotional {
  accountId: string;
  notional: number;
}

export interface DisplayCurrencyApiArg {
  displayCurrency: string;
}

interface BreakdownValuesApiArg {
  groupByName: string;
  breakdownType: string;
}

interface EventIdArg {
  eventId: string;
}

// Display Currencies
export type GetDisplayCurrenciesUsingGetApiResponse = string[];
