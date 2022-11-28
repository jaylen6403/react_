import { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { Root } from '../LumaDropDown.style';
import {
  DataItemProps,
  LumaSingleDropDownProps,
} from '../LumaDropDownBasicType';
import { LumaIcon } from '../../LumaIcon';
import { LumaTextEntry } from '../../LumaTextEntry';
import { LumaDropDownBox } from '../../LumaDropdownBox';
import { LumaSingleDropDownOption } from './LumaSingleDropDownOption';

export const LumaSingleDropDown = ({
  name,
  id,
  placeholder,
  error,
  readOnly = true,
  disabled,
  fullWidth,
  helperText,
  size = 'medium',
  items = [],
  defaultSelectedItem,
  onChange,
  handleBlur,
  className = '',
  dropDownIcon,
  dropDownIconType,
  ...rest
}: LumaSingleDropDownProps) => {
  const [inputValue, setInputValue] = useState(
    defaultSelectedItem?.label || ''
  );
  useEffect(() => {
    setInputValue(defaultSelectedItem?.label as string);
  }, [defaultSelectedItem]);
  const {
    isOpen,
    openMenu,
    closeMenu,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
    reset,
  } = useCombobox({
    inputValue,
    itemToString: (item: DataItemProps | null) => item?.label ?? '',
    items,
    onSelectedItemChange({ selectedItem }) {
      setInputValue(selectedItem?.label || '');
      onChange?.(selectedItem ?? null);
    },
    onInputValueChange({ inputValue }) {
      if (inputValue === '') {
        reset();
      }
      setInputValue(inputValue || '');
    },
  });

  return (
    <Root
      size={size}
      error={error}
      fullWidth={fullWidth}
      className={className}
      {...getComboboxProps({
        readOnly,
        disabled,
      })}
    >
      <LumaTextEntry
        {...getInputProps({
          label: placeholder,
          disabled,
          readOnly,
        })}
        value={inputValue}
        icon={
          dropDownIcon ? (
            <LumaIcon
              onClick={isOpen ? closeMenu : openMenu}
              iconCode={dropDownIcon}
              type={dropDownIconType}
            />
          ) : (
            <LumaIcon
              onClick={isOpen ? closeMenu : openMenu}
              iconCode={isOpen ? 'angle-up' : 'angle-down'}
            />
          )
        }
        fullWidth={fullWidth}
        helperText={helperText}
        sizeVariant={size}
        error={error}
        useByDropdown={true}
        onClick={() => {
          if (!isOpen) openMenu();
          else closeMenu();
        }}
        {...rest}
      />
      <LumaDropDownBox
        size={size}
        isOpen={isOpen}
        items={items}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        getItemProps={getItemProps}
        renderComponent={<LumaSingleDropDownOption />}
        selectedItem={selectedItem || defaultSelectedItem}
        id={id}
      />
    </Root>
  );
};
