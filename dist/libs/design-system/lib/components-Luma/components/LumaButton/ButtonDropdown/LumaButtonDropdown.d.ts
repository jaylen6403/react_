/// <reference types="react" />
import { DataItemProps } from '../../LumaDropdown/LumaDropDownBasicType';
import { LumaButtonProps } from '../LumaButton';
export interface DropdownButtonProps extends LumaButtonProps {
    /**
     * unique key for the dropdown
     */
    id: string;
    /**
     * Array items that will be in the dropdown list
     */
    dropdownItems?: DataItemProps[];
    /**
     * onChange action on dropdown.
     */
    onChangeDropdown?: (newItem: DataItemProps | null) => void;
    /**
     * Specifies if dropdown list open to the top or to the bottom in the split button.
     */
    dropdownPosition?: 'top' | 'bottom';
}
export declare const LumaButtonDropdown: ({ id, dropdownItems, onChangeDropdown, dropdownPosition, ...rest }: DropdownButtonProps) => JSX.Element;
