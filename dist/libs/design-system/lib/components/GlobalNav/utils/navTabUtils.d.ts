import { ENV, FrontEndLibraries, NavTabType, NavTabTypeWithChildren, ProductTypesType, UserPermissionsType } from '../GlobalNav.types';
import { ROUTE_KEYS } from './routes';
export declare const getAngularLink: (url?: string | undefined) => string;
export declare const isTabDropdown: (tab: NavTabType) => tab is NavTabTypeWithChildren;
export declare const isProduction: () => boolean;
export declare const isStaging: () => boolean;
export declare const isUAT: () => boolean;
export declare const isQA: () => boolean;
export declare const isDev: () => boolean;
export declare const isHigherEnvironment: () => boolean;
/**
 * generateAppUrl: takes a route to append to the end of the generated base url
 * and a destination library that determines if the base url should be for the angular app or the react app deployment.
 *
 * This function derives the correct environment-specific url based on the current window.origin and the desired destination.
 */
export declare const generateAppUrl: (route: string, destinationLibrary: FrontEndLibraries, env?: ENV) => string;
export declare const determineNavRouteOrUrl: (frontEndLibrary: FrontEndLibraries, routeKey: ROUTE_KEYS, userPermissions: UserPermissionsType) => Partial<NavTabType>;
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
export declare const getColdFusionBaseUrl: (origin?: string | undefined) => string;
export declare const getColdFusionLink: (page: string, section: string | null) => string;
export declare const getColdFusionLinkAppVersion: (page: string, section: string | null) => string;
export declare const isAnnuityOnly: (productTypes: ProductTypesType) => boolean;
export declare const isStructuredProductsOnly: (productTypes: ProductTypesType) => boolean;
export declare const filterNavTabs: (navTabs: NavTabType[], userPermissions: UserPermissionsType, isProduction: boolean, pricingToolType: string | undefined, company?: string | null | undefined) => NavTabType[];
export declare const userHasAccess: (linkPermissions: string[] | undefined, userPermissions: string[]) => boolean;
