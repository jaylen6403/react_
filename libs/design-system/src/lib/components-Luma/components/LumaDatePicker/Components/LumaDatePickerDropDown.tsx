import { useState } from 'react';
import {
  addMonths,
  addYears,
  startOfMonth,
  subMonths,
  subYears,
} from 'date-fns';
import { RootDropdown } from '../LumaDatePicker.styles';
import { CalendarDropDownHeader } from './LumaCalendarHeader';
import { CalendarWeek } from './LumaCalendarWeek';
import { CalendarBody } from './LumaCalendarBody';

export enum ChangeDirections {
  previous = 'previous',
  next = 'next',
}

interface DateDropDownProps {
  /** Date change function */
  onChangeHandler: (selected: Date) => void;
  /**Mode/Type of field*/
  variant: 'date' | 'time' | 'datetime';
  /**Calendar Dropdown open/close on focus*/
  isOpen: boolean;
  /** size will make the field small, medium or large size */
  size?: 'small' | 'medium' | 'large';
  /** handle closing of dropdown */
  onDropdownClose?: () => void;
  /** if any date selected already */
  selected?: Date;
}

export const DatePickerDropDown = ({
  onChangeHandler,
  size = 'medium',
  onDropdownClose,
  selected = undefined,
}: DateDropDownProps) => {
  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(selected ?? new Date())
  );

  const onChangeMonth = (
    change: ChangeDirections.previous | ChangeDirections.next
  ) => {
    setCurrentMonth(
      change === ChangeDirections.next
        ? addMonths(currentMonth, 1)
        : subMonths(currentMonth, 1)
    );
  };

  const onChangeYear = (
    change: ChangeDirections.previous | ChangeDirections.next
  ) => {
    setCurrentMonth(
      change === ChangeDirections.next
        ? addYears(currentMonth, 1)
        : subYears(currentMonth, 1)
    );
  };

  const onDateSelected = (selectedDate: Date) => {
    onChangeHandler(selectedDate);
    if (onDropdownClose) {
      onDropdownClose();
    }
  };

  return (
    <RootDropdown size={size}>
      <CalendarDropDownHeader
        month={currentMonth}
        onChangeMonth={onChangeMonth}
        onChangeYear={onChangeYear}
      />
      <CalendarWeek />
      <CalendarBody
        onChangeCurrentDate={onDateSelected}
        selected={selected}
        month={currentMonth}
      />
    </RootDropdown>
  );
};
