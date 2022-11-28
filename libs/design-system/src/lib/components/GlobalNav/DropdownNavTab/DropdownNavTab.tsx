import { Dispatch, SetStateAction, useState } from 'react';
import { useSelect } from 'downshift';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  DropdownButton,
  DropdownListButton,
  DropdownIcon,
  DropdownMenu,
  DropdownWrapper,
  DropdownButtonWrapper,
} from './DropdownNavTab.styles';
import {
  RouteChild,
  NavTabTypeWithChildren,
  Variant,
  NavigateHandlerType,
} from '../GlobalNav.types';

interface Props {
  tab: NavTabTypeWithChildren;
  activeTab: string;
  handleNavigate: NavigateHandlerType;
  setActiveTab: Dispatch<SetStateAction<string>>;
  variantType: Variant;
  parentActiveTab: string | undefined;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}

export const DropdownNavTab = ({
  tab,
  activeTab,
  setActiveTab,
  handleNavigate,
  variantType,
  parentActiveTab,
  setParentActiveTab,
}: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { title, children } = tab;
  const { getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    items: children,
  });
  const buttonProps = {
    ...getToggleButtonProps(),
  };
  const menuProps = { ...getMenuProps({}, { suppressRefError: true }) };

  const dropdownButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const listItemClick = (item: RouteChild) => {
    const skipTabUpdate = handleNavigate(item);
    setDropdownOpen(false);

    if (skipTabUpdate) {
      return;
    }
    setActiveTab(item.title);
    setParentActiveTab(title);
  };

  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setDropdownOpen(false);
        }}
      >
        <DropdownButtonWrapper>
          <DropdownButton
            {...buttonProps}
            isActive={activeTab === title || parentActiveTab === title}
            variantType={variantType}
            onClick={dropdownButtonClick}
          >
            {title}
            <DropdownIcon
              iconCode={dropdownOpen ? 'angle-up' : 'angle-down'}
              prefix="far"
              variantType={variantType}
            />
          </DropdownButton>
        </DropdownButtonWrapper>
        {dropdownOpen ? (
          <DropdownWrapper>
            <DropdownMenu
              {...menuProps}
              aria-labelledby={buttonProps.id}
              role="menu"
            >
              {dropdownOpen &&
                children.map((item, index) => {
                  const itemProps = getItemProps({ item, index });

                  return (
                    <DropdownListButton
                      {...itemProps}
                      key={`${item}${index}`}
                      aria-label={item.title}
                      aria-selected={undefined}
                      isActive={activeTab === item.title}
                      variantType={variantType}
                      onClick={() => listItemClick(item)}
                      role="menuitem"
                    >
                      {item.title}
                    </DropdownListButton>
                  );
                })}
            </DropdownMenu>
          </DropdownWrapper>
        ) : null}
      </OutsideClickHandler>
    </div>
  );
};
