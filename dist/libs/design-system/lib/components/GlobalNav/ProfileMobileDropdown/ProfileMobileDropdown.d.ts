import { SetStateAction, Dispatch } from 'react';
import type { Variant } from '..';
interface Props {
    userName: string;
    items: {
        name: string;
        showItem: boolean;
        onClick: null | (() => void);
        disabled: boolean;
    }[];
    activeMobileDropdown?: string | null;
    setActiveMobileDropdown?: Dispatch<SetStateAction<string | null>>;
    variantType: Variant;
}
export declare const ProfileMobileDropdown: ({ userName, items, activeMobileDropdown, setActiveMobileDropdown, variantType, }: Props) => JSX.Element;
export {};
