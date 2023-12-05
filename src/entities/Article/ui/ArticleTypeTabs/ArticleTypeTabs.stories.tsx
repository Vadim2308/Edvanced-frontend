import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleTypeTabs>;

const Template: StoryFn<typeof ArticleTypeTabs> = (args) => (
  <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
