import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { ModalBackground, ModalContainer } from './Modal.styles';

type ModalProps = {
  id?: string;
  children: ReactNode;
  isOpen: boolean;
  background?: string;
  top?: string;
  left?: string;
  position?: string;
};

export const Modal = ({
  id,
  children,
  isOpen = false,
  background,
  top,
  left,
  position,
}: ModalProps) => {
  return (
    <Portal id={id}>
      <ModalBackground
        isOpen={isOpen}
        background={background}
        top={top}
        left={left}
        position={position}
      >
        <ModalContainer>{children}</ModalContainer>
      </ModalBackground>
    </Portal>
  );
};
