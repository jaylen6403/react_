import { baseApi as api } from './currencyServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCurrenciesUsingGet: build.query<
      GetAllCurrenciesUsingGetApiResponse,
      GetAllCurrenciesUsingGetApiArg
    >({
      query: () => ({ url: `/currencies` }),
    }),
    upsertCurrencyUsingPut: build.mutation<
      UpsertCurrencyUsingPutApiResponse,
      UpsertCurrencyUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/currencies`,
        method: 'PUT',
        body: queryArg.currency,
      }),
    }),
    deleteCurrencyUsingDelete: build.mutation<
      DeleteCurrencyUsingDeleteApiResponse,
      DeleteCurrencyUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/currencies/${queryArg.isoCode}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as currencyServiceApi };
export type GetAllCurrenciesUsingGetApiResponse =
  /** status 200 OK */ Currency[];
export type GetAllCurrenciesUsingGetApiArg = void;
export type UpsertCurrencyUsingPutApiResponse /** status 200 OK */ =
  | Currency
  | /** status 201 Created */ undefined;
export type UpsertCurrencyUsingPutApiArg = {
  /** currency */
  currency: Currency;
};
export type DeleteCurrencyUsingDeleteApiResponse = unknown;
export type DeleteCurrencyUsingDeleteApiArg = {
  /** isoCode */
  isoCode: string;
};
export type ConversionRate = {
  asOfDatetime?: string;
  rate: number;
};
export type Currency = {
  conversionRates?: {
    [key: string]: ConversionRate;
  };
  isoCode: string;
};
export const {
  useGetAllCurrenciesUsingGetQuery,
  useUpsertCurrencyUsingPutMutation,
  useDeleteCurrencyUsingDeleteMutation,
} = injectedRtkApi;
