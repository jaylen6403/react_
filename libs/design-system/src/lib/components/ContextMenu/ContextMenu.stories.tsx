import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextMenu } from './ContextMenu';

export default {
  title: 'Secondaries/ContextMenu',
  component: ContextMenu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=217%3A8077',
    },
  },
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => {
  return <ContextMenu {...args} />;
};

const ITEMS = [
  { display: 'Enter an Order', value: 'Action A' },
  { display: 'Request for Quote', value: 'Action B' },
  {
    display: 'Post to Market',
    value: 'Action C',
    hasSectionBreak: true,
    isDisabled: true,
  },
  {
    display: 'Section Break Example',
    value: 'Action C',
  },
];

export const Default = Template.bind({});
Default.args = {
  items: ITEMS,
};
