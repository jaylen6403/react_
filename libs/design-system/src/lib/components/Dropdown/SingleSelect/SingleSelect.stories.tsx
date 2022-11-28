import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem, SingleSelect } from './SingleSelect';

export default {
  title: 'Secondaries/SingleSelect',
  component: SingleSelect,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=217%3A8077',
    },
  },
} as ComponentMeta<typeof SingleSelect>;

const Template: ComponentStory<typeof SingleSelect> = (args) => {
  const [item, setItem] = useState<MenuItem<string>>();
  const onChange = (i: any) => setItem(i);
  return <SingleSelect {...args} selectedItem={item} onChange={onChange} />;
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
  variant: 'primary',
  placeholder: 'TRADE',
};
