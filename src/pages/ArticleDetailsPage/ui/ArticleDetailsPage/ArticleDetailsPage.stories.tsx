import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsPage>;

const Template: StoryFn<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
