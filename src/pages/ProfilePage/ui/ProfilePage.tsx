import { classNames } from 'shared/lib/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap='16' max>
        <EditableProfileCard />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
