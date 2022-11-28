import * as React from 'react';
import { DataItemProps, SizeType } from '../LumaDropdown/LumaDropDownBasicType';
import {
  DropDownBox,
  DropDownListElement,
  DropDownSection,
  InnerBox,
} from './LumaDropdownBox.style';
import { UseComboboxGetItemPropsOptions } from 'downshift';

/** Interface for dropdown box */
export interface DropDownBoxInterface<Item> {
  disabled?: boolean;
  items: Item[];
  getMenuProps?: () => void;
  getItemProps?: (options: UseComboboxGetItemPropsOptions<Item>) => void;
  isOpen?: boolean;
  highlightedIndex?: number;
  size?: SizeType;
  renderComponent?: React.ReactElement<{ item: Item }>;
  itemToString?: (item: DataItemProps | null) => string;
  selectedItem?: DataItemProps | null;
  variant?:
    | 'standard'
    | 'underlier'
    | 'single'
    | 'multi'
    | 'no-border-top'
    | 'no-border-bottom';
  id: string;
  selectedItems?: DataItemProps[];
  errorTemplate?: React.ReactElement;
}

export const LumaDropDownBox = <Item,>({
  items,
  disabled,
  getMenuProps,
  getItemProps,
  isOpen = false,
  highlightedIndex,
  size = 'medium',
  renderComponent,
  selectedItem = null,
  itemToString = (item: DataItemProps | null) => item?.label ?? '',
  variant = 'standard',
  selectedItems,
  id,
  errorTemplate,
}: DropDownBoxInterface<Item>) => {
  const menuProps = getMenuProps ? getMenuProps() : {};
  return (
    <DropDownBox
      size={size}
      isOpen={isOpen}
      variant={variant}
      {...menuProps}
      aria-labelledby={`${id}Label`}
    >
      <InnerBox>
        {isOpen &&
          (items.length
            ? items.map((item: DataItemProps, index: number) => {
                let isSelected = false;
                if (selectedItem && item) {
                  isSelected =
                    itemToString(selectedItem) === itemToString(item);
                }
                const itemProps = getItemProps
                  ? getItemProps({
                      item: item as Item,
                      index,
                      disabled: item.isDisabled,
                    })
                  : {};
                return (
                  <React.Fragment key={`${item}${index}`}>
                    {item.sectionName && (
                      <DropDownSection>{item?.sectionName}</DropDownSection>
                    )}
                    <DropDownListElement
                      isHighlighted={highlightedIndex === index}
                      data-testid={`dropdown-item-${item.label
                        ?.toLowerCase()
                        .replace(' ', '_')}`}
                      {...itemProps}
                    >
                      {React.cloneElement(
                        renderComponent as React.ReactElement,
                        {
                          selectedItems,
                          item,
                          items,
                          disabled,
                          selectedItem,
                          isSelected,
                          variant,
                        }
                      )}
                    </DropDownListElement>
                  </React.Fragment>
                );
              })
            : errorTemplate ?? null)}
      </InnerBox>
    </DropDownBox>
  );
};
