import { SetStateAction, Dispatch } from 'react';
import { NavigateHandlerType, NavTabType, Variant } from '../GlobalNav.types';
interface Props {
    tab: NavTabType;
    variantType: Variant;
    activeTab: string;
    setActiveTab: Dispatch<SetStateAction<string>>;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
    handleNavigate: NavigateHandlerType;
}
export declare const NavTabButton: ({ tab, variantType, activeTab, setActiveTab, handleNavigate, setParentActiveTab, }: Props) => JSX.Element;
export {};
