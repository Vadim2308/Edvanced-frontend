import 'app/styles/index.scss';
import { StoryObj } from '@storybook/react';

export const styleDecorator = <T>(Story: () => StoryObj) => story();
