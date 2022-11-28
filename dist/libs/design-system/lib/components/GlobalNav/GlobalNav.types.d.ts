export declare type NavigateHandlerType = (tab: RouteChild) => boolean | void;
export interface BaseRouteType {
    /**
     * text to be displayed on the tab
     */
    title: string;
    /**
     * frontend route tab should navigate to when selected
     */
    route?: string;
    url?: string;
    permissions?: string[];
}
export interface RouteChild extends BaseRouteType {
    parent?: string;
}
export interface NavTabType extends BaseRouteType {
    /**
     * optional, if main tab has a dropdown associated
     */
    children?: RouteChild[];
    icon?: string;
}
export interface NavTabTypeWithChildren extends NavTabType {
    children: RouteChild[];
}
export declare type Variant = 'primary' | 'secondary';
export declare enum FrontEndLibraries {
    REACT = "REACT",
    ANGULAR = "ANGULAR"
}
export declare type UserPermissionsType = string[];
export declare type ProductTypesType = string[];
export declare enum ENV {
    PROD = "PROD",
    STAGING = "STAGING",
    UAT = "UAT",
    QA = "QA",
    DEV = "DEV",
    LOCAL = "LOCAL"
}
