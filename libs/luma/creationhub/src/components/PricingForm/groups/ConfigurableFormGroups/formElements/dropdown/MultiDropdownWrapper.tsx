import {
  DataItemProps,
  LumaMultiDropDown,
} from '@luma-fe-workspace/design-system';
import {
  EnumConstraints,
  MultiEnumValue,
  ParamConstraints,
  ParamName,
  ParamValue,
  ValueTypes,
} from '@luma-fe-workspace/redux';
import { useCallback } from 'react';
import { parseEnumToDropdownValue } from './DropdownUtils';

type MultiDropdownWrapperProps = {
  paramName: string;
  id: string;
  value: MultiEnumValue;
  label?: string;
  isDisabled: boolean;
  onChange: (newValue: ParamValue | undefined) => void;
  onBlur: () => void;
  readOnly?: boolean;
  constraints?: Record<ParamName, ParamConstraints>;
};

function MultiDropdownWrapper({
  paramName,
  label,
  value,
  isDisabled,
  constraints,
  onChange,
  onBlur,
  readOnly = true,
  ...rest
}: MultiDropdownWrapperProps) {
  const defaultSelectedItems = parseEnumToDropdownValue(value.values);
  const dropdownItems = constraints
    ? parseEnumToDropdownValue(
        (constraints[paramName] as EnumConstraints).availableValues
      )
    : [];

  const onMultiSelectChange = useCallback(
    (newItems: DataItemProps[] | null) => {
      if (!newItems || !constraints) {
        return;
      }
      const selectedIds = newItems.map(({ value }) => {
        return value;
      });
      const selectedValues = (
        constraints[paramName] as EnumConstraints
      ).availableValues.filter(({ id }) => {
        return selectedIds.includes(id);
      });
      const changeItem = {
        values: selectedValues,
        type: ValueTypes.MultiEnum,
        computationMode: value.computationMode,
      };
      onChange(changeItem);
    },
    [constraints, paramName, value.computationMode, onChange]
  );

  return (
    <LumaMultiDropDown
      name={paramName}
      readOnly={readOnly}
      disabled={isDisabled}
      handleBlur={onBlur}
      placeholder={label ?? ''}
      defaultSelectedItems={defaultSelectedItems}
      onChange={onMultiSelectChange}
      items={dropdownItems}
      size="large"
      {...rest}
    />
  );
}

export default MultiDropdownWrapper;
