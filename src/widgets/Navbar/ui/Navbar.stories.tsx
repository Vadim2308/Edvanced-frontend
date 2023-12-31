import type { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Navbar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
