import { Logo } from '../../../components';
import lumaFlame from '../lumaFlame.svg';
import { LogoContainer } from './LumaFlame.styles';

export const LumaFlame = () => {
  return (
    <LogoContainer>
      <Logo imageSource={lumaFlame} />
    </LogoContainer>
  );
};
