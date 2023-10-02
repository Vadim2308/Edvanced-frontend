import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentCard>;

const Template: StoryFn<typeof CommentCard> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
