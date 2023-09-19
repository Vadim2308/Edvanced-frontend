import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Portal } from 'shared/ui/Portal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose(): void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Portal>
      <Modal lazy isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
          <LoginFormAsync onSuccess={onClose} />
        </Suspense>
      </Modal>
    </Portal>
  );
};
