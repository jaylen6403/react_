import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '@luma-fe-workspace/utility';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';
import {
  GetAccountsByRepresentativeUsingPostApiArg,
  GetAccountsByRepresentativeUsingPostApiResponse,
  GetEventsByUsingPostApiArg,
  GetEventsByUsingPostApiResponse,
  GetFiltersUsingGetApiResponse,
  GetPayoutBreakdownUsingPostApiArg,
  GetPayoutBreakdownUsingPostApiResponse,
  GetPayoutHorizonByUsingPostApiArg,
  GetPayoutHorizonByUsingPostApiResponse,
  GetPayoutSummaryUsingPostApiArg,
  GetPayoutSummaryUsingPostApiResponse,
  GetDisplayCurrenciesUsingGetApiResponse,
  GetFiltersUsingGetApiArg,
} from './types';

export const lifecycleManagerServiceApi = createApi({
  reducerPath: 'lifecycleManagerService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/lifecycle-manager-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: (build) => ({
    getAccountEventsByUsingPost: build.query<
      GetEventsByUsingPostApiResponse,
      GetEventsByUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `events?page=${queryArg.pageNumber}&size=${queryArg.pageSize}`,
        method: 'POST',
        params: {
          displayCurrency: queryArg.displayCurrency,
        },
        body: {
          dateRange: queryArg.dateRange,
          portfolioAttributes: queryArg.portfolioAttributes,
          productAttributes: queryArg.productAttributes,
        },
      }),
    }),
    getFiltersUsingGet: build.query<
      GetFiltersUsingGetApiResponse,
      GetFiltersUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: '/filters',
        params: {
          displayCurrency: queryArg.displayCurrency,
        },
      }),
    }),
    getPayoutHorizonUsingGet: build.query<
      GetPayoutHorizonByUsingPostApiResponse,
      GetPayoutHorizonByUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: '/event-forecast',
        method: 'POST',
        params: {
          displayCurrency: queryArg.displayCurrency,
        },
        body: {
          dateRange: queryArg.dateRange,
          portfolioAttributes: queryArg.portfolioAttributes,
          productAttributes: queryArg.productAttributes,
        },
      }),
    }),
    getPayoutSummaryUsingPost: build.query<
      GetPayoutSummaryUsingPostApiResponse,
      GetPayoutSummaryUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: '/payout-summary',
        method: 'POST',
        params: {
          displayCurrency: queryArg.displayCurrency,
        },
        body: {
          dateRange: queryArg.dateRange,
          portfolioAttributes: queryArg.portfolioAttributes,
          productAttributes: queryArg.productAttributes,
        },
      }),
    }),
    getPayoutBreakdownUsingPost: build.query<
      GetPayoutBreakdownUsingPostApiResponse,
      GetPayoutBreakdownUsingPostApiArg
    >({
      query: (queryArg) => {
        return {
          url: '/exposure-allocation',
          method: 'POST',
          params: {
            displayCurrency: queryArg.displayCurrency,
            groupByName: queryArg.groupByName,
            breakdownType: queryArg.breakdownType,
          },
          body: {
            dateRange: queryArg.dateRange,
            portfolioAttributes: queryArg.portfolioAttributes,
            productAttributes: queryArg.productAttributes,
          },
        };
      },
    }),
    getAccountsByRepresentativeUsingPost: build.query<
      GetAccountsByRepresentativeUsingPostApiResponse,
      GetAccountsByRepresentativeUsingPostApiArg
    >({
      query: (queryArg) => {
        return {
          url: '/accounts-by-representative',
          method: 'POST',
          params: {
            eventId: queryArg.eventId,
            displayCurrency: queryArg.displayCurrency,
          },
          body: {
            dateRange: queryArg.dateRange,
            portfolioAttributes: queryArg.portfolioAttributes,
            productAttributes: queryArg.productAttributes,
          },
        };
      },
    }),
    getDisplayCurrenciesUsingGet: build.query<
      GetDisplayCurrenciesUsingGetApiResponse,
      void
    >({
      query: () => {
        return {
          url: '/currencies',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetAccountEventsByUsingPostQuery,
  useGetFiltersUsingGetQuery,
  useGetPayoutHorizonUsingGetQuery,
  useGetPayoutSummaryUsingPostQuery,
  useGetPayoutBreakdownUsingPostQuery,
  useGetAccountsByRepresentativeUsingPostQuery,
  useGetDisplayCurrenciesUsingGetQuery,
} = lifecycleManagerServiceApi;
