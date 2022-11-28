import * as React from 'react';
import { Variant } from './DropdownBase.styles';
import { BaseMenuItem } from './DropdownBase.types';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export interface MenuItem extends BaseMenuItem {
    onClick: (e?: React.SyntheticEvent) => void;
}
interface DropdownProps {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    className?: string;
    /**
     * Used to control whether the dropdown button has a down arrow
     */
    hasIndicator?: boolean;
    /**
     * Used to control whether each menu item in the dropdown list has a down arrow
     */
    hasSubMenuIndicator?: boolean;
    id?: string;
    isDisabled?: boolean;
    items: MenuItem[];
    onBlur?: () => void;
    placeholder: React.ReactNode;
    variant: Variant;
    header?: React.ReactNode;
    iconCodeLeft?: IconName;
    /**
     * Tooltip text for the dropdown
     */
    title?: string;
}
export declare function Dropdown({ ariaLabel, ariaLabelledBy, className, hasIndicator, hasSubMenuIndicator, id, isDisabled, items, onBlur, placeholder, variant, header, iconCodeLeft, title, }: DropdownProps): JSX.Element;
export {};
