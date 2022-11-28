import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envCheck, baseUrl } from '../../utils/links';

export const baseApi = createApi({
  reducerPath: 'productTypesService',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl(envCheck())}`,
  }),
  endpoints: () => ({}),
});
