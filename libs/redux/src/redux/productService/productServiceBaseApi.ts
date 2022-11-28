import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '@luma-fe-workspace/utility';

import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export const baseApi = createApi({
  reducerPath: 'productService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/product-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: () => ({}),
});
