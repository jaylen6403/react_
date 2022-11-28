"use strict";
/**
 * Any env variables should be added to the
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_PATHS = exports.isCheckAccessibility = exports.reduxDevTools = exports.oauthClientId = exports.apiUrl = exports.isProd = exports.isLocal = void 0;
exports.isLocal = process.env['NX_IS_LOCAL'] === 'true';
exports.isProd = process.env['NX_IS_PROD'] === 'true';
exports.apiUrl = process.env['NX_API_URL'];
exports.oauthClientId = process.env['NX_OAUTH_CLIENT_ID'];
exports.reduxDevTools = process.env['NX_REDUX_DEV_TOOLS'] === 'true';
exports.isCheckAccessibility = process.env['NX_CHECK_ACCESSIBILITY'] === 'true';
exports.URL_PATHS = {
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
    STRUCTURED_PRODUCTS: 'structured-products',
};
//# sourceMappingURL=env.helper.js.map