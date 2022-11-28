/* eslint no-restricted-imports: "off" */
import {
  addMilliseconds,
  addMinutes,
  addDays,
  addWeeks,
  addMonths,
  isBefore,
  endOfMonth,
  differenceInMilliseconds,
  subMinutes,
} from 'date-fns';
import { toDate } from 'date-fns-tz';

export class DateHelper {
  /**
   * Returns the date N minutes in the future.
   *
   * @param {Date} date - the Date object you want to edit
   * @param {number} amount - how many minutes to be added
   * @returns {Date} a Date object 7 minutes in the future
   *
   */
  static addMinutes = (date: Date, amount: number): Date =>
    addMinutes(date, amount);

  /**
   * Returns the date N days in the future.
   *
   * @param {Date} date - the Date object you want to edit
   * @param {number} amount - how many days to be added
   * @returns {Date} a Date object 7 days in the future
   *
   */
  static addDays = (date: Date, amount: number): Date => addDays(date, amount);

  /**
   * Returns the date 7 days in the future.
   *
   * @param {Date} date - the Date object you want to edit
   * @returns {Date} a Date object 7 days in the future
   *
   */
  static addWeek = (date: Date): Date => addDays(date, 7);

  /**
   * Returns the date N weeks in the future.
   *
   * @param {Date} date - the Date object you want to edit
   * @param {number} amount - how many weeks to be added
   * @returns {Date} a Date object N days in the future
   *
   */
  static addWeeks = (date: Date, amount: number): Date =>
    addWeeks(date, amount);

  /**
   * Returns the date converted to UTC
   *
   * @param {Date} date - takes in a date/string/number, which gets converted to timezone: UTC
   * @returns {Date} a Date object converted to UTC
   *
   */
  static convertToUTC = (date: Date | string | number): Date =>
    toDate(date, { timeZone: 'UTC' });

  /**
   * Returns true if dateA is before dateB
   *
   * @param {Date} dateA
   * @param {Date} dateB
   * @returns {Boolean}
   */
  static isDateBefore = (dateA: Date | number, dateB: Date | number): boolean =>
    isBefore(dateA, dateB);

  static addMilliseconds = (date: Date | number, amount: number): Date =>
    addMilliseconds(date, amount);

  static differenceInMilliseconds = (
    firstDate: Date,
    secondDate: Date
  ): number => differenceInMilliseconds(firstDate, secondDate);

  static addMonths = (date: Date | number, amount: number) =>
    addMonths(date, amount);

  static endOfMonth = (date: Date | number) => endOfMonth(date);

  static subtractMinutes = (date: Date | number, amount: number): Date =>
    subMinutes(date, amount);

  /**
   * Returns true if the date is less than or equal to 30 days old
   *
   * @param {Date} date
   * @returns {Boolean}
   */
  static underThirtyDaysOld = (date: Date): boolean => {
    const thirtyDaysInMilliseconds = 2592000000;
    const todayTimeInMilliseconds = new Date().getTime();

    return todayTimeInMilliseconds - date.getTime() <= thirtyDaysInMilliseconds;
  };
}

// export const DateHelper = {
//   Add: {
//     Week: DateHelper.addWeek,
//   },
// };
//
// export namespace DateTest {
//   export class Add {
//     static Months = () => 1;
//   }
// }
