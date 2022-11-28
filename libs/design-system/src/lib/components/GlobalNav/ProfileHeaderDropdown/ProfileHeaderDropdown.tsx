import { useState } from 'react';
import { useSelect } from 'downshift';
import OutsideClickHandler from 'react-outside-click-handler';
import type { Variant } from '..';

import {
  AccountButton,
  AccountIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownListButton,
  ListButtonWrapper,
} from './ProfileHeaderDropdown.styles';

interface Props {
  userName: string;
  items: {
    name: string;
    showItem: boolean;
    onClick: null | (() => void);
    disabled: boolean;
  }[];
  variantType: Variant;
  accountAriaLabel: string;
}

export const ProfileHeaderDropdown = ({
  userName,
  items,
  accountAriaLabel,
  variantType,
}: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    items,
  });
  const buttonProps = {
    ...getToggleButtonProps(),
  };

  const menuProps = { ...getMenuProps({}, { suppressRefError: true }) };

  return (
    <div>
      <OutsideClickHandler onOutsideClick={() => setDropdownOpen(false)}>
        <AccountButton
          {...buttonProps}
          name="profile button"
          aria-label={accountAriaLabel}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          variantType={variantType}
        >
          <AccountIcon iconCode="user" prefix="fas" variantType={variantType} />
        </AccountButton>
        {dropdownOpen ? (
          <DropdownWrapper>
            <DropdownMenu
              {...menuProps}
              aria-labelledby={buttonProps.id}
              role="menu"
            >
              {dropdownOpen &&
                items.map((item, index) => {
                  const itemProps = getItemProps({ item, index });
                  if (item.showItem) {
                    return (
                      <ListButtonWrapper
                        key={`${item}${index}`}
                        isUsername={item.name === userName}
                      >
                        <DropdownListButton
                          {...itemProps}
                          disabled={item.disabled}
                          aria-label={item.name}
                          aria-selected={undefined}
                          variantType={variantType}
                          onClick={item.onClick}
                          role="menuitem"
                          isUsername={item.name === userName}
                        >
                          {item.name}
                        </DropdownListButton>
                      </ListButtonWrapper>
                    );
                  } else {
                    return null;
                  }
                })}
            </DropdownMenu>
          </DropdownWrapper>
        ) : null}
      </OutsideClickHandler>
    </div>
  );
};
