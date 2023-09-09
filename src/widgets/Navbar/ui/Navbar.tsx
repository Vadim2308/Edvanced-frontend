import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import { Modal } from 'shared/ui/Modal';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setisAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setisAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Portal>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          architecto aspernatur atque aut consectetur cum cumque ducimus ea
          eaque eligendi enim error esse eveniet facilis impedit ipsam ipsum
          laudantium libero nemo neque nihil, numquam perferendis quam qui quo
          quod ratione repellat sint soluta sunt tenetur ut velit vitae? Ab
          aperiam architecto consectetur corporis dolorum enim est facere id
          illum laborum libero magnam molestias, natus necessitatibus nesciunt
          nihil perspiciatis praesentium quaerat repellendus saepe sequi totam,
          voluptatem voluptatibus. Ad assumenda consequatur dignissimos eaque
          eos ipsum officiis porro quibusdam temporibus, voluptates. Corporis
          enim et fugiat natus repellendus sit suscipit totam ut velit
          voluptate.
        </Modal>
      </Portal>
    </div>
  );
};
