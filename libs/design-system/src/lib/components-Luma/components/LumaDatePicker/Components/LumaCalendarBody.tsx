import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  DatePickerWrapper,
  DatePickerDayBody,
  DatePickerDayBodyItem,
  DatePickerDate,
} from '../LumaDatePicker.styles';

interface CalendarBodyProps {
  /** Selected Date */
  selected: Date | undefined;
  /** Change date when click on calendar days */
  onChangeCurrentDate: (day: Date) => void;
  /**input selected value */
  month: Date;
}

export const CalendarBody = ({
  selected,
  onChangeCurrentDate,
  month,
}: CalendarBodyProps) => {
  const days = allDaysInMonthExtendedToFullWeeks(month);
  const now = new Date();

  return (
    <DatePickerWrapper>
      <DatePickerDayBody>
        {days.map((day: Date, key: number) => {
          return (
            <DatePickerDayBodyItem key={key}>
              <DatePickerDate
                onClick={() => onChangeCurrentDate(day)}
                onKeyDown={() => onChangeCurrentDate(day)}
                isActive={!isSameMonth(month, day)}
                isToday={isSameDay(now, day)}
                isSelected={selected && isSameDay(selected, day)}
                className={'DatePicker--date'}
              >
                {format(day, 'd')}
              </DatePickerDate>
            </DatePickerDayBodyItem>
          );
        })}
      </DatePickerDayBody>
    </DatePickerWrapper>
  );
};

const allDaysInMonthExtendedToFullWeeks = (someDayInTheMonth: Date) => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(someDayInTheMonth)),
    end: endOfWeek(endOfMonth(someDayInTheMonth)),
  });
};
