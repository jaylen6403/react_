import type {
  AuthResponse,
  AuthErrorResponse,
} from '../../../redux/authService/slice';

export const mockAuthResponse = (
  partial: Partial<AuthResponse> = {}
): AuthResponse => ({
  access_token: 'ACCESS_TOKEN',
  token_type: 'bearer',
  refresh_token: 'REFRESH_TOKEN',
  expires_in: 3599,
  scope: ['webclient'],
  firstName: 'FIRST_NAME',
  lastName: 'LAST_NAME',
  permissions: [],
  splitIds: [],
  name: 'FIRST_NAME LAST_NAME',
  company: 'COMPANY',
  locale: 'en_US',
  uuid: 'e5802a32-00e0-3077-106d50de27e5d52e',
  jti: 'af519af1-aaa7-45f9-a483-9ae28f4d387c',
  ...partial,
});

export const mockAuthErrorResponse = (
  partial: Partial<AuthErrorResponse> = {}
): AuthErrorResponse => ({
  error: 'invalid_grant',
  error_description: 'Invalid refresh token: REFRESH_TOKEN',
  ...partial,
});
