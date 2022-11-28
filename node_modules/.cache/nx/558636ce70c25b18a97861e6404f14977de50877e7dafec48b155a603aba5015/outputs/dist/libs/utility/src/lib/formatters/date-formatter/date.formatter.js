"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
/* eslint no-restricted-imports: "off" */
const date_fns_1 = require("date-fns");
class DateFormatter {
}
exports.DateFormatter = DateFormatter;
/**
 * Returns the date in YYYY-MM-DD(2022-01-01) format.
 *
 * @param {Date}  date - the Date object you want formatted
 * @param {String} formatStr - the string in which you want the date to represent
 * @returns {string} a string of the formatted date object
 *
 */
DateFormatter.formatLocalDate = (date, formatStr = 'yyyy-MM-dd') => (0, date_fns_1.format)(date, formatStr);
DateFormatter.formatDateForEventConfirmations = (date) => {
    const dates = (0, date_fns_1.format)(date, `MMM/dd/yyyy`);
    const splitDate = dates.split('/');
    return `${splitDate[0].toUpperCase()}/${splitDate[1]}/${splitDate[2]}`;
};
//# sourceMappingURL=date.formatter.js.map