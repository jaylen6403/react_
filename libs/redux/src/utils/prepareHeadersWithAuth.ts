import type { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import type { RootState } from '../redux/configureStore';
import { selectAccessToken } from '../redux/auth/selector';

export const prepareHeadersWithAuth =
  (restricted: string[] = []): Required<FetchBaseQueryArgs>['prepareHeaders'] =>
  (headers, api) => {
    if (
      restricted.some(
        (restrictedEndpoint) => restrictedEndpoint === api.endpoint
      )
    ) {
      return headers;
    }
    const token = selectAccessToken(api.getState() as RootState);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  };
