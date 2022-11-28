import {
  DatePickerDayHeader,
  DatePickerDayHeaderitem,
} from '../LumaDatePicker.styles';
export const CalendarWeek = () => {
  return (
    <DatePickerDayHeader>
      {weekDays.map((day: string, key: number) => (
        <DatePickerDayHeaderitem key={key}>{day}</DatePickerDayHeaderitem>
      ))}
    </DatePickerDayHeader>
  );
};

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
