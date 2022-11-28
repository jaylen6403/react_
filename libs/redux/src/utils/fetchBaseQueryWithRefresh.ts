import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { AuthResponse } from '../redux/authService/slice';
import type { RootState } from '../redux/configureStore';
import { logout, refreshTokenSuccess } from '../redux/auth/actions';
import { selectRefreshToken } from '../redux/auth/selector';
import { apiUrl, oauthClientId } from '@luma-fe-workspace/utility';

const mutex = new Mutex();

const refreshQuery = fetchBaseQuery({ baseUrl: apiUrl });

export function fetchBaseQueryWithRefresh(
  ...baseQueryArgs: Parameters<typeof fetchBaseQuery>
): BaseQueryFn {
  return async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    const baseQuery = fetchBaseQuery(...baseQueryArgs);
    let result = await baseQuery(args, api, extraOptions);

    if (typeof result.error === 'object' && result.error?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          const refreshToken = selectRefreshToken(api.getState() as RootState);
          const refreshResult = (await refreshQuery(
            {
              url: `${apiUrl}/auth-service/oauth/token?grant_type=refresh_token&client_id=${oauthClientId}&refresh_token=${refreshToken}`,
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            },
            api,
            extraOptions
          )) as QueryReturnValue<
            AuthResponse,
            FetchBaseQueryError,
            FetchBaseQueryMeta
          >;

          if (refreshResult.data) {
            api.dispatch(refreshTokenSuccess(refreshResult.data));

            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout);
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }

    return result;
  };
}
