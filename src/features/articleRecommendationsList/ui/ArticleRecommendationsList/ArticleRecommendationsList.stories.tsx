import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRecommendationsList>;

const Template: StoryFn<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
