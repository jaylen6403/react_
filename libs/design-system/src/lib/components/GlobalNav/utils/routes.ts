import { FrontEndLibraries } from '../GlobalNav.types';

export enum ROUTE_KEYS {
  HOME = 'HOME',
  LEARN = 'LEARN',
  ORDERS = 'ORDERS',
  ACCOUNT_UPLOAD = 'ACCOUNT_UPLOAD',
  WHOLESALER_MAPPING = 'WHOLESALER_MAPPING',
  LIFECYCLE = 'LIFECYCLE',
  TRADE = 'TRADE',
  COMPANY_ADMIN = 'Company Administration',
  COMPANY_RELATIONSHIP = 'COMPANY_RELATIONSHIP',
  COMPANY_CONFIG = 'COMPANY_CONFIG',
  HISTORICAL_EMAILS = 'HISTORICAL_EMAILS',
  FILE_UPLOAD = 'FILE_UPLOAD',
  AUDIT_RECORDS = 'AUDIT_RECORDS',
  WHOLESALER_DEFINITION = 'WHOLESALER_DEFINITION',
  ADMIN_WHOLESALER_MAPPING = 'ADMIN_WHOLESALER_MAPPING',
  PRODUCT_UPLOAD = 'PRODUCT_UPLOAD',
  DISCLOSURE_DOC_UPLOAD = 'DISCLOSURE_DOC_UPLOAD',
  MARKET_DATA_MAINTENANCE = 'MARKET_DATA_MAINTENANCE',
  ISSUER_CONFIRMATION = 'ISSUER_CONFIRMATION',
  EMAIL_CONFIG = 'EMAIL_CONFIG',
  FIND_RFQ = 'FIND_RFQ',
  PRODUCT_MAINTENANCE = 'PRODUCT_MAINTENANCE',
  NOTIFICATIONS = 'NOTIFICATIONS',
  STRUCTURED_PRODUCTS = 'STRUCTURED_PRODUCTS',
  ANNUITIES = 'ANNUITIES',
  ORDER_MANAGEMENT = 'ORDER_MANAGEMENT',
  MARKETPLACE_SETTINGS = 'MARKETPLACE_SETTINGS',
  CREATE_CALENDAR = 'CREATE_CALENDAR',
  CREATE_FORM = 'CREATE_FORM',
  CREATE = 'CREATE',
  EVENT_NOTIFICATIONS = 'EVENT_NOTIFICATIONS',
  EVENT_NOTIFICATIONS_ADMIN = 'EVENT_NOTIFICATIONS_ADMIN',
}

type ROUTESType = {
  [key in ROUTE_KEYS]: {
    [FrontEndLibraries.ANGULAR]: string;
    [FrontEndLibraries.REACT]: string;
  };
};

