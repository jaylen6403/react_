/// <reference types="react" />
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';
export interface FilterProps {
    /**
     * Defines if dropdown is disabled.
     */
    disabled?: boolean;
    /**
     * Currently selected value.
     */
    active?: boolean;
    /**
     * Label displaying on the left side.
     */
    label?: string;
    /**
     * Array items that will be in the dropdown list
     */
    dropdownItems?: DataItemProps[];
    /**
     * onChange action on dropdown.
     */
    onChangeDropdown?: (newItem: DataItemProps | null) => void;
    /**
     * id of filter.
     */
    id: string;
    /**
     * Default choosen value.
     */
    defaltValue?: DataItemProps;
}
export declare const LumaFilter: ({ disabled, active, label, defaltValue, dropdownItems, onChangeDropdown, id, }: FilterProps) => JSX.Element;
