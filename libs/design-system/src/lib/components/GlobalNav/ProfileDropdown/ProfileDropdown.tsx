import { Dispatch, SetStateAction } from 'react';
import { ProfileHeaderDropdown } from '../ProfileHeaderDropdown/ProfileHeaderDropdown';
import { ProfileMobileDropdown } from '../ProfileMobileDropdown/ProfileMobileDropdown';

import type { Variant } from '..';

interface Props {
  userName: string;
  isMobile: boolean;
  variantType: Variant;
  accountAriaLabel?: string;
  logout: () => void;
  activeMobileDropdown?: string | null;
  setActiveMobileDropdown?: Dispatch<SetStateAction<string | null>>;
}

export const ProfileDropdown = ({
  userName,
  isMobile,
  variantType,
  accountAriaLabel,
  logout,
  activeMobileDropdown,
  setActiveMobileDropdown,
}: Props) => {
  const items = [
    { name: userName, showItem: true, onClick: null, disabled: true },
    {
      name: 'Contact Us',
      showItem: true,
      onClick: () =>
        window.open('https://lumafintech.com/contactus/', '_blank'),
      disabled: false,
    },
    { name: 'Log Out', showItem: true, onClick: logout, disabled: false },
  ];
  if (isMobile) {
    return (
      <ProfileMobileDropdown
        userName={userName}
        items={items}
        variantType={variantType}
        activeMobileDropdown={activeMobileDropdown}
        setActiveMobileDropdown={setActiveMobileDropdown}
      />
    );
  } else {
    return (
      <ProfileHeaderDropdown
        userName={userName}
        items={items}
        variantType={variantType}
        accountAriaLabel={
          accountAriaLabel ? accountAriaLabel : 'profile button'
        }
      />
    );
  }
};
