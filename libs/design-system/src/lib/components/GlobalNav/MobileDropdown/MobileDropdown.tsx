import { Dispatch, SetStateAction } from 'react';
import { useSelect } from 'downshift';
import {
  MobileTabButton,
  MobileTabWrapper,
  ActiveButtonHighlight,
  MobileDropdownWrapper,
  DropdownIcon,
  MobileListButton,
  MobileListWrapper,
} from './MobileDropdown.styles';
import {
  RouteChild,
  NavigateHandlerType,
  NavTabTypeWithChildren,
  Variant,
} from '../GlobalNav.types';

interface Props {
  tab: NavTabTypeWithChildren;
  variantType: Variant;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  handleNavigate: NavigateHandlerType;
  activeMobileDropdown: string | null;
  setActiveMobileDropdown: Dispatch<SetStateAction<string | null>>;
  parentActiveTab: string | undefined;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}

export const MobileDropdownTab = ({
  tab,
  activeMobileDropdown,
  setActiveMobileDropdown,
  variantType,
  parentActiveTab,
  setParentActiveTab,
  activeTab,
  setActiveTab,
  menuOpen,
  setMenuOpen,
  handleNavigate,
}: Props) => {
  const { title, children } = tab;
  const { getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    items: children,
  });
  const buttonProps = {
    ...getToggleButtonProps(),
  };
  const menuProps = { ...getMenuProps({}, { suppressRefError: true }) };
  const dropdownOpen = activeMobileDropdown === title;
  const dropdownButtonClick = (name: string) => {
    if (dropdownOpen) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  const listItemClick = (item: RouteChild) => {
    setActiveTab(item.title);
    handleNavigate(item);
    setMenuOpen(!menuOpen);
    setActiveMobileDropdown(null);
    setParentActiveTab(title);
  };

  return (
    <div>
      <MobileTabWrapper dropdownActive={dropdownOpen} variantType={variantType}>
        <MobileTabButton
          {...buttonProps}
          onClick={() => dropdownButtonClick(title)}
          variantType={variantType}
          isDropdown={dropdownOpen}
          isActive={title === parentActiveTab}
        >
          {title}
          <DropdownIcon
            iconCode={dropdownOpen ? 'angle-up' : 'angle-down'}
            prefix="far"
            variantType={variantType}
          />
        </MobileTabButton>
        <ActiveButtonHighlight
          isActive={title === activeTab || parentActiveTab === title}
          variantType={variantType}
        />
      </MobileTabWrapper>
      {dropdownOpen ? (
        <MobileDropdownWrapper
          variantType={variantType}
          {...menuProps}
          role="menu"
        >
          {dropdownOpen &&
            children.map((item, index) => {
              const itemProps = getItemProps({
                item,
                index,
              });

              return (
                <MobileListWrapper
                  key={`${new Date().getTime()}${item}${index}`}
                >
                  <MobileListButton
                    {...itemProps}
                    onClick={() => listItemClick(item)}
                    variantType={variantType}
                    isDropdown={true}
                    role="menuitem"
                  >
                    {item.title}
                  </MobileListButton>
                </MobileListWrapper>
              );
            })}
        </MobileDropdownWrapper>
      ) : null}
    </div>
  );
};
