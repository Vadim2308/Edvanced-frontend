import type { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title lorem ipsun',
  text: 'Description title ',
};

export const Error = Template.bind({});
Error.args = {
  title: 'title lorem ipsun',
  text: 'Description title ',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title lorem ipsun',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Description title ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title lorem ipsun',
  text: 'Description title ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'title lorem ipsun',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Description title ',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.L,
};
export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.M,
};
export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.S,
};
