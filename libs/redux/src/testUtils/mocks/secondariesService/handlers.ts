import { rest } from 'msw';
import { apiUrl } from '@luma-fe-workspace/utility';

import { mockSecurityDetails } from './data';

export const getSuccessSecurityDetails = (
  response = mockSecurityDetails(),
  baseUrl = apiUrl
) =>
  rest.get(
    `${baseUrl}/secondary-market-service/security-details/product/:id`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    }
  );
