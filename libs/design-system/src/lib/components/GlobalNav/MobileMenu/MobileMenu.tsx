import { useState, Dispatch, SetStateAction } from 'react';
import { Logo } from '../../Logo/Logo';
import lumaLogo from '../../../assets/logos/lumaLogo.svg';
import {
  MobileMenuWrapper,
  LogoContainer,
  MobileMenuIcon,
  MobileMenuButton,
  MobileNavWrapper,
  MobileTabConatiner,
  PoweredByLogoContainer,
} from './MobileMenu.styles';
import { MobileTabButton } from '../MobileTabButton/MobileTabButton';
import { MobileDropdownTab } from '../MobileDropdown/MobileDropdown';
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown';
import { NavTabType, Variant } from '..';
import { PoweredByLumaLogo } from '../PoweredByLumaLogo/PoweredByLumaLogo';
import {
  NavigateHandlerType,
  NavTabTypeWithChildren,
} from '../GlobalNav.types';
import { isTabDropdown } from '../utils/navTabUtils';

interface Props {
  userName: string;
  isMobile: boolean;
  logout: () => void;
  /**
   * outside company logo img source
   */
  issuerLogo?: string;
  /**
   * width property of logo
   */
  logoWidth?: string;
  /**
   * height property of logo
   */
  logoHeight?: string;
  /**
   * styling variant, primary if default luma environment, secondary for whitelabel
   */
  variantType: Variant;
  /**
   * aria label for the bars/mobile menu button
   */
  menuAriaLabel: string;
  /**
   * array of data that will define and complie navbar tabs (names, links, dropdown boolean)
   */
  tabs: NavTabType[];
  /**
   * current active tab, passed in for active tab styling
   */
  activeTab: string;
  /**
   * sets the active tab
   */
  setActiveTab: Dispatch<SetStateAction<string>>;
  /**
   * on click handler for navigation
   */
  handleNavigate: NavigateHandlerType;
  parentActiveTab: string | undefined;
  setParentActiveTab: Dispatch<SetStateAction<string | undefined>>;
}

export const MobileMenu = ({
  issuerLogo,
  logoWidth,
  logoHeight,
  menuAriaLabel,
  tabs,
  handleNavigate,
  activeTab,
  setActiveTab,
  variantType,
  parentActiveTab,
  setParentActiveTab,
  userName,
  isMobile,
  logout,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  return (
    <MobileMenuWrapper variantType={variantType} isOpen={menuOpen}>
      <MobileNavWrapper variantType={variantType} isOpen={menuOpen}>
        <MobileMenuButton
          name="mobile menu"
          aria-label={menuAriaLabel}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MobileMenuIcon
            iconCode={menuOpen ? 'times' : 'bars'}
            prefix="far"
            variantType={variantType}
          />
        </MobileMenuButton>
        <LogoContainer width={logoWidth} height={logoHeight}>
          <Logo imageSource={issuerLogo ? issuerLogo : lumaLogo} />
        </LogoContainer>
      </MobileNavWrapper>
      {menuOpen && variantType === 'secondary' ? (
        <PoweredByLogoContainer>
          <PoweredByLumaLogo isMobile={true} />
        </PoweredByLogoContainer>
      ) : null}
      <MobileTabConatiner>
        {menuOpen &&
          tabs.map((tab) => {
            if (isTabDropdown(tab)) {
              return (
                <MobileDropdownTab
                  key={`${new Date().getTime()} ${tab.title}`}
                  tab={tab as NavTabTypeWithChildren}
                  variantType={variantType}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleNavigate={handleNavigate}
                  parentActiveTab={parentActiveTab}
                  setParentActiveTab={setParentActiveTab}
                  activeMobileDropdown={activeMobileDropdown}
                  setActiveMobileDropdown={setActiveMobileDropdown}
                />
              );
            } else {
              return (
                <MobileTabButton
                  key={`${new Date().getTime()} ${tab.title}`}
                  item={tab}
                  variantType={variantType}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleNavigate={handleNavigate}
                  setParentActiveTab={setParentActiveTab}
                />
              );
            }
          })}
        {menuOpen ? (
          <ProfileDropdown
            userName={userName}
            isMobile={isMobile}
            variantType={variantType}
            logout={logout}
            activeMobileDropdown={activeMobileDropdown}
            setActiveMobileDropdown={setActiveMobileDropdown}
          />
        ) : null}
      </MobileTabConatiner>
    </MobileMenuWrapper>
  );
};
