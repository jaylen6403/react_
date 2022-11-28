import { IconName } from '@fortawesome/fontawesome-svg-core';
import { PillContainer, PillIcon } from './Pill.styles';

interface PillProps {
  text: string;
  icon?: IconName;
  onPillClick?: () => void;
}

export const Pill = ({ text, icon, onPillClick }: PillProps) => (
  <PillContainer
    clickable={Boolean(onPillClick)}
    onClick={() => onPillClick && onPillClick()}
  >
    {icon && <PillIcon iconCode={icon} />}
    {text}
  </PillContainer>
);
