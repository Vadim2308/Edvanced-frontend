// noinspection RequiredAttributes

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Text } from '../Text';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title='test' text='text text' />,
};
