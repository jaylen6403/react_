import { Dispatch, SetStateAction } from 'react';
import { NavTabTypeWithChildren, Variant, NavigateHandlerType } from '../GlobalNav.types';
interface Props {
    tab: NavTabTypeWithChildren;
    activeTab: string;
    handleNavigate: NavigateHandlerType;
    setActiveTab: Dispatch<SetStateAction<string>>;
    variantType: Variant;
    parentActiveTab: string | undefined;
    setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}
export declare const DropdownNavTab: ({ tab, activeTab, setActiveTab, handleNavigate, variantType, parentActiveTab, setParentActiveTab, }: Props) => JSX.Element;
export {};
