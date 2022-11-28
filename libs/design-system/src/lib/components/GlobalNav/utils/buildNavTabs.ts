import {
  NavTabType,
  RouteChild,
  BaseRouteType,
  FrontEndLibraries,
  ProductTypesType,
  UserPermissionsType,
} from '../GlobalNav.types';
import {
  determineNavRouteOrUrl,
  filterNavTabs,
  getColdFusionLink,
  getColdFusionLinkAppVersion,
  isAnnuityOnly,
  isStructuredProductsOnly,
} from './navTabUtils';
import { ROUTE_KEYS } from './routes';
import { WidgetPermissions } from './widgetPermissions';

export const loadDefaultNavTabs = (
  frontEndLibrary: FrontEndLibraries
): NavTabType[] => [buildHomeTab(frontEndLibrary, [])];

export const buildHomeTab = (
  frontEndLibrary: FrontEndLibraries,
  userPermissions: UserPermissionsType
): NavTabType => ({
  title: 'HOME',
  icon: 'tachometer-alt',
  ...determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.HOME, userPermissions),
});

export const buildNavTabs = (
  userPermissions: UserPermissionsType,
  userTrainingDataProductTypes: ProductTypesType,
  frontEndLibrary: FrontEndLibraries,
  isProduction: boolean,
  company?: string | null,
  accessPermissions?: string[] | null
): NavTabType[] => {
  const createTab = buildCreateNavTab(
    accessPermissions,
    frontEndLibrary,
    userPermissions
  );
  const allNavRoutes: NavTabType[] = [
    buildHomeTab(frontEndLibrary, userPermissions),
    {
      title: 'LEARN',
      icon: 'graduation-cap',
      permissions: [WidgetPermissions.AccessLearningCenter],
      ...determineNavRouteOrUrl(
        frontEndLibrary,
        ROUTE_KEYS.LEARN,
        userPermissions
      ),
    },
    {
      title: 'MARKETPLACE',
      icon: 'store',
      children: [
        ...generateDynamicMarketplaceRoutes(
          userTrainingDataProductTypes,
          frontEndLibrary,
          userPermissions
        ),
        {
          title: 'Orders',
          permissions: [WidgetPermissions.MenuMarketplaceAnnuity],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.ORDERS,
            userPermissions
          ),
        },
        {
          title: 'Account Upload',
          permissions: [WidgetPermissions.MenuPmConfigurationsKycRulesUpload],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.ACCOUNT_UPLOAD,
            userPermissions
          ),
        },
        {
          title: 'Wholesaler Mapping',
          permissions: [WidgetPermissions.MenuPmWholesalerMapping],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.WHOLESALER_MAPPING,
            userPermissions
          ),
        },
      ],
    },
    {
      title: 'LIFECYCLE',
      icon: 'recycle',
      children: [
        {
          title: 'Lifecycle Manager',
          icon: 'recycle',
          permissions: [WidgetPermissions.MenuLifecycleManager],
          ...determineNavRouteOrUrl(
            FrontEndLibraries.ANGULAR,
            ROUTE_KEYS.LIFECYCLE,
            userPermissions
          ),
        },
        {
          title: 'Lifecycle 2.0 Beta',
          permissions: [WidgetPermissions.MenuLifecycleManager2Beta],
          ...determineNavRouteOrUrl(
            FrontEndLibraries.REACT,
            ROUTE_KEYS.LIFECYCLE,
            userPermissions
          ),
        },
        {
          title: 'Event Notifications',
          permissions: [WidgetPermissions.EventConfirmationsApprover],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.EVENT_NOTIFICATIONS,
            userPermissions
          ),
        },
      ],
    },
    {
      title: ROUTE_KEYS.TRADE,
      permissions: [WidgetPermissions.MenuSecondaries],
      ...determineNavRouteOrUrl(
        frontEndLibrary,
        ROUTE_KEYS.TRADE,
        userPermissions
      ),
    },
    {
      title: 'ADMIN',
      icon: 'user-shield',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
        {
          title: ROUTE_KEYS.COMPANY_ADMIN,
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.COMPANY_ADMIN,
            userPermissions
          ),
        },
        {
          title: 'Company Relationship Mapping',
          permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.COMPANY_RELATIONSHIP,
            userPermissions
          ),
        },
        {
          title: 'Company Configuration',
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.COMPANY_CONFIG,
            userPermissions
          ),
        },
        {
          title: 'Users',
          permissions: [WidgetPermissions.MenuAdminUsers],
          url: getColdFusionLinkAppVersion('AccountsContainer', null),
        },
        {
          title: 'Return Description Tool',
          permissions: [WidgetPermissions.MenuAdminReturnDescription],
          url: getColdFusionLink('productComparisionReturnDescription', null),
        },
        {
          title: 'Web Content',
          permissions: [WidgetPermissions.MenuAdminWebContent],
          url: getColdFusionLink('salesmarketingspace/webcontent', null),
        },
        {
          title: 'Program Issuer Map',
          permissions: [WidgetPermissions.MenuAdminProgramIssuerMap],
          url: getColdFusionLink(
            'salesmarketingspace/programtoissuermap',
            null
          ),
        },
        {
          title: 'Focus List Video',
          permissions: [WidgetPermissions.MenuAdminWebFocusListVideo],
          url: getColdFusionLink('inventory/videostructurecontent', null),
        },
        {
          title: 'Marketing Email Tracking Upload',
          permissions: [
            WidgetPermissions.MenuAdminMarketingEmailTrackingUpload,
          ],
          url: getColdFusionLink('home', 'MarketingEmailTracking'),
        },
        {
          title: 'All Maturing Products',
          permissions: [WidgetPermissions.MenuAdminAllMaturingProducts],
          url: getColdFusionLink('home', 'AllMaturingProducts'),
        },
        {
          title: 'Compliance Trainings Export',
          permissions: [WidgetPermissions.MenuAdminComplianceTrainingsExport],
          url: getColdFusionLink('home', 'ComplainceTrainingExport'),
        },
        {
          title: 'Comparable Structure Types Configuration',
          permissions: [
            WidgetPermissions.MenuAdminComparableStructureTypesConfiguration,
          ],
          url: getColdFusionLink('home', 'ComparableStructureConfiguration'),
        },
        {
          title: 'PCT Issuer Preferences',
          permissions: [WidgetPermissions.MenuAdminPCTIssuerPreferences],
          url: getColdFusionLink('home', 'IssuerPreference'),
        },
        {
          title: 'PCT Client Preferences',
          permissions: [WidgetPermissions.MenuAdminPCTClientPreferences],
          url: getColdFusionLink('home', 'ClientPreference'),
        },
        {
          title: 'Clients',
          permissions: [WidgetPermissions.MenuAdminClients],
          url: getColdFusionLink('clientsContainer', null),
        },
        {
          title: 'Daily Orders Export',
          permissions: [WidgetPermissions.MenuAdminDailyOrdersExport],
          url: getColdFusionLink('ordersExport', null),
        },
        {
          title: 'Order Email Notifications',
          permissions: [WidgetPermissions.MenuAdminOrderEmailNotifications],
          url: getColdFusionLinkAppVersion('emailNotificationContainer', null),
        },
        {
          title: 'Historical Emails',
          permissions: [WidgetPermissions.MenuAdminHistoricalEmails],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.HISTORICAL_EMAILS,
            userPermissions
          ),
        },
        {
          title: 'File Upload',
          permissions: [WidgetPermissions.MenuAdminFileUpoad],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.FILE_UPLOAD,
            userPermissions
          ),
        },
        {
          title: 'Audit Records',
          permissions: [WidgetPermissions.MenuAdminHistoricalEmails], // TODO: add new permission
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.AUDIT_RECORDS,
            userPermissions
          ),
        },
        {
          title: 'Wholesaler Definition',
          permissions: [WidgetPermissions.MenuAdminWholesalerDefinition],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.WHOLESALER_DEFINITION,
            userPermissions
          ),
        },
        {
          title: 'Wholesaler Mapping',
          permissions: [WidgetPermissions.MenuAdminWholesalerMapping],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.WHOLESALER_MAPPING,
            userPermissions
          ),
        },
        {
          title: 'Product Upload',
          permissions: [WidgetPermissions.ProductCenter],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.PRODUCT_UPLOAD,
            userPermissions
          ),
        },
        {
          title: 'Disclosure Document Upload',
          permissions: [WidgetPermissions.MarketplaceAdminFields],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD,
            userPermissions
          ),
        },
        {
          title: 'Market Data Maintainence',
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.MARKET_DATA_MAINTENANCE,
            userPermissions
          ),
        },
        {
          title: 'Issuer Confirmation',
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.ISSUER_CONFIRMATION,
            userPermissions
          ),
        },
        {
          title: 'Email Configuration',
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.EMAIL_CONFIG,
            userPermissions
          ),
        },
        {
          title: 'Find RFQ',
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.FIND_RFQ,
            userPermissions
          ),
        },
        {
          title: 'Add CH Request to PDW',
          permissions: [WidgetPermissions.MenuAdmin],
          url: getColdFusionLink('adminAddProduct', null),
        },
        {
          title: 'Product Maintenance',
          permissions: [WidgetPermissions.ProductMaintenance],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.PRODUCT_MAINTENANCE,
            userPermissions
          ),
        },
        {
          title: 'Notifications',
          permissions: [WidgetPermissions.MenuNotificationCenter],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.NOTIFICATIONS,
            userPermissions
          ),
        },
        {
          title: 'Event Notifications',
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN,
            userPermissions
          ),
        },
      ],
    },
  ];

  createTab && allNavRoutes.splice(1, 0, createTab as NavTabType);

  return filterNavTabs(allNavRoutes, userPermissions, isProduction, company);
};

