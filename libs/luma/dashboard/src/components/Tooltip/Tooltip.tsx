import { ReactNode } from 'react';
import { ReactPortal } from './CreatePortal';
import { TooltipWrapper } from './Tooltip.style';

interface Props {
  children: ReactNode;
  wrapperId: string;
  top: string;
  left: string;
  isVisible: boolean;
}

export const Tooltip = ({
  children,
  wrapperId,
  top,
  left,
  isVisible,
}: Props) => {
  if (!isVisible) return null;
  return (
    <ReactPortal wrapperId={wrapperId}>
      <TooltipWrapper top={top} left={left} role="tooltip">
        {children}
      </TooltipWrapper>
    </ReactPortal>
  );
};
