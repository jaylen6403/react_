import { LumaIcon } from '../../LumaIcon';
import {
  DatePickerHeader,
  DatePickerHeaderButton,
  DatePickerHeaderMonth,
} from '../LumaDatePicker.styles';
import { ChangeDirections } from './LumaDatePickerDropDown';
import { DateFormatter } from '@luma-fe-workspace/utility';

interface CalendarHeadProps {
  /** Selected date */
  month: Date;
  /** function for change month */
  onChangeMonth: (
    buttonType: ChangeDirections.previous | ChangeDirections.next
  ) => void;
  /** function for change year */
  onChangeYear: (
    buttonType: ChangeDirections.previous | ChangeDirections.next
  ) => void;
}

export const CalendarDropDownHeader = ({
  month,
  onChangeMonth,
  onChangeYear,
}: CalendarHeadProps) => {
  return (
    <DatePickerHeader>
      <DatePickerHeaderButton
        data-testid="button-prev_year"
        onClick={() => {
          onChangeYear(ChangeDirections.previous);
        }}
      >
        <LumaIcon
          iconCode="angle-double-left"
          style={{ verticalAlign: 'middle' }}
        />
      </DatePickerHeaderButton>
      <DatePickerHeaderButton
        data-testid="button-prev_month"
        onClick={() => {
          onChangeMonth(ChangeDirections.previous);
        }}
      >
        <LumaIcon iconCode="angle-left" style={{ verticalAlign: 'middle' }} />
      </DatePickerHeaderButton>
      <DatePickerHeaderMonth>
        {DateFormatter.formatLocalDate(month, 'MMMM yyyy')}
      </DatePickerHeaderMonth>
      <DatePickerHeaderButton
        data-testid="button-next_month"
        onClick={() => {
          onChangeMonth(ChangeDirections.next);
        }}
      >
        <LumaIcon iconCode="angle-right" style={{ verticalAlign: 'middle' }} />
      </DatePickerHeaderButton>
      <DatePickerHeaderButton
        data-testid="button-next_year"
        onClick={() => {
          onChangeYear(ChangeDirections.next);
        }}
      >
        <LumaIcon
          iconCode="angle-double-right"
          style={{ verticalAlign: 'middle' }}
        />
      </DatePickerHeaderButton>
    </DatePickerHeader>
  );
};
