import { useSelect } from 'downshift';
import { DataItemProps } from '../../LumaDropdown/LumaDropDownBasicType';
import { LumaDropDownBox } from '../../LumaDropdownBox';
import { LumaSingleDropDownOption } from '../../LumaDropdown/LumaSingleDropDown/LumaSingleDropDownOption';
import { LumaButton, LumaButtonProps } from '../LumaButton';
import { Root } from './LumaButtonDropdown.style';

export interface DropdownButtonProps extends LumaButtonProps {
  /**
   * unique key for the dropdown
   */
  id: string;
  /**
   * Array items that will be in the dropdown list
   */
  dropdownItems?: DataItemProps[];
  /**
   * onChange action on dropdown.
   */
  onChangeDropdown?: (newItem: DataItemProps | null) => void;
  /**
   * Specifies if dropdown list open to the top or to the bottom in the split button.
   */
  dropdownPosition?: 'top' | 'bottom';
}

export const LumaButtonDropdown = ({
  id,
  dropdownItems,
  onChangeDropdown,
  dropdownPosition = 'bottom',
  ...rest
}: DropdownButtonProps) => {
  const {
    isOpen,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    getToggleButtonProps,
  } = useSelect({
    items: dropdownItems || [],
    itemToString: (item) => item?.label ?? '',
    onSelectedItemChange({ selectedItem }) {
      onChangeDropdown?.(selectedItem ?? null);
    },
  });
  const { split, fullWidth, ...restProps } = rest;

  return (
    <Root>
      <LumaButton
        dropdown={{ isDropdown: !split, isOpen, getToggleButtonProps }}
        split={split}
        fullWidth
        {...restProps}
      />
      <LumaDropDownBox
        size={split ? `${dropdownPosition}` : 'medium'}
        variant={split ? `no-border-${dropdownPosition}` : 'standard'}
        isOpen={isOpen}
        items={dropdownItems || []}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        getItemProps={getItemProps}
        renderComponent={<LumaSingleDropDownOption />}
        itemToString={(item) => item?.label ?? ''}
        id={id}
      />
    </Root>
  );
};
