import { ReactNode, useEffect, useRef, MouseEvent, useState } from 'react';
import { Portal } from '@luma-fe-workspace/design-system';
import {
  DrawerBackground,
  CloseIcon,
  DrawerContainer,
  CloseIconWrapper,
} from './EmailPreviewDrawer.styles';

type EmailPreviewDrawerProps = {
  id?: string;
  children: ReactNode;
  isOpen: boolean;
  closeDrawer?: () => void;
};

export const EmailPreviewDrawer = ({
  id,
  children,
  isOpen = false,
  closeDrawer = () => {
    /* do nothing */
  },
}: EmailPreviewDrawerProps) => {
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
