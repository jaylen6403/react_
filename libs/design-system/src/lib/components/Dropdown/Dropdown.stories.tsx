import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Secondaries/Dropdown',
  component: Dropdown,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=217%3A8077',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const onClick = (e: any) => console.log('event', e);

const ITEMS = [
  { display: 'Enter an Order', onClick },
  { display: 'Request for Quote', onClick },
  {
    display: 'Post to Market',
    hasSectionBreak: true,
    isDisabled: true,
    onClick,
  },
  {
    display: 'Section Break Example',
    onClick,
  },
];

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: ITEMS,
  variant: 'primary',
  placeholder: 'TRADE',
};

export const Header = Template.bind({});
Header.args = {
  items: ITEMS,
  variant: 'tertiary',
  placeholder: 'Default',
  header: 'Account',
};
