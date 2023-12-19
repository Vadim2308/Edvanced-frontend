import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ListBox } from './ListBox';

const people = [
  { id: 1, value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { id: 2, value: 'Kenton Towne', content: 'Kenton' },
  { id: 3, value: 'Therese Wunsch', content: 'Therese Wunsch' },
  { id: 4, value: 'Benedict Kessler', content: 'Benedict Kessler' },
  { id: 5, value: 'Katelyn Rohan', content: 'Katelyn Rohan', disabled: true },
];

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'ListBoxLabel',
  items: people,
  value: people[0].value,
  onChange: (value) => void value,
};
