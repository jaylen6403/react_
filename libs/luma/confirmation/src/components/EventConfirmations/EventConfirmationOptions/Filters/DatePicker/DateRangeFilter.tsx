import { useMemo } from 'react';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DatePickerWrapperStyles,
  CalendarIcon,
  DatePickerWrapper,
} from './DateRangeFilter.styles';
import { DateHelper } from '@luma-fe-workspace/utility';

export const DateRangeFilter = () => {
  const { dateRangeFilter } = useEventConfirmationOptions();

  const minDate = useMemo(() => {
    const minDateValue = new Date();

    minDateValue.setDate(minDateValue.getDate() - 30);
    return minDateValue;
  }, []);

  const maxDate = useMemo(() => {
    const maxDateValue = new Date();

    maxDateValue.setDate(maxDateValue.getDate() + 365);
    return maxDateValue;
  }, []);

  return (
    <DatePickerWrapper>
      <DatePicker
        selected={dateRangeFilter.startDate}
        wrapperClassName="date_picker"
        onChange={(dates) => {
          const [start, end] = dates;
          /* The below logic is to fix the bug where if you manually delete a date range from the input,
          it auto selects the beginning of 2001 or 2000 as the date instead of clearing */
          const oldDate = new Date('01/01/2002');

          if (start && DateHelper.isDateBefore(start, oldDate)) {
            dateRangeFilter.setStartDate(null);
          } else {
            dateRangeFilter.setStartDate(start);
          }

          dateRangeFilter.setEndDate(end);
        }}
        startDate={dateRangeFilter.startDate}
        endDate={dateRangeFilter.endDate}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText="Select a Date Range"
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        onChangeRaw={(dateEntered) => {
          if (dateEntered.target.value) {
            const dates = dateEntered.target.value.split('-');
            let startDate: Date | null = new Date(dates[0].trim());
            let endDate: Date | null = null;
            if (dates.length === 2) {
              endDate = new Date(dates[1].trim());
            }

            if (endDate && isNaN(endDate?.getTime())) {
              endDate = null;
            }

            if (startDate && isNaN(startDate?.getTime())) {
              startDate = null;
            }

            dateRangeFilter.setStartDate(startDate);
            dateRangeFilter.setEndDate(endDate);
          }
        }}
        selectsRange
      />
      <CalendarIcon prefix="far" iconCode="calendar" />
      <DatePickerWrapperStyles />
    </DatePickerWrapper>
  );
};
