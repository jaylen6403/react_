import { baseApi as api } from './productServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCacheNamesUsingGet: build.query<
      GetCacheNamesUsingGetApiResponse,
      GetCacheNamesUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/caches`,
        params: { details: queryArg.details },
      }),
    }),
    clearAllCachesUsingDelete: build.mutation<
      ClearAllCachesUsingDeleteApiResponse,
      ClearAllCachesUsingDeleteApiArg
    >({
      query: () => ({ url: `/caches`, method: 'DELETE' }),
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
    getCusipsAndInterestedUsersUsingPost: build.mutation<
      GetCusipsAndInterestedUsersUsingPostApiResponse,
      GetCusipsAndInterestedUsersUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/cusipsandinterestedusers`,
        method: 'POST',
        body: queryArg.body,
        params: { productManager: queryArg.productManager },
      }),
    }),
    getTradeDeskListUsingGet1: build.query<
      GetTradeDeskListUsingGet1ApiResponse,
      GetTradeDeskListUsingGet1ApiArg
    >({
      query: () => ({ url: `/desk` }),
    }),
    getAllDeskUsersForTradeDeskUsingGet: build.query<
      GetAllDeskUsersForTradeDeskUsingGetApiResponse,
      GetAllDeskUsersForTradeDeskUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/desk/${queryArg.tradeDeskId}/user` }),
    }),
    getProductForEditUsingGet: build.query<
      GetProductForEditUsingGetApiResponse,
      GetProductForEditUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/editable-products/${queryArg.productIdentifier}`,
      }),
    }),
    getHeatMapProductsBySourceTypeUsingGet: build.query<
      GetHeatMapProductsBySourceTypeUsingGetApiResponse,
      GetHeatMapProductsBySourceTypeUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/heatmap/products`,
        params: { source: queryArg.source, type: queryArg['type'] },
      }),
    }),
    getLatestRangeMinMaxBySourceUsingGet: build.query<
      GetLatestRangeMinMaxBySourceUsingGetApiResponse,
      GetLatestRangeMinMaxBySourceUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/heatmap/raterange`,
        params: { source: queryArg.source },
      }),
    }),
    getTradeDeskListUsingGet: build.query<
      GetTradeDeskListUsingGetApiResponse,
      GetTradeDeskListUsingGetApiArg
    >({
      query: () => ({ url: `/marketplace/product/tradeDesk/program` }),
    }),
    checkIfUserCompletedTrainingUsingGet: build.query<
      CheckIfUserCompletedTrainingUsingGetApiResponse,
      CheckIfUserCompletedTrainingUsingGetApiArg
    >({
      query: () => ({ url: `/marketplace/product/training/completed/user` }),
    }),
    setVisibilityUsingPut: build.mutation<
      SetVisibilityUsingPutApiResponse,
      SetVisibilityUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/marketplace/product/visibility/program`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    getSettlementCounterpartyUsingGet: build.query<
      GetSettlementCounterpartyUsingGetApiResponse,
      GetSettlementCounterpartyUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/marketplace/product/${queryArg.programId}/${queryArg.cusip}`,
      }),
    }),
    getProductsUsingGet: build.query<
      GetProductsUsingGetApiResponse,
      GetProductsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/marketplace/product/${queryArg.tradeDeskId}`,
      }),
    }),
    getPortfolioUsingGet: build.query<
      GetPortfolioUsingGetApiResponse,
      GetPortfolioUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolios`,
        params: { tradeDeskId: queryArg.tradeDeskId },
      }),
    }),
    getPortfolioChartDataUsingPost: build.mutation<
      GetPortfolioChartDataUsingPostApiResponse,
      GetPortfolioChartDataUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolios/chartdata`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getPortfolioEventsUsingGet1: build.query<
      GetPortfolioEventsUsingGet1ApiResponse,
      GetPortfolioEventsUsingGet1ApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolios/events`,
        params: {
          enddate: queryArg.enddate,
          startdate: queryArg.startdate,
          tradeDeskId: queryArg.tradeDeskId,
        },
      }),
    }),
    getPortfolioUnderlierRankUsingGet: build.query<
      GetPortfolioUnderlierRankUsingGetApiResponse,
      GetPortfolioUnderlierRankUsingGetApiArg
    >({
      query: () => ({ url: `/portfolios/rank` }),
    }),
    getProductIdentifiersUsingGet: build.query<
      GetProductIdentifiersUsingGetApiResponse,
      GetProductIdentifiersUsingGetApiArg
    >({
      query: () => ({ url: `/product-identifiers` }),
    }),
    getIssuerAllowsCalcsUsingGet: build.query<
      GetIssuerAllowsCalcsUsingGetApiResponse,
      GetIssuerAllowsCalcsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/product/allowsCalcs`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    uploadProductDataUsingPost: build.mutation<
      UploadProductDataUsingPostApiResponse,
      UploadProductDataUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/product/data`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getProductEventDatesUsingGet1: build.query<
      GetProductEventDatesUsingGet1ApiResponse,
      GetProductEventDatesUsingGet1ApiArg
    >({
      query: (queryArg) => ({
        url: `/product/eventdates`,
        params: { enddate: queryArg.enddate, startdate: queryArg.startdate },
      }),
    }),
    getHockeystickChartDetailsUsingGet: build.query<
      GetHockeystickChartDetailsUsingGetApiResponse,
      GetHockeystickChartDetailsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/product/hockeystickChartDetails`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    issuersFromProductsUsingGet: build.query<
      IssuersFromProductsUsingGetApiResponse,
      IssuersFromProductsUsingGetApiArg
    >({
      query: () => ({ url: `/product/issuers` }),
    }),
    uploadIssuerProductOrderDataUsingPost: build.mutation<
      UploadIssuerProductOrderDataUsingPostApiResponse,
      UploadIssuerProductOrderDataUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/product/order`,
        method: 'POST',
        body: queryArg.body,
        params: { issuer: queryArg.issuer },
      }),
    }),
    getStructureTypeDisplayDataUsingGet: build.query<
      GetStructureTypeDisplayDataUsingGetApiResponse,
      GetStructureTypeDisplayDataUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/product/structureTypeDisplayData`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    getProductDetailsUsingGet: build.query<
      GetProductDetailsUsingGetApiResponse,
      GetProductDetailsUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/product/${queryArg.cusip}/details` }),
    }),
    getProductUsingGet: build.query<
      GetProductUsingGetApiResponse,
      GetProductUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    isinToCusipUsingGet: build.query<
      IsinToCusipUsingGetApiResponse,
      IsinToCusipUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/cusip`,
        params: { isins: queryArg.isins },
      }),
    }),
    getProductDocumentsUsingGet: build.query<
      GetProductDocumentsUsingGetApiResponse,
      GetProductDocumentsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/documentLinks`,
        params: { cusips: queryArg.cusips },
      }),
    }),
    getProductInstrumentIdentifiersUsingGet: build.query<
      GetProductInstrumentIdentifiersUsingGetApiResponse,
      GetProductInstrumentIdentifiersUsingGetApiArg
    >({
      query: () => ({ url: `/products/instrumentIdentifiers` }),
    }),
    getProductInstrumentIdentifiersPostUsingPost: build.mutation<
      GetProductInstrumentIdentifiersPostUsingPostApiResponse,
      GetProductInstrumentIdentifiersPostUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/products/instrumentIdentifiers`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    cusipToIsinUsingGet: build.query<
      CusipToIsinUsingGetApiResponse,
      CusipToIsinUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/isin`,
        params: { countryCode: queryArg.countryCode, cusips: queryArg.cusips },
      }),
    }),
    getUnCachedProductsUsingGet: build.query<
      GetUnCachedProductsUsingGetApiResponse,
      GetUnCachedProductsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/latest`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    getProductOrdersForUserUsingGet: build.query<
      GetProductOrdersForUserUsingGetApiResponse,
      GetProductOrdersForUserUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/orders`,
        params: { cusip: queryArg.cusip },
      }),
    }),
    getRepsPerPmPerCusipUsingPost: build.mutation<
      GetRepsPerPmPerCusipUsingPostApiResponse,
      GetRepsPerPmPerCusipUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/products/reps`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getCanonicalProductUsingPost: build.mutation<
      GetCanonicalProductUsingPostApiResponse,
      GetCanonicalProductUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/products/${queryArg.identifier}`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getProductMarkToMarketUsingGet: build.query<
      GetProductMarkToMarketUsingGetApiResponse,
      GetProductMarkToMarketUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/${queryArg.productIdentifier}/mark-to-market`,
      }),
    }),
    getProductMarkToMarketGraphPointsUsingGet: build.query<
      GetProductMarkToMarketGraphPointsUsingGetApiResponse,
      GetProductMarkToMarketGraphPointsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/products/${queryArg.productIdentifier}/mark-to-market/graph`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as productServiceApi };
