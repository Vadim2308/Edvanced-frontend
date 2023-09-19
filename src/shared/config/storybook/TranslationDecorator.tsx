import { I18nextProvider } from 'react-i18next';
import { StoryFn } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForTest';
import React, { Suspense } from 'react';

export const TranslationDecorator = (Story: StoryFn) => (
  <Suspense fallback=''>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
