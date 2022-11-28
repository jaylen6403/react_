import { Dispatch, SetStateAction } from 'react';

import { NavTabButton } from '../NavTabButton/NavTabButton';
import { NavTabBarContainer, NavTabBarWrapper } from './NavTabBar.styles';
import { DropdownNavTab } from '../DropdownNavTab/DropdownNavTab';
import { PoweredByLumaLogo } from '../PoweredByLumaLogo/PoweredByLumaLogo';
import { NavigateHandlerType, NavTabType, Variant } from '../GlobalNav.types';
import { isTabDropdown } from '../utils/navTabUtils';

interface NavTabBarProps {
  /**
   * array of data that will define and complie navbar tabs (titles, routes, dropdown boolean)
   */
  tabs: NavTabType[];
  /**
   * styling variant, primary if default luma environment, secondary for whitelabel
   */
  variantType: Variant;
  /**
   * current active tab, passed in for active tab styling
   */
  activeTab: string;
  /**
   * sets the active tab
   */
  setActiveTab: Dispatch<SetStateAction<string>>;
  /**
   * on click handler for navigation and seting active tab
   */
  handleNavigate: NavigateHandlerType;
  parentActiveTab: string | undefined;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}

export const NavTabBar = ({
  tabs,
  activeTab,
  setActiveTab,
  handleNavigate,
  variantType,
  parentActiveTab,
  setParentActiveTab,
}: NavTabBarProps) => {
  return (
    <NavTabBarWrapper>
      <NavTabBarContainer>
        {tabs.map((tab, idx) => {
          if (isTabDropdown(tab)) {
            return (
              <DropdownNavTab
                key={`${new Date().getTime()} ${tab.title}`}
                tab={tab}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                parentActiveTab={parentActiveTab}
                setParentActiveTab={setParentActiveTab}
                handleNavigate={handleNavigate}
                variantType={variantType}
              />
            );
          } else {
            return (
              <NavTabButton
                key={`${new Date().getTime()} ${tab.title}`}
                tab={tab}
                setActiveTab={setActiveTab}
                setParentActiveTab={setParentActiveTab}
                variantType={variantType}
                activeTab={activeTab}
                handleNavigate={handleNavigate}
              />
            );
          }
        })}
      </NavTabBarContainer>
      {variantType === 'secondary' ? (
        <PoweredByLumaLogo isMobile={false} />
      ) : null}
    </NavTabBarWrapper>
  );
};
