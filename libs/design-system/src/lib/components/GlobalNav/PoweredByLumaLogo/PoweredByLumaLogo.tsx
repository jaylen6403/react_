import lumaDark from '../../../assets/logos/lumaDark.svg';
import { Logo } from '../../Logo/Logo';

import {
  PoweredLogoWrapper,
  PoweredText,
  LogoContainer,
} from './PoweredByLumaLogo.styles';

interface Props {
  isMobile: boolean;
}

export const PoweredByLumaLogo = ({ isMobile }: Props) => {
  return (
    <PoweredLogoWrapper isMobile={isMobile}>
      <PoweredText isMobile={isMobile}>Powered by</PoweredText>
      <LogoContainer width={'88px'} height={'24px'}>
        <Logo imageSource={lumaDark} />
      </LogoContainer>
    </PoweredLogoWrapper>
  );
};
