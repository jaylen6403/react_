import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithRefresh } from '../../utils/fetchBaseQueryWithRefresh';
import { prepareHeadersWithAuth } from '../../utils/prepareHeadersWithAuth';
import { apiUrl } from '@luma-fe-workspace/utility';
import { WidgetPermissions } from './types';

export const permissionsApi = createApi({
  reducerPath: 'permissionsService',
  baseQuery: fetchBaseQueryWithRefresh({
    baseUrl: `${apiUrl}/permission-service/`,
    prepareHeaders: prepareHeadersWithAuth(),
  }),
  endpoints: (builder) => ({
    uiPermissions: builder.query<
      WidgetPermissions[],
      { permissions: WidgetPermissions[] }
    >({
      query: ({ permissions }) => ({
        url: 'permission',
        method: 'POST',
        body: permissions,
      }),
    }),
    checkPermission: builder.query<boolean, { permission: WidgetPermissions }>({
      query: ({ permission }) => ({
        url: `permission/${permission}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useUiPermissionsQuery, useCheckPermissionQuery } =
  permissionsApi;
