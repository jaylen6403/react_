export type NavigateHandlerType = (tab: RouteChild) => boolean | void;

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

export type Variant = 'primary' | 'secondary';

export enum FrontEndLibraries {
  REACT = 'REACT',
  ANGULAR = 'ANGULAR',
}

export type UserPermissionsType = string[];

export type ProductTypesType = string[];

export enum ENV {
  PROD = 'PROD',
  STAGING = 'STAGING',
  UAT = 'UAT',
  QA = 'QA',
  DEV = 'DEV',
  LOCAL = 'LOCAL',
}
