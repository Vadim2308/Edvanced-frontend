import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { type User, UserRole } from '@/entities/User';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AvatarDropdown>;

const authData: User = {
  avatar: '',
  id: '',
  roles: [UserRole.ADMIN],
  username: '',
};

const userStore = {
  authData,
  _inited: true,
};

const Template: StoryFn<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    user: userStore,
  }),
];
