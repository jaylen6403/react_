import * as React from 'react';
import { useSelect } from 'downshift';
import { StyledButton } from './SingleSelect.styles';
import { BaseMenuItem } from '../DropdownBase.types';
import { IconCode } from '../../Icon/Icon';
import {
  Root,
  Menu,
  MenuItem,
  Variant,
  Divider,
  DropdownIcon,
} from '../DropdownBase.styles';

export interface MenuItem<T> extends BaseMenuItem {
  value: T;
}

interface SingleSelectProps<T> {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  hasIndicator?: boolean;
  id?: string;
  isDisabled?: boolean;
  items: MenuItem<T>[];
  onBlur?: () => void;
  onChange?: (item?: MenuItem<T> | null) => void;
  placeholder: React.ReactNode;
  selectedItem?: MenuItem<T>;
  variant: Variant;
  noHighlight?: boolean;
  iconCode?: IconCode;
  iconPrefix?: 'fal' | 'fas' | 'far';
}

export function SingleSelect<T>({
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator,
  id,
  items,
  onChange,
  onBlur,
  variant = 'primary',
  selectedItem,
  placeholder,
  noHighlight,
  iconCode = 'chevron-down',
  iconPrefix = 'fal',
}: SingleSelectProps<T>) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    reset,
  } = useSelect({
    id,
    items,
    initialSelectedItem: selectedItem,
    onSelectedItemChange({ selectedItem: selectedItemEvent }) {
      onChange?.(selectedItemEvent);
    },
  });

  React.useEffect(() => {
    if (!selectedItem) {
      reset();
    } else {
      selectItem(selectedItem);
    }
  }, [selectedItem, reset, selectItem]);

  const buttonProps = {
    ...getToggleButtonProps(),
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
      <StyledButton
        {...buttonProps}
        aria-haspopup="menu"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        variant={variant}
      >
        {selectedItem?.display || placeholder}
        {hasIndicator && (
          <DropdownIcon iconCode={iconCode} prefix={iconPrefix} />
        )}
      </StyledButton>

      <Menu {...getMenuProps()} aria-labelledby={buttonProps.id}>
        {isOpen &&
          items.map((item, index) => {
            const itemProps = getItemProps({
              item,
              index,
              disabled: item.isDisabled,
            });

            return (
              <React.Fragment key={`${item.display}-${index}`}>
                <MenuItem
                  {...itemProps}
                  hasSectionBreak={item.hasSectionBreak}
                  isHighlighted={!noHighlight && highlightedIndex === index}
                  variant={variant}
                >
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
