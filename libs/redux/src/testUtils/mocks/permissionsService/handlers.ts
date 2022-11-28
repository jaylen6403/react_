import { rest } from 'msw';
import { mockEmptyUiPermissionsResponse } from './data';

export const getSuccessPermissionsHandler = (
  response = mockEmptyUiPermissionsResponse()
) =>
  rest.post('/permission-service/permission', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
  });

export const getFailurePermissionsHandler = () =>
  rest.post('/permission-service/permission', (req, res, ctx) => {
    return res(ctx.status(401));
  });

export const getSuccessPermissionHandler = () =>
  rest.post('/permission-service/permission/:permission', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(true));
  });

export const getFailurePermissionHandler = () =>
  rest.post('/permission-service/permission/:permission', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(false));
  });
