"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = void 0;
/* eslint no-restricted-imports: "off" */
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
class DateHelper {
}
exports.DateHelper = DateHelper;
/**
 * Returns the date N minutes in the future.
 *
 * @param {Date} date - the Date object you want to edit
 * @param {number} amount - how many minutes to be added
 * @returns {Date} a Date object 7 minutes in the future
 *
 */
DateHelper.addMinutes = (date, amount) => (0, date_fns_1.addMinutes)(date, amount);
/**
 * Returns the date N days in the future.
 *
 * @param {Date} date - the Date object you want to edit
 * @param {number} amount - how many days to be added
 * @returns {Date} a Date object 7 days in the future
 *
 */
DateHelper.addDays = (date, amount) => (0, date_fns_1.addDays)(date, amount);
/**
 * Returns the date 7 days in the future.
 *
 * @param {Date} date - the Date object you want to edit
 * @returns {Date} a Date object 7 days in the future
 *
 */
DateHelper.addWeek = (date) => (0, date_fns_1.addDays)(date, 7);
/**
 * Returns the date N weeks in the future.
 *
 * @param {Date} date - the Date object you want to edit
 * @param {number} amount - how many weeks to be added
 * @returns {Date} a Date object N days in the future
 *
 */
DateHelper.addWeeks = (date, amount) => (0, date_fns_1.addWeeks)(date, amount);
/**
 * Returns the date converted to UTC
 *
 * @param {Date} date - takes in a date/string/number, which gets converted to timezone: UTC
 * @returns {Date} a Date object converted to UTC
 *
 */
DateHelper.convertToUTC = (date) => (0, date_fns_tz_1.toDate)(date, { timeZone: 'UTC' });
/**
 * Returns true if dateA is before dateB
 *
 * @param {Date} dateA
 * @param {Date} dateB
 * @returns {Boolean}
 */
DateHelper.isDateBefore = (dateA, dateB) => (0, date_fns_1.isBefore)(dateA, dateB);
DateHelper.addMilliseconds = (date, amount) => (0, date_fns_1.addMilliseconds)(date, amount);
DateHelper.differenceInMilliseconds = (firstDate, secondDate) => (0, date_fns_1.differenceInMilliseconds)(firstDate, secondDate);
DateHelper.addMonths = (date, amount) => (0, date_fns_1.addMonths)(date, amount);
DateHelper.endOfMonth = (date) => (0, date_fns_1.endOfMonth)(date);
DateHelper.subtractMinutes = (date, amount) => (0, date_fns_1.subMinutes)(date, amount);
/**
 * Returns true if the date is less than or equal to 30 days old
 *
 * @param {Date} date
 * @returns {Boolean}
 */
DateHelper.underThirtyDaysOld = (date) => {
    const thirtyDaysInMilliseconds = 2592000000;
    const todayTimeInMilliseconds = new Date().getTime();
    return todayTimeInMilliseconds - date.getTime() <= thirtyDaysInMilliseconds;
};
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
//# sourceMappingURL=date.helper.js.map