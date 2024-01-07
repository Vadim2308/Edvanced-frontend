import type { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ErrorPage } from './ErrorPage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ErrorPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
