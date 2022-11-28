import { IconLinkContainer, Label, IconWrapper } from './LumaIconLink.styles';
import { LumaIcon, IconCode } from '../LumaIcon';

export interface IconLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Specifies the icon.
   */
  iconCode: IconCode;
  /**
   * Specifies label that will be displayed next to the icon.
   */
  label: string;
  /**
   * Link size.
   */
  sizeVariant: 'medium' | 'small';
  /**
   * Disable the link.
   */
  disabled?: boolean;
}

export const LumaIconLink = ({
  iconCode,
  label,
  sizeVariant,
  disabled = false,
  ...rest
}: IconLinkProps) => {
  return (
    <IconLinkContainer disabled={disabled} {...rest}>
      <IconWrapper sizeVariant={sizeVariant}>
        <LumaIcon iconCode={iconCode} />
      </IconWrapper>
      <Label sizeVariant={sizeVariant}>{label}</Label>
    </IconLinkContainer>
  );
};
