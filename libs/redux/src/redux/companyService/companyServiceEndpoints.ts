import { baseApi as api } from './companyServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWhitelabelInfoUsingGet: build.query<
      GetWhitelabelInfoUsingGetApiResponse,
      void
    >({
      query: () => ({
        url: `/whitelabelinfo`,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as companyProductServiceApi };

export type GetWhitelabelInfoUsingGetApiResponse =
  /** status 200 Ok */ WhitelabelInfo;

export type WhitelabelInfo = {
  companyUri?: string;
  contactEmail?: string;
  disclaimers?: {
    [key: string]: string;
  };
  hostCompanyUri?: string;
};
export const { useGetWhitelabelInfoUsingGetQuery } = injectedRtkApi;
