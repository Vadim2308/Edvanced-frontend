import { classNames } from 'shared/lib/classNames';
import React, { ReactNode } from 'react';
import type { Mods } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?(): void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { isMounted, close, isClosing } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null; // TODO:WTF

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <Overlay onClick={close} />
      <div className={classNames(cls.content)}>{children}</div>
    </div>
  );
};
