import * as React from 'react';
import { BaseMenuItem } from '../DropdownBase.types';
import { IconCode } from '../../Icon/Icon';
import { Variant } from '../DropdownBase.styles';
export interface MenuItem<T> extends BaseMenuItem {
    value: T;
}
interface SingleSelectProps<T> {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    className?: string;
    hasIndicator?: boolean;
    id?: string;
    isDisabled?: boolean;
    items: MenuItem<T>[];
    onBlur?: () => void;
    onChange?: (item?: MenuItem<T> | null) => void;
    placeholder: React.ReactNode;
    selectedItem?: MenuItem<T>;
    variant: Variant;
    noHighlight?: boolean;
    iconCode?: IconCode;
    iconPrefix?: 'fal' | 'fas' | 'far';
}
export declare function SingleSelect<T>({ ariaLabel, ariaLabelledBy, className, hasIndicator, id, items, onChange, onBlur, variant, selectedItem, placeholder, noHighlight, iconCode, iconPrefix, }: SingleSelectProps<T>): JSX.Element;
export {};
