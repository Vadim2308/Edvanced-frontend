import type { Preview, StoryFn } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { useEffect } from 'react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';

const delay = 1000;

function isLokiRunning(win = window) {
  // @ts-ignore
  return Boolean(win.loki && win.loki.isRunning);
}

function createAsyncCallback(win = window) {
  // @ts-ignore
  const registerPendingPromise = win.loki && win.loki.registerPendingPromise;
  // @ts-ignore
  let resolveAsyncStory;
  if (registerPendingPromise) {
    registerPendingPromise(
      new Promise((resolve) => {
        resolveAsyncStory = resolve;
      }),
    );
  }

  return () => {
    // @ts-ignore
    if (resolveAsyncStory) {
      // @ts-ignore
      resolveAsyncStory();
    }
  };
}

export const LokiDecorator = (StoryComponent: StoryFn) => {
  useEffect(() => {
    if (isLokiRunning()) {
      const onDone = createAsyncCallback();
      const timer = setTimeout(() => {
        onDone();
      }, delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);
  return <StoryComponent />;
};

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
  decorators: [LokiDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
