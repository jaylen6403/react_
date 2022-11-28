import { ReactElement, FocusEvent } from 'react';
import { SIZE_MAP } from './LumaTextSearch.style';
import { DataItemProps, TextSearchItem } from '../LumaDropdown/LumaDropDownBasicType';
export interface TextSearchProps<Item> {
    /**Give a unique id for the field */
    id: string;
    /**ClassName is the normal class */
    className?: string;
    /**Error will act when user need to show validation error */
    error?: boolean;
    /**helperText will show a label below the box for showing information or error message */
    helperText?: string;
    /**component will be readonly*/
    readOnly?: boolean;
    /**fullwidth will make the field 100% width  */
    fullWidth?: boolean;
    /**disabled will disable the field
     * @default false
     */
    disabled?: boolean;
    /**size will make the field small, medium or large size
     * @default medium
     */
    sizeVariant?: keyof typeof SIZE_MAP;
    /**act like a placeholder */
    placeholder?: string;
    /**data array for dropdown */
    items: Item[];
    /**action item selection a dropdown */
    handleSelectItem?: (item: Item | null | undefined) => void;
    /**action item on change item */
    handleChange?: (value: string | undefined) => void;
    /**action item on blur*/
    handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /**action to output string */
    itemToString?: (item: DataItemProps | TextSearchItem | null) => string;
    /**Template of the dropdown item */
    renderContent: ReactElement<{
        item: Item;
    }>;
    /**Input box aria label */
    inputAriaLabel: string;
    /**button box aria label */
    buttonAriaLabel: string;
    /**variant: this props will change dropdown result
     * Two main format of dropdown result will be:
     * standard:
     * -------------------------
     * -- <option>            --
     * -- <option>            --
     * -------------------------
     * underlier:
     * -------------------------
     * -- xxxxxx | <option>   --
     * -- xxxxxx | <option>   --
     * -------------------------
     * @default standard
     */
    variant?: 'standard' | 'underlier';
    /**ErrorMessage Template */
    errorTemplate?: ReactElement;
    /**Default value that will be shown in Text Search*/
    defaultValue?: string;
}
declare type RenderContentProps = {
    item?: {
        label: string;
        id: string;
    };
    variant?: 'standard' | 'underlier';
};
export declare const RenderContent: ({ item, variant }: RenderContentProps) => JSX.Element;
export declare const LumaTextSearch: <Item>({ id, placeholder, className, error, readOnly, fullWidth, disabled, helperText, sizeVariant, items, handleSelectItem, handleChange, handleBlur, itemToString, inputAriaLabel, buttonAriaLabel, renderContent, variant, defaultValue, errorTemplate, ...rest }: TextSearchProps<Item>) => JSX.Element;
export {};
