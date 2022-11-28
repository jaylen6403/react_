import { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { Root } from '../LumaDropDown.style';
import {
  DataItemProps,
  LumaMultiDropDownProps,
  MaxLengthValue,
} from '../LumaDropDownBasicType';
import { LumaIcon } from '../../LumaIcon';
import { LumaTextEntry } from '../../LumaTextEntry';
import { LumaDropDownBox } from '../../LumaDropdownBox';
import { LumaMultiDropDownOption } from './LumaMultiDropDownOption';

const inputDisplayValue = (selectedDropdownItems: DataItemProps[]) => {
  const valueSelected = selectedDropdownItems.map((item: DataItemProps) => {
    return item?.label;
  });

  let firstSelected = valueSelected[0] || '';
  if (firstSelected.length > MaxLengthValue) {
    firstSelected = firstSelected.substring(0, MaxLengthValue) + '...';
  }

  return selectedDropdownItems.length > 1
    ? `${firstSelected}, +${selectedDropdownItems.length - 1}`
    : `${firstSelected}`;
};

export const LumaMultiDropDown = ({
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
  defaultSelectedItems,
  onChange,
  handleBlur,
  ...rest
}: LumaMultiDropDownProps) => {
  const [allItems, setAllItems] = useState<DataItemProps[]>(
    defaultSelectedItems || []
  );
  const {
    isOpen,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps,
    openMenu,
    closeMenu,
  } = useCombobox({
    items,
    itemToString: (item: DataItemProps | null) => item?.label ?? '',
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            isOpen: !!changes.selectedItem,
          };
      }
      return changes;
    },
    onStateChange({ type, selectedItem }) {
      let newItems = [];
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (selectedItem) {
            const index = allItems.findIndex(
              ({ value }) => value === selectedItem.value
            );
            if (index > 0) {
              newItems = [
                ...allItems.slice(0, index),
                ...allItems.slice(index + 1),
              ];
            } else if (index === 0) {
              newItems = [...allItems.slice(1)];
            } else {
              newItems = [...allItems, selectedItem];
            }
            setAllItems(newItems);
          }
          break;
        default:
          break;
      }
    },
  });

  useEffect(() => {
    onChange?.(allItems);
  }, [allItems, onChange]);
  return (
    <Root
      size={size}
      error={error}
      fullWidth={fullWidth}
      {...getComboboxProps()}
    >
      <LumaTextEntry
        {...getInputProps()}
        label={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={inputDisplayValue(allItems)}
        icon={
          <LumaIcon
            onClick={isOpen ? closeMenu : openMenu}
            iconCode={isOpen ? 'angle-up' : 'angle-down'}
          />
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
      {!readOnly ? (
        <LumaDropDownBox
          size={size}
          isOpen={isOpen}
          items={items}
          selectedItems={allItems}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          getItemProps={getItemProps}
          renderComponent={<LumaMultiDropDownOption />}
          id={id}
        />
      ) : null}
    </Root>
  );
};
