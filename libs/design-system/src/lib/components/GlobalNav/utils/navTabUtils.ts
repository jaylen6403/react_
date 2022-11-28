import {
  BaseRouteType,
  ENV,
  FrontEndLibraries,
  NavTabType,
  NavTabTypeWithChildren,
  ProductTypesType,
  UserPermissionsType,
} from '../GlobalNav.types';
import { ROUTE_KEYS, ROUTES } from './routes';
import { WidgetPermissions } from './widgetPermissions';

// TEAM_SUBDOMAIN allows you to set the local linking to a specific subdomain of the Angular dev build e.g., 'dn.'
// BE SURE TO INCLUDE '.'
const TEAM_SUBDOMAIN = '';
// TODO - keep in shared location
// libs/common/src/lib/getLumaAppLogin.ts
export const getAngularLink = (url?: string): string => {
  const formattedUrl = url ?? window.origin;
  return formattedUrl.replace(
    /go(?:-(an|ch|dn|lm|sp))?(?=\.)/g,
    (match, teamSubdomain) => (teamSubdomain != null ? teamSubdomain : 'app')
  );
};

export const getReactLink = (url?: string): string => {
  let formattedUrl = url ?? window.origin;
  formattedUrl = formattedUrl.replace('http://', 'https://');
  return formattedUrl.replace(
    /(?<=\/)(app|an|ch|dn|lm|sp)?(?=\.)/g,
    (match, teamSubdomain) =>
      teamSubdomain !== null && teamSubdomain !== 'app'
        ? `go-${teamSubdomain}`
        : 'go'
  );
};

export const isTabDropdown = (tab: NavTabType): tab is NavTabTypeWithChildren =>
  !!tab?.children?.length;

// currently unused, see the comment below in generateAppUrl
// const ENV_SUBDOMAINS = {
//   [ENV.PROD]: '',
//   [ENV.STAGING]: 'staging',
//   [ENV.UAT]: 'buat',
//   [ENV.QA]: 'bdev',
//   [ENV.DEV]: 'bdev',
//   [ENV.LOCAL]: '',
// };

export const isProduction = () =>
  window.origin.includes('https://app.lumafintech.com') ||
  window.origin.includes('https://go.lumafintech.com');
export const isStaging = () =>
  window.origin.includes('https://go.staging.lumafintech.com') ||
  window.origin.includes('https://app.staging.lumafintech.com');
export const isUAT = () =>
  window.origin.includes('https://go.buat.lumafintech.com') ||
  window.origin.includes('https://app.buat.lumafintech.com');
export const isQA = () =>
  window.origin.includes('https://go.bqa.lumafintech.com') ||
  window.origin.includes('https://app.bqa.lumafintech.com');
export const isDev = () =>
  window.origin.includes('https://go.bdev.lumafintech.com') ||
  window.origin.includes('https://app.bdev.lumafintech.com');
export const isLocal = () => window.origin.includes('localhost');
export const isHigherEnvironment = () =>
  isProduction() || isStaging() || isUAT();

// LIST OF ENVS FOR ANGULAR (luma-app):
//
// DEV:     https://app.bdev.lumafintech.com
// QA:      https://app.bqa.lumafintech.com
//
// AN DEV:  https://an.bdev.lumafintech.com
// AN QA:   https://an.bqa.lumafintech.com
// CH DEV:  https://ch.bdev.lumafintech.com
// CH QA:   https://ch.bqa.lumafintech.com
// LM DEV:  https://lm.bdev.lumafintech.com
// LM QA:   https://lm.bqa.lumafintech.com
// PL DEV:  https://pl.bdev.lumafintech.com
// PL QA:   https://pl.bqa.lumafintech.com
// PM DEV:  https://pm.bdev.lumafintech.com
// PM QA:   https://pm.bqa.lumafintech.com
// PM QA:   https://pm.bqa.lumafintech.com
//
// UAT:     https://app.buat.lumafintech.com
// Staging: https://app.staging.lumafintech.com
// Prod:    https://app.lumafintech.com

// LIST OF ENVS FOR REACT (luma-fe-workspace):
//
// DEV:     https://go.bdev.lumafintech.com
// QA:      https://go.bqa.lumafintech.com
// UAT:     https://go.buat.lumafintech.com
// Staging: https://go.staging.lumafintech.com
// Prod:    https://go.lumafintech.com

// COLD FUSION ENVS
// PROD:    portal.lumafintech.com
// STAGING: stagingportal.lumafintech.com
// UAT:     uatportal.lumafintech.com
// QA:      qaportal.lumafintech.com
// DEV:     ngportal.lumafintech.com

/**
 * generateAppUrl: takes a route to append to the end of the generated base url
 * and a destination library that determines if the base url should be for the angular app or the react app deployment.
 *
 * This function derives the correct environment-specific url based on the current window.origin and the desired destination.
 */
