import { I18nextProvider } from 'react-i18next';
import { StoryFn } from '@storybook/react';
import React, { Suspense } from 'react';
import i18n from '../i18n/i18nForTest';

export const TranslationDecorator = (Story: StoryFn) => (
  <Suspense fallback=''>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
