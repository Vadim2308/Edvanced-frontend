import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsPageHeader>;

const Template: StoryFn<typeof ArticleDetailsPageHeader> = () => (
  <ArticleDetailsPageHeader />
);

export const Normal = Template.bind({});
Normal.args = {};
