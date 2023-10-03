import type { Meta, StoryObj } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { HeaderComponent } from './header.component';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<HeaderComponent> = {
  title: 'Task',
  component: HeaderComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: HeaderComponent) => ({
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
