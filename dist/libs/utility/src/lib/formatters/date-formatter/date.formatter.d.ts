export declare class DateFormatter {
    /**
     * Returns the date in YYYY-MM-DD(2022-01-01) format.
     *
     * @param {Date}  date - the Date object you want formatted
     * @param {String} formatStr - the string in which you want the date to represent
     * @returns {string} a string of the formatted date object
     *
     */
    static formatLocalDate: (date: Date, formatStr?: string) => string;
    static formatDateForEventConfirmations: (date: Date) => string;
}
