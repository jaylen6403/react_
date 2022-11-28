/**
 * Any env variables should be added to the
 */

export const isLocal = process.env['NX_IS_LOCAL'] === 'true';
export const isProd = process.env['NX_IS_PROD'] === 'true';
export const apiUrl = process.env['NX_API_URL'];
export const oauthClientId = process.env['NX_OAUTH_CLIENT_ID'];
export const reduxDevTools = process.env['NX_REDUX_DEV_TOOLS'] === 'true';
export const isCheckAccessibility =
  process.env['NX_CHECK_ACCESSIBILITY'] === 'true';
export const URL_PATHS = {
  SECONDARIES: 'secondaries',
  CREATIONHUB: 'creationhub',
  DASHBOARD: 'dashboard',
  RFQ_SEARCH: 'rfq-search',
  QUOTES: 'quotes',
  ORDERS: 'orders',
  LP_BLOTTER: 'lp-blotter',
  CONFIRMATIONS: 'event-confirmations',
  LIFECYCLE: 'lifecycle-manager',
  LIFECYCLE_EVENTS: 'events',
  LIFECYCLE_PRODUCTS: 'products',
  LIFECYCLE_ACCOUNTS: 'accounts',
  LIFECYCLE_REPORT: 'performance-report',
  STRUCTURED_PRODUCTS: 'structured-products',
};