export const ROUTES: ROUTESType = {
  [ROUTE_KEYS.HOME]: {
    [FrontEndLibraries.ANGULAR]: '/dashboard',
    [FrontEndLibraries.REACT]: '/dashboard',
  },
  [ROUTE_KEYS.LEARN]: {
    [FrontEndLibraries.ANGULAR]: '/learning-center',
    [FrontEndLibraries.REACT]: '/learning-center',
  },
  [ROUTE_KEYS.ORDERS]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/annuity-product-orders',
    [FrontEndLibraries.REACT]: '/product-marketplace/annuity-product-orders',
  },
  [ROUTE_KEYS.ACCOUNT_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/account-file-upload',
    [FrontEndLibraries.REACT]: '/product-marketplace/account-file-upload',
  },
  [ROUTE_KEYS.WHOLESALER_MAPPING]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/wholesaler-mapping',
    [FrontEndLibraries.REACT]: '/product-marketplace/wholesaler-mapping',
  },
  [ROUTE_KEYS.LIFECYCLE]: {
    [FrontEndLibraries.ANGULAR]: '/lifecycle-manager',
    [FrontEndLibraries.REACT]: '/lifecycle-manager',
  },
  [ROUTE_KEYS.TRADE]: {
    [FrontEndLibraries.ANGULAR]: '/secondaries',
    [FrontEndLibraries.REACT]: '/secondaries',
  },
  [ROUTE_KEYS.COMPANY_ADMIN]: {
    [FrontEndLibraries.ANGULAR]: '/company-administration',
    [FrontEndLibraries.REACT]: '/company-administration',
  },
  [ROUTE_KEYS.COMPANY_RELATIONSHIP]: {
    [FrontEndLibraries.ANGULAR]:
      '/admin/company-administration-relationship-mapping',
    [FrontEndLibraries.REACT]:
      '/admin/company-administration-relationship-mapping',
  },
  [ROUTE_KEYS.COMPANY_CONFIG]: {
    [FrontEndLibraries.ANGULAR]: '/admin/company-administration-configuration',
    [FrontEndLibraries.REACT]: '/admin/company-administration-configuration',
  },
  [ROUTE_KEYS.HISTORICAL_EMAILS]: {
    [FrontEndLibraries.ANGULAR]: '/admin/email-info/overview',
    [FrontEndLibraries.REACT]: '/admin/email-info/overview',
  },
  [ROUTE_KEYS.FILE_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/admin/file-upload',
    [FrontEndLibraries.REACT]: '/admin/file-upload',
  },
  [ROUTE_KEYS.AUDIT_RECORDS]: {
    [FrontEndLibraries.ANGULAR]: '/admin/audit-records',
    [FrontEndLibraries.REACT]: '/admin/audit-records',
  },
  [ROUTE_KEYS.WHOLESALER_DEFINITION]: {
    [FrontEndLibraries.ANGULAR]: '/admin/wholesaler-definition',
    [FrontEndLibraries.REACT]: '/admin/wholesaler-definition',
  },
  [ROUTE_KEYS.ADMIN_WHOLESALER_MAPPING]: {
    [FrontEndLibraries.ANGULAR]: '/admin/wholesaler-mapping',
    [FrontEndLibraries.REACT]: '/admin/wholesaler-mapping',
  },
  [ROUTE_KEYS.PRODUCT_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/product-upload',
    [FrontEndLibraries.REACT]: '/product-upload',
  },
  [ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]:
      '/product-marketplace/disclosure-document-upload',
    [FrontEndLibraries.REACT]:
      '/product-marketplace/disclosure-document-upload',
  },
  [ROUTE_KEYS.MARKET_DATA_MAINTENANCE]: {
    [FrontEndLibraries.ANGULAR]: '/admin/market-data-maintainence',
    [FrontEndLibraries.REACT]: '/admin/market-data-maintainence',
  },
  [ROUTE_KEYS.ISSUER_CONFIRMATION]: {
    [FrontEndLibraries.ANGULAR]: '/admin/issuer-confirmation',
    [FrontEndLibraries.REACT]: '/admin/issuer-confirmation',
  },
  [ROUTE_KEYS.EMAIL_CONFIG]: {
    [FrontEndLibraries.ANGULAR]: '/admin/email-config',
    [FrontEndLibraries.REACT]: '/admin/email-config',
  },
  [ROUTE_KEYS.FIND_RFQ]: {
    [FrontEndLibraries.ANGULAR]: '/admin/find-rfq',
    [FrontEndLibraries.REACT]: '/admin/find-rfq',
  },
  [ROUTE_KEYS.PRODUCT_MAINTENANCE]: {
    [FrontEndLibraries.ANGULAR]: '/admin/product-maintenance',
    [FrontEndLibraries.REACT]: '/admin/product-maintenance',
  },
  [ROUTE_KEYS.NOTIFICATIONS]: {
    [FrontEndLibraries.ANGULAR]: '/notification-center',
    [FrontEndLibraries.REACT]: '/notification-center',
  },
  [ROUTE_KEYS.STRUCTURED_PRODUCTS]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/structured-products',
    [FrontEndLibraries.REACT]: '/product-marketplace/structured-products',
  },
  [ROUTE_KEYS.ANNUITIES]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/annuity-products',
    [FrontEndLibraries.REACT]: '/product-marketplace/annuity-products',
  },
  [ROUTE_KEYS.ORDER_MANAGEMENT]: {
    [FrontEndLibraries.ANGULAR]:
      '/product-marketplace/structured-product-orders',
    [FrontEndLibraries.REACT]: '/product-marketplace/structured-product-orders',
  },
  [ROUTE_KEYS.MARKETPLACE_SETTINGS]: {
    [FrontEndLibraries.ANGULAR]: '/marketplace-settings',
    [FrontEndLibraries.REACT]: '/marketplace-settings',
  },
  [ROUTE_KEYS.CREATE_CALENDAR]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub/calendar-deal-table',
    [FrontEndLibraries.REACT]: '/creation-hub/calendar-deal-table',
  },
  [ROUTE_KEYS.CREATE_FORM]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub-ubs/create-form',
    [FrontEndLibraries.REACT]: '/creation-hub-ubs/create-form',
  },
  [ROUTE_KEYS.CREATE]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub/create',
    [FrontEndLibraries.REACT]: '/creationhub',
  },
  [ROUTE_KEYS.EVENT_NOTIFICATIONS]: {
    [FrontEndLibraries.ANGULAR]: '/event-confirmations',
    [FrontEndLibraries.REACT]: '/event-confirmations',
  },
  [ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN]: {
    [FrontEndLibraries.ANGULAR]: '/event-confirmations',
    [FrontEndLibraries.REACT]: '/event-confirmations',
  },
};
