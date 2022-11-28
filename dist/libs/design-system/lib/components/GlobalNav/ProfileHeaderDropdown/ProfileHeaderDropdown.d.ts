/// <reference types="react" />
import type { Variant } from '..';
interface Props {
    userName: string;
    items: {
        name: string;
        showItem: boolean;
        onClick: null | (() => void);
        disabled: boolean;
    }[];
    variantType: Variant;
    accountAriaLabel: string;
}
export declare const ProfileHeaderDropdown: ({ userName, items, accountAriaLabel, variantType, }: Props) => JSX.Element;
export {};
