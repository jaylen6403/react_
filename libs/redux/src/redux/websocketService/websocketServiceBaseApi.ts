import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export const baseApi = createApi({
  reducerPath: 'websocketService',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: () => ({}),
});