export type GetCacheNamesUsingGetApiResponse = /** status 200 OK */ object[];
export type GetCacheNamesUsingGetApiArg = {
  /** details */
  details?: boolean;
};
export type ClearAllCachesUsingDeleteApiResponse = unknown;
export type ClearAllCachesUsingDeleteApiArg = void;
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
export type GetCusipsAndInterestedUsersUsingPostApiResponse =
  /** status 200 OK */
  | {
      [key: string]: string[];
    }
  | /** status 201 Created */ undefined;
export type GetCusipsAndInterestedUsersUsingPostApiArg = {
  /** productManager */
  productManager: boolean;
  /** cusips */
  body: string[];
};
export type GetTradeDeskListUsingGet1ApiResponse = /** status 200 OK */ Desk[];
export type GetTradeDeskListUsingGet1ApiArg = void;
export type GetAllDeskUsersForTradeDeskUsingGetApiResponse =
  /** status 200 OK */ DeskUser[];
export type GetAllDeskUsersForTradeDeskUsingGetApiArg = {
  /** tradeDeskId */
  tradeDeskId: number;
};
export type GetProductForEditUsingGetApiResponse =
  /** status 200 OK */ CanonicalProduct;
export type GetProductForEditUsingGetApiArg = {
  /** productIdentifier */
  productIdentifier: string;
};
export type GetHeatMapProductsBySourceTypeUsingGetApiResponse =
  /** status 200 OK */ HeatMapGridData[];
