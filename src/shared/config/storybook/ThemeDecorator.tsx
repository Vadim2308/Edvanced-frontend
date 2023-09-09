import { Theme } from 'app/providers/ThemeProvider';
import { StoryFn } from '@storybook/react';

export function ThemeDecorator(theme: Theme = Theme.DARK) {
  return (Story: StoryFn) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
}
