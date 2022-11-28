/// <reference types="react" />
export declare enum ChangeDirections {
    previous = "previous",
    next = "next"
}
interface DateDropDownProps {
    /** Date change function */
    onChangeHandler: (selected: Date) => void;
    /**Mode/Type of field*/
    variant: 'date' | 'time' | 'datetime';
    /**Calendar Dropdown open/close on focus*/
    isOpen: boolean;
    /** size will make the field small, medium or large size */
    size?: 'small' | 'medium' | 'large';
    /** handle closing of dropdown */
    onDropdownClose?: () => void;
    /** if any date selected already */
    selected?: Date;
}
export declare const DatePickerDropDown: ({ onChangeHandler, size, onDropdownClose, selected, }: DateDropDownProps) => JSX.Element;
export {};
