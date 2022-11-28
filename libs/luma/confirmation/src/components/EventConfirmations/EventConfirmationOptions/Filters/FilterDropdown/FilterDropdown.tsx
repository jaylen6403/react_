import {
  FilterDropdownContainer,
  CustomMultiSelectDropDown,
} from './FilterDropdown.styles';
import { useMemo } from 'react';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';

export interface FilterDropdownOptions<T> {
  label: string;
  value: T;
}
interface FilterDropdownProps<T> {
  selected: T[];
  label: string;
  options: FilterDropdownOptions<T>[];
  //Sadly this must be any for the time being as the correct MenuItem is not export from the design-system
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (item: any) => void;
}

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint */
export const FilterDropdown = <T extends unknown>({
  label,
  selected,
  options,
  onChange,
}: FilterDropdownProps<T>) => {
  const { opsModal } = useEventConfirmationOptions();
  const optionsTransformed = useMemo(
    () =>
      options.map((option: FilterDropdownOptions<T>) => ({
        value: option.value,
        display: option.label,
      })),
    [options]
  );
  const selectedItems = useMemo(
    () =>
      optionsTransformed.filter((option) => selected.includes(option.value)) ||
      [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );
  return (
    <FilterDropdownContainer>
      <CustomMultiSelectDropDown
        isDisabled={opsModal.isOpen}
        items={optionsTransformed}
        placeholder={label}
        variant={'secondary'}
        onChange={onChange}
        selectedItems={selectedItems}
        hasIndicator={true}
      />
    </FilterDropdownContainer>
  );
};
