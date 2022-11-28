import { FocusEvent } from 'react';
import { IconCode, IconProps } from '../LumaIcon';
export declare type SizeType = 'small' | 'medium' | 'large' | 'top' | 'bottom';
export interface DataItemProps {
    /**  displayed item's label in the list */
    label?: string;
    /**  item value in dropdown */
    value?: string | number;
    /** function value in dropdown - when string or number are not enough */
    action?: (arg: any) => void;
    /** checkbox index for multidropdown */
    checkboxIndex?: number;
    /**
     * code for the icon that will be displayed
     * to the right of the item in the dropdown list
     */
    iconCode?: IconCode;
    /**
     * Sets the name of the section
     * that is displayed above this item
     */
    sectionName?: string;
    /**
     * Determines whether the item is disabled
     */
    isDisabled?: boolean;
}
export interface CommonDropdownProps {
    /**  A name(string) for the field */
    name: string;
    /** A unique id for the field */
    id: string;
    /** Whether input has an error */
    error?: boolean;
    /**  helperText will show a label below the box for showing information or error message */
    helperText?: string;
    /** input will be readonly */
    readOnly?: boolean;
    /** fullwidth will make the field 100% width  */
    fullWidth?: boolean;
    /** disabled will disable the field */
    disabled?: boolean;
    /** sets the size of the dropdown */
    size?: SizeType;
    /** act like a placeholder */
    placeholder?: string;
    /** allows to use dropdown as styled component */
    className?: string;
    /** data array for dropdown */
    items: DataItemProps[];
    /** action item on blur */
    handleBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /** action to output string */
    itemToString?: (item: DataItemProps | null) => string;
}
export interface LumaSingleDropDownProps extends CommonDropdownProps {
    /** For selected data */
    defaultSelectedItem?: DataItemProps;
    /** action item selection a dropdown */
    onChange?: (newItem: DataItemProps | null) => void;
    /** dropDownIcon */
    dropDownIcon?: IconCode;
    /** The type of font-awesome icon the dropdown should show  */
    dropDownIconType?: IconProps['type'];
}
export interface LumaMultiDropDownProps extends CommonDropdownProps {
    /** For selected data */
    defaultSelectedItems?: DataItemProps[];
    /** action item selection a dropdown */
    onChange?: (newItems: DataItemProps[]) => void;
}
export declare const MaxLengthValue = 15;
export declare type getItemProps = {
    item: DataItemProps | TextSearchItem;
    index: number;
    disabled?: boolean;
};
export declare type TextSearchItem = {
    label: string;
    id: string;
};
