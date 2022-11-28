import { SetStateAction, Dispatch } from 'react';
import { useSelect } from 'downshift';

import type { Variant } from '..';

import {
  MobileTabButton,
  MobileDropdownWrapper,
  MobileListButton,
  MobileListWrapper,
  MobileTabWrapper,
  DropdownIcon,
} from './ProfileMobileDropdown.styles';

interface Props {
  userName: string;
  items: {
    name: string;
    showItem: boolean;
    onClick: null | (() => void);
    disabled: boolean;
  }[];
  activeMobileDropdown?: string | null;
  setActiveMobileDropdown?: Dispatch<SetStateAction<string | null>>;
  variantType: Variant;
}

export const ProfileMobileDropdown = ({
  userName,
  items,
  activeMobileDropdown,
  setActiveMobileDropdown,
  variantType,
}: Props) => {
  const { getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    items,
  });
  const buttonProps = {
    ...getToggleButtonProps(),
  };
  const menuProps = { ...getMenuProps({}, { suppressRefError: true }) };
  const dropdownOpen = activeMobileDropdown === 'profile';

  const dropdownButtonClick = (name: string) => {
    if (setActiveMobileDropdown) {
      if (dropdownOpen) {
        setActiveMobileDropdown(null);
      } else {
        setActiveMobileDropdown(name);
      }
    }
  };
  return (
    <div>
      <MobileTabWrapper variantType={variantType} dropdownActive={dropdownOpen}>
        <MobileTabButton
          {...buttonProps}
          onClick={() => dropdownButtonClick('profile')}
          variantType={variantType}
          isDropdown={dropdownOpen}
          isActive={dropdownOpen}
        >
          PROFILE
          <DropdownIcon
            iconCode={dropdownOpen ? 'angle-up' : 'angle-down'}
            prefix="far"
            variantType={variantType}
          />
        </MobileTabButton>
      </MobileTabWrapper>
      {dropdownOpen ? (
        <MobileDropdownWrapper
          variantType={variantType}
          {...menuProps}
          role="menu"
        >
          {dropdownOpen &&
            items.map((item, index) => {
              const itemProps = getItemProps({
                item,
                index,
              });
              if (item.showItem) {
                return (
                  <MobileListWrapper
                    key={`${new Date().getTime()}${item}${index}`}
                  >
                    <MobileListButton
                      {...itemProps}
                      onClick={item.onClick}
                      disabled={item.disabled}
                      aria-selected={undefined}
                      variantType={variantType}
                      isDropdown={true}
                      role="menuitem"
                      isUsername={item.name === userName}
                    >
                      {item.name}
                    </MobileListButton>
                  </MobileListWrapper>
                );
              } else {
                return null;
              }
            })}
        </MobileDropdownWrapper>
      ) : null}
    </div>
  );
};