export const generateAppUrl = (
  route: string,
  destinationLibrary: FrontEndLibraries,
  env: ENV = ENV.PROD
) => {
  // The following is a method in which we have an env flag that tells us which deployment env we're in.
  // This does not as yet exist, so we are using the second method
  //
  // let baseUrl = `https://${LIBRARY_SUBDOMAINS[destinationLibrary]}.${ENV_SUBDOMAINS[env]}.lumafintech.com`;
  // if (env === ENV.LOCAL) baseUrl = 'http://locahost:4200';

  let baseUrl = window.origin;
  const isDestinationAngular = destinationLibrary === FrontEndLibraries.ANGULAR;
  const destinationSubdomain = isDestinationAngular ? 'app.' : 'go.';
  const currentSubdomain = isDestinationAngular ? 'go.' : 'app.';

  if (isHigherEnvironment()) {
    // Only app/go subdomains exist in UAT/Staging/Prod
    baseUrl = baseUrl.replace(currentSubdomain, destinationSubdomain);
  } else if (isLocal()) {
    // Locally direct to app/go .bdev, or subdomain set in TEAM_SUBDOMAIN const
    baseUrl = `https://${destinationSubdomain}bdev.lumafintech.com`;
    baseUrl = TEAM_SUBDOMAIN
      ? baseUrl.replace(destinationSubdomain, TEAM_SUBDOMAIN)
      : baseUrl;
  } else {
    // In lower environments determine the subdomain based on the one you are in
    // e.g., go-dn in React -> dn in Angular & lm in Angular -> go-lm in React
    baseUrl = isDestinationAngular
      ? getAngularLink(baseUrl)
      : getReactLink(baseUrl);
  }

  return `${baseUrl}${route}`;
};

const createLinkToOtherApp = (
  destinationLibrary: FrontEndLibraries,
  routeKey: ROUTE_KEYS
) => {
  const route = ROUTES[routeKey][destinationLibrary];

  return { url: generateAppUrl(route, destinationLibrary) };
};

export const determineNavRouteOrUrl = (
  frontEndLibrary: FrontEndLibraries,
  routeKey: ROUTE_KEYS,
  userPermissions: UserPermissionsType
): Partial<NavTabType> => {
  const route = ROUTES[routeKey][frontEndLibrary];
  // FOR HOME (dashboard)
  // If the user has access to the new dashboard or is already in the React app, route to the React app's dashboard
  if (routeKey === ROUTE_KEYS.HOME) {
    if (
      frontEndLibrary === FrontEndLibraries.ANGULAR &&
      !userHasAccess(
        [WidgetPermissions.MenuCanViewLegacyDashboard],
        userPermissions
      )
    ) {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    } else {
      return { route };
    }
  }

  // FOR CREATION HUB
  // For the time being if we are not in higher envs, route to the new creation hub products in React
  // In higher envs continue to utilize the existing products in Angular
  // Once the products are deployed in production
  // we can remove the env checks and simply route to the React deployments in all cases
  if (routeKey === ROUTE_KEYS.CREATE) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return { route };
    else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  }

  // FOR LIFECYCLE
  // Allow routing to both the existing Angular 'Lifecycle Manager' as well as the React 'Lifecycle Manager 2.0 Beta'
  // Each has its own associated permission for the respective dropdown link to be visible
  if (routeKey === ROUTE_KEYS.LIFECYCLE) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return { route };
    else {
      return createLinkToOtherApp(FrontEndLibraries.ANGULAR, routeKey);
    }
  }

  // FOR EVENT CONFIRMATIONS
  if (routeKey === ROUTE_KEYS.EVENT_NOTIFICATIONS) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return { route };
    else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  }

  // FOR EVENT CONFIRMATIONS ADMIN
  if (routeKey === ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return { route };
    else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  }

  // FOR SECONDARIES
  if (routeKey === ROUTE_KEYS.TRADE) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return { route };
    else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  }

  // ALL REMAINING CASES
  if (frontEndLibrary === FrontEndLibraries.REACT) {
    return createLinkToOtherApp(FrontEndLibraries.ANGULAR, routeKey);
  } else {
    return { route };
  }
};

/**
 * getColdFusionBaseUrl: function that should be called with no arguments
 * that derives the correct environment-specific Cold Fusion base url based on the current window.origin.
 *
 * e.g.
 * https://app.bdev.lumafintech.com => https://ngportal.lumafintech.com
 * https://app.staging.lumafintech.com => https://stagingportal.lumafintech.com
 *
 * Optional argument 'origin' for testing how this function will work to convert various base urls
 * with an input rather than pulling directly from window.origin in the browser.
 */
