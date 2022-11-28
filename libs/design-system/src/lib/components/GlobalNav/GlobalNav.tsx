import { useState, useEffect } from 'react';
import { NavTabBar } from './NavTabBar/NavTabBar';
import { TopNavBar } from './TopNavBar/TopNavBar';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { GlobalNavContainer } from './GlobalNav.styles';
import { NavigateHandlerType, NavTabType } from './GlobalNav.types';

interface GlobalNavProps {
  userName: string;
  logout: () => void;
  /**
   * array of data that will define and compile navbar tabs (names, links, dropdown boolean)
   */
  tabs: NavTabType[];
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
   * aria label for the profile/account button
   */
  accountAriaLabel: string;
  /**
   * aria label for the bars/mobile menu button
   */
  menuAriaLabel: string;
  /**
   * on click handler for navigation and setting active tab
   */
  handleNavigate: NavigateHandlerType;
}

export const GlobalNav = ({
  userName,
  logout,
  tabs,
  issuerLogo,
  logoWidth,
  logoHeight,
  accountAriaLabel,
  menuAriaLabel,
  handleNavigate,
}: GlobalNavProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 916);
  const [activeTab, setActiveTab] = useState<string>('');
  const [parentActiveTab, setParentActiveTab] = useState<undefined | string>(
    undefined
  );
  const variantType = issuerLogo ? 'secondary' : 'primary';

  useEffect(() => {
    const handleResizeWindow = () => setIsMobile(window.innerWidth < 916);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    const getInitialTabName = () => {
      const pathname = window.location.pathname;

      for (let i = 0; i < tabs.length; i++) {
        const currentObj = tabs[i];
        if (currentObj.route && pathname.startsWith(currentObj.route)) {
          return currentObj.title;
        }

        if (
          currentObj.title === 'TRADE' &&
          pathname.split('/').includes('secondaries')
        ) {
          return currentObj.title;
        }

        if (currentObj.title === 'CREATE' && pathname.includes('creationhub')) {
          return currentObj.title;
        }

        if (currentObj.children) {
          for (let i = 0; i < currentObj.children.length; i++) {
            const currOptionObj = currentObj.children[i];
            if (currOptionObj.route === pathname) {
              setParentActiveTab(currentObj.title);
              return currOptionObj.title;
            }
          }
        }
        if (pathname.includes('product-details')) {
          return 'LIFECYCLE';
        }
      }
      return 'HOME';
    };
    const pathname = getInitialTabName();
    setActiveTab(pathname);
  }, [tabs]);

  if (isMobile) {
    return (
      <GlobalNavContainer title="Mobile Navigation">
        <MobileMenu
          variantType={variantType}
          issuerLogo={issuerLogo}
          logoWidth={logoWidth}
          logoHeight={logoHeight}
          menuAriaLabel={menuAriaLabel}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleNavigate={handleNavigate}
          parentActiveTab={parentActiveTab}
          setParentActiveTab={setParentActiveTab}
          userName={userName}
          isMobile={isMobile}
          logout={logout}
        />
      </GlobalNavContainer>
    );
  } else {
    return (
      <GlobalNavContainer title="Main Navigation">
        <TopNavBar
          variantType={variantType}
          issuerLogo={issuerLogo}
          logoWidth={logoWidth}
          logoHeight={logoHeight}
          accountAriaLabel={accountAriaLabel}
          userName={userName}
          isMobile={isMobile}
          logout={logout}
        />

        <NavTabBar
          tabs={tabs}
          variantType={variantType}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          parentActiveTab={parentActiveTab}
          setParentActiveTab={setParentActiveTab}
          handleNavigate={handleNavigate}
        />
      </GlobalNavContainer>
    );
  }
};
