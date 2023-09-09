import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  children: ReactNode;
}

export const Portal = ({ children, element }: PortalProps) => {
  const container =
    element || (document.getElementById('portal') ?? document.body);
  return createPortal(children, container);
};
