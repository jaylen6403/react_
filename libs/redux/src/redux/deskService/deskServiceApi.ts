import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '@luma-fe-workspace/utility';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export const deskServiceApi = createApi({
  reducerPath: 'deskService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/desk-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: (build) => ({
    getLogosUsingGet: build.query<GetCompanyLogosUsingGetResponseArg, void>({
      query: () => ({
        url: '/issuer/active/logos',
      }),
    }),
  }),
});

export interface GetCompanyLogosUsingGetResponseArg {
  [key: string]: string;
}

export const { useGetLogosUsingGetQuery } = deskServiceApi;
