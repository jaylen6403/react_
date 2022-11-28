import { rest } from 'msw';
import { mockAuthResponse, mockAuthErrorResponse } from './data';

export const getSuccessOauthTokenHandler = (response = mockAuthResponse()) =>
  rest.post('/auth-service/oauth/token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
  });

export const getFailureOauthTokenHandler = (
  response = mockAuthErrorResponse()
) =>
  rest.post('/auth-service/oauth/token', (req, res, ctx) => {
    return res(ctx.status(400), ctx.json(response));
  });

export const getSuccessUserTokenInfoHandler = (response = mockAuthResponse()) =>
  rest.get('*/auth-service/token-info/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
  });

export const getFailureUserTokenInfoHandler = () =>
  rest.get('*/auth-service/token-info/user', (req, res, ctx) => {
    return res(ctx.status(401));
  });
