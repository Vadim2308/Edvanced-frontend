import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const dropDownOptions = [
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id),
    },
    { content: t('Выйти'), onClick: onLogout },
  ];
  if (isAdminPanelAvailable) {
    dropDownOptions.unshift({
      content: t('Админка'),
      href: getRouteAdmin(),
    });
  }

  return (
    <Dropdown
      direction='bottom left'
      className={classNames('', {}, [className])}
      items={dropDownOptions}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
