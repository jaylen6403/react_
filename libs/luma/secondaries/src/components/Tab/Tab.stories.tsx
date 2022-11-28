import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from './Tab';
import { useState } from 'react';

export default {
  title: 'Secondaries/Tab',
  component: Tab,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=612%3A31480',
    },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  const [isOpen, setIsOpen] = useState(args.showTab);
  return <Tab {...args} showTab={isOpen} setVisible={setIsOpen}></Tab>;
};

export const Default = Template.bind({});
Default.args = {
  display: 'Example Tab',
  activeTab: true,
  hasClose: true,
  tabContent: 'Example Content',
  showTab: true,
};
