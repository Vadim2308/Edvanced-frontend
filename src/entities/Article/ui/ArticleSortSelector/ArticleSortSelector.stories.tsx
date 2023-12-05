import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleSortSelector>;

const Template: StoryFn<typeof ArticleSortSelector> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
