import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Page } from './Page';

export default {
  title: 'shared/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Page>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
