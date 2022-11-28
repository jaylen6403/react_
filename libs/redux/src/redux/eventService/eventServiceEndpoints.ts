import { baseApi as api } from './eventServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendDailySummaryUsingPost: build.mutation<
      SendDailySummaryUsingPostApiResponse,
      SendDailySummaryUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/daily-summary`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    sendDailySummaryUsingGet: build.query<
      SendDailySummaryUsingGetApiResponse,
      SendDailySummaryUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/daily-summary/email`,
        params: { adminOnly: queryArg.adminOnly, date: queryArg.date },
      }),
    }),
    createEventFromModelUsingPost: build.mutation<
      CreateEventFromModelUsingPostApiResponse,
      CreateEventFromModelUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/event`,
        method: 'POST',
        body: queryArg.createEventForm,
      }),
    }),
    createEventConfirmationListUsingGet: build.query<
      CreateEventConfirmationListUsingGetApiResponse,
      CreateEventConfirmationListUsingGetApiArg
    >({
      query: () => ({ url: `/event-confirmations` }),
    }),
    updateEventProductDataUsingPut: build.mutation<
      UpdateEventProductDataUsingPutApiResponse,
      UpdateEventProductDataUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/event-confirmations`,
        method: 'PUT',
        body: queryArg.eventProductData,
      }),
    }),
    getEarliestEventUsingGet: build.query<
      GetEarliestEventUsingGetApiResponse,
      GetEarliestEventUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/event/earliest/${queryArg['type']}/${queryArg.key}`,
      }),
    }),
    getLatestEventUsingGet: build.query<
      GetLatestEventUsingGetApiResponse,
      GetLatestEventUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/event/latest/${queryArg['type']}/${queryArg.key}`,
      }),
    }),
    getEventUsingGet: build.query<
      GetEventUsingGetApiResponse,
      GetEventUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/event/${queryArg.id}` }),
    }),
    getEventsByDateUsingGet1: build.query<
      GetEventsByDateUsingGet1ApiResponse,
      GetEventsByDateUsingGet1ApiArg
    >({
      query: (queryArg) => ({
        url: `/events`,
        params: {
          endDate: queryArg.endDate,
          startDate: queryArg.startDate,
          type: queryArg['type'],
        },
      }),
    }),
    getEventsByEventTypeKeysUsingPost: build.mutation<
      GetEventsByEventTypeKeysUsingPostApiResponse,
      GetEventsByEventTypeKeysUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/events`,
        method: 'POST',
        body: queryArg.body,
        params: { type: queryArg['type'] },
      }),
    }),
    getEventsByCreationDateUsingGet: build.query<
      GetEventsByCreationDateUsingGetApiResponse,
      GetEventsByCreationDateUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/events/confirmed`,
        params: {
          endDate: queryArg.endDate,
          eventTypes: queryArg.eventTypes,
          startDate: queryArg.startDate,
        },
      }),
    }),
    getEventsByProductIdUsingGet: build.query<
      GetEventsByProductIdUsingGetApiResponse,
      GetEventsByProductIdUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/events/core`,
        params: { productId: queryArg.productId },
      }),
    }),
    createCoreEventUsingPost: build.mutation<
      CreateCoreEventUsingPostApiResponse,
      CreateCoreEventUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/events/core`,
        method: 'POST',
        body: queryArg.event,
      }),
    }),
    updateCoreEventUsingPut: build.mutation<
      UpdateCoreEventUsingPutApiResponse,
      UpdateCoreEventUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/events/core`,
        method: 'PUT',
        body: queryArg.event,
      }),
    }),
    deleteCoreEventUsingDelete: build.mutation<
      DeleteCoreEventUsingDeleteApiResponse,
      DeleteCoreEventUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/events/core/${queryArg.sourceId}`,
        method: 'DELETE',
        params: { source: queryArg.source },
      }),
    }),
    getEarliestEventForEachKeyByEventTypeKeysUsingPost: build.mutation<
      GetEarliestEventForEachKeyByEventTypeKeysUsingPostApiResponse,
      GetEarliestEventForEachKeyByEventTypeKeysUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/events/earliest`,
        method: 'POST',
        body: queryArg.body,
        params: { type: queryArg['type'] },
      }),
    }),
    getLatestEventForEachKeyByEventTypeKeysUsingPost: build.mutation<
      GetLatestEventForEachKeyByEventTypeKeysUsingPostApiResponse,
      GetLatestEventForEachKeyByEventTypeKeysUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/events/latest`,
        method: 'POST',
        body: queryArg.body,
        params: { type: queryArg['type'] },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as eventServiceApi };
export type SendDailySummaryUsingPostApiResponse = unknown;
export type SendDailySummaryUsingPostApiArg = {
  /** adminEmails */
  body: string[];
};
export type SendDailySummaryUsingGetApiResponse = unknown;
export type SendDailySummaryUsingGetApiArg = {
  /** adminOnly */
  adminOnly: boolean;
  /** date */
  date?: string;
};
export type CreateEventFromModelUsingPostApiResponse =
  /** status 201 Created */ LumaEvent;
export type CreateEventFromModelUsingPostApiArg = {
  /** createForm */
  createEventForm: CreateEventForm;
};
export type CreateEventConfirmationListUsingGetApiResponse =
  /** status 200 Ok */ EventProductData[];
export type CreateEventConfirmationListUsingGetApiArg = void;
export type UpdateEventProductDataUsingPutApiResponse /** status 200 OK */ =
  | EventProductData
  | /** status 201 Created */ undefined;
export type UpdateEventProductDataUsingPutApiArg = {
  /** eventProductData */
  eventProductData: EventProductData;
};
export type GetEarliestEventUsingGetApiResponse =
  /** status 200 OK */ LumaEvent;
export type GetEarliestEventUsingGetApiArg = {
  /** key */
  key: string;
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
};
export type GetLatestEventUsingGetApiResponse = /** status 200 OK */ LumaEvent;
export type GetLatestEventUsingGetApiArg = {
  /** key */
  key: string;
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
};
export type GetEventUsingGetApiResponse =
  /** status 200 OK */ OptionalLumaEvent;
export type GetEventUsingGetApiArg = {
  /** id */
  id: number;
};
export type GetEventsByDateUsingGet1ApiResponse =
  /** status 200 OK */ LumaEvent[];
export type GetEventsByDateUsingGet1ApiArg = {
  /** endDate */
  endDate?: string;
  /** startDate */
  startDate: string;
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
};
export type GetEventsByEventTypeKeysUsingPostApiResponse /** status 200 OK */ =
  | LumaEvent[]
  | /** status 201 Created */ undefined;
export type GetEventsByEventTypeKeysUsingPostApiArg = {
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
  /** eventKeys */
  body: string[];
};
export type GetEventsByCreationDateUsingGetApiResponse =
  /** status 200 OK */ Event[];
export type GetEventsByCreationDateUsingGetApiArg = {
  /** endDate */
  endDate?: string;
  /** eventTypes */
  eventTypes?: (
    | 'Auto Call'
    | 'Issuer Call'
    | 'Missed Call'
    | 'Coupon Payment'
    | 'Missed Coupon Payment'
    | 'Barrier Breach'
    | 'Maturity'
    | 'PDW Coupon Date'
    | 'PDW Call Date'
    | 'PDW Trade Date'
    | 'PDW Issued Date'
    | 'PDW Final Valuation Date'
    | 'PDW Maturity Date'
    | 'PDW Strike Date'
  )[];
  /** startDate */
  startDate: string;
};
export type GetEventsByProductIdUsingGetApiResponse =
  /** status 200 OK */ Event[];
export type GetEventsByProductIdUsingGetApiArg = {
  /** productId */
  productId: string;
};
export type CreateCoreEventUsingPostApiResponse =
  /** status 201 Created */ Event;
export type CreateCoreEventUsingPostApiArg = {
  /** event */
  event: Event;
};
export type UpdateCoreEventUsingPutApiResponse /** status 200 OK */ =
  | Event
  | /** status 201 Created */ undefined;
export type UpdateCoreEventUsingPutApiArg = {
  /** event */
  event: Event;
};
export type DeleteCoreEventUsingDeleteApiResponse = unknown;
export type DeleteCoreEventUsingDeleteApiArg = {
  /** source */
  source: string;
  /** sourceId */
  sourceId: string;
};
export type GetEarliestEventForEachKeyByEventTypeKeysUsingPostApiResponse =
  /** status 200 OK */ LumaEvent[] | /** status 201 Created */ undefined;
export type GetEarliestEventForEachKeyByEventTypeKeysUsingPostApiArg = {
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
  /** eventKeys */
  body: string[];
};
export type GetLatestEventForEachKeyByEventTypeKeysUsingPostApiResponse =
  /** status 200 OK */ LumaEvent[] | /** status 201 Created */ undefined;
export type GetLatestEventForEachKeyByEventTypeKeysUsingPostApiArg = {
  /** type */
  type: 'REDEMPTION' | 'BARRIER_BREACH';
  /** eventKeys */
  body: string[];
};
export type LumaEvent = {
  eventData?: string;
  eventDate?: string;
  eventId?: number;
  eventKey?: string;
  eventType?: 'REDEMPTION' | 'BARRIER_BREACH';
  eventUser?: string;
};
export type CreateEventForm = {
  eventData?: string;
  eventKey?: string;
  eventType?: string;
  eventUser?: string;
};
export type CashSettlementRates = {
  issuerRate?: number;
  lumaRate?: number;
  rate?: number;
};
export type PhysicalSettlement = {
  issuerValue?: number;
  lumaValue?: number;
  physicalSettlementType?: 'Shares' | 'Cash in Lieu';
  recordId?: number;
  securityId?: string;
  securityIdType?: 'RIC' | 'Bloomberg' | 'ISIN' | 'CUSIP';
  value?: number;
};
export type UnderlierRest = {
  name?: string;
  ticker?: string;
  type?: 'BLOOMBERG' | 'RIC';
};
export type EventProductData = {
  activeUnderlier?: string;
  basketType?:
    | 'Equal'
    | 'Custom'
    | 'WoF'
    | 'BoF'
    | 'Out Performance'
    | 'Single';
  cashSettlementRates?: CashSettlementRates;
  confirmationStatus?: string;
  downsideType?: string;
  eventDate?: string;
  eventType?: string;
  issuer?: string;
  physicalSettlements?: PhysicalSettlement[];
  principalProximity?: string;
  principalProximityThreshold?: number;
  productIdentifier?: string;
  productStatus?: 'Live' | 'Matured' | 'Called' | 'Expired' | '';
  productSymbol?: string;
  registrationType?: string;
  settlementDate?: string;
  settlementType?: string;
  structureNameInternal?: string;
  structureShortNameInternal?: string;
  tenorFinal?: number;
  tenorUnit?: string;
  tradeDate?: string;
  underlierList?: UnderlierRest[];
  underlierPerformance?: number;
};
export type OptionalLumaEvent = {
  empty?: boolean;
  present?: boolean;
};
export type Event = {
  couponPaymentType?: string;
  creationDate?: string;
  eventDate?: string;
  eventStatus?: 'Calculated' | 'Pending' | 'Confirmed' | 'Not Applicable';
  eventType?:
    | 'Auto Call'
    | 'Issuer Call'
    | 'Missed Call'
    | 'Coupon Payment'
    | 'Missed Coupon Payment'
    | 'Barrier Breach'
    | 'Maturity'
    | 'PDW Coupon Date'
    | 'PDW Call Date'
    | 'PDW Trade Date'
    | 'PDW Issued Date'
    | 'PDW Final Valuation Date'
    | 'PDW Maturity Date'
    | 'PDW Strike Date';
  externalReferenceId?: string;
  issuerRate?: number;
  lastModified?: string;
  lumaRate?: number;
  matchingCallEvent?: Event;
  matchingCouponEvent?: Event;
  matchingRedemptionObservation?: boolean;
  physicalSettlementItems?: PhysicalSettlement[];
  productId: string;
  productIdType?: 'CUSIP' | 'ISIN';
  rate?: number;
  settlementDate?: string;
  settlementType?: 'Physical' | 'Cash';
  source?: string;
  sourceId?: string;
  sourceType?: 'Luma' | 'Issuer' | 'DTC' | 'EC' | 'Third Party';
  tlementDate?: string;
  tlementType?: 'Physical' | 'Cash';
  user?: string;
};
export const {
  useSendDailySummaryUsingPostMutation,
  useSendDailySummaryUsingGetQuery,
  useCreateEventFromModelUsingPostMutation,
  useCreateEventConfirmationListUsingGetQuery,
  useUpdateEventProductDataUsingPutMutation,
  useGetEarliestEventUsingGetQuery,
  useGetLatestEventUsingGetQuery,
  useGetEventUsingGetQuery,
  useGetEventsByDateUsingGet1Query,
  useGetEventsByEventTypeKeysUsingPostMutation,
  useGetEventsByCreationDateUsingGetQuery,
  useGetEventsByProductIdUsingGetQuery,
  useCreateCoreEventUsingPostMutation,
  useUpdateCoreEventUsingPutMutation,
  useDeleteCoreEventUsingDeleteMutation,
  useGetEarliestEventForEachKeyByEventTypeKeysUsingPostMutation,
  useGetLatestEventForEachKeyByEventTypeKeysUsingPostMutation,
} = injectedRtkApi;
