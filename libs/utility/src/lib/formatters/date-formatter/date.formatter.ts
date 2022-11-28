/* eslint no-restricted-imports: "off" */
import { format } from 'date-fns';

export class DateFormatter {
  /**
   * Returns the date in YYYY-MM-DD(2022-01-01) format.
   *
   * @param {Date}  date - the Date object you want formatted
   * @param {String} formatStr - the string in which you want the date to represent
   * @returns {string} a string of the formatted date object
   *
   */
  static formatLocalDate = (date: Date, formatStr = 'yyyy-MM-dd') =>
    format(date, formatStr);

  static formatDateForEventConfirmations = (date: Date) => {
    const dates = format(date, `MMM/dd/yyyy`);
    const splitDate = dates.split('/');
    return `${splitDate[0].toUpperCase()}/${splitDate[1]}/${splitDate[2]}`;
  };
}
