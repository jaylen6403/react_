import { baseApi as api } from './dashboardServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAnnuityEventsUsingGet: build.query<
      GetAnnuityEventsUsingGetApiResponse,
      GetAnnuityEventsUsingGetApiArg
    >({
      query: () => ({ url: `/annuity/events` }),
    }),
    getOrderHistoryUsingGet: build.query<
      GetOrderHistoryUsingGetApiResponse,
      GetOrderHistoryUsingGetApiArg
    >({
      query: () => ({ url: `/annuity/orderhistory` }),
    }),
    getAnnuityProductsUsingGet: build.query<
      GetAnnuityProductsUsingGetApiResponse,
      GetAnnuityProductsUsingGetApiArg
    >({
      query: () => ({ url: `/annuity/products` }),
    }),
    getCacheNamesUsingGet: build.query<
      GetCacheNamesUsingGetApiResponse,
      GetCacheNamesUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/caches`,
        params: { details: queryArg.details },
      }),
    }),
    clearCacheEntryUsingDelete: build.mutation<
      ClearCacheEntryUsingDeleteApiResponse,
      ClearCacheEntryUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/caches`,
        method: 'DELETE',
        params: { cacheName: queryArg.cacheName, key: queryArg.key },
      }),
    }),
    getCacheEntriesUsingGet: build.query<
      GetCacheEntriesUsingGetApiResponse,
      GetCacheEntriesUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/caches/entries`,
        params: {
          cacheName: queryArg.cacheName,
          details: queryArg.details,
          key: queryArg.key,
        },
      }),
    }),
    getCacheKeysUsingGet: build.query<
      GetCacheKeysUsingGetApiResponse,
      GetCacheKeysUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/caches/keys`,
        params: {
          cacheName: queryArg.cacheName,
          details: queryArg.details,
          key: queryArg.key,
        },
      }),
    }),
    getPricingToolTypeUsingGet: build.query<
      GetPricingToolTypeUsingGetApiResponse,
      GetPricingToolTypeUsingGetApiArg
    >({
      query: () => ({ url: `/pricing-tool-type` }),
    }),
    getPortfolioEventsUsingGet: build.query<
      GetPortfolioEventsUsingGetApiResponse,
      GetPortfolioEventsUsingGetApiArg
    >({
      query: () => ({ url: `/structured-products/events` }),
    }),
    getPortfolioProductsUsingGet: build.query<
      GetPortfolioProductsUsingGetApiResponse,
      GetPortfolioProductsUsingGetApiArg
    >({
      query: () => ({ url: `/structured-products/products` }),
    }),
    getAnnuityEventsUsingGet1: build.query<
      GetAnnuityEventsUsingGet1ApiResponse,
      GetAnnuityEventsUsingGet1ApiArg
    >({
      query: () => ({ url: `/v2/annuity/events` }),
    }),
    getOrderHistoryUsingGet1: build.query<
      GetOrderHistoryUsingGet1ApiResponse,
      GetOrderHistoryUsingGet1ApiArg
    >({
      query: () => ({ url: `/v2/annuity/orderhistory` }),
    }),
    getAnnuityProductsUsingGet1: build.query<
      GetAnnuityProductsUsingGet1ApiResponse,
      GetAnnuityProductsUsingGet1ApiArg
    >({
      query: () => ({ url: `/v2/annuity/products` }),
    }),
    getPortfolioEventsUsingGet1: build.query<
      GetPortfolioEventsUsingGet1ApiResponse,
      GetPortfolioEventsUsingGet1ApiArg
    >({
      query: () => ({ url: `/v2/structured-products/events` }),
    }),
    getPortfolioProductsUsingGet1: build.query<
      GetPortfolioProductsUsingGet1ApiResponse,
      GetPortfolioProductsUsingGet1ApiArg
    >({
      query: () => ({ url: `/v2/structured-products/products` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as dashboardServiceApi };
export type GetAnnuityEventsUsingGetApiResponse =
  /** status 200 Ok */ LifecycleCalendarEventResponse;
export type GetAnnuityEventsUsingGetApiArg = void;
export type GetOrderHistoryUsingGetApiResponse =
  /** status 200 Ok */ OrderHistoryResponse[];
export type GetOrderHistoryUsingGetApiArg = void;
export type GetAnnuityProductsUsingGetApiResponse =
  /** status 200 Ok */ LifeCycleProductDataResponse;
export type GetAnnuityProductsUsingGetApiArg = void;
export type GetCacheNamesUsingGetApiResponse = /** status 200 OK */ object[];
export type GetCacheNamesUsingGetApiArg = {
  /** details */
  details?: boolean;
};
export type ClearCacheEntryUsingDeleteApiResponse = unknown;
export type ClearCacheEntryUsingDeleteApiArg = {
  /** cacheName */
  cacheName: string;
  /** key */
  key: string;
};
export type GetCacheEntriesUsingGetApiResponse =
  /** status 200 OK */ CacheSupportResults;
export type GetCacheEntriesUsingGetApiArg = {
  /** cacheName */
  cacheName: string;
  /** details */
  details?: boolean;
  /** key */
  key?: string[];
};
export type GetCacheKeysUsingGetApiResponse =
  /** status 200 OK */ CacheSupportResults;
export type GetCacheKeysUsingGetApiArg = {
  /** cacheName */
  cacheName: string;
  /** details */
  details?: boolean;
  /** key */
  key?: string[];
};
export type GetPricingToolTypeUsingGetApiResponse = string[];
export type GetPricingToolTypeUsingGetApiArg = void;
export type GetPortfolioEventsUsingGetApiResponse =
  /** status 200 Ok */ EventCardData[];
export type GetPortfolioEventsUsingGetApiArg = void;
export type GetPortfolioProductsUsingGetApiResponse =
  /** status 200 Ok */ PortfolioV2[];
export type GetPortfolioProductsUsingGetApiArg = void;
export type GetAnnuityEventsUsingGet1ApiResponse =
  /** status 200 Ok */ LifecycleCalendarEventResponse;
export type GetAnnuityEventsUsingGet1ApiArg = void;
export type GetOrderHistoryUsingGet1ApiResponse =
  /** status 200 Ok */ OrderHistoryResponse[];
export type GetOrderHistoryUsingGet1ApiArg = void;
export type GetAnnuityProductsUsingGet1ApiResponse =
  /** status 200 Ok */ LifeCycleProductDataResponse;
export type GetAnnuityProductsUsingGet1ApiArg = void;
export type GetPortfolioEventsUsingGet1ApiResponse =
  /** status 200 Ok */ EventCardData[];
export type GetPortfolioEventsUsingGet1ApiArg = void;
export type GetPortfolioProductsUsingGet1ApiResponse =
  /** status 200 Ok */ PortfolioV2[];
export type GetPortfolioProductsUsingGet1ApiArg = void;
export type LifecycleCalendarEvent = {
  accountValue?: number;
  carrier?: string;
  date?: string;
  eventType?: string;
  policyHolder?: string;
  policyNumber?: string;
  premium?: number;
  productName?: string;
  productType?: string;
  status?: string;
};
export type LifecycleCalendarEventResponse = {
  calendarEvents?: LifecycleCalendarEvent[];
  demoFlag?: boolean;
  eventTypes?: string[];
};
export type EventRow = {
  finalPremium?: number;
  issueDate?: string;
  policyNumber?: string;
  status?: string;
  transactionDate?: string;
};
export type OrderHistoryResponse = {
  brokerDealerName?: string;
  carrierName?: string;
  cientMiddleName?: string;
  clientFirstName?: string;
  clientLastName?: string;
  clientState?: string;
  cusip?: string;
  eventRows?: EventRow[];
  financialAdviser?: string;
  oesBrokerDealer?: string;
  oesVendor?: string;
  premium?: number;
  productName?: string;
  productType?: string;
  reference?: string;
  submittedBy?: string;
  transactionId?: string;
  transactionType?: string;
  vendorUniqueId?: string;
};
export type Document = {
  documentName?: string;
  documentUrl?: string;
};
export type LifecycleProduct = {
  accountType?: string;
  accountValue?: number;
  carrier?: string;
  clientName?: string;
  documentLinks?: Document[];
  incomeRiderValue?: number;
  policyNumber?: string;
  policyStatus?: string;
  premium?: number;
  productName?: string;
  productType?: string;
  repName?: string;
  status?: string;
};
export type LifeCycleProductDataResponse = {
  demoFlag?: boolean;
  lifeCycleProducts?: LifecycleProduct[];
};
export type CacheSupportResults = {
  cacheName?: string;
  count?: number;
  results?: object[];
};
export type SPSUnderlier = {
  name?: string;
  source?: string;
  symbol: string;
  weight?: number;
};
export type EventCardData = {
  barrierBufferLabel?: string;
  barrierBufferValue?: number;
  basketType?: string;
  currency?: string;
  cusip?: string;
  date?: string;
  eventDate?: string;
  eventFutureInfo?: string;
  eventPastInfo?: string;
  eventProximity?: string;
  eventType?: string;
  issuer?: string;
  markToMarket?: number;
  markToMarketDate?: string;
  notional?: number;
  productIdentifier?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  type?:
    | 'Payment Date'
    | 'Valuation Date'
    | 'Maturity Date'
    | 'Final Valuation Date'
    | 'Pricing Date'
    | 'Settlement Date'
    | 'Call Date'
    | 'Call Review Date'
    | 'Trade Date';
  underlierList?: SPSUnderlier[];
};
export type DocumentDetails = {
  documentName?: string;
  documentType?: string;
  documentUrl?: string;
};
export type PortfolioOrder = {
  accountNumber?: string;
  orderId?: string;
  orderKey?: number;
  quantity?: number;
  representativeName?: string;
};
export type PortfolioProductV2 = {
  accountNumber?: string;
  assetClass?: string;
  assetClassNotBlank?: string;
  bidPrice?: number;
  completionStatus?: string;
  couponPaymentDate?: string;
  currency?: string;
  cusip?: string;
  documentLinks?: DocumentDetails[];
  fixingType?: string;
  issuer?: string;
  markToMarket?: number;
  markToMarketDate?: string;
  maturityDate?: string;
  nextCallDate?: string;
  notionalUnwound?: boolean;
  orderId?: string;
  orderKey?: number;
  orders?: PortfolioOrder[];
  paymentFrequency?: string;
  principalBarrierObserved?: string;
  productName?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  productType?: string;
  quantity?: number;
  redemptionType?: string;
  representativeName?: string;
  returnType?: string;
  settlementDate?: string;
  strikeDate?: string;
  structureNameExternal?: string;
  structureType?: string;
  term?: number;
  tradeDate?: string;
  underliers?: SPSUnderlier[];
};
export type PortfolioV2 = {
  portfolioName?: string;
  portfolioProducts?: PortfolioProductV2[];
};
export const {
  useGetAnnuityEventsUsingGetQuery,
  useGetOrderHistoryUsingGetQuery,
  useGetAnnuityProductsUsingGetQuery,
  useGetCacheNamesUsingGetQuery,
  useClearCacheEntryUsingDeleteMutation,
  useGetCacheEntriesUsingGetQuery,
  useGetCacheKeysUsingGetQuery,
  useGetPricingToolTypeUsingGetQuery,
  useGetPortfolioEventsUsingGetQuery,
  useGetPortfolioProductsUsingGetQuery,
  useGetAnnuityEventsUsingGet1Query,
  useGetOrderHistoryUsingGet1Query,
  useGetAnnuityProductsUsingGet1Query,
  useGetPortfolioEventsUsingGet1Query,
  useGetPortfolioProductsUsingGet1Query,
} = injectedRtkApi;
