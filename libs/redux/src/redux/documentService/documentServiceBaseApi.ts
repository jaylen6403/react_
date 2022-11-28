import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '@luma-fe-workspace/utility';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export const baseApi = createApi({
  reducerPath: 'documentService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/document-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: () => ({}),
});
