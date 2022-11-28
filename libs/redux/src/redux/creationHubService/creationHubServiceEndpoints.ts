import { baseApi as api } from './creationHubServiceBaseApi';
import { Pageable, Sort } from '../common/commonTypes';

export enum RfqOperations {
  AddDocument = 'add-document',
  SetExternalId = 'set-external-id',
  SetIsin = 'set-isin',
  RejectQuote = 'reject-quote',
  QuoteIndicatively = 'quote-indicatively',
  QuoteTradable = 'quote-tradable',
  RejectTrade = 'reject-trade',
  ConfirmTrade = 'confirm-trade',
  AcceptPreTradeCancel = 'accept-pre-trade-cancel',
  RequestPostTradeCancel = 'request-post-trade-cancel',
  AcceptPostTradeCancel = 'accept-post-trade-cancel',
  RejectPostTradeCancel = 'reject-post-trade-cancel',
}

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    applyProductChangeUsingPost: build.mutation<
      ApplyProductChangeUsingPostApiResponse,
      ApplyProductChangeUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/form-config/apply-change`,
        method: 'POST',
        body: queryArg.pricingRequest,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    createPricingUsingPost: build.mutation<
      CreatePricingUsingPostApiResponse,
      CreatePricingUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pricings`,
        method: 'POST',
        body: queryArg.pricingRequest,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    updatePricingUsingPost: build.mutation<
      UpdatePricingUsingPostApiResponse,
      UpdatePricingUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pricings/${queryArg.pricingId}/${queryArg.operationName}`,
        method: 'POST',
        body: queryArg.updateRequest,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    updateRFQUsingPost: build.mutation<
      UpdateRFQUsingPostApiResponse,
      UpdateRFQUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/rfqs/${queryArg.rfqId}/${queryArg.operationName}`,
        method: 'POST',
        body: queryArg.updateRequest,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getRFQUsingGet: build.mutation<
      GetRFQUsingGetApiResponse,
      GetRFQUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/rfqs/${queryArg.rfqId}`,
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getPricingsUsingGet: build.mutation<
      GetPricingsUsingGetApiResponse,
      GetPricingsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pricings?size=${queryArg.size}&page=${queryArg.page}`,
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getRFQsUsingGet: build.mutation<
      GetRFQsUsingGetApiResponse,
      GetRFQsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/rfqs?size=${queryArg.size}&page=${queryArg.page}`,
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getIssuerPricingsUsingGet: build.mutation<
      GetIssuerPricingUsingGetApiResponse[],
      GetIssuerPricingsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: '/v1/issuer-pricings',
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getIssuerPricingUsingGet: build.mutation<
      GetIssuerPricingUsingGetApiResponse,
      GetIssuerPricingUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/issuer-pricings/${queryArg.pricingId}`,
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getInitialFormStateUsingGet: build.mutation<
      GetInitialFormStateUsingGetApiResponse,
      GetInitialFormStateUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/form-config/initial`,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getExistingPricingUsingGet: build.mutation<
      GetExistingRequestUsingGetApiResponse,
      GetExistingRequestUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/pricings/${queryArg.pricingId}`,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getMatchingUnderliersUsingGet: build.mutation<
      GetMatchingUnderliersUsingGetApiResponse,
      GetMatchingUnderliersUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/underliers`,
        params: { searchText: queryArg.searchText },
      }),
    }),
    addDocumentUsingPost: build.mutation<
      AddDocumentUsingPostApiResponse,
      AddDocumentUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/rfqs/${queryArg.rfqId}/add-document`,
        method: 'POST',
        body: queryArg.documentFormData,
        headers: {
          Authorization: queryArg.authorization,
        },
      }),
    }),
    getDocumentUsingGet: build.mutation<
      GetDocumentUsingGetApiResponse,
      GetDocumentUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/v1/rfqs/${queryArg.rfqId}/documents/${queryArg.documentId}/contents`,
        method: 'GET',
        headers: {
          Authorization: queryArg.authorization,
        },
        responseHandler: async (response) => response.blob(),
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as creationHubServiceApi };
export type ApplyProductChangeUsingPostApiResponse /** status 200 OK */ =
  | PricingInCreation
  | /** status 201 Created */ undefined;
export type ApplyProductChangeUsingPostApiArg = {
  authorization?: string;
  /** changeRequest */
  pricingRequest: PricingUpdateRequest;
};
export type CreatePricingUsingPostApiResponse /** status 200 OK */ =
  | Pricing
  | /** status 201 Created */ undefined;
export type CreatePricingUsingPostApiArg = {
  authorization?: string;
  /** pricingSpec */
  pricingRequest: PricingRequest;
};
export type PricingId = string;
export type GetInitialFormStateUsingGetApiResponse =
  /** status 200 OK */ PricingInCreation;
export type GetInitialFormStateUsingGetApiArg = {
  authorization?: string;
};

export type GetPricingsUsingGetApiResponse = {
  content?: PricingInProgress[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
};
export type GetPricingsUsingGetApiArg = {
  authorization?: string;
  size?: number;
  page?: number;
};
export type GetIssuerPricingsUsingGetApiArg = {
  authorization?: string;
  size?: number;
  page?: number;
};
export type GetIssuerPricingUsingGetApiArg = {
  authorization?: string;
  pricingId: PricingId;
};
export type GetIssuerPricingUsingGetApiResponse = IssuerPricing;
export type GetRFQsUsingGetApiResponse = {
  content?: Rfq[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
};
export type GetRFQsUsingGetApiArg = {
  authorization?: string;
  size?: number;
  page?: number;
};
export type GetRFQUsingGetApiArg = {
  authorization?: string;
  rfqId: RfqId;
};
export type GetRFQUsingGetApiResponse = Rfq | undefined;

export type GetExistingRequestUsingGetApiResponse =
  /** status 200 OK */ PricingInProgress;
export type GetExistingRequestUsingGetApiArg = {
  authorization?: string;
  pricingId: PricingId;
};

export type GetMatchingUnderliersUsingGetApiResponse = UnderlierDetails[];
export type GetMatchingUnderliersUsingGetApiArg = {
  searchText: string;
};
export type UpdatePricingUsingPostApiResponse = PricingInProgress;
export type UpdatePricingUsingPostApiArg = {
  authorization?: string;
  operationName: PricingOperations;
  pricingId: string;
  updateRequest: {
    state?: PricingState;
    rfqId?: RfqId;
    rfqType?: RfqTypeEnum;
    version: string;
  };
};
export type UpdateRFQUsingPostApiResponse = Rfq;
export type UpdateRFQUsingPostApiArg = {
  authorization?: string;
  rfqId: string;
  operationName: RfqOperations;
  updateRequest: {
    state?: RfqState;
    quote?: string;
    validUntilTimestamp?: string | null;
    message?: string | null;
    externalId?: string | null;
    isin?: string | null;
    version: string;
  };
};
export type Language = {
  id: string;
  label: string;
};
export type Type = {
  id: string;
  label: string;
};
export type AddDocumentUsingPostApiResponse = Rfq;
export type AddDocumentUsingPostApiArg = {
  authorization?: string;
  rfqId: RfqId;
  documentFormData: FormData;
};
export type GetDocumentUsingGetApiResponse = File;
export type GetDocumentUsingGetApiArg = {
  authorization?: string;
  rfqId: RfqId;
  documentId: string;
};
export type IssuerId = string;
export type Issuer = {
  id: IssuerId;
  canAutoQuoteIndicative: boolean;
  canAutoQuoteLive: boolean;
  rating?: string | null;
};
export type RfqIssuer = {
  actions: RfqClientAction[];
  issuerId: string;
  rfq?: Rfq | null;
};

export enum ValueTypes {
  Enum = 'com.luma.creationhub2service.api.model.product.params.EnumValue',
  MultiEnum = 'com.luma.creationhub2service.api.model.product.params.MultiEnumValue',
  Numeric = 'com.luma.creationhub2service.api.model.product.params.NumericValue',
  LocalDate = 'com.luma.creationhub2service.api.model.product.params.LocalDateValue',
  WeightedBasket = 'com.luma.creationhub2service.api.model.product.params.basket.WeightedBasket',
  UnweightedBasket = 'com.luma.creationhub2service.api.model.product.params.basket.UnweightedBasket',
}
export type EnumValue = {
  type: ValueTypes;
  label: string;
  id: string;
  computationMode: ComputationMode;
};
export type MultiEnumValue = {
  type: ValueTypes;
  values: EnumValue[];
  computationMode: ComputationMode;
};
export type NumericValue = {
  type: ValueTypes;
  value: number | null;
  computationMode: ComputationMode;
};
export type LocalDateValue = {
  type: ValueTypes;
  value: string | null;
  computationMode: ComputationMode;
};

export type UnderlierId = string;
export type UnderlierDetails = {
  id: UnderlierId;
  label: string;
};
export type EnumConstraints = GenericConstraints & {
  type: ValueTypes;
  availableValues: EnumValue[];
  modifiable: boolean;
};
export type WeightedBasket = {
  type: ValueTypes;
  underliers: {
    underlier: UnderlierDetails;
    weight: number | undefined;
  }[];
};
export type UnweightedBasket = {
  type: ValueTypes;
  underliers: {
    underlier: UnderlierDetails;
  }[];
};
export type Basket = WeightedBasket | UnweightedBasket;

export type ParamName = string;

export enum FieldTypes {
  Basket = 'com.luma.creationhub2service.api.model.formconfig.field.basket.BasketField',
  Date = 'com.luma.creationhub2service.api.model.formconfig.field.DateField',
  Dropdown = 'com.luma.creationhub2service.api.model.formconfig.field.EnumDropdownField',
  Numeric = 'com.luma.creationhub2service.api.model.formconfig.field.NumericField',
}

export type ChProduct = {
  params: Record<ParamName, ParamValue>;
};

export enum PricingState {
  InCreation = 'IN_CREATION',
  InProgress = 'IN_PROGRESS',
  InTrading = 'TRADING',
  Traded = 'TRADED',
  Cancelled = 'TRADE_CANCELLED',
}

export enum PricingOperations {
  CancelRfq = 'cancel-rfq',
  CreateRfq = 'create-rfq',
  RequestTrade = 'request-trade',
  RequestPreTradeCancellation = 'request-pre-trade-cancellation',
  RequestPostTradeCancellation = 'request-post-trade-cancellation',
  AcceptPostTradeCancellation = 'accept-post-trade-cancellation',
  RejectPostTradeCancellation = 'reject-post-trade-cancellation',
}

export type IssuerDocument = {
  id: string;
  filename: string;
  documentType: Type;
  language: Language;
  uploadTimestamp: string;
};

export type RequestedDocument = {
  documentType: SupportedDocument;
  language: SupportedLanguage;
};

export type SupportedDocument = {
  id: string;
  label: string;
};

export type SupportedLanguage = {
  id: string;
  label: string;
};

export type HistoricalRfq = {
  rfqId: string;
  state: RfqState;
  type: string;
  externalId: string | null;
  quote: string | null;
  validUntilTimestamp: string | null;
  rejectedReason: string | null;
};

export type Rfq =
  | RfqQuoteRequested
  | RfqQuotedIndicative
  | RfqQuotedTradable
  | RfqQuoteRejected
  | RfqTradeRequested
  | RfqTraded
  | RfqTradeLost
  | RfqTradeCancelled;

export type RfqQuoteRequested = {
  state: RfqState;
  type: RfqTypeEnum;
  id: RfqId;
  pricingId: PricingId;
  issuer: IssuerId;
  product: ChProduct;
  productLayout: ProductLayout;
  version: string;
  isAPI: boolean;
  documents?: IssuerDocument[];
  requestedDocuments?: RequestedDocument[];
  supportedDocumentTypes: SupportedDocument[];
  supportedLanguages: SupportedLanguage[];
  externalId?: string | null;
  isin?: string | null;
  lost?: boolean;
  actions?: RfqIssuerAction[];
};
export type RfqRequestCancelled = RfqQuoteRequested;
export type RfqQuotedIndicative = RfqQuoteRequested & {
  quote: string;
};
export type RfqQuotedTradable = RfqQuoteRequested & {
  quote: string;
  validUntilTimestamp?: string | null;
};
export type RfqQuoteRejected = RfqQuoteRequested & {
  message: string;
};
export type RfqTradeRequested = RfqQuoteRequested & {
  quote: string;
  cancelRequestedByClient?: boolean;
};
export type RfqTradeRejected = RfqQuoteRequested & {
  quote: string;
  message: string;
};
export type RfqTraded = RfqQuoteRequested & {
  quote: string;
  cancelRequestedBy: RfqCancelRequestInitiator | undefined;
};
export type RfqTradeCancelled = RfqQuoteRequested & {
  quote: string;
};
export type RfqTradingCancelled = RfqTradeCancelled;
export type RfqTradeLost = RfqQuoteRequested;

export type RfqId = string;

export enum RfqCancelRequestInitiator {
  CLIENT = 'CLIENT',
  ISSUER = 'ISSUER',
}

export enum RfqState {
  QUOTE_REQUESTED = 'QUOTE_REQUESTED',
  REQUEST_CANCELLED = 'REQUEST_CANCELLED',
  QUOTED_INDICATIVE = 'QUOTED_INDICATIVE',
  QUOTED_TRADABLE = 'QUOTED_TRADABLE',
  QUOTE_REJECTED = 'QUOTE_REJECTED',
  TRADE_REQUESTED = 'TRADE_REQUESTED',
  TRADE_REJECTED = 'TRADE_REJECTED',
  TRADED = 'TRADED',
  TRADE_CANCELLED = 'TRADE_CANCELLED',
  TRADING_CANCELLED = 'TRADING_CANCELLED',

  //actions
  ACCEPT_PRE_TRADE_CANCEL = 'ACCEPT_PRE_TRADE_CANCEL',
  REQUEST_POST_TRADE_CANCEL = 'REQUEST_POST_TRADE_CANCEL',
  REJECT_POST_TRADE_CANCEL = 'REJECT_POST_TRADE_CANCEL',
  ACCEPT_POST_TRADE_CANCEL = 'ACCEPT_POST_TRADE_CANCEL',
}
export enum RfqIssuerAction {
  QUOTE_INDICATIVE = 'QUOTE_INDICATIVE',
  QUOTE_TRADABLE = 'QUOTE_TRADABLE',
  REJECT_QUOTE = 'REJECT_QUOTE',
  ACCEPT_PRE_TRADE_CANCEL = 'ACCEPT_PRE_TRADE_CANCEL',
  REJECT_TRADE = 'REJECT_TRADE',
  CONFIRM_TRADE = 'CONFIRM_TRADE',
  REQUEST_POST_TRADE_CANCEL = 'REQUEST_POST_TRADE_CANCEL',
  ACCEPT_POST_TRADE_CANCEL = 'ACCEPT_POST_TRADE_CANCEL',
  REJECT_POST_TRADE_CANCEL = 'REJECT_POST_TRADE_CANCEL',
  SET_EXTERNAL_ID = 'SET_EXTERNAL_ID',
  ADD_DOCUMENT = 'ADD_DOCUMENT',
}
export enum RfqClientAction {
  REQUEST_FOR_INDICATIVE_QUOTE = 'REQUEST_FOR_INDICATIVE_QUOTE',
  REQUEST_FOR_LIVE_QUOTE = 'REQUEST_FOR_LIVE_QUOTE',
  REQUEST_FOR_MANUAL_QUOTE = 'REQUEST_FOR_MANUAL_QUOTE',
  CANCEL_REQUEST = 'CANCEL_REQUEST',
  REQUEST_TRADE = 'REQUEST_TRADE',
  REQUEST_PRE_TRADE_CANCEL = 'REQUEST_PRE_TRADE_CANCEL',
  REQUEST_POST_TRADE_CANCEL = 'REQUEST_POST_TRADE_CANCEL',
  ACCEPT_POST_TRADE_CANCEL = 'ACCEPT_POST_TRADE_CANCEL',
  REJECT_POST_TRADE_CANCEL = 'REJECT_POST_TRADE_CANCEL',
}

export type EnumDropdownField = {
  paramName: ParamName;
  type: FieldTypes;
  label: string;
  value: EnumValue;
};

export type GenericConstraints = {
  type: string; // TODO update once type is defined
};

export type NumericConstraints = GenericConstraints & {
  required?: boolean;
  max: number | null;
  min: number | null;
  modifiable: boolean;
};

export type ProductLayout = {
  sections: Section[];
};

export type Section = {
  fieldGroups: FieldGroup[];
  label?: string | null;
};

export type FieldGroup = {
  fields?: SectionField[];
  label?: string | null;
};

export type SectionField = {
  label?: string;
  paramName: ParamName;
};

export type ParamValue =
  | EnumValue
  | MultiEnumValue
  | LocalDateValue
  | NumericValue
  | Basket;

export type PricingUpdateRequest = {
  product: ChProduct;
};

export type PricingRequest = {
  product: ChProduct;
  issuers: IssuerId[];
};

export type ParamConstraints =
  | EnumConstraints
  | NumericConstraints
  | GenericConstraints;

export type Pricing = PricingInCreation | PricingInProgress;
export type IssuerPricing = Rfq & { historicalRfqs?: HistoricalRfq[] };

export type PricingInCreation = {
  state: PricingState;
  product: { params: Record<ParamName, ParamValue> };
  productValidationErrors: Record<ParamName, ValidationError[]> | null;
  constraints: Record<ParamName, ParamConstraints>;
  productLayout: ProductLayout;
  issuers: {
    [issuerId: IssuerId]: Issuer;
  };
};

export type PricingInProgress = {
  state:
    | PricingState.InProgress
    | PricingState.InTrading
    | PricingState.Traded
    | PricingState.Cancelled;
  id: PricingId;
  product: ChProduct;
  constraints: Record<string, unknown>;
  productLayout: ProductLayout;
  rfqIssuers: RfqIssuer[];
  version: string;
  cancelRequestedBy?: RfqCancelRequestInitiator;
};

export type ValidationError = {
  message: string;
  type: string;
  paramName: ParamName;
};

export enum RfqTypeEnum {
  INDICATIVE = 'INDICATIVE',
  LIVE = 'LIVE',
  MANUAL = 'MANUAL',
}

export type ResponseError = {
  status: number;
  data?: {
    code: string;
    message: string;
    uuid: string;
  };
};

export enum ComputationMode {
  MODIFIABLE = 'MODIFIABLE',
  COMPUTED = 'COMPUTED',
  SOLVED = 'SOLVED',
}

export const {
  useApplyProductChangeUsingPostMutation,
  useCreatePricingUsingPostMutation,
  useGetInitialFormStateUsingGetMutation,
  useGetExistingPricingUsingGetMutation,
  useGetRFQUsingGetMutation,
  useGetPricingsUsingGetMutation,
  useGetIssuerPricingsUsingGetMutation,
  useGetIssuerPricingUsingGetMutation,
  useGetRFQsUsingGetMutation,
  useGetMatchingUnderliersUsingGetMutation,
  useUpdatePricingUsingPostMutation,
  useUpdateRFQUsingPostMutation,
  useAddDocumentUsingPostMutation,
  useGetDocumentUsingGetMutation,
} = injectedRtkApi;
