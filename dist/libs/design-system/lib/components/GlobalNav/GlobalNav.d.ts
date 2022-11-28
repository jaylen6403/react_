/// <reference types="react" />
import { NavigateHandlerType, NavTabType } from './GlobalNav.types';
interface GlobalNavProps {
    userName: string;
    logout: () => void;
    /**
     * array of data that will define and compile navbar tabs (names, links, dropdown boolean)
     */
    tabs: NavTabType[];
    /**
     * outside company logo img source
     */
    issuerLogo?: string;
    /**
     * width property of logo
     */
    logoWidth?: string;
    /**
     * height property of logo
     */
    logoHeight?: string;
    /**
     * aria label for the profile/account button
     */
    accountAriaLabel: string;
    /**
     * aria label for the bars/mobile menu button
     */
    menuAriaLabel: string;
    /**
     * on click handler for navigation and setting active tab
     */
    handleNavigate: NavigateHandlerType;
}
export declare const GlobalNav: ({ userName, logout, tabs, issuerLogo, logoWidth, logoHeight, accountAriaLabel, menuAriaLabel, handleNavigate, }: GlobalNavProps) => JSX.Element;
export {};
