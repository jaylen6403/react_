import * as React from 'react';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Root } from './LumaDatePicker.styles';
import { LumaTextEntry } from '../LumaTextEntry';
import { LumaIcon } from '../LumaIcon';
import { DatePickerDropDown } from './Components/LumaDatePickerDropDown';
import { IconCode } from '../LumaIcon';
import { DateFormatter } from '@luma-fe-workspace/utility';

export type InputFormatType =
  | 'MM/dd/yyyy'
  | 'dd/MM/yyyy'
  | 'MM-dd-yyyy'
  | 'dd-MM-yyyy'
  | 'yyyy-dd-MM'
  | 'yyyy-MM-dd'
  | 'yyyy/dd/MM'
  | 'yyyy/MM/dd';

export interface DatePickerProps {
  /**Unique identifier of the field */
  id: string;
  /**onchange event*/
  onChange?: (newDate: Date) => void;
  /**onBlur event*/
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**onfocus event*/
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**Mode/Type of field*/
  variant?: 'date' | 'time' | 'datetime';
  /**value of the field */
  defaultValue?: Date;
  /*label : which act as placeholder initially when type anything it will act as label of the textbox  */
  label?: string;
  /*Error will act when user need to show validation error */
  error?: boolean;
  /*helper text shown below the input field */
  helperText?: string;
  /*fullwidth will make the field 100% width */
  fullWidth?: boolean;
  /**disabled will disable the field*/
  disabled?: boolean;
  /**size will make the field small, medium or large size*/
  size?: 'small' | 'medium' | 'large';
  /**Format of date */
  inputFormat?: InputFormatType;
  /**value to toggle calendar dropdown */
  isOpen?: boolean;
  /**icons for calendar */
  icon?: IconCode;
}
export const LumaDatePicker = ({
  id,
  onChange,
  onBlur,
  defaultValue,
  label,
  error,
  helperText,
  fullWidth,
  disabled,
  size = 'medium',
  variant = 'date',
  inputFormat = undefined,
  isOpen = false,
  ...rest
}: DatePickerProps) => {
  const [dateValue, setDateValue] = React.useState(defaultValue);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  useEffect(() => {
    setDateValue(defaultValue);
  }, [defaultValue]);

  const formattedDateValue =
    dateValue !== undefined
      ? inputFormat !== undefined
        ? DateFormatter.formatLocalDate(dateValue, inputFormat)
        : dateValue.toLocaleDateString()
      : undefined;

  const onChangeHandler = (newValue: Date) => {
    setDateValue(newValue);
    setIsDropdownOpen(false);
    onChange?.(newValue);
  };

  const styleCalendarIcon = {
    fontSize: '0.5rem',
  };

  return (
    <Root
      size={size}
      value={formattedDateValue}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <OutsideClickHandler onOutsideClick={() => setIsDropdownOpen(false)}>
        <LumaTextEntry
          type="text"
          sizeVariant={size}
          value={formattedDateValue}
          label={label}
          helperText={helperText}
          readOnly={true}
          disabled={disabled}
          error={error}
          fullWidth={fullWidth}
          onBlur={onBlur}
          onFocus={() => setIsDropdownOpen(true)}
          icon={
            <LumaIcon
              type="regular"
              iconCode="calendar"
              style={styleCalendarIcon}
            />
          }
          useByDropdown={true}
          {...rest}
        />
        {isDropdownOpen ? (
          <DatePickerDropDown
            onChangeHandler={onChangeHandler}
            variant={variant}
            isOpen={isDropdownOpen}
            size={size}
            selected={dateValue}
          />
        ) : null}
      </OutsideClickHandler>
    </Root>
  );
};
