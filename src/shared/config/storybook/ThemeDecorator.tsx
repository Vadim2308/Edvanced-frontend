import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';

export function ThemeDecorator(theme: Theme = Theme.DARK) {
  return (Story: StoryFn) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
}
