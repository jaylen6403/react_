import { baseApi as api } from './topProductsServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTopProductsUsingGet: build.query<
      GetTopProductsUsingGetApiResponse,
      GetTopProductsUsingGetApiArg
    >({
      query: () => ({ url: `/insights/export_MP_by_CUSIP.json` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as topProductsServiceApi };
export type GetTopProductsUsingGetApiResponse =
  /** status 200 Ok */ TopProducts[];
export type GetTopProductsUsingGetApiArg = void;
export type TopProducts = {
  currency?: string;
  cusip?: string;
  notional: number;
  structure?: string;
  tenor: number;
  tenorUnit?: string;
  underliers: string[];
};
export const { useGetTopProductsUsingGetQuery }: any = injectedRtkApi;
