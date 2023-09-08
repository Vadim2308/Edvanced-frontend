import type { Preview } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(Story) => styleDecorator(Story)],
};
export default preview;
