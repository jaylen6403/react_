import * as React from 'react';
import { DataItemProps, SizeType } from '../LumaDropdown/LumaDropDownBasicType';
import { UseComboboxGetItemPropsOptions } from 'downshift';
/** Interface for dropdown box */
export interface DropDownBoxInterface<Item> {
    disabled?: boolean;
    items: Item[];
    getMenuProps?: () => void;
    getItemProps?: (options: UseComboboxGetItemPropsOptions<Item>) => void;
    isOpen?: boolean;
    highlightedIndex?: number;
    size?: SizeType;
    renderComponent?: React.ReactElement<{
        item: Item;
    }>;
    itemToString?: (item: DataItemProps | null) => string;
    selectedItem?: DataItemProps | null;
    variant?: 'standard' | 'underlier' | 'single' | 'multi' | 'no-border-top' | 'no-border-bottom';
    id: string;
    selectedItems?: DataItemProps[];
    errorTemplate?: React.ReactElement;
}
export declare const LumaDropDownBox: <Item>({ items, disabled, getMenuProps, getItemProps, isOpen, highlightedIndex, size, renderComponent, selectedItem, itemToString, variant, selectedItems, id, errorTemplate, }: DropDownBoxInterface<Item>) => JSX.Element;
