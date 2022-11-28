import { ReactNode, useEffect, useRef, MouseEvent, useState } from 'react';
import { Portal } from '../Portal/Portal';
import {
  DrawerBackground,
  CloseIcon,
  DrawerContainer,
  CloseIconWrapper,
} from './Drawer.styles';

interface DrawerProps {
  id?: string;
  children: ReactNode;
  isOpen: boolean;
  closeDrawer?: () => void;
  hasOverlay?: boolean;
}

export const Drawer = ({
  id,
  children,
  isOpen = false,
  closeDrawer = () => {
    /* do nothing */
  },
  hasOverlay = true,
}: DrawerProps) => {
  const [onToggle, setOnToggle] = useState(false);
  const reqElement = useRef(null);
  const escFunction = (event: KeyboardEvent): void => {
    event.key === 'Escape' && animateCloseDrawer();
  };

  const clickBackground = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    if (target.children[0] === reqElement.current) {
      animateCloseDrawer();
    }
  };

  useEffect(() => {
    setOnToggle(isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return (): void => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });
  const animateCloseDrawer = () => {
    /* this function allows for the animation to complete before the drawer closes */
    setOnToggle(false);
    setTimeout(() => closeDrawer(), 300);
  };

  return (
    <Portal id={id}>
      <DrawerBackground
        hasOverlay={hasOverlay}
        isOpen={isOpen}
        onClick={(event) => clickBackground(event)}
      >
        <DrawerContainer onToggle={onToggle} ref={reqElement}>
          <CloseIconWrapper onClick={animateCloseDrawer}>
            <CloseIcon iconCode="close" />
          </CloseIconWrapper>
          {children}
        </DrawerContainer>
      </DrawerBackground>
    </Portal>
  );
};
