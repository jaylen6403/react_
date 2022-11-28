/// <reference types="react" />
interface CalendarBodyProps {
    /** Selected Date */
    selected: Date | undefined;
    /** Change date when click on calendar days */
    onChangeCurrentDate: (day: Date) => void;
    /**input selected value */
    month: Date;
}
export declare const CalendarBody: ({ selected, onChangeCurrentDate, month, }: CalendarBodyProps) => JSX.Element;
export {};
