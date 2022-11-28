import { Logo } from '../../../components';
import lumaFlameNeutral from '../lumaFlameNeutral.svg';
import { LogoContainer } from './LumaFlameNeutral.styles';

export const LumaFlameNeutral = () => {
  return (
    <LogoContainer>
      <Logo imageSource={lumaFlameNeutral} />
    </LogoContainer>
  );
};
