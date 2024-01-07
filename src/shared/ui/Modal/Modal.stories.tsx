import type { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur atque aut consectetur cum cumque ducimus ea eaque eligendi enim error esse eveniet facilis impedit ipsam ipsum laudantium libero nemo neque nihil, numquam perferendis quam qui quo quod ratione repellat sint soluta sunt tenetur ut velit vitae?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur atque aut consectetur cum cumque ducimus ea eaque eligendi enim error esse eveniet facilis impedit ipsam ipsum laudantium libero nemo neque nihil, numquam perferendis quam qui quo quod ratione repellat sint soluta sunt tenetur ut velit vitae?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
