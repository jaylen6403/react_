import { authSlice, initialState } from './slice';
import { mockAuthResponse } from '../../testUtils/mocks/authService/data';
import { refreshTokenSuccess } from './actions';

const AUTH_RESPONSE = mockAuthResponse();

const finalState = {
  accessToken: 'ACCESS_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
  firstName: 'FIRST_NAME',
  lastName: 'LAST_NAME',
  permissions: [],
  scope: ['webclient'],
  fullName: 'FIRST_NAME LAST_NAME',
  company: 'COMPANY',
  tokenType: null,
  local: null,
  expires_in: null,
  uuid: null,
};

describe('authSlice tests', () => {
  it('should update state on login', () => {
    const action = {
      type: 'authService/executeMutation/fulfilled',
      payload: AUTH_RESPONSE,
      meta: {
        arg: {
          type: 'mutation',
          endpointName: 'login',
        },
      },
    };

    expect(authSlice.reducer(initialState, action)).toEqual(finalState);
  });

  it('should update state after token validated', () => {
    const action = {
      type: 'authService/executeQuery/fulfilled',
      payload: AUTH_RESPONSE,
      meta: {
        arg: {
          type: 'mutation',
          endpointName: 'validateToken',
        },
      },
    };

    expect(authSlice.reducer(initialState, action)).toEqual(finalState);
  });

  it('should update state when token refreshed', () => {
    const action = {
      type: refreshTokenSuccess.type,
      payload: AUTH_RESPONSE,
    };

    expect(authSlice.reducer(initialState, action)).toEqual(finalState);
  });
});
