import { Dispatch, SetStateAction } from 'react';
import { NavigateHandlerType, NavTabType, Variant } from '../GlobalNav.types';
interface NavTabBarProps {
    /**
     * array of data that will define and complie navbar tabs (titles, routes, dropdown boolean)
     */
    tabs: NavTabType[];
    /**
     * styling variant, primary if default luma environment, secondary for whitelabel
     */
    variantType: Variant;
    /**
     * current active tab, passed in for active tab styling
     */
    activeTab: string;
    /**
     * sets the active tab
     */
    setActiveTab: Dispatch<SetStateAction<string>>;
    /**
     * on click handler for navigation and seting active tab
     */
    handleNavigate: NavigateHandlerType;
    parentActiveTab: string | undefined;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}
export declare const NavTabBar: ({ tabs, activeTab, setActiveTab, handleNavigate, variantType, parentActiveTab, setParentActiveTab, }: NavTabBarProps) => JSX.Element;
export {};