const generateDynamicMarketplaceRoutes = (
  productTypes: ProductTypesType,
  frontEndLibrary: FrontEndLibraries,
  userPermissions: UserPermissionsType
): RouteChild[] => {
  const spProductRoutes = {
    title: 'Structured Products',
    ...determineNavRouteOrUrl(
      frontEndLibrary,
      ROUTE_KEYS.STRUCTURED_PRODUCTS,
      userPermissions
    ),
  };

  const annuityProductLink = {
    title: 'Annuities',
    permissions: [WidgetPermissions.MenuMarketplaceAnnuity],
    ...determineNavRouteOrUrl(
      frontEndLibrary,
      ROUTE_KEYS.ANNUITIES,
      userPermissions
    ),
  };

  const spProductOrders = {
    title: 'Order Management',
    ...determineNavRouteOrUrl(
      frontEndLibrary,
      ROUTE_KEYS.ORDER_MANAGEMENT,
      userPermissions
    ),
  };

  const marketplaceSettingsLink = {
    title: 'Marketplace Settings',
    permissions: [WidgetPermissions.MenuMarketplaceSettings],
    ...determineNavRouteOrUrl(
      frontEndLibrary,
      ROUTE_KEYS.MARKETPLACE_SETTINGS,
      userPermissions
    ),
  };

  if (isAnnuityOnly(productTypes)) {
    return [annuityProductLink];
  } else if (isStructuredProductsOnly(productTypes)) {
    return [spProductRoutes, spProductOrders, marketplaceSettingsLink];
  } else {
    return [
      spProductRoutes,
      annuityProductLink,
      spProductOrders,
      marketplaceSettingsLink,
    ];
  }
};

