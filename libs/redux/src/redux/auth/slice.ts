import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { WritableDraft } from 'immer/dist/internal';
import { authApi, AuthResponse } from '../authService/slice';
import { logout, refreshTokenSuccess } from './actions';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  permissions: string[] | null;
  scope: string[] | null;
  fullName: string | null;
  company: string | null | undefined;
  tokenType: string | null;
  local: string | null;
  expires_in: number | null;
  uuid: string | null;
}

export const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  firstName: null,
  lastName: null,
  permissions: null,
  scope: null,
  fullName: null,
  company: null,
  tokenType: null,
  local: null,
  expires_in: null,
  uuid: null,
};

const mapAuthResponseToState = (
  state: WritableDraft<AuthState>,
  action: PayloadAction<AuthResponse>
) => {
  const { payload } = action;
  state.accessToken = payload.access_token;
  state.refreshToken = payload.refresh_token;
  state.firstName = payload.firstName;
  state.lastName = payload.lastName;
  state.permissions = payload.permissions;
  state.scope = payload.scope;
  state.fullName = payload.name;
  state.company = payload.company;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshTokenSuccess, mapAuthResponseToState);
    builder.addCase(logout.fulfilled, (state) => {
      return initialState;
    });
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      mapAuthResponseToState
    );
    builder.addMatcher(
      authApi.endpoints.validateToken.matchFulfilled,
      mapAuthResponseToState
    );
  },
});
