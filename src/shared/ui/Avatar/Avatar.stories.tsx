import type { Meta, StoryFn } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpeg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
