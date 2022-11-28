import { LumaTextEntry } from '@luma-fe-workspace/design-system';
import {
  ParamValue,
  NumericValue,
  ComputationMode,
  ParamName,
} from '@luma-fe-workspace/redux';
import { useState, useEffect } from 'react';
import { createDataTestId } from '../FormField';
import {
  parseNumericValuetoGroupedString,
  parseStringToNumber,
  clearGroupedString,
  parseNumberStringToGroupedString,
  getNumericValue,
} from './NumberTextEntryUtils';

interface NumberTextEntryProps {
  value: NumericValue;
  onChange: (newValue: ParamValue | undefined) => void;
  onValidation: (
    paramName: ParamName,
    newValue: ParamValue | undefined
  ) => void;
  label?: string;
  isDisabled: boolean;
  computationMode: ComputationMode;
  fieldProps: { id: string };
  paramName: string;
  hasError: boolean;
}

export function NumberTextEntry({
  label,
  isDisabled,
  value,
  onChange,
  computationMode,
  fieldProps,
  paramName,
  onValidation,
  hasError,
}: NumberTextEntryProps) {
  const [fieldValue, setFieldValue] = useState(
    parseNumericValuetoGroupedString(value.value)
  );
  useEffect(() => {
    parseNumericValuetoGroupedString(value.value);
  }, [value]);

  return (
    <LumaTextEntry
      label={label}
      type="text"
      disabled={isDisabled}
      readOnly={false}
      value={fieldValue}
      onChange={(e) => {
        const numberValue = parseStringToNumber(e.target.value);
        if (!Number.isNaN(numberValue)) {
          const newNumberValue = clearGroupedString(e.target.value);
          setFieldValue(parseNumberStringToGroupedString(newNumberValue));
        }
      }}
      onBlur={() => {
        const stringValue = clearGroupedString(fieldValue);
        const param = getNumericValue(stringValue, computationMode);
        onChange(param);
        onValidation(paramName, param);
      }}
      error={hasError}
      sizeVariant="large"
      data-testid={createDataTestId('input', fieldProps.id)}
      {...fieldProps}
    />
  );
}
