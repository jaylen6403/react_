import { baseApi as api } from './secondariesServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompaniesUsingGet: build.query<
      GetCompaniesUsingGetApiResponse,
      GetCompaniesUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/company`,
        params: { filterByRole: queryArg.filterByRole },
      }),
    }),
    getCountriesUsingGet: build.query<
      GetCountriesUsingGetApiResponse,
      GetCountriesUsingGetApiArg
    >({
      query: () => ({ url: `/company/countries` }),
    }),
    getDataPermissionsUsingGet: build.query<
      GetDataPermissionsUsingGetApiResponse,
      GetDataPermissionsUsingGetApiArg
    >({
      query: () => ({ url: `/company/permissions` }),
    }),
    createOrderUsingPost: build.mutation<
      CreateOrderUsingPostApiResponse,
      CreateOrderUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/orders`,
        method: 'POST',
        body: queryArg.secondaryOrder,
        params: { timerSeconds: queryArg.timerSeconds },
      }),
    }),
    getOrdersByUserIdUsingGet: build.query<
      GetOrdersByUserIdUsingGetApiResponse,
      GetOrdersByUserIdUsingGetApiArg
    >({
      query: () => ({ url: `/orders/user` }),
    }),
    getOrderUsingGet: build.query<
      GetOrderUsingGetApiResponse,
      GetOrderUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/orders/${queryArg.orderId}` }),
    }),
    fillOrderUsingPut: build.mutation<
      FillOrderUsingPutApiResponse,
      FillOrderUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.orderId}/fill`,
        method: 'PUT',
      }),
    }),
    rejectOrderUsingPut: build.mutation<
      RejectOrderUsingPutApiResponse,
      RejectOrderUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/orders/${queryArg.orderId}/reject`,
        method: 'PUT',
      }),
    }),
    createQuoteUsingPost: build.mutation<
      CreateQuoteUsingPostApiResponse,
      CreateQuoteUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/quotes`,
        method: 'POST',
        body: queryArg.secondaryQuote,
      }),
    }),
    expireQuoteUsingPatch: build.mutation<
      ExpireQuoteUsingPatchApiResponse,
      ExpireQuoteUsingPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/quotes/expire`,
        method: 'PATCH',
        params: {
          requestId: queryArg.requestId,
          responseId: queryArg.responseId,
        },
      }),
    }),
    updateQuotePriceAndGoodUntilTimeUsingPut: build.mutation<
      UpdateQuotePriceAndGoodUntilTimeUsingPutApiResponse,
      UpdateQuotePriceAndGoodUntilTimeUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/quotes/${queryArg.responseId}/price-and-expire-time`,
        method: 'PUT',
        params: {
          quoteAmount: queryArg.quoteAmount,
          requestId: queryArg.requestId,
          time: queryArg.time,
        },
      }),
    }),
    getAllRequestForQuotesUsingGet: build.query<
      GetAllRequestForQuotesUsingGetApiResponse,
      GetAllRequestForQuotesUsingGetApiArg
    >({
      query: () => ({ url: `/rfqs` }),
    }),
    updateRequestForQuoteUsingPut: build.mutation<
      UpdateRequestForQuoteUsingPutApiResponse,
      UpdateRequestForQuoteUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/rfqs`,
        method: 'PUT',
        body: queryArg.secondaryRequestForQuote,
      }),
    }),
    createMultipleRequestForQuotesUsingPost: build.mutation<
      CreateMultipleRequestForQuotesUsingPostApiResponse,
      CreateMultipleRequestForQuotesUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/rfqs/multi-requests`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getRequestForQuotesFromTodayUsingGet: build.query<
      GetRequestForQuotesFromTodayUsingGetApiResponse,
      GetRequestForQuotesFromTodayUsingGetApiArg
    >({
      query: () => ({ url: `/rfqs/today` }),
    }),
    getRequestForQuoteByIdUsingGet: build.query<
      GetRequestForQuoteByIdUsingGetApiResponse,
      GetRequestForQuoteByIdUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/rfqs/${queryArg.requestId}` }),
    }),
    cancelRequestForQuoteByRequestIdUsingPost: build.mutation<
      CancelRequestForQuoteByRequestIdUsingPostApiResponse,
      CancelRequestForQuoteByRequestIdUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/rfqs/${queryArg.requestId}/cancel`,
        method: 'POST',
      }),
    }),
    getProductsByIdentifierUsingGet: build.query<
      GetProductsByIdentifierUsingGetApiResponse,
      GetProductsByIdentifierUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/security-details/product/${queryArg.identifier}`,
      }),
    }),
    getProductsUsingGet: build.query<
      GetProductsUsingGetApiResponse,
      GetProductsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/security-details/products`,
        params: {
          offset: queryArg.offset,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
          paged: queryArg.paged,
          'sort.sorted': queryArg['sort.sorted'],
          'sort.unsorted': queryArg['sort.unsorted'],
          unpaged: queryArg.unpaged,
        },
      }),
    }),
    getProductsBySearchCriteriaUsingPost: build.mutation<
      GetProductsBySearchCriteriaUsingPostApiResponse,
      GetProductsBySearchCriteriaUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/security-details/products/searchCriteria`,
        method: 'POST',
        body: queryArg.searchOptions,
      }),
    }),
    getProductsBySearchUsingPost: build.mutation<
      GetProductsBySearchUsingPostApiResponse,
      GetProductsBySearchUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/security-details/search`,
        method: 'POST',
        body: queryArg.searchOptions,
        params: { params: queryArg.params },
      }),
    }),
    expireSecondaryRecordsUsingPatch: build.mutation<
      ExpireSecondaryRecordsUsingPatchApiResponse,
      ExpireSecondaryRecordsUsingPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/status/expire`,
        method: 'PATCH',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as secondariesServiceApi };
export type GetCompaniesUsingGetApiResponse = /** status 200 Ok */ CompanyV2[];
export type GetCompaniesUsingGetApiArg = {
  /** filterByRole */
  filterByRole?: string;
};
export type GetCountriesUsingGetApiResponse = /** status 200 Ok */ Country[];
export type GetCountriesUsingGetApiArg = void;
export type GetDataPermissionsUsingGetApiResponse =
  /** status 200 Ok */ CompanyPermission[];
export type GetDataPermissionsUsingGetApiArg = void;
export type CreateOrderUsingPostApiResponse /** status 200 Ok */ =
  | SecondaryOrder
  | /** status 201 Created */ undefined;
export type CreateOrderUsingPostApiArg = {
  /** timerSeconds */
  timerSeconds?: number;
  /** order */
  secondaryOrder: SecondaryOrder;
};
export type GetOrdersByUserIdUsingGetApiResponse =
  /** status 200 Ok */ SecondaryOrder[];
export type GetOrdersByUserIdUsingGetApiArg = void;
export type GetOrderUsingGetApiResponse = /** status 200 Ok */ SecondaryOrder;
export type GetOrderUsingGetApiArg = {
  /** orderId */
  orderId: number;
};
export type FillOrderUsingPutApiResponse /** status 200 Ok */ =
  | SecondaryOrder
  | /** status 201 Created */ undefined;
export type FillOrderUsingPutApiArg = {
  /** orderId */
  orderId: number;
};
export type RejectOrderUsingPutApiResponse /** status 200 Ok */ =
  | SecondaryOrder
  | /** status 201 Created */ undefined;
export type RejectOrderUsingPutApiArg = {
  /** orderId */
  orderId: number;
};
export type CreateQuoteUsingPostApiResponse /** status 200 OK */ =
  | SecondaryQuote
  | /** status 201 Created */ SecondaryQuote;
export type CreateQuoteUsingPostApiArg = {
  /** secondaryQuote */
  secondaryQuote: SecondaryQuote;
};
export type ExpireQuoteUsingPatchApiResponse /** status 200 OK */ =
  | SecondaryRequestForQuote
  | /** status 204 Ok */ SecondaryQuote;
export type ExpireQuoteUsingPatchApiArg = {
  /** requestId */
  requestId: number;
  /** responseId */
  responseId: number;
};
export type UpdateQuotePriceAndGoodUntilTimeUsingPutApiResponse =
  /** status 200 OK */
  | SecondaryQuote
  | /** status 201 Created */ undefined
  | /** status 204 Ok */ SecondaryQuote;
export type UpdateQuotePriceAndGoodUntilTimeUsingPutApiArg = {
  /** quoteAmount */
  quoteAmount: number;
  /** requestId */
  requestId: number;
  /** responseId */
  responseId: number;
  /** time */
  time: string;
};
export type GetAllRequestForQuotesUsingGetApiResponse =
  /** status 200 Ok */ SecondaryRequestForQuote[];
export type GetAllRequestForQuotesUsingGetApiArg = void;
export type UpdateRequestForQuoteUsingPutApiResponse /** status 200 OK */ =
  | SecondaryRequestForQuote
  | /** status 201 Created */ undefined
  | /** status 204 Updated */ SecondaryRequestForQuote;
export type UpdateRequestForQuoteUsingPutApiArg = {
  /** rfq */
  secondaryRequestForQuote: SecondaryRequestForQuote;
};
export type CreateMultipleRequestForQuotesUsingPostApiResponse =
  /** status 200 OK */
  | SecondaryRequestForQuote[]
  | /** status 201 Created */ SecondaryRequestForQuote[];
export type CreateMultipleRequestForQuotesUsingPostApiArg = {
  /** rfqs */
  body: SecondaryRequestForQuote[];
};
export type GetRequestForQuotesFromTodayUsingGetApiResponse =
  /** status 200 Ok */ SecondaryRequestForQuote[];
export type GetRequestForQuotesFromTodayUsingGetApiArg = void;
export type GetRequestForQuoteByIdUsingGetApiResponse =
  /** status 200 Ok */ SecondaryRequestForQuote;
export type GetRequestForQuoteByIdUsingGetApiArg = {
  /** requestId */
  requestId: number;
};
export type CancelRequestForQuoteByRequestIdUsingPostApiResponse =
  /** status 200 OK */
  | SecondaryRequestForQuote
  | /** status 201 Created */ undefined
  | /** status 204 Canceled */ SecondaryRequestForQuote;
export type CancelRequestForQuoteByRequestIdUsingPostApiArg = {
  /** requestId */
  requestId: number;
};
export type GetProductsByIdentifierUsingGetApiResponse =
  /** status 200 Ok */ Product;
export type GetProductsByIdentifierUsingGetApiArg = {
  /** identifier */
  identifier: string;
};
export type GetProductsUsingGetApiResponse = /** status 200 Ok */ Product[];
export type GetProductsUsingGetApiArg = {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  'sort.sorted'?: boolean;
  'sort.unsorted'?: boolean;
  unpaged?: boolean;
};
export type GetProductsBySearchCriteriaUsingPostApiResponse =
  /** status 200 Ok */ Product[] | /** status 201 Created */ undefined;
export type GetProductsBySearchCriteriaUsingPostApiArg = {
  /** searchOptions */
  searchOptions: SearchOptions;
};
export type GetProductsBySearchUsingPostApiResponse /** status 200 Ok */ =
  | Product[]
  | /** status 201 Created */ undefined;
export type GetProductsBySearchUsingPostApiArg = {
  /** params */
  params: any;
  /** searchOptions */
  searchOptions: SearchOptions;
};
export type ExpireSecondaryRecordsUsingPatchApiResponse = unknown;
export type ExpireSecondaryRecordsUsingPatchApiArg = {
  /** expiredItems */
  body: any[];
};
export type CompanyV2 = {
  id?: number;
  name?: string;
  parentName?: string;
  roleNames?: string[];
};
export type Country = {
  countryCode?: string;
  countryName?: string;
  id?: number;
  region?: string;
};
export type CompanyPermission = {
  permission?: string;
  sourceCompany?: string;
  targetCompany?: string;
};
export type SecondaryOrderAssociatedUserIds = {
  liquidityProvider?: string;
  liquidityTaker?: string;
};
export type ProductIdentifier = {
  productId?: string;
  securityIdentifierType?: 'CUSIP' | 'ISIN';
  securityIdentifierValue?: string;
};
export type SecondaryOrderStatusTimestamp = {
  status?: 'PENDING' | 'CANCELED' | 'REJECTED' | 'FILLED';
  timestamp?: string;
};
export type SecondaryOrder = {
  account?: number;
  associatedRequestId: number;
  associatedResponseId: number;
  associatedUserIds?: SecondaryOrderAssociatedUserIds;
  coverPrice?: number;
  executed?: string;
  orderId?: number;
  price?: number;
  productIdentifier?: ProductIdentifier;
  quantity?: number;
  settlement?: string;
  side?: 'BUY' | 'SELL';
  status?: 'PENDING' | 'CANCELED' | 'REJECTED' | 'FILLED';
  statusHistory?: SecondaryOrderStatusTimestamp[];
  tlement?: string;
};
export type SecondaryQuote = {
  createDateTimestamp?: string;
  createdByUserId?: string;
  desk?: string;
  firm?: string;
  goodUntilTime: string;
  orderId?: number;
  quoteAmount: number;
  quoteProvider?: string;
  requestId: number;
  responseId?: number;
  revision?: number;
  status?:
    | 'Pending'
    | 'Canceled'
    | 'Filled'
    | 'Expired'
    | 'OTW'
    | 'Traded Away';
  updatedByUserId?: string;
  updatedTimestamp?: string;
  userAccount?: number;
};
export type AccumulationDecumulationDate = {
  periodEndDate?: string;
  settlementDate?: string;
};
export type AccumulatorDecumulator = {
  accumulationDecumulationDateList?: AccumulationDecumulationDate[];
  leverage?: number;
  numberOfShares?: number;
  settlementFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  strike?: number;
  strikeObservationFixingType?: 'Daily' | 'Continuous' | 'European';
  strikeObservationFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  totalNumberOfObservationDates?: number;
};
export type OfferingNotification = {
  dismissed?: boolean;
  uuid?: string;
};
export type ProceedToOfferingStatus = {
  createOfferWithIB?: 'InProgress' | 'DataReceived' | 'DocsReceived' | 'Error';
  createOfferWithOrderingSystem?: 'InProgress' | 'Complete' | 'Error';
  errors?: {
    [key: string]: string;
  };
  uploadDocstoOrderingSystem?: 'InProgress' | 'Complete' | 'Error';
  uuid?: string;
};
export type ClientSpecific = {
  breakpointShares?: number;
  broadOffering?: 'No' | 'Yes';
  clientProductId?: string;
  coreApproval?: 'Core' | 'Non-Core';
  dealBackup?: string[];
  dealLead?: string[];
  firstPaymentDate?: string;
  interestPeriod?: 'Short' | 'Standard' | 'Long';
  internalTradingDesk?: string;
  issuerCreditCode?: string;
  legalPrintEstimate?: number;
  legalTeam?: string;
  locked?: boolean;
  numBreakpointInvestors?: number;
  offeringNotification?: OfferingNotification;
  offeringScope?: 'Broad' | 'Tailored';
  offshoreEligibility?: 'No' | 'Yes' | 'Offshore Only';
  proceedToOfferingStatus?: ProceedToOfferingStatus;
  productCode?: 'ELNP' | 'ELNS' | 'ELNC' | 'ELNE' | 'CORP' | 'CORN';
  productSymbol?: string;
  prosRequestId?: string;
  pvFundingLessFeesPercentage?: number;
  ramCode?: string;
  securityId?: string;
  splitIds?: string[];
  trader?: string;
};
export type Underlier = {
  dividendYield?: number;
  exchangeCode?: string;
  initialFixing?:
    | 'End of Day'
    | 'Open'
    | 'Intraday'
    | 'VWAP'
    | 'Limit'
    | 'Firm';
  underlierLevel?: number;
  underlierName?: string;
  underlierSource: 'Bloomberg' | 'RIC';
  underlierStrikeDate?: string;
  underlierSymbol: string;
  underlierWeight?: number;
};
export type CallSchedule = {
  callBarrierLevelStepValue?: number;
  callObservationDate?: string;
  callPremiumStepValue?: number;
  callScheduleUnderlierList?: Underlier[];
  callSettlementDate?: string;
};
export type ProductCall = {
  callBarrierLevelCurrent?: number;
  callBarrierLevelFinal?: number;
  callBarrierLevelHigh?: number;
  callBarrierLevelLow?: number;
  callBarrierLevelUnderlierList?: Underlier[];
  callBarrierStepIncrement?: number;
  callBasketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  callCrossing?: 'Below' | 'At or Below' | 'Above' | 'At or Above';
  callMemory?: boolean;
  callObservationDateList?: CallSchedule[];
  callObservationFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  callPeriodObservationType?: 'Daily' | 'Continuous' | 'European';
  callPremiumCurrent?: number;
  callPremiumFinal?: number;
  callPremiumHigh?: number;
  callPremiumLow?: number;
  callPremiumStepIncrement?: number;
  callType?: 'Issuer' | 'Auto' | 'Autocall Step' | 'Null';
  expectedMaturity?: string;
  numberNoCallPeriods?: number;
  stepType?: 'Up' | 'Down';
};
export type RateBarrierLevel = {
  rateBarrierLevel?: number;
  rateBarrierLevelEndDate?: string;
  rateBarrierLevelStartDate?: string;
};
export type RateCap = {
  rateCap?: number;
  rateCapEndDate?: string;
  rateCapStartDate?: string;
};
export type RateConditionalCoupon = {
  rateConditionalCoupon?: number;
  rateConditionalCouponEndDate?: string;
  rateConditionalCouponStartDate?: string;
};
export type RateMin = {
  rateMin?: number;
  rateMinEndDate?: string;
  rateMinStartDate?: string;
};
export type ProductCln = {
  cdsName?: string;
  cdsTenor?: number;
  creditEvent?: string;
  debtIsinList?: string[];
  debtWeightList?: string[];
  fixedCouponMultiplier?: string;
  floatInstrument?: string;
  floatRateFixingOffsetDays?: number;
  floatRateFixingSchedule?: any[];
  floatRateFixingTime?: string;
  interestMultiplierPerYear?: number;
  rateBarrierLevel?: RateBarrierLevel[];
  rateBarrierObservationFrequency?: string;
  rateCap?: RateCap[];
  rateConditionalCoupon?: RateConditionalCoupon[];
  rateMin?: RateMin[];
  ratePaymentType?: string;
};
export type ProductCms = {
  longTermRateUnderlierSource?: 'Bloomberg' | 'RIC';
  longTermRateUnderlierSymbol?: string;
  shortTermRateUnderlierSource?: 'Bloomberg' | 'RIC';
  shortTermRateUnderlierSymbol?: string;
};
export type ExternalDocumentProvider = {
  externalDocumentProviderId?: string;
  legalReview?: 'Yes' | 'No';
  secLink?: string;
  taxReview?: 'Yes' | 'No';
};
export type MatchInformation = {
  matchAccepted?: boolean;
  matchEligible?: boolean;
  matchNotional?: number;
  matchNotionalExternalCP?: number;
  matchNotionalInternalCP?: number;
  matchPending?: boolean;
  matchPercentage?: number;
  matchRejected?: boolean;
};
export type ClientReoffer = {
  reofferClientName?: string;
  reofferClientRateCurrent?: number;
  reofferClientRateFinal?: number;
  reofferClientRateHigh?: number;
  reofferClientRateLow?: number;
};
export type ProductGeneral = {
  accountType?: 'Advisory' | 'Brokerage';
  ancillaryFeatures?: (
    | 'With Lookback Initial'
    | 'With Lookback Final'
    | 'With Coupon Memory'
    | 'With Minimum Return'
    | 'With Minimum Coupon'
    | 'With Averaging In'
    | 'With Averaging Out'
    | 'With Modified Averaging In'
    | 'With Modified Averaging Out'
    | 'With Supplemental'
    | 'With Knock Out'
  )[];
  assetClass?: string;
  averagingExclusion?: 'High' | 'Low';
  averagingInDates?: string[];
  averagingModified?: boolean;
  averagingOutDates?: string[];
  basketReturnAdjustment?: number;
  basketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  bidDeadlineTimestamp?: string;
  businessDayConvention?:
    | 'Following'
    | 'Modified Following'
    | 'Previous'
    | 'End of Month Following'
    | 'No Adjustment'
    | 'Modified Previous'
    | 'End of Month No Adjustment'
    | 'End of Month Previous';
  calculationAgent?: string;
  completionStatus?: 'Complete' | 'Incomplete' | 'Custom';
  currency?:
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'RUB'
    | 'CAD'
    | 'MXN'
    | 'CNY'
    | 'INR'
    | 'CHF'
    | 'SEK'
    | 'ARS'
    | 'AUD'
    | 'BRL'
    | 'CLP'
    | 'COP'
    | 'CZK'
    | 'DKK'
    | 'HKD'
    | 'HUF'
    | 'IDR'
    | 'ISK'
    | 'KRW'
    | 'MYR'
    | 'NOK'
    | 'NZD'
    | 'PEN'
    | 'PHP'
    | 'PLN'
    | 'SGD'
    | 'THB'
    | 'TRY'
    | 'TWD'
    | 'ZAR';
  cusip?: string;
  dateOffset?: number;
  dayCountFraction?: string;
  estimatedInitialValue?: number;
  externalBasketName?: string;
  externalDocumentProvider?: ExternalDocumentProvider;
  externalProductId?: string;
  fairPriceFinal?: number;
  fdicInsured?: boolean;
  finalValuationDate?: string;
  fundingSpread?: number[];
  fundservID?: string;
  highWaterMarkDate?: string;
  indicativeDeadlineTimestamp?: string;
  isin?: string;
  issueDate?: string;
  issuePriceCurrent?: number;
  issuePriceFinal?: number;
  issuePriceHigh?: number;
  issuePriceLow?: number;
  issuer?: string;
  longTermCapitalGain?: boolean;
  lookbackFinalDate?: string;
  lookbackFinalValuationType?: 'Min' | 'Max';
  lookbackInitialDate?: string;
  lookbackInitialValuationType?: 'Min' | 'Max';
  lumaProductIdentifier?: string;
  matchInformation?: MatchInformation;
  maturityDate?: string;
  minimumTradingLot?: number;
  offeringType?: 'Private Placement' | 'Public Offering';
  oisDfPercentage?: number;
  originator?: string;
  performanceStrike?: number;
  productCategory?:
    | 'Capital Protection'
    | 'Yield'
    | 'Participation'
    | 'Leverage'
    | 'Credit'
    | 'OTC';
  productDeadlineTimestamp?: string;
  productFaceValue?: number;
  productLaunchTimestamp?: string;
  productName?: string;
  productNoteList?: string[];
  productNotionalCap?: number;
  productNotionalCurrent?: number;
  productNotionalFinal?: number;
  productNotionalHigh?: number;
  productNotionalLow?: number;
  productRiskRanking?: number;
  productType?:
    | 'Capital Protection'
    | 'Capital Protection with Knock Out'
    | 'Discount Certificate'
    | 'Barrier Reverse Convertible'
    | 'Reverse Convertible'
    | 'Callable Barrier Reverse Convertible'
    | 'Callable Reverse Convertible'
    | 'Tracker Certificate'
    | 'Outperformance Certificate'
    | 'Bonus Certificate'
    | 'Twin Win'
    | 'Warrants'
    | 'Mini Futures'
    | 'CLN'
    | 'Accumulator'
    | 'Decumulator';
  registrationType?:
    | 'Registered Note'
    | 'Reg S'
    | '3a2'
    | 'Private Placement'
    | 'CD'
    | 'GIC'
    | 'PAR'
    | 'PPN'
    | 'ML GIC'
    | 'Exempt Distribution';
  reofferClientList?: ClientReoffer[];
  requestId?: string;
  returnType?: 'Growth' | 'Growth and Income' | 'Income' | 'Digital';
  riskFreeRate?: string;
  salesCreditCurrent?: number;
  salesCreditFinal?: number;
  salesCreditHigh?: number;
  salesCreditLow?: number;
  secondaryMarketQuotingType?: 'Clean' | 'Dirty';
  settlementType?: 'Cash' | 'Physical';
  sspaStructureTypeId?: string;
  sspaStructureTypeName?: string;
  stage?:
    | 'Request'
    | 'Quote'
    | 'Offer'
    | 'Refresh Price'
    | 'Confirm Lock'
    | 'Execution'
    | 'Post Trade'
    | 'Not Traded'
    | 'Ops Review';
  standardPrice?: number;
  status?:
    | 'Accepting Indications'
    | 'Book Building Traded Not Settled'
    | 'Request'
    | 'Estimated Quote'
    | 'Indicative Quote'
    | 'Final Quote'
    | 'Offer'
    | 'Confirm Lock'
    | 'Final Execution'
    | 'New'
    | 'Live'
    | 'Matured'
    | 'Called'
    | 'Indicative Quote Received'
    | 'Open for Orders'
    | 'Pending Confirmation'
    | 'Final Notional Confirmed'
    | 'Pending Final Docs'
    | 'Cancelled'
    | 'Offering Expired'
    | 'Restricted'
    | 'Traded Not Settled'
    | 'Accepting Orders'
    | 'Traded Pending Documentation'
    | 'Expired'
    | 'Book Building Traded Pending Documentation'
    | 'Review Required'
    | 'Update Product Details';
  strikeDate?: string;
  structureFee?: number;
  structureLongNameExternal?: string;
  structureLongNameInternal?: string;
  structureNameExternal?: string;
  structureNameInternal?: string;
  structureShortNameExternal?: string;
  structureShortNameInternal?: string;
  supplementalPercentage?: number;
  swapMaturity?: '1mL' | '3mL' | '1m' | '3m' | '6m';
  tenorCurrent?: number;
  tenorFinal?: number;
  tenorHigh?: number;
  tenorLow?: number;
  tenorUnit: 'Weeks' | 'Months' | 'Years';
  totalPnl?: number;
  tradeDate?: string;
  underlierList?: Underlier[];
  upfrontDeferred?: string;
  wrapperType: 'Note' | 'CD' | 'Market Linked Trust' | 'OTC';
};
export type ProductGrowth = {
  absoluteReturnBarrierLevelCurrent?: number;
  absoluteReturnBarrierLevelFinal?: number;
  absoluteReturnBarrierLevelHigh?: number;
  absoluteReturnBarrierLevelLow?: number;
  absoluteReturnBarrierUnderlierList?: Underlier[];
  absoluteReturnParticipationRateCurrent?: number;
  absoluteReturnParticipationRateFinal?: number;
  absoluteReturnParticipationRateHigh?: number;
  absoluteReturnParticipationRateLow?: number;
  bearish?: boolean;
  digitalReturnBarrierCurrent?: number;
  digitalReturnBarrierFinal?: number;
  digitalReturnBarrierHigh?: number;
  digitalReturnBarrierLow?: number;
  digitalReturnBarrierObservationDateList?: any[];
  digitalReturnBarrierObservationFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  digitalReturnBarrierUnderlierList?: Underlier[];
  digitalReturnCurrent?: number;
  digitalReturnFinal?: number;
  digitalReturnHigh?: number;
  digitalReturnLow?: number;
  growthType?: (
    | 'Point to Point'
    | 'Capped Point to Point'
    | 'ITM Digital'
    | 'ATM Digital'
    | 'OTM Digital'
    | 'Capped ITM Digital'
    | 'Capped ATM Digital'
    | 'Capped OTM Digital'
    | 'Uncapped ITM Digital'
    | 'Uncapped ATM Digital'
    | 'Uncapped OTM Digital'
    | 'Dual Directional'
    | 'Capped Dual Directional'
    | 'Digital Dual Directional'
    | 'Uncapped Digital Dual Directional'
    | 'Capped Digital Dual Directional'
    | 'Snowball'
    | 'Variable Snowball'
    | 'Cliquet'
    | 'Hybrid Credit Linked Point to Point'
    | 'Capped Hybrid Credit Linked Point to Point'
  )[];
  knockOutBarrierCurrent?: number;
  knockOutBarrierFinal?: number;
  knockOutBarrierHigh?: number;
  knockOutBarrierLow?: number;
  knockOutRebateCurrent?: number;
  knockOutRebateFinal?: number;
  knockOutRebateHigh?: number;
  knockOutRebateLow?: number;
  lowerCallStrikeCurrent?: number;
  lowerCallStrikeFinal?: number;
  lowerCallStrikeHigh?: number;
  lowerCallStrikeLow?: number;
  lowerCallStrikeUnderlierList?: Underlier[];
  lowerPutStrike?: number;
  maximumReturnCurrent?: number;
  maximumReturnFinal?: number;
  maximumReturnHigh?: number;
  maximumReturnLow?: number;
  minimumReturnCurrent?: number;
  minimumReturnFinal?: number;
  minimumReturnHigh?: number;
  minimumReturnLow?: number;
  underlierReturnCapLevelCurrent?: number;
  underlierReturnCapLevelFinal?: number;
  underlierReturnCapLevelHigh?: number;
  underlierReturnCapLevelLow?: number;
  upsideAboveDigitalReturn?: boolean;
  upsideBasketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  upsideParticipationAboveDigitalReturnCurrent?: number;
  upsideParticipationAboveDigitalReturnFinal?: number;
  upsideParticipationAboveDigitalReturnHigh?: number;
  upsideParticipationAboveDigitalReturnLow?: number;
  upsideParticipationRateCurrent?: number;
  upsideParticipationRateFinal?: number;
  upsideParticipationRateHigh?: number;
  upsideParticipationRateLow?: number;
  upsideParticipationUnderlierList?: Underlier[];
};
export type ProductProtection = {
  KIbarrierCrossing?: 'Below' | 'At or Below' | 'Above' | 'At or Above';
  capitalProtectionLevelCurrent?: number;
  capitalProtectionLevelFinal?: number;
  capitalProtectionLevelHigh?: number;
  capitalProtectionLevelLow?: number;
  downsideBasketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  downsideType?:
    | 'Buffer'
    | 'Barrier'
    | 'Full'
    | 'Partial'
    | 'Bearish'
    | 'No Principal Protection'
    | 'Airbag'
    | 'Geared Barrier'
    | 'Geared Buffer';
  finalFixingCrossing?: 'Below' | 'At or Below' | 'Above' | 'At or Above';
  oneStarLevel?: number;
  oneStarType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  principalBarrierLevelCurrent?: number;
  principalBarrierLevelFinal?: number;
  principalBarrierLevelHigh?: number;
  principalBarrierLevelLow?: number;
  principalBarrierLevelUnderlierList?: Underlier[];
  principalBufferLevelCurrent?: number;
  principalBufferLevelFinal?: number;
  principalBufferLevelHigh?: number;
  principalBufferLevelLow?: number;
  principalBufferLevelUnderlierList?: Underlier[];
  protectionLevel?: number;
  putLeverageCurrent?: number;
  putLeverageFinal?: number;
  putLeverageHigh?: number;
  putLeverageLow?: number;
  putObservationDateList?: string[];
  putObservationFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  putStrikeCurrent?: number;
  putStrikeFinal?: number;
  putStrikeHigh?: number;
  putStrikeLow?: number;
  putStrikeUnderlierList?: Underlier[];
  putType?: 'Down and In' | 'Vanilla';
};
export type SupportingDocumentation = {
  documentLanguage?: ('EN' | 'FR' | 'ES' | 'DE' | 'IT')[];
  documentationType?:
    | 'KID'
    | 'Fact Sheets'
    | 'Target Market'
    | 'Cost & Charges'
    | 'Termsheet'
    | 'Final Terms'
    | 'Prelim Draft'
    | 'Template Prospectus Supplement'
    | 'Prelim Distributable'
    | 'Preliminary Prospectus Supplement'
    | 'Final Distributable'
    | 'Final Draft'
    | 'Indicative Term Sheet'
    | 'Miscellaneous'
    | 'Summary Sheet Draft'
    | 'Summary Sheet Distributable'
    | 'Swiss Simplified Prospectus';
};
export type ProductRegulatory = {
  countryDistribution?: (
    | 'Canada'
    | 'Switzerland'
    | 'Germany'
    | 'Italy'
    | 'France'
    | 'Spain'
    | 'Portugal'
    | 'United Kingdom'
    | 'Netherlands'
    | 'Belgium'
    | 'Luxembourg'
    | 'Austria'
    | 'Ireland'
    | 'Sweden'
    | 'Finland'
    | 'Norway'
    | 'Denmark'
    | 'Israel'
    | 'UAE'
    | 'South Africa'
    | 'USA'
    | 'Mexico'
    | 'Panama'
    | 'Colombia'
    | 'Peru'
    | 'Chile'
    | 'Uruguay'
    | 'Argentina'
    | 'Paraguay'
    | 'Puerto Rico'
    | 'Ecuador'
    | 'Hong Kong'
    | 'Singapore'
  )[];
  listing?:
    | 'None'
    | 'SIX'
    | 'BX Swiss'
    | 'FWB'
    | 'GETTEX'
    | 'SWB'
    | 'Euronext France'
    | 'Euronext NL'
    | 'Euronext Lisbon'
    | 'Euronext Brussels'
    | 'BVME'
    | 'LuxSE'
    | 'BME'
    | 'LSE'
    | 'WBAG';
  supportingDocumentation?: SupportingDocumentation[];
  targetMarket?:
    | 'Retail'
    | 'Professional Counterparties'
    | 'Eligible Counterparties';
};
export type ProductScenarios = {
  scenarioOne?: string;
  scenarioTwo?: string;
};
export type LeverageFactor = {
  leverageFactor?: number;
  leverageFactorEndDate?: string;
  leverageFactorStartDate?: string;
};
export type PaymentSchedule = {
  bifurcationOfInterest?: boolean;
  interest?: number;
  optionPremium?: number;
  paymentBarrierLevel?: number;
  paymentObservationDate?: string;
  paymentRate?: number;
  paymentResetDate?: string;
  paymentSettlementDate?: string;
};
export type ProductYield = {
  bifurcationOfInterest?: boolean;
  cashPoolKnockInLevel?: string;
  cashPoolKnockInVolume?: string;
  couponBarrierCrossingType?: 'Above' | 'At Or Above';
  couponBasketType?: 'Equal' | 'Custom' | 'WoF' | 'BoF' | 'Out Performance';
  equityPool?: number;
  floatSpread?: number;
  interest?: number;
  leverageFactors?: LeverageFactor[];
  minCouponPayPeriod?:
    | 'Annually'
    | 'Bi-Monthly'
    | 'Monthly'
    | 'Quarterly'
    | 'At Maturity'
    | 'Semi-Annually';
  minPaymentRatePerAnnumCurrent?: number;
  minPaymentRatePerAnnumFinal?: number;
  minPaymentRatePerAnnumHigh?: number;
  minPaymentRatePerAnnumLow?: number;
  minPaymentRatePerPeriodCurrent?: number;
  minPaymentRatePerPeriodFinal?: number;
  minPaymentRatePerPeriodHigh?: number;
  minPaymentRatePerPeriodLow?: number;
  optionPremium?: number;
  paymentBarrierCurrent?: number;
  paymentBarrierFinal?: number;
  paymentBarrierHigh?: number;
  paymentBarrierLow?: number;
  paymentBarrierObservationFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  paymentBarrierUnderlierList?: Underlier[];
  paymentDateList?: PaymentSchedule[];
  paymentEvaluationFrequencyCurrent?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  paymentEvaluationFrequencyFinal?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  paymentFrequency?:
    | 'Continuous'
    | 'Daily'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'Monthly'
    | 'Bi-Monthly'
    | 'Quarterly'
    | 'Semi-Annually'
    | 'Annually'
    | 'European'
    | 'European Continuous'
    | 'At Maturity'
    | 'On Final Valuation Date'
    | 'On Final Observation'
    | 'Custom';
  paymentMemory?: boolean;
  paymentRatePerAnnumCurrent?: number;
  paymentRatePerAnnumFinal?: number;
  paymentRatePerAnnumHigh?: number;
  paymentRatePerAnnumLow?: number;
  paymentRatePerPeriodCurrent?: number;
  paymentRatePerPeriodFinal?: number;
  paymentRatePerPeriodHigh?: number;
  paymentRatePerPeriodLow?: number;
  paymentType?:
    | 'Fixed'
    | 'Contingent'
    | 'Range Accrual'
    | 'Annual Averaging'
    | 'All Up'
    | 'Resetting Annual Averaging'
    | 'AutoCap'
    | 'Rate Builder'
    | 'Fixed To Floating'
    | 'Time Series'
    | 'Fixed to Reset'
    | 'Variable Interest Credit Linked'
    | 'Fixed Interest Credit Linked'
    | 'Rate Linked'
    | 'Credit Linked'
    | 'Stock Basket'
    | 'Resetting Time Series'
    | 'Cliquet'
    | 'Fixed To Contingent'
    | 'Builder'
    | 'Leveraged Builder';
  paymentTypeChangeDate?: string;
  rateBuilderGrouping?: string[];
  rateBuilderReturns?: string[];
  rateBuilderValuesCurrent?: number[];
  rateBuilderValuesFinal?: number[];
  rateBuilderValuesHigh?: number[];
  rateBuilderValuesLow?: number[];
  stockReturnCapCurrent?: string;
  stockReturnCapFinal?: string;
  stockReturnCapHigh?: string;
  stockReturnCapLow?: string;
  stockReturnCapUnderlierList?: Underlier[];
  stockReturnFloorCurrent?: string;
  stockReturnFloorFinal?: string;
  stockReturnFloorHigh?: string;
  stockReturnFloorLow?: string;
  stockReturnFloorUnderlierList?: Underlier[];
  triggerParticipationRate?: number;
  upperBarrierLevelCurrent?: number;
  upperBarrierLevelFinal?: number;
  upperBarrierLevelHigh?: number;
  upperBarrierLevelLow?: number;
  variablePayFinalObservationDate?: string;
  variablePayInitialObservationDate?: string;
  yieldBasketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  yieldCrossing?: 'Below' | 'At or Below' | 'Above' | 'At or Above';
};
export type IssuerDocumentSEC = {
  docType?: 'Termsheet' | 'KID';
  documentId?: string;
  encodedPDF?: string;
  isFinal?: boolean;
  jurisdiction?:
    | 'Switzerland'
    | 'Germany'
    | 'Italy'
    | 'France'
    | 'Spain'
    | 'Portugal'
    | 'United Kingdom'
    | 'Netherlands'
    | 'Belgium'
    | 'Luxembourg'
    | 'Austria'
    | 'Ireland'
    | 'Sweden'
    | 'Finland'
    | 'Norway'
    | 'Denmark'
    | 'Israel'
    | 'UAE'
    | 'South Africa'
    | 'USA'
    | 'Mexico'
    | 'Panama'
    | 'Colombia'
    | 'Peru'
    | 'Chile'
    | 'Uruguay'
    | 'Argentina'
    | 'Paraguay'
    | 'Puerto Rico'
    | 'Ecuador'
    | 'Hong Kong'
    | 'Singapore'
    | 'Canada';
  language?: 'EN' | 'ES' | 'ZH' | 'FR' | 'DE' | 'IT' | 'PT' | 'RU' | 'SV';
  link?: string;
  orderId?: string;
  password?: string;
  quoteId?: string;
  quoteProvider?: string;
  quoteProviderOrderId?: string;
  quoteProviderQuoteId?: string;
  username?: string;
};
export type ProductQuote = {
  clientReferenceId?: string;
  counterpartyFundingType?: 'Upfront' | 'Deferred';
  counterpartyFundingValue?: number;
  createDateTimestamp?: string;
  createdByUserId?: string;
  createdByUsername?: string;
  creationHubQuoteId?: string;
  current?: number;
  documents?: IssuerDocumentSEC[];
  errorMessages?: string[];
  estimatedInitialValue?: number;
  estimatedLife?: number;
  estimatedLifeUnit?: 'Weeks' | 'Months' | 'Years';
  expirationTimestamp?: string;
  high?: number;
  issuerReferenceId?: string;
  low?: number;
  message?: string[];
  messages?: string[];
  notional?: number;
  numberOfShares?: number;
  quoteId?: string;
  quoteProvider: string;
  requestId: string;
  requestType?: 'Indicative' | 'Firm';
  revision?: number;
  sensitivity?: number;
  solveFor?:
    | 'Tenor'
    | 'Product Notional'
    | 'Reoffer Client Rate'
    | 'Payment Evaluation Frequency'
    | 'Payment Rate Per Period'
    | 'Payment Rate Per Annum'
    | 'Min Payment Rate Per Annum'
    | 'Min Payment Rate Per Period'
    | 'Stock Return Floor'
    | 'Rate Builder Values'
    | 'Call Level List'
    | 'Call Premium Level List'
    | 'Put Strike'
    | 'Principal Barrier Level'
    | 'Digital Return'
    | 'Upside Participation Rate'
    | 'Lower Call Strike'
    | 'Underlier Return Cap Level'
    | 'Digital Return Percentage'
    | 'Digital Return Barrier'
    | 'Upside Participation Above Digital Return'
    | 'Absolute Return Barrier Level'
    | 'Downside Participation Rate'
    | 'Maximum Return'
    | 'Payment Barrier'
    | 'Stock Return Cap'
    | 'Sales Credit'
    | 'Absolute Return Participation Rate'
    | 'Call Barrier Level'
    | 'Principal Buffer Level'
    | 'Upper Barrier Level'
    | 'Knock Out Rebate'
    | 'Knock Out Barrier'
    | 'Issue Price'
    | 'Capital Protection Level'
    | 'Put Leverage'
    | 'Accumulator Decumulator Strike';
  status?:
    | 'Invalid'
    | 'Quote Received'
    | 'Quote Expired'
    | 'Quote Rejected'
    | 'Quote Cancelled'
    | 'Traded Away'
    | 'Quote Accepted'
    | 'Request for Approval'
    | 'Request for Approval (Client)';
  underlierLevel?: number;
  updatedByUserId?: string;
  updatedTimestamp?: string;
};
export type Product = {
  accumulatorDecumulator?: AccumulatorDecumulator;
  clientSpecific?: ClientSpecific;
  createTimestamp?: string;
  createdByUserId?: string;
  productCall: ProductCall;
  productCln?: ProductCln;
  productCms?: ProductCms;
  productGeneral: ProductGeneral;
  productGrowth: ProductGrowth;
  productId?: string;
  productProtection: ProductProtection;
  productRegulatory?: ProductRegulatory;
  productScenarios?: ProductScenarios;
  productYield: ProductYield;
  quotes?: {
    [key: string]: ProductQuote;
  };
  revision?: number;
  updateTimestamp?: string;
  updatedByUserId?: string;
};
export type SecondaryProductIdentifier = {
  productId?: string;
  securityIdentifierType?: 'CUSIP' | 'ISIN';
  securityIdentifierValue?: string;
};
export type SecondaryRequestForQuote = {
  acceptedQuote?: SecondaryQuote;
  createDateTimestamp?: string;
  createdByUserId?: string;
  desk?: string;
  endTime?: string;
  firm?: string;
  product?: Product;
  productIdentifier?: SecondaryProductIdentifier;
  quantity: number;
  quotes?: SecondaryQuote[];
  requestId?: number;
  requestType?: 'BWIC' | 'OWIC';
  revision?: number;
  settlementTimestamp?: string;
  status?: 'OPEN' | 'PENDING' | 'FILLED' | 'CANCELED' | 'EXPIRED';
  tlementTimestamp?: string;
  updatedByUserId?: string;
  updatedTimestamp?: string;
  userAccount?: number;
};
export type OptionalString = {
  empty?: boolean;
  present?: boolean;
};
export type SearchCriteria = {
  key?: string;
  operation?:
    | 'IN'
    | 'EQ'
    | 'LT'
    | 'LTE'
    | 'GT'
    | 'GTE'
    | 'BETWEEN'
    | 'IN_BETWEEN'
    | 'CONTAINS'
    | 'MULTIPLE_CONTAINS'
    | 'ELEM_MATCH'
    | 'ELEM_MATCH_IN';
  value?: object;
};
export type SearchOptions = {
  junctionOperation?: OptionalString;
  projectionFields?: string[];
  searchCriteriaList?: SearchCriteria[];
};
export const {
  useGetCompaniesUsingGetQuery,
  useGetCountriesUsingGetQuery,
  useGetDataPermissionsUsingGetQuery,
  useCreateOrderUsingPostMutation,
  useGetOrdersByUserIdUsingGetQuery,
  useGetOrderUsingGetQuery,
  useFillOrderUsingPutMutation,
  useRejectOrderUsingPutMutation,
  useCreateQuoteUsingPostMutation,
  useExpireQuoteUsingPatchMutation,
  useUpdateQuotePriceAndGoodUntilTimeUsingPutMutation,
  useGetAllRequestForQuotesUsingGetQuery,
  useUpdateRequestForQuoteUsingPutMutation,
  useCreateMultipleRequestForQuotesUsingPostMutation,
  useGetRequestForQuotesFromTodayUsingGetQuery,
  useGetRequestForQuoteByIdUsingGetQuery,
  useCancelRequestForQuoteByRequestIdUsingPostMutation,
  useGetProductsByIdentifierUsingGetQuery,
  useGetProductsUsingGetQuery,
  useGetProductsBySearchCriteriaUsingPostMutation,
  useGetProductsBySearchUsingPostMutation,
  useExpireSecondaryRecordsUsingPatchMutation,
} = injectedRtkApi;
