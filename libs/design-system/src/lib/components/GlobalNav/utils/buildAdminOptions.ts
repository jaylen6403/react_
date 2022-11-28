import {
  FrontEndLibraries,
  NavTabType,
  UserPermissionsType,
} from '../GlobalNav.types';
import {
  determineNavRouteOrUrl,
  filterNavTabs,
  getColdFusionLink,
  getColdFusionLinkAppVersion,
} from './navTabUtils';
import { ROUTE_KEYS } from './routes';
import { WidgetPermissions } from './widgetPermissions';

export const buildAdminOptions = (
  userPermissions: UserPermissionsType,
  frontEndLibrary: FrontEndLibraries,
  isProduction: boolean
) => {
  const adminOptions: NavTabType[] = [
    {
      title: 'Company Maintenance',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
        {
          title: 'Company Administration',
          permissions: [WidgetPermissions.MenuAdmin],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.COMPANY_ADMIN,
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
          title: 'Company Relationship Mapping',
          permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.COMPANY_RELATIONSHIP,
            userPermissions
          ),
        },
      ],
    },
    {
      title: 'User Administration',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
        {
          title: 'Users',
          permissions: [WidgetPermissions.MenuAdminUsers],
          url: getColdFusionLinkAppVersion('AccountsContainer', null),
        },
      ],
    },
    {
      title: 'Product Maintenance',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
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
          title: 'Issuer Confirmation',
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.ISSUER_CONFIRMATION,
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
          title: 'File Upload',
          permissions: [WidgetPermissions.MenuAdminFileUpoad],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.FILE_UPLOAD,
            userPermissions
          ),
        },
        {
          title: 'Add CH Request to PDW',
          permissions: [WidgetPermissions.MenuAdmin],
          url: getColdFusionLink('adminAddProduct', null),
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
      ],
    },
    {
      title: 'Creation Hub Settings',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
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
      ],
    },
    {
      title: 'Other',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [
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
          title: 'Disclosure Document Upload',
          permissions: [WidgetPermissions.MarketplaceAdminFields],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD,
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
          title: 'Notifications',
          permissions: [WidgetPermissions.MenuNotificationCenter],
          ...determineNavRouteOrUrl(
            frontEndLibrary,
            ROUTE_KEYS.NOTIFICATIONS,
            userPermissions
          ),
        },
      ],
    },
  ];

  return filterNavTabs(adminOptions, userPermissions, isProduction);
};
