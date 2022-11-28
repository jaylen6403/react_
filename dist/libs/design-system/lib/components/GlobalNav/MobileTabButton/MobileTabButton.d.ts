import { Dispatch, SetStateAction } from 'react';
import { NavigateHandlerType, RouteChild, Variant } from '../GlobalNav.types';
interface Props {
    item: RouteChild;
    variantType: Variant;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    handleNavigate: NavigateHandlerType;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}
export declare const MobileTabButton: ({ variantType, item, setActiveTab, menuOpen, setMenuOpen, activeTab, handleNavigate, setParentActiveTab, }: Props) => JSX.Element;
export {};