export const getColdFusionBaseUrl = (origin?: string) => {
  const currentUrl = origin || window.origin;

  const updatedUrl = currentUrl
    .replace('http://', 'https://')
    .replace('localhost:4200', 'app.bdev.lumafintech.com')
    .replace('//app.', '//')
    .replace('//go.', '//')
    .replace(/(\/\/go).+?(?:\.)/g, '//')
    .replace('//an.', '//')
    .replace('//ch.', '//')
    .replace('//dn.', '//')
    .replace('//lm.', '//')
    .replace('//pl.', '//')
    .replace('//pm.', '//')
    .replace('bdev.', 'ng')
    .replace('bqa.', 'qa')
    .replace('buat.', 'uat')
    .replace('staging.', 'staging')
    .replace('lumafintech.com', 'portal.lumafintech.com');
  // CF links are different for staging and production
  if (
    updatedUrl.startsWith('https://portal.lumafintech.com') ||
    updatedUrl.startsWith('https://stagingportal.lumafintech.com')
  ) {
    return updatedUrl.replace('lumafintech', 'naviancapital');
  } else return updatedUrl;
};

// NOTE: AD-HOC TESTS FOR THE ABOVE METHOD, uncomment to use in console
// TODO - turn these into specs
// EXPECT THE FOLLOWING TO OUTPUT https://ngportal.lumafintech.com
// console.log('getColdFusionBaseUrl("http://localhost:4200")', getColdFusionBaseUrl('http://localhost:4200'), '\n');
// console.log('getColdFusionBaseUrl("https://app.staging.lumafintech.com")', getColdFusionBaseUrl('https://stagingportal.lumafintech.com'), '\n');

export const getColdFusionLink = (page: string, section: string | null) => {
  return `${getColdFusionBaseUrl()}/cdfg/WebPages/${page}.cfm?${
    section ? `section=${section}&` : ''
  }`;
};

export const getColdFusionLinkAppVersion = (
  page: string,
  section: string | null
) => {
  return `${getColdFusionBaseUrl()}/cdfg/app/${page}.cfm?${
    section ? `section=${section}&` : ''
  }`;
};

const STRUCTURED_PRODUCTS_PRODUCT_TYPES = {
  LINKED_CDS: "Market Linked CD's",
  STRUCTURED_NOTES: 'Structured Notes',
};
const structuredProductTypes = [
  STRUCTURED_PRODUCTS_PRODUCT_TYPES.LINKED_CDS,
  STRUCTURED_PRODUCTS_PRODUCT_TYPES.STRUCTURED_NOTES,
];
const ANNUITY_PRODUCT_TYPES = {
  ALL: 'ALL',
  DIA_SPIA: 'DIA/SPIA',
  FIA: 'FIA',
  FIXED_RATE: 'Fixed Rate',
  RILA: 'RILA',
  VARIABLE_ANNUITIES: 'Variable Annuities',
};
const annuityProductTypes = [
  ANNUITY_PRODUCT_TYPES.VARIABLE_ANNUITIES,
  ANNUITY_PRODUCT_TYPES.DIA_SPIA,
  ANNUITY_PRODUCT_TYPES.FIA,
  ANNUITY_PRODUCT_TYPES.FIXED_RATE,
  ANNUITY_PRODUCT_TYPES.RILA,
];
export const isAnnuityOnly = (productTypes: ProductTypesType) =>
  productTypes.length > 0 &&
  !structuredProductTypes.some((product) => productTypes.includes(product));

export const isStructuredProductsOnly = (productTypes: ProductTypesType) =>
  productTypes.length === 0 ||
  !annuityProductTypes.some((product) => productTypes.includes(product));

export const filterNavTabs = (
  navTabs: NavTabType[],
  userPermissions: UserPermissionsType,
  isProduction: boolean,
  company?: string | null | undefined
): NavTabType[] => {
  const filteredNavTabs = filterLinks(
    navTabs,
    userPermissions,
    isProduction,
    company
  );

  filteredNavTabs.forEach((link) => {
    if (link.children) {
      link.children = filterLinks(
        link.children,
        userPermissions,
        isProduction,
        company
      );
    }
  });

  return filteredNavTabs;
};

// Added because some companies don't want access to LM but their common role has the permission
// This is temporary and should not be used as a long term solution
const filterLmFromSomeCompanies = (company: string | null | undefined) => {
  const COMPANIES_TO_BLOCK_LM_ACCESS = ['Highland Capital', 'Ash Brokerage'];
  return company && COMPANIES_TO_BLOCK_LM_ACCESS.includes(company);
};

const filterLinks = <T extends BaseRouteType>(
  links: T[],
  userPermissions: UserPermissionsType,
  isProduction: boolean,
  company?: string | null | undefined
): T[] => {
  return links.filter((link) => {
    if (link.title === ROUTE_KEYS.COMPANY_ADMIN && isProduction) {
      return false;
    }

    if (
      link.title === ROUTE_KEYS.LIFECYCLE &&
      filterLmFromSomeCompanies(company)
    ) {
      return false;
    }

    return userHasAccess(link.permissions, userPermissions);
  });
};

export const userHasAccess = (
  linkPermissions: string[] | undefined,
  userPermissions: string[]
) =>
  !linkPermissions ||
  linkPermissions.some((linkPermission) =>
    userPermissions.some(
      (userPermission) =>
        linkPermission?.toLowerCase() === userPermission?.toLowerCase()
    )
  );
