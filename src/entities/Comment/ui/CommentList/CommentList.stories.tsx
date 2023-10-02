import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>;

const Template: StoryFn<typeof CommentList> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
