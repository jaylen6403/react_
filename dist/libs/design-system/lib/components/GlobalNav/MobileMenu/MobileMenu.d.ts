import { Dispatch, SetStateAction } from 'react';
import { NavTabType, Variant } from '..';
import { NavigateHandlerType } from '../GlobalNav.types';
interface Props {
    userName: string;
    isMobile: boolean;
    logout: () => void;
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
     * styling variant, primary if default luma environment, secondary for whitelabel
     */
    variantType: Variant;
    /**
     * aria label for the bars/mobile menu button
     */
    menuAriaLabel: string;
    /**
     * array of data that will define and complie navbar tabs (names, links, dropdown boolean)
     */
    tabs: NavTabType[];
    /**
     * current active tab, passed in for active tab styling
     */
    activeTab: string;
    /**
     * sets the active tab
     */
    setActiveTab: Dispatch<SetStateAction<string>>;
    /**
     * on click handler for navigation
     */
    handleNavigate: NavigateHandlerType;
    parentActiveTab: string | undefined;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}
export declare const MobileMenu: ({ issuerLogo, logoWidth, logoHeight, menuAriaLabel, tabs, handleNavigate, activeTab, setActiveTab, variantType, parentActiveTab, setParentActiveTab, userName, isMobile, logout, }: Props) => JSX.Element;
export {};
