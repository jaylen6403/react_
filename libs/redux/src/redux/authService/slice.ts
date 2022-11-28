import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithRefresh } from '../../utils/fetchBaseQueryWithRefresh';
import { apiUrl, oauthClientId } from '@luma-fe-workspace/utility';
import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  name: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  uuid: string;
  permissions: string[];
  splitIds: string[];
  token_type: string;
  scope: string[];
  locale: string;
  jti: string;
  expires_in: number;
}

interface Credentials {
  username: string;
  password: string;
}

export interface AuthErrorResponse {
  error: string;
  error_description: string;
}

export const authApi = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQueryWithRefresh({
    baseUrl: `${apiUrl}/auth-service/`,
    prepareHeaders: prepareHeadersWithAuth(['login', 'validateToken']),
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, Credentials>({
      query: ({ username, password }) => ({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: `oauth/token?grant_type=password&client_id=${oauthClientId}&scope=webclient`,
        method: 'POST',
        body: new URLSearchParams({ username, password }),
      }),
    }),
    validateToken: builder.query<AuthResponse, { bearer: string }>({
      query: ({ bearer }) => ({
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${bearer}`,
        },
        url: 'token-info/user',
        method: 'GET',
      }),
    }),
    revokeToken: builder.mutation<void, void>({
      query: () => ({
        url: 'tokens/current',
        method: 'DELETE',
      }),
    }),
    removeRMT: builder.mutation<void, void>({
      query: () => ({
        url: 'rmt/logout',
        method: 'GET',
      }),
    }),
    crossSiteCst: builder.query<string, void>({
      query: () => ({
        url: 'cross-site/cst',
        method: 'GET',
        responseHandler: (response: Response) => response.text(),
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useValidateTokenQuery,
  useRevokeTokenMutation,
  useRemoveRMTMutation,
  useCrossSiteCstQuery,
} = authApi;
