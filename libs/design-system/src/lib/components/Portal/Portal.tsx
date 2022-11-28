import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  id?: string;
  children: ReactNode;
};

export const Portal = ({ id = 'body', children }: PortalProps) => {
  return createPortal(children, document.getElementById(id) || document.body);
};
