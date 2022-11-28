import { Dispatch, SetStateAction } from 'react';
import { NavigateHandlerType, NavTabTypeWithChildren, Variant } from '../GlobalNav.types';
interface Props {
    tab: NavTabTypeWithChildren;
    variantType: Variant;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    handleNavigate: NavigateHandlerType;
    activeMobileDropdown: string | null;
    setActiveMobileDropdown: Dispatch<SetStateAction<string | null>>;
    parentActiveTab: string | undefined;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}
export declare const MobileDropdownTab: ({ tab, activeMobileDropdown, setActiveMobileDropdown, variantType, parentActiveTab, setParentActiveTab, activeTab, setActiveTab, menuOpen, setMenuOpen, handleNavigate, }: Props) => JSX.Element;
export {};
