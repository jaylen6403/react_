import { Logo } from '../../Logo/Logo';
import lumaLogo from '../../../assets/logos/lumaLogo.svg';
import {
  TopNavBarWrapper,
  TopNavBarContainer,
  LogoContainer,
} from './TopNavBar.styles';
import { ProfileDropdown } from '../ProfileDropdown/ProfileDropdown';

interface Props {
  userName: string;
  isMobile: boolean;
  logout: () => void;
  /**
   * outside company logo img source
   */
  issuerLogo?: string;
  /**
   * defines variant to be used for styling
   */
  variantType: 'primary' | 'secondary';
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
}

export const TopNavBar = ({
  issuerLogo,
  logoWidth,
  logoHeight,
  accountAriaLabel,
  variantType,
  userName,
  isMobile,
  logout,
}: Props) => {
  return (
    <TopNavBarContainer>
      <TopNavBarWrapper variantType={variantType}>
        <LogoContainer width={logoWidth} height={logoHeight}>
          <Logo imageSource={issuerLogo ? issuerLogo : lumaLogo} />
        </LogoContainer>
        <ProfileDropdown
          userName={userName}
          isMobile={isMobile}
          variantType={variantType}
          accountAriaLabel={accountAriaLabel}
          logout={logout}
        />
      </TopNavBarWrapper>
    </TopNavBarContainer>
  );
};
