import { useState } from 'react';
import { useSelect } from 'downshift';
import {
  FilterContainer,
  Filter,
  AngleIcon,
  LabelsContainer,
  Value,
} from './LumaFilter.styles';
import { LumaIcon } from '../LumaIcon';
import { LumaDropDownBox } from '../LumaDropdownBox';
import { LumaSingleDropDownOption } from '../LumaDropdown/LumaSingleDropDown/LumaSingleDropDownOption';
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';

export interface FilterProps {
  /**
   * Defines if dropdown is disabled.
   */
  disabled?: boolean;
  /**
   * Currently selected value.
   */
  active?: boolean;
  /**
   * Label displaying on the left side.
   */
  label?: string;
  /**
   * Array items that will be in the dropdown list
   */
  dropdownItems?: DataItemProps[];
  /**
   * onChange action on dropdown.
   */
  onChangeDropdown?: (newItem: DataItemProps | null) => void;
  /**
   * id of filter.
   */
  id: string;
  /**
   * Default choosen value.
   */
  defaltValue?: DataItemProps;
}

export const LumaFilter = ({
  disabled = false,
  active,
  label = 'Category:',
  defaltValue,
  dropdownItems,
  onChangeDropdown,
  id,
}: FilterProps) => {
  const [choosenCategory, setChoosenCategory] = useState(
    defaltValue?.label || ''
  );
  const {
    isOpen,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    getToggleButtonProps,
    selectedItem,
  } = useSelect({
    items: dropdownItems || [],
    itemToString: (item: DataItemProps | null) => item?.label ?? '',
    onSelectedItemChange({ selectedItem }) {
      setChoosenCategory(selectedItem?.label || '');
      onChangeDropdown?.(selectedItem ?? null);
    },
  });

  return (
    <FilterContainer>
      <Filter
        disabled={disabled}
        active={active || isOpen}
        {...getToggleButtonProps()}
      >
        <LabelsContainer>
          {label}
          <Value>{choosenCategory}</Value>
          <AngleIcon>
            <LumaIcon iconCode={isOpen ? 'angle-up' : 'angle-down'} />
          </AngleIcon>
        </LabelsContainer>
      </Filter>
      <LumaDropDownBox
        size="large"
        isOpen={isOpen}
        items={dropdownItems || []}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        getItemProps={getItemProps}
        renderComponent={<LumaSingleDropDownOption />}
        selectedItem={selectedItem || defaltValue}
        id={id}
      />
    </FilterContainer>
  );
};
