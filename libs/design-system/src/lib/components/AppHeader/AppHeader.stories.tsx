import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppHeader } from './AppHeader';

export default {
  title: 'Secondaries/AppHeader',
  component: AppHeader,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=217%3A8077',
    },
  },
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  centerContent: '',
  rightContent: '',
  title: 'Default',
};

export const Trade = Template.bind({});
Trade.args = {
  centerContent: '',
  rightContent: '',
  title: 'Trade',
};