const buildCreateNavTab = (
  accessPermissions: string[] | null | undefined,
  frontEndLibrary: FrontEndLibraries,
  userPermissions: UserPermissionsType
): NavTabType | null => {
  const baseMenuLink = { title: 'CREATE', icon: 'hammer' };
  const dataReportingPermissions = [
    'CAN_ACCESS_GENERAL_PRICING_TOOL',
    'IS_ADMINISTRATOR',
  ];
  const config: Record<string, any> = {
    CAN_ACCESS_GENERAL_PRICING_TOOL: {
      title: 'General Pricing Tool',
      url: getColdFusionLink('home', 'ProductCreation'),
    },
    CAN_ACCESS_CREATION_HUB: {
      title: 'Creation Hub 2.0',
      ...determineNavRouteOrUrl(
        frontEndLibrary,
        ROUTE_KEYS.CREATE,
        userPermissions
      ),
    },
    CAN_ACCESS_LUMA_LITE_PRICING_TOOL: {
      title: 'Creation Hub Lite',
      ...determineNavRouteOrUrl(
        frontEndLibrary,
        ROUTE_KEYS.CREATE_FORM,
        userPermissions
      ),
    },
    CAN_ACCESS_CALENDAR_DEAL_PRICING_TOOL: {
      title: 'Calendar Deal Pricing Tool',
      ...determineNavRouteOrUrl(
        frontEndLibrary,
        ROUTE_KEYS.CREATE_CALENDAR,
        userPermissions
      ),
    },
    DATA_REPORTING_TOOL: {
      title: 'Data Reporting',
      url: getColdFusionLink('home', 'DataReporting'),
    },
    IS_Issuer: {
      title: 'Request History',
      url: getColdFusionLink('home', 'ProductCreation'),
    },
  };

  const permissions: string[] = Object.keys(config).filter((key) =>
    accessPermissions?.includes(key)
  );

  dataReportingPermissions.some((p) => accessPermissions?.includes(p)) &&
    permissions.push('DATA_REPORTING_TOOL');

  if (!permissions.length) {
    return null;
  } else {
    let data: BaseRouteType | Partial<NavTabType>;
    if (permissions.length === 1) {
      data = { ...config[permissions[0]] };
    } else {
      const children: BaseRouteType[] = [];
      permissions.forEach((p: string) => {
        config[p]?.children
          ? children.push(...config[p].children)
          : children.push(config[p]);
      });
      data = { children: children };
    }
    return {
      ...data,
      ...baseMenuLink,
    };
  }
};
