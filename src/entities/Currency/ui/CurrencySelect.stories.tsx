import type { Meta, StoryFn } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
