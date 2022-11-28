import { IconCode } from '../LumaIcon';
import {
  CloseIcon,
  PillContainer,
  PrimaryTitle,
  SecondaryTitle,
  Title,
} from './LumaPill.styles';

export type LumaPillVariant = 'primary' | 'secondary' | 'tertiary';
export type LumaPillSecondaryVariant = 'primary' | 'secondary';

interface LumaPillProps {
  title: React.ReactNode;
  onClose: () => void;
  variant?: LumaPillVariant;
  icon?: boolean;
  iconCode?: IconCode;
  secondaryTitle?: React.ReactNode;
  secondaryTitleVariant?: LumaPillSecondaryVariant;
  borderColor?: string;
  fullPillClickable?: boolean;
}

export const LumaPill = ({
  title,
  onClose,
  icon = true,
  iconCode,
  variant = 'primary',
  secondaryTitle,
  secondaryTitleVariant = 'primary',
  borderColor,
  fullPillClickable = false,
}: LumaPillProps) => {
  return (
    <PillContainer
      variant={variant}
      borderColor={borderColor}
      clickable={fullPillClickable}
      onClick={fullPillClickable ? onClose : () => null}
    >
      <PrimaryTitle variant={variant}>
        {icon && (
          <CloseIcon
            iconCode={iconCode ?? 'close'}
            type="solid"
            onClick={fullPillClickable ? () => null : onClose}
          />
        )}
        <Title>{title}</Title>
      </PrimaryTitle>
      {secondaryTitle && (
        <SecondaryTitle>
          <Title variant={secondaryTitleVariant}>{secondaryTitle}</Title>
        </SecondaryTitle>
      )}
    </PillContainer>
  );
};
