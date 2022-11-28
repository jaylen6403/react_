import * as React from 'react';
interface Props<Item> {
    items: Item[];
    initialValue: string;
    handleSelectItem?: (item: Item | null | undefined) => void;
    handleChange?: (value: string | undefined) => void;
    handleBlur?: () => void;
    itemToString?: (item: Item | null) => string;
    placeholder?: string;
    renderContent: React.ReactElement<{
        item: Item;
    }>;
    inputAriaLabel: string;
    buttonAriaLabel: string;
    width?: string;
    marginRight?: string;
}
export declare const Search: <Item>({ items, initialValue, handleSelectItem, handleChange, handleBlur, renderContent, itemToString, inputAriaLabel, buttonAriaLabel, width, marginRight, ...rest }: Props<Item>) => JSX.Element;
export {};
