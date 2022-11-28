import * as React from 'react';
import { IconCode } from '../LumaIcon';
export declare type InputFormatType = 'MM/dd/yyyy' | 'dd/MM/yyyy' | 'MM-dd-yyyy' | 'dd-MM-yyyy' | 'yyyy-dd-MM' | 'yyyy-MM-dd' | 'yyyy/dd/MM' | 'yyyy/MM/dd';
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
    label?: string;
    error?: boolean;
    helperText?: string;
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
export declare const LumaDatePicker: ({ id, onChange, onBlur, defaultValue, label, error, helperText, fullWidth, disabled, size, variant, inputFormat, isOpen, ...rest }: DatePickerProps) => JSX.Element;
