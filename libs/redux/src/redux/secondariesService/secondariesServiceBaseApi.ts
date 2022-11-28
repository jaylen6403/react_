import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '@luma-fe-workspace/utility';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export const baseApi = createApi({
  reducerPath: 'secondariesService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/secondary-market-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: () => ({}),
});
