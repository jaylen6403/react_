import { NavTabType, FrontEndLibraries, ProductTypesType, UserPermissionsType } from '../GlobalNav.types';
export declare const loadDefaultNavTabs: (frontEndLibrary: FrontEndLibraries) => NavTabType[];
export declare const buildHomeTab: (frontEndLibrary: FrontEndLibraries, userPermissions: UserPermissionsType) => NavTabType;
export declare const buildNavTabs: (userPermissions: UserPermissionsType, userTrainingDataProductTypes: ProductTypesType, pricingToolType: string | undefined, frontEndLibrary: FrontEndLibraries, isProduction: boolean, company?: string | null | undefined) => NavTabType[];