export type GetHeatMapProductsBySourceTypeUsingGetApiArg = {
  /** source */
  source: string;
  /** type */
  type: string;
};
export type GetLatestRangeMinMaxBySourceUsingGetApiResponse =
  /** status 200 OK */ {
    [key: string]: number;
  };
export type GetLatestRangeMinMaxBySourceUsingGetApiArg = {
  /** source */
  source: string;
};
export type GetTradeDeskListUsingGetApiResponse =
  /** status 200 OK */ TradeDesk[];
export type GetTradeDeskListUsingGetApiArg = void;
export type CheckIfUserCompletedTrainingUsingGetApiResponse =
  /** status 200 OK */ boolean;
export type CheckIfUserCompletedTrainingUsingGetApiArg = void;
export type SetVisibilityUsingPutApiResponse /** status 200 OK */ =
  | number[]
  | /** status 201 Created */ undefined;
export type SetVisibilityUsingPutApiArg = {
  /** customProducts */
  body: CustomProduct[];
};
export type GetSettlementCounterpartyUsingGetApiResponse =
  /** status 200 OK */ string;
export type GetSettlementCounterpartyUsingGetApiArg = {
  /** cusip */
  cusip: string;
  /** programId */
  programId: number;
};
export type GetProductsUsingGetApiResponse =
  /** status 200 OK */ MarketplaceProduct[];
export type GetProductsUsingGetApiArg = {
  /** tradeDeskId */
  tradeDeskId: number;
};
export type GetPortfolioUsingGetApiResponse = /** status 200 OK */ Portfolio[];
export type GetPortfolioUsingGetApiArg = {
  /** tradeDeskId */
  tradeDeskId?: number;
};
export type GetPortfolioChartDataUsingPostApiResponse /** status 200 OK */ =
  | {
      [key: string]: {
        [key: string]: GraphDataPercentage[];
      };
    }
  | /** status 201 Created */ undefined;
export type GetPortfolioChartDataUsingPostApiArg = {
  /** cusips */
  body: string[];
};
export type GetPortfolioEventsUsingGet1ApiResponse =
  /** status 200 OK */ PortfolioEvent[];
export type GetPortfolioEventsUsingGet1ApiArg = {
  /** enddate */
  enddate: string;
  /** startdate */
  startdate: string;
  /** tradeDeskId */
  tradeDeskId?: number;
};
export type GetPortfolioUnderlierRankUsingGetApiResponse =
  /** status 200 OK */ UnderlierRank[];
