/// <reference types="react" />
import { ChangeDirections } from './LumaDatePickerDropDown';
interface CalendarHeadProps {
    /** Selected date */
    month: Date;
    /** function for change month */
    onChangeMonth: (buttonType: ChangeDirections.previous | ChangeDirections.next) => void;
    /** function for change year */
    onChangeYear: (buttonType: ChangeDirections.previous | ChangeDirections.next) => void;
}
export declare const CalendarDropDownHeader: ({ month, onChangeMonth, onChangeYear, }: CalendarHeadProps) => JSX.Element;
export {};
