import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AddCommentForm>;

const Template: StoryFn<typeof AddCommentForm> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];
