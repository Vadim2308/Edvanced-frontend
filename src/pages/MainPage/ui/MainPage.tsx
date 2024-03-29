import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page data-testid='MainPage'>{t('Главная страница')}</Page>;
};

export default memo(MainPage);
