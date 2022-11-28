import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { AuthResponse } from '../authService/slice';
import { authApi } from '../authService/slice';

export const refreshTokenSuccess = createAction<AuthResponse>(
  'auth/refreshTokenSuccess'
);

const getColdFusionBaseUrl = (origin?: string) => {
  const currentUrl = origin || window.origin;

  const updatedUrl = currentUrl
    .replace('http://', 'https://')
    .replace('localhost:4200', 'app.bdev.lumafintech.com')
    .replace('//app.', '//')
    .replace('//go.', '//')
    .replace(/(\/\/go).+?(?:\.)/g, '//')
    .replace('//an.', '//')
    .replace('//ch.', '//')
    .replace('//dn.', '//')
    .replace('//lm.', '//')
    .replace('//pl.', '//')
    .replace('//pm.', '//')
    .replace('bdev.', 'ng')
    .replace('bqa.', 'qa')
    .replace('buat.', 'uat')
    .replace('staging.', 'staging')
    .replace('lumafintech.com', 'portal.lumafintech.com');
  // CF links are different for staging and production
  if (
    updatedUrl.startsWith('https://portal.lumafintech.com') ||
    updatedUrl.startsWith('https://stagingportal.lumafintech.com')
  ) {
    return updatedUrl.replace('lumafintech', 'naviancapital');
  } else return updatedUrl;
};

export const logout = createAsyncThunk<void, void>(
  'auth/logout',
  async (_, thunkAPI) => {
    await thunkAPI.dispatch(authApi.endpoints.removeRMT.initiate());
    await fetch(`${getColdFusionBaseUrl()}/cdfg/WebPages/deleteCFSession.cfm`);
    await thunkAPI.dispatch(authApi.endpoints.revokeToken.initiate());
  }
);
