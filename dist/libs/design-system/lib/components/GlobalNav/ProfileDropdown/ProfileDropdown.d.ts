import { Dispatch, SetStateAction } from 'react';
import type { Variant } from '..';
interface Props {
    userName: string;
    isMobile: boolean;
    variantType: Variant;
    accountAriaLabel?: string;
    logout: () => void;
    activeMobileDropdown?: string | null;
    setActiveMobileDropdown?: Dispatch<SetStateAction<string | null>>;
}
export declare const ProfileDropdown: ({ userName, isMobile, variantType, accountAriaLabel, logout, activeMobileDropdown, setActiveMobileDropdown, }: Props) => JSX.Element;
export {};
