import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

/**
 * Компонент для тестирования EB
 */
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (!error) return;
    throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};