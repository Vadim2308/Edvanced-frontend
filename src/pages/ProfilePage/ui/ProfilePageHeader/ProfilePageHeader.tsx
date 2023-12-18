import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify='between' className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {readonly ? (
            <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap='8' justify='end'>
              <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                {t('Отменить')}
              </Button>
              <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                {t('Сохранить')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
