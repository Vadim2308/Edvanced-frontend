import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'shared/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleViewSelector>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
