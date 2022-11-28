import * as React from 'react';
import { Variant } from '../DropdownBase.styles';
import { BaseMenuItem } from '../DropdownBase.types';
export interface MenuItem<T> extends BaseMenuItem {
    /**
     * Text alignment.
     */
    alignment?: 'left' | 'center' | 'right';
    /**
     * Only for Action Links - Click handler for that action link.
     */
    onClick?: () => void;
    /**
     * Meta data to be attached to an item.
     */
    meta?: T;
    /**
     * Width of the item.
     */
    width?: string;
}
interface MultiSelectProps<T> {
    /**
     * Action links to be rendered on top of checkboxes.
     */
    actions?: MenuItem<T>[];
    /**
     * Aria label for the select button in case id is not passed and linked aria-labelledby.
     */
    ariaLabel?: string;
    /**
     * Aria labelledby.
     */
    ariaLabelledBy?: string;
    /**
     * Available className to be attached to the root element.
     */
    className?: string;
    /**
     * Option to include the chevron indicator.
     */
    hasIndicator?: boolean;
    /**
     * Id to be attached to a button.
     */
    id?: string;
    /**
     * Disable the select button.
     */
    isDisabled?: boolean;
    /**
     * Multi-select checkbox items.
     */
    items: MenuItem<T>[];
    /**
     * Handler for blur event.
     */
    onBlur?: () => void;
    /**
     * Handler for change event which includes the suggested list of items and the item clicked.
     */
    onChange?: (items: MenuItem<T>[], meta: MenuItem<T>) => void;
    /**
     * Text for select button.
     */
    placeholder: React.ReactNode;
    /**
     * List of selected items to be checked.
     */
    selectedItems: MenuItem<T>[];
    /**
     * Style variant.
     */
    variant: Variant;
}
export declare function MultiSelect<T>({ actions, ariaLabel, ariaLabelledBy, className, hasIndicator, id, isDisabled, items, onBlur, onChange, placeholder, selectedItems, variant, }: MultiSelectProps<T>): JSX.Element;
export {};