export type GetPortfolioUnderlierRankUsingGetApiArg = void;
export type GetProductIdentifiersUsingGetApiResponse =
  /** status 200 OK */ ProductIdentifier[];
export type GetProductIdentifiersUsingGetApiArg = void;
export type GetIssuerAllowsCalcsUsingGetApiResponse =
  /** status 200 OK */ boolean;
export type GetIssuerAllowsCalcsUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type UploadProductDataUsingPostApiResponse /** status 200 OK */ =
  | string
  | /** status 201 Created */ undefined;
export type UploadProductDataUsingPostApiArg = {
  body: {
    file: Blob;
  };
};
export type GetProductEventDatesUsingGet1ApiResponse =
  /** status 200 OK */ ProductEventDate[];
export type GetProductEventDatesUsingGet1ApiArg = {
  /** enddate */
  enddate: string;
  /** startdate */
  startdate: string;
};
export type GetHockeystickChartDetailsUsingGetApiResponse =
  /** status 200 OK */ HockeystickChartDetails;
export type GetHockeystickChartDetailsUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type IssuersFromProductsUsingGetApiResponse =
  /** status 200 OK */ string[];
export type IssuersFromProductsUsingGetApiArg = void;
export type UploadIssuerProductOrderDataUsingPostApiResponse =
  /** status 200 OK */ string | /** status 201 Created */ undefined;
export type UploadIssuerProductOrderDataUsingPostApiArg = {
  /** issuer */
  issuer: string;
  body: {
    file: Blob;
  };
};
export type GetStructureTypeDisplayDataUsingGetApiResponse =
  /** status 200 OK */ StructureTypeDisplayData;
export type GetStructureTypeDisplayDataUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type GetProductDetailsUsingGetApiResponse =
  /** status 200 OK */ ProductDetails;
export type GetProductDetailsUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type GetProductUsingGetApiResponse = /** status 200 OK */ Product[];
export type GetProductUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type IsinToCusipUsingGetApiResponse =
  /** status 200 OK */ ProductIdentifier[];
export type IsinToCusipUsingGetApiArg = {
  /** isins */
  isins: string[];
};
export type GetProductDocumentsUsingGetApiResponse =
  /** status 200 OK */ ProductDocuments[];
export type GetProductDocumentsUsingGetApiArg = {
  /** cusips */
  cusips: string;
};
export type GetProductInstrumentIdentifiersUsingGetApiResponse =
  /** status 200 OK */ InstrumentIdentifier[];
export type GetProductInstrumentIdentifiersUsingGetApiArg = void;
export type GetProductInstrumentIdentifiersPostUsingPostApiResponse =
  /** status 200 OK */
  InstrumentIdentifier[] | /** status 201 Created */ undefined;
export type GetProductInstrumentIdentifiersPostUsingPostApiArg = {
  /** uniqueIds */
  body: string[];
};
export type CusipToIsinUsingGetApiResponse =
  /** status 200 OK */ ProductIdentifier[];
export type CusipToIsinUsingGetApiArg = {
  /** countryCode */
  countryCode?: string;
  /** cusips */
  cusips: string[];
};
export type GetUnCachedProductsUsingGetApiResponse =
  /** status 200 OK */ Product[];
export type GetUnCachedProductsUsingGetApiArg = {
  /** cusip */
  cusip: string[];
};
export type GetProductOrdersForUserUsingGetApiResponse =
  /** status 200 OK */ ProductOrder[];
export type GetProductOrdersForUserUsingGetApiArg = {
  /** cusip */
  cusip: string;
};
export type GetRepsPerPmPerCusipUsingPostApiResponse /** status 200 OK */ =
  | {
      [key: string]: {
        [key: string]: string[];
      };
    }
  | /** status 201 Created */ undefined;
export type GetRepsPerPmPerCusipUsingPostApiArg = {
  /** cusips */
  body: string[];
};
export type GetCanonicalProductUsingPostApiResponse /** status 200 OK */ =
  | CanonicalProduct[]
  | /** status 201 Created */ undefined;
export type GetCanonicalProductUsingPostApiArg = {
  /** identifier */
  identifier: string;
  /** projectionFields */
  body: string[];
};
export type GetProductMarkToMarketUsingGetApiResponse =
  /** status 200 OK */ ProductMarkToMarketData[];
