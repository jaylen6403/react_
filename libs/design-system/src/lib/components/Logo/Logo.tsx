import { LogoStyle } from './Logo.styles';

interface Props {
  imageSource: string;
}

export const Logo = ({ imageSource }: Props) => {
  return <LogoStyle alt="logo image" title="logo" src={imageSource} />;
};
