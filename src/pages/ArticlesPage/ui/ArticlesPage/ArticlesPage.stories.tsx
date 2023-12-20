import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesPage>;

const Template: StoryFn<typeof ArticlesPage> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
