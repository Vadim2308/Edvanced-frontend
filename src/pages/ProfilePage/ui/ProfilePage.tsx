import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import {
  EditableProfileCard,
  fetchProfileData,
} from 'features/editableProfileCard';
import { t } from 'i18next';
import { Text } from 'shared/ui/Text';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  if (!id) {
    return <Text text={t('Профиль не найден')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap='16' max>
        <EditableProfileCard id={id ?? ''} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
