import * as React from 'react';
import { useMultipleSelection, useSelect } from 'downshift';

import {
  Button,
  Divider,
  DropdownIcon,
  Menu,
  MenuItem,
  Root,
  Variant,
} from '../DropdownBase.styles';
import { BaseMenuItem } from '../DropdownBase.types';
import { CheckboxIcon } from './MultiSelect.styles';

export interface MenuItem<T> extends BaseMenuItem {
  /**
   * Text alignment.
   */
  alignment?: 'left' | 'center' | 'right';
  /**
   * Only for Action Links - Click handler for that action link.
   */
  onClick?: () => void;
  /**
   * Meta data to be attached to an item.
   */
  meta?: T;
  /**
   * Width of the item.
   */
  width?: string;
}

interface MultiSelectProps<T> {
  /**
   * Action links to be rendered on top of checkboxes.
   */
  actions?: MenuItem<T>[];
  /**
   * Aria label for the select button in case id is not passed and linked aria-labelledby.
   */
  ariaLabel?: string;
  /**
   * Aria labelledby.
   */
  ariaLabelledBy?: string;
  /**
   * Available className to be attached to the root element.
   */
  className?: string;
  /**
   * Option to include the chevron indicator.
   */
  hasIndicator?: boolean;
  /**
   * Id to be attached to a button.
   */
  id?: string;
  /**
   * Disable the select button.
   */
  isDisabled?: boolean;
  /**
   * Multi-select checkbox items.
   */
  items: MenuItem<T>[];
  /**
   * Handler for blur event.
   */
  onBlur?: () => void;
  /**
   * Handler for change event which includes the suggested list of items and the item clicked.
   */
  onChange?: (items: MenuItem<T>[], meta: MenuItem<T>) => void;
  /**
   * Text for select button.
   */
  placeholder: React.ReactNode;
  /**
   * List of selected items to be checked.
   */
  selectedItems: MenuItem<T>[];
  /**
   * Style variant.
   */
  variant: Variant;
}

export function MultiSelect<T>({
  actions = [] as MenuItem<T>[],
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator,
  id,
  isDisabled,
  items,
  onBlur,
  onChange,
  placeholder,
  selectedItems,
  variant = 'primary',
}: MultiSelectProps<T>) {
  const allItems = React.useMemo(
    () => [...actions, ...items],
    [actions, items]
  );
  const { getDropdownProps, setSelectedItems } = useMultipleSelection({
    selectedItems,
  });

  React.useEffect(() => {
    setSelectedItems(selectedItems);
  }, [setSelectedItems, selectedItems]);

  const selectedItemsSet = React.useMemo(
    () => new Set(selectedItems),
    [selectedItems]
  );

  const handleChange = React.useCallback(
    (selectedItem: MenuItem<T>) => {
      if (!onChange || selectedItem?.onClick) {
        return;
      }

      if (selectedItemsSet.has(selectedItem)) {
        selectedItemsSet.delete(selectedItem);
      } else {
        selectedItemsSet.add(selectedItem);
      }

      onChange(Array.from(selectedItemsSet), selectedItem);
    },
    [onChange, selectedItemsSet]
  );

  const handleChangeRef = React.useRef(handleChange);
  React.useEffect(() => {
    handleChangeRef.current = handleChange;
  }, [handleChange]);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    selectedItem: null,
    id,
    items: allItems,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick: {
          return {
            ...state,
            selectedItem: changes.selectedItem,
            isOpen: true, // keep the menu open after selection.
          };
        }
      }
      return { ...state, ...changes };
    },
    onStateChange: ({ type, selectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick: {
          if (!selectedItem) {
            return;
          }

          if (selectedItem.onClick) {
            return selectedItem.onClick();
          }

          handleChangeRef.current(selectedItem);
          break;
        }
        default:
          break;
      }
    },
  });

  const buttonProps = {
    ...getToggleButtonProps(
      getDropdownProps({ disabled: isDisabled, preventKeyAction: isOpen })
    ),
  };

  return (
    <Root
      className={className}
      isOpen={isOpen}
      onBlur={(e) => {
        if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
          return;
        }
        onBlur?.();
      }}
      variant={variant}
    >
      <Button
        {...buttonProps}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        {placeholder}
        {hasIndicator && <DropdownIcon iconCode="chevron-down" />}
      </Button>

      <Menu {...getMenuProps()} aria-labelledby={buttonProps.id}>
        {isOpen &&
          allItems.map((item, index) => {
            const isAction = item.onClick;

            return (
              <React.Fragment key={`${item.display}-${index}`}>
                <MenuItem
                  {...getItemProps({
                    item,
                    index,
                    disabled: item.isDisabled,
                  })}
                  alignment={item.alignment}
                  hasSectionBreak={item.hasSectionBreak}
                  isAction={isAction}
                  isHighlighted={highlightedIndex === index}
                  variant={variant}
                  width={item.width}
                >
                  {!isAction && (
                    <CheckboxIcon
                      iconCode={
                        selectedItemsSet.has(item) ? 'check-square' : 'square'
                      }
                    />
                  )}

                  {item.display}
                </MenuItem>

                {item.hasSectionBreak && <Divider />}
              </React.Fragment>
            );
          })}
      </Menu>
    </Root>
  );
}