export type GetProductMarkToMarketUsingGetApiArg = {
  /** productIdentifier */
  productIdentifier: string;
};
export type GetProductMarkToMarketGraphPointsUsingGetApiResponse =
  /** status 200 OK */ number[][];
export type GetProductMarkToMarketGraphPointsUsingGetApiArg = {
  /** productIdentifier */
  productIdentifier: string;
};
export type CacheSupportResults = {
  cacheName?: string;
  count?: number;
  results?: object[];
};
export type NotificationSettings = {
  deskEmailTo?: string;
  notifyCDFGRM?: boolean;
  notifyCDFGRMEdit?: boolean;
  notifyDesk?: boolean;
  notifyDeskEdit?: boolean;
  notifyOnTradeApprove?: boolean;
  notifyRegRep?: boolean;
  notifyRegRepEdit?: boolean;
  notifySA?: boolean;
  notifySAEdit?: boolean;
  salesAsstEmailTo?: string;
  secureOrderConfirmationMessage?: string;
  secureOrderConfirmations?: boolean;
  secureOrderPassword?: string;
  secureOrderRecipients?: string;
};
export type Program = {
  cdMinimumOrderQty?: number;
  closingTimeFixed?: string;
  id?: number;
  legalName?: string;
  noteMinimumOrderQty?: number;
  shortName?: string;
  timeOffSet?: number;
  tradeDeskId?: number;
};
export type Desk = {
  active?: boolean;
  defaultProgram?: number;
  id?: number;
  legalName?: string;
  notificationSettings?: NotificationSettings;
  productTypes?: string[];
  programs?: Program[];
  shortName?: string;
  specialPricing?: boolean;
};
export type DeskUser = {
  buyOrdersPermission?: boolean;
  cdTrainingCompleted?: boolean;
  cdfgrmEmail?: string;
  chExportAccess?: boolean;
  editOrders?: boolean;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  notesTrainingCompleted?: boolean;
  productTypes?: string[];
  programIdList?: number[];
  programIdsString?: string;
  regRepNames?: string[];
  regionalTradeDesk?: number;
  repId?: string;
  representativesList?: string[];
  role?: string;
  saEmail?: string;
  username?: string;
  uuid?: string;
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
  name?: string;
  source?: string;
  symbol?: string;
  underlierLevel?: number;
  underlierName?: string;
  underlierSource: 'Bloomberg' | 'RIC';
  underlierStrikeDate?: string;
  underlierSymbol: string;
  underlierWeight?: number;
  weight?: number;
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
export type ProductQuote = {
  clientReferenceId?: string;
  counterpartyFundingType?: 'Upfront' | 'Deferred';
  counterpartyFundingValue?: number;
  createDateTimestamp?: string;
  createdByUserId?: string;
  createdByUsername?: string;
  creationHubQuoteId?: string;
  current?: number;
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
export type CanonicalProduct = {
  accumulatorDecumulator?: AccumulatorDecumulator;
  clientSpecific?: ClientSpecific;
  createTimestamp?: string;
  createdByUserId?: string;
  id?: string;
  previousStage?:
    | 'Request'
    | 'Quote'
    | 'Offer'
    | 'Refresh Price'
    | 'Confirm Lock'
    | 'Execution'
    | 'Post Trade'
    | 'Not Traded'
    | 'Ops Review';
  previousStatus?:
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
  programs?: string[];
  quotes?: {
    [key: string]: ProductQuote;
  };
  revision?: number;
  updateTimestamp?: string;
  updatedByUserId?: string;
  version?: number;
};
export type HeatMapGridData = {
  cioRanking?: string;
  companyName?: string;
  currencyCode?: string;
  dataFlag?: {
    [key: string]: boolean;
  };
  errorMessage?: {
    [key: string]: string;
  };
  exchangeCode?: string;
  region?: string;
  researchRating?: string;
  ric?: string;
  sector?: string;
  source?: string;
  structure?: string;
  tenorId?: {
    [key: string]: number;
  };
  tenors?: {
    [key: string]: number;
  };
  ticker?: string;
  trigger?: number;
  type?: string;
};
export type TradeDesk = {
  defaultProgramId?: number;
  id?: number;
  legalName?: string;
  productTypes?: string[];
  programs?: Program[];
  shortName?: string;
};
export type CustomProduct = {
  cusip?: string;
  programId?: number;
  settlementCounterparty?: string;
  visibility?: boolean;
};
export type LocalTime = {
  hour?: number;
  minute?: number;
  nano?: number;
  second?: number;
};
export type DocumentDetails = {
  documentName?: string;
  documentType?: string;
  documentUrl?: string;
};
export type MarketplaceProduct = {
  accountType?: string;
  annualMaxReturn?: string;
  annualMinGuarentee?: string;
  annualizedCapRange?: string;
  assetClass?: string;
  autoCap?: string;
  callPremium?: string;
  callValue?: string;
  capFrequency?: string;
  capRange?: string;
  closingTimeFixed?: LocalTime;
  completionStatus?: string;
  couponBarrier?: string;
  cusip?: string;
  deskDeadlineDate?: string;
  deskDeadlineTime?: LocalTime;
  documentLinks?: DocumentDetails[];
  fixingType?: string;
  floor?: string;
  freqMinPay?: string;
  isBuyClosed?: boolean;
  isBuyEnabled?: boolean;
  issuer?: string;
  maturityDate?: string;
  maxReturn?: string;
  minGuarantee?: string;
  noCallPeriod?: string;
  participationRate?: string;
  paymentFrequency?: string;
  pricingDate?: string;
  principalBarrier?: string;
  principalBarrierObserved?: string;
  principalBuffer?: string;
  principalProtection?: string;
  productName?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  productType?: string;
  program?: Program;
  redemptionType?: string;
  registrationType?: string;
  repDeadlineDate?: string;
  repDeadlineTime?: LocalTime;
  repPrice?: string;
  returnType?: string;
  salesConcession?: string;
  settlementCounterparty?: string;
  settlementDate?: string;
  strikeDate?: string;
  structureNameExternal?: string;
  structureType?: string;
  taxTreatment?: string;
  term?: number;
  timeOffset?: number;
  tradeDate?: string;
  underliers?: Underlier[];
  underlyers?: string;
  underlyingTickers?: string;
  visibility?: boolean;
};
export type GraphDataPercentage = {
  key?: string;
  percentage?: number;
};
export type PortfolioOrder = {
  accountNumber?: string;
  orderId?: string;
  orderKey?: number;
  quantity?: number;
  representativeName?: string;
};
export type PortfolioProduct = {
  accountNumber?: string;
  activeUnderlier?: string;
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
  markToMarketSource?: string;
  maturityDate?: string;
  nextCallDate?: string;
  nextObservationDate?: string;
  nextObservationType?: 'C' | 'M';
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
  protectionLevel?: number;
  protectionType?: string;
  qualitativeDistanceToBarrier?: 'ABOVE' | 'BELOW' | 'WITHIN';
  quantitativeDistanceToBarrier?: number;
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
  underliers?: Underlier[];
};
export type Portfolio = {
  portfolioChartingBy?: {
    [key: string]: {
      [key: string]: GraphDataPercentage[];
    };
  };
  portfolioName?: string;
  portfolioProducts?: PortfolioProduct[];
};
export type PortfolioEvent = {
  barrierBufferLabel?: string;
  barrierBufferValue?: number;
  callType?: string;
  completionStatus?: string;
  currencyCode?: string;
  cusip?: string;
  date?: string;
  eventFutureInfo?: string;
  eventPastInfo?: string;
  eventProximity?: string;
  eventType?: string;
  issuer?: string;
  issuerLogo?: string;
  notional?: number;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  qualitativeProximity?: string;
  settlementDate?: string;
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
  underlierList?: Underlier[];
};
export type UnderlierRank = {
  name?: string;
  notionalPercentage?: number;
  productCount?: number;
  productOrderCount?: number;
  ticker?: string;
};
export type ProductIdentifier = {
  cusip?: string;
  isin?: string;
  preferredIdentifier?: string;
};
export type PortfolioEventV2 = {
  eventDate?: string;
  eventType?: string;
};
export type LifecycleProduct = {
  activeUnderlier?: string;
  assetClass?: string;
  currency?: string;
  documents?: {
    [key: string]: string;
  };
  issuer?: string;
  markToMarket?: number;
  nextEvent?: PortfolioEventV2;
  notional?: number;
  principalProximity?: string;
  productIdentifier?: string;
  productStatus?: 'LIVE' | 'MATURED' | 'CALLED' | 'EXPIRED' | '';
  returnType?: string;
  structureType?: string;
  timeToMaturity?: string;
  totalHoldings?: number;
  underlierList?: Underlier[];
};
export type CallProximity = {
  calculatedValue?: number;
  dangerZone?: number;
  dateOfObservation?: string;
  daysFromStrike?: number;
  daysUntilEvent?: number;
  displayValue?: number;
  message?: string;
  providedValue?: number;
};
export type EventProximity = {
  calculatedValue?: number;
  dangerZone?: number;
  dateOfObservation?: string;
  displayValue?: number;
  message?: string;
  providedValue?: number;
};
export type Product = {
  assetClass?: string;
  completionStatus?: string;
  cusip?: string;
  documentLinks?: DocumentDetails[];
  fixingType?: string;
  issuer?: string;
  maturityDate?: string;
  paymentFrequency?: string;
  principalBarrierObserved?: string;
  productName?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  productType?: string;
  redemptionType?: string;
  returnType?: string;
  settlementDate?: string;
  strikeDate?: string;
  structureNameExternal?: string;
  structureType?: string;
  term?: number;
  tradeDate?: string;
  underliers?: Underlier[];
};
export type ProductEventDate = {
  barrierBufferLabel?: string;
  barrierBufferValue?: number;
  callProximity?: CallProximity;
  callType?: string;
  cusip?: string;
  date?: string;
  daysUntil?: string;
  description?: string;
  eventFutureInfo?: string;
  eventPastInfo?: string;
  eventProximity?: EventProximity;
  eventType?: string;
  isPast?: boolean;
  product?: Product;
  timeUntilMessage?: string;
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
};
export type HockeystickChartDetails = {
  chartTitle?: string;
  currentPerformancePlotPoint?: number[][];
  fallbackImageUri?: string;
  hockeystickPlotPoints?: number[][];
};
export type StructureTypeDisplayData = {
  _id?: string;
  heroImages?: {
    [key: string]: string;
  };
  staticGraphImages?: {
    [key: string]: string;
  };
  structureTypeDescriptions?: {
    [key: string]: string;
  };
  structureTypeName?: string;
};
export type CalculationDate = {
  date?: string;
  level?: number;
  type?: string;
};
export type ProductMarketData = {
  issuer?: string;
  lastModified?: string;
  lastPrice?: number;
  midPrice?: number;
  primaryActivity?: number;
  refinitivExtractId?: string;
  secondaryActivity?: number;
  tradeDate?: string;
  type?: 'Cusip' | 'ISIN';
  uniqueId?: string;
};
export type ProductDetails = {
  assetClass?: string;
  barrier?: number;
  basketType?: string;
  buffer?: number;
  calculationAgent?: string;
  calculationDates?: CalculationDate[];
  callBarrierLevel?: number;
  callObservationFrequency?:
    | 'Daily'
    | 'Monthly'
    | 'Quarterly'
    | 'Annually'
    | 'At Maturity'
    | 'Semi-Annually'
    | 'Bi-Monthly'
    | 'Continuous'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'European'
    | 'On Final Valuation Date'
    | 'Custom';
  callType?: 'Issuer' | 'Auto' | 'Autocall Step';
  completionStatus?: string;
  countryDistribution?: string;
  couponBarrier?: number;
  couponMemory?: boolean;
  couponObservationFrequency?:
    | 'Daily'
    | 'Monthly'
    | 'Quarterly'
    | 'Annually'
    | 'Semi-Annually'
    | 'At Maturity'
    | 'Bi-Monthly'
    | 'Continuous'
    | 'Weekly'
    | 'Bi-Weekly'
    | 'European'
    | 'On Final Valuation Date'
    | 'Custom';
  couponPercentagePA?: number;
  couponType?: 'Fixed' | 'Range Accrual' | 'Contingent' | 'AutoCap' | 'All Up';
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
  dateMetaData?: {
    [key: string]: string;
  };
  denomination?: number;
  details?: object;
  digitalBarrier?: number;
  digitalReturn?: number;
  documentLinks?: DocumentDetails[];
  finalValuationDate?: string;
  fixingType?: string;
  issueSize?: number;
  issuer?: string;
  listing?: string;
  markToMarketSource?: string;
  maturityDate?: string;
  maximumReturn?: number;
  minimumReturn?: number;
  numberNoCallPeriods?: number;
  offering?: string;
  participationRate?: number;
  paymentFrequency?: string;
  principalBarrierObserved?: string;
  productDates?: ProductEventDate[];
  productDatesColumnData?: string[];
  productMarketData?: ProductMarketData[];
  productName?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  productType?: string;
  protectionLevel?: number;
  protectionType?:
    | 'Full'
    | 'Barrier'
    | 'Buffer'
    | 'PPPN'
    | 'FULL'
    | 'BEARISH'
    | 'NO_PRINCIPAL_PROTECTION'
    | 'AIRBAG';
  putLeverage?: number;
  quoting?: string;
  redemptionType?: string;
  returnType?: string;
  settlementDate?: string;
  strikeDate?: string;
  structureNameExternal?: string;
  structureType?: string;
  structureTypeName?: string;
  term?: number;
  timeToMaturity?: string;
  tradeDate?: string;
  underliers?: Underlier[];
};
export type ProductDocuments = {
  cusip?: string;
  documents?: {
    [key: string]: string;
  };
};
export type InstrumentIdentifier = {
  issuer?: string;
  marketDataSource?: string;
  tradeDate?: string;
  type?: 'Cusip' | 'Isin';
  uniqueProductId?: string;
};
export type ProductOrder = {
  accountNumber?: string;
  assetClass?: string;
  cusip?: string;
  issuer?: string;
  notionalUnwound?: boolean;
  orderId?: string;
  orderKey?: number;
  quantity?: number;
  repUserName?: string;
  representativeName?: string;
  tradeDeskShortName?: string;
};
export type ProductMarkToMarketData = {
  primaryActivity?: number;
  productIdentifier?: string;
  source?: string;
  tradeDate?: string;
};
export const {
  useGetCacheNamesUsingGetQuery,
  useClearAllCachesUsingDeleteMutation,
  useGetCacheEntriesUsingGetQuery,
  useGetCacheKeysUsingGetQuery,
  useGetCusipsAndInterestedUsersUsingPostMutation,
  useGetTradeDeskListUsingGet1Query,
  useGetAllDeskUsersForTradeDeskUsingGetQuery,
  useGetProductForEditUsingGetQuery,
  useGetHeatMapProductsBySourceTypeUsingGetQuery,
  useGetLatestRangeMinMaxBySourceUsingGetQuery,
  useGetTradeDeskListUsingGetQuery,
  useCheckIfUserCompletedTrainingUsingGetQuery,
  useSetVisibilityUsingPutMutation,
  useGetSettlementCounterpartyUsingGetQuery,
  useGetProductsUsingGetQuery,
  useGetPortfolioUsingGetQuery,
  useGetPortfolioChartDataUsingPostMutation,
  useGetPortfolioEventsUsingGet1Query,
  useGetPortfolioUnderlierRankUsingGetQuery,
  useGetProductIdentifiersUsingGetQuery,
  useGetIssuerAllowsCalcsUsingGetQuery,
  useUploadProductDataUsingPostMutation,
  useGetProductEventDatesUsingGet1Query,
  useGetHockeystickChartDetailsUsingGetQuery,
  useIssuersFromProductsUsingGetQuery,
  useUploadIssuerProductOrderDataUsingPostMutation,
  useGetStructureTypeDisplayDataUsingGetQuery,
  useGetProductDetailsUsingGetQuery,
  useGetProductUsingGetQuery,
  useIsinToCusipUsingGetQuery,
  useGetProductDocumentsUsingGetQuery,
  useGetProductInstrumentIdentifiersUsingGetQuery,
  useGetProductInstrumentIdentifiersPostUsingPostMutation,
  useCusipToIsinUsingGetQuery,
  useGetUnCachedProductsUsingGetQuery,
  useGetProductOrdersForUserUsingGetQuery,
  useGetRepsPerPmPerCusipUsingPostMutation,
  useGetCanonicalProductUsingPostMutation,
  useGetProductMarkToMarketUsingGetQuery,
  useGetProductMarkToMarketGraphPointsUsingGetQuery,
} = injectedRtkApi;
