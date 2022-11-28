import * as React from 'react';
import { useSelect } from 'downshift';
import {
  Button,
  Root,
  MenuItem,
  Menu,
  Variant,
  Divider,
  DropdownIcon,
  DropdownHeader,
} from './DropdownBase.styles';
import { BaseMenuItem } from './DropdownBase.types';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem extends BaseMenuItem {
  onClick: (e?: React.SyntheticEvent) => void;
}

interface DropdownProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  /**
   * Used to control whether the dropdown button has a down arrow
   */
  hasIndicator?: boolean;
  /**
   * Used to control whether each menu item in the dropdown list has a down arrow
   */
  hasSubMenuIndicator?: boolean;
  id?: string;
  isDisabled?: boolean;
  items: MenuItem[];
  onBlur?: () => void;
  placeholder: React.ReactNode;
  variant: Variant;
  header?: React.ReactNode;
  iconCodeLeft?: IconName;
  /**
   * Tooltip text for the dropdown
   */
  title?: string;
}

export function Dropdown({
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator = true,
  hasSubMenuIndicator = false,
  id,
  isDisabled,
  items,
  onBlur,
  placeholder,
  variant = 'primary',
  header,
  iconCodeLeft,
  title,
}: DropdownProps) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    id,
    items,
  });

  const buttonProps = {
    ...getToggleButtonProps(),
  };

  const menuProps = {
    ...getMenuProps(),
  };
  return (
    <Root
      className={className}
      id={id}
      isOpen={isOpen}
      onBlur={(e) => {
        if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
          return;
        }
        onBlur?.();
      }}
      variant={variant}
    >
      {!header ? null : <DropdownHeader>{header}</DropdownHeader>}
      <Button
        {...buttonProps}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        variant={variant}
        disabled={isDisabled}
        title={title}
      >
        {iconCodeLeft && (
          <DropdownIcon className="leftIcon" iconCode={iconCodeLeft} />
        )}
        {placeholder}
        {hasIndicator && (
          <DropdownIcon className="rightIndicator" iconCode="chevron-down" />
        )}
      </Button>

      {items.length > 0 && (
        <Menu {...menuProps} aria-labelledby={buttonProps.id} role="menu">
          {isOpen &&
            items.map((item, index) => {
              const itemProps = getItemProps({
                item,
                index,
                disabled: item.isDisabled,
                onClick: item.onClick,
              });

              return (
                <React.Fragment key={`${item.display}-${index}`}>
                  <MenuItem
                    {...itemProps}
                    hasSectionBreak={item.hasSectionBreak}
                    isHighlighted={highlightedIndex === index}
                    aria-selected={undefined}
                    role="menuitem"
                    variant={variant}
                  >
                    {item.display}
                    {hasSubMenuIndicator && (
                      <DropdownIcon iconCode="chevron-down" />
                    )}
                  </MenuItem>
                  {item.hasSectionBreak && <Divider />}
                </React.Fragment>
              );
            })}
        </Menu>
      )}
    </Root>
  );
}
