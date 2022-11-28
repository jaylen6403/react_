import {
  DataItemProps,
  LumaSingleDropDown,
} from '@luma-fe-workspace/design-system';
import {
  EnumConstraints,
  EnumValue,
  ParamConstraints,
  ParamName,
  ParamValue,
} from '@luma-fe-workspace/redux';
import { parseEnumToDropdownValue } from './DropdownUtils';

type DropdownWrapperProps = {
  paramName: string;
  id: string;
  value: EnumValue;
  label?: string;
  isDisabled: boolean;
  onChange: (newValue: ParamValue | undefined) => void;
  onValidation: (newValue: ParamValue | undefined) => void;
  readOnly?: boolean;
  constraints?: Record<ParamName, ParamConstraints>;
};

function DropdownWrapper({
  paramName,
  label,
  value,
  isDisabled,
  constraints,
  onChange,
  onValidation,
  readOnly = true,
  ...rest
}: DropdownWrapperProps) {
  const defaultSelectedItem = {
    value: value.id,
    label: value.label,
  };
  const dropdownItems = constraints
    ? parseEnumToDropdownValue(
        (constraints[paramName] as EnumConstraints).availableValues
      )
    : [];

  const onSelectChange = (selectedItem: DataItemProps | null) => {
    if (!selectedItem || !constraints) {
      return;
    }
    const { value } = selectedItem;
    const selectedValue = (
      constraints[paramName] as EnumConstraints
    ).availableValues.find(({ id }) => {
      return id === value;
    });

    if (selectedValue) {
      onChange(selectedValue);
      onValidation(selectedValue);
    }
  };

  return (
    <LumaSingleDropDown
      name={paramName}
      readOnly={readOnly}
      disabled={isDisabled}
      placeholder={label ?? ''}
      onChange={onSelectChange}
      defaultSelectedItem={defaultSelectedItem}
      items={dropdownItems}
      size="large"
      {...rest}
    />
  );
}

export default DropdownWrapper;
