import { baseApi as api } from './creationHub2ServiceBaseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCreationHubTemplatesUsingGet: build.query<
      GetCreationHubTemplatesUsingGetApiResponse,
      GetCreationHubTemplatesUsingGetApiArg
    >({
      query: () => ({ url: `/templates` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as creationHub2ServiceApi };
export type GetCreationHubTemplatesUsingGetApiResponse =
  /** status 200 Ok */ CreationHubTemplate[];
export type GetCreationHubTemplatesUsingGetApiArg = void;
export type CreationHubTemplate = {
  notes?: string;
  structure?: string;
  templateId?: string;
  templateName?: string;
  underliers?: string;
};
export const { useGetCreationHubTemplatesUsingGetQuery } = injectedRtkApi;
