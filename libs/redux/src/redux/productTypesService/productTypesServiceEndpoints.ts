import { baseApi as api } from './productTypesServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProductTypesUsingGet: build.query<
      GetProductTypesUsingGetApiResponse,
      GetProductTypesUsingGetApiArg
    >({
      query: () => ({ url: `/insights/export_MP_by_ReturnType.json` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as productTypesServiceApi };
export type GetProductTypesUsingGetApiResponse =
  /** status 200 Ok */ ProductTypes[];
export type GetProductTypesUsingGetApiArg = void;
export type ProductTypes = {
  currency?: string;
  cusip?: string;
  notional: number;
  structure?: string;
  tenor: number;
  tenorUnit?: string;
  underliers: string[];
};
export const { useGetProductTypesUsingGetQuery }: any = injectedRtkApi;
