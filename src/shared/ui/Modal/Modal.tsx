import { classNames } from 'shared/lib/classNames';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?(): void;
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    if (onClose) {
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={classNames(cls.overlay)} onClick={closeHandler}>
        <div className={classNames(cls.content)} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
