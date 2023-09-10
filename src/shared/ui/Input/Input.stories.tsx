import type { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '123123',
};
