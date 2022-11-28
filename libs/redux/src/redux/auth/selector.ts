import jwt_decode from 'jwt-decode';
import type { RootState } from '../configureStore';

interface Jwt {
  lastName: string;
  user_name: string;
  locale: string;
  uuid: string;
  authorities: string[];
  client_id: string;
  firstName: string;
  aud: string[];
  permissions: string[];
  scope: string[];
  name: string;
  company: string;
  exp: number;
  jti: string;
}

export const selectAuth = (state: RootState) => state.auth;
export const selectAccessToken = (state: RootState) =>
  selectAuth(state).accessToken;
export const selectRefreshToken = (state: RootState) =>
  selectAuth(state).refreshToken;
export const selectJwt = (state: RootState) => {
  const accessToken = selectAccessToken(state);
  return accessToken ? jwt_decode<Jwt>(accessToken) : null;
};
export const isLoggedIn = (state: RootState) => {
  const jwt = selectJwt(state);
  if (jwt) {
    const expiration = jwt.exp;
    return Date.now() + 10000 < expiration * 1000;
  }
  return false;
};
export const selectUsername = (state: RootState) => {
  const jwt = selectJwt(state);
  if (jwt && jwt.user_name) {
    return jwt.user_name;
  }
  return '';
};
export const selectPermissions = (state: RootState) => {
  const jwt = selectJwt(state);
  if (jwt && jwt.permissions) {
    return jwt.permissions;
  }
  return [];
};
export const selectCompany = (state: RootState) => {
  const jwt = selectJwt(state);
  if (jwt && jwt.company) {
    return jwt.company;
  }
  return [];
};
