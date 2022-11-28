import { baseApi as api } from './marketplaceProductServiceBaseApi';
import type { GetTrainingResponse } from './types';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    checkIfUserCompletedTrainingUsingGet: build.query<
      CheckIfUserCompletedTrainingUsingGetApiResponse,
      CheckIfUserCompletedTrainingUsingGetApiArg
    >({
      query: () => ({ url: `/product/training/completed/user` }),
    }),
    getUserTrainingStatusUsingGet: build.query<
      GetUserTrainingStatusUsingGetApiResponse,
      GetUserTrainingStatusUsingGetApiArg
    >({
      query: () => ({ url: `/product/training/user` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as marketplaceProductServiceApi };
export type CheckIfUserCompletedTrainingUsingGetApiResponse = unknown;
export type CheckIfUserCompletedTrainingUsingGetApiArg = void;
export type GetUserTrainingStatusUsingGetApiResponse = GetTrainingResponse;
export type GetUserTrainingStatusUsingGetApiArg = void;
export const {
  useCheckIfUserCompletedTrainingUsingGetQuery,
  useGetUserTrainingStatusUsingGetQuery,
} = injectedRtkApi;
