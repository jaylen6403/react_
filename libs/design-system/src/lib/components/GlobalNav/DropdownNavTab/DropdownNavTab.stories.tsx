import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownNavTab } from './DropdownNavTab';

export default {
  title: 'Global Nav/DropdownNavTab',
  component: DropdownNavTab,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/6244c3d0ee142a1641f4fcd2',
  },
} as ComponentMeta<typeof DropdownNavTab>;

const Template: ComponentStory<typeof DropdownNavTab> = (args) => (
  <DropdownNavTab {...args} />
);

const defaultArgs = {
  title: 'MARKETPLACE',
  tab: {
    title: 'Title',
    children: [
      {
        title: 'Structured Products',
        route: '/structured',
        parent: 'MARKETPLACE',
      },
      { title: 'Annuities', route: '/annuities', parent: 'MARKETPLACE' },
      { title: 'Comparison', route: '/comparison', parent: 'MARKETPLACE' },
      { title: 'Order Management', route: '/order', parent: 'MARKETPLACE' },
      { title: 'Settings', route: '/settings', parent: 'MARKETPLACE' },
    ],
  },
};
export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variantType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variantType: 'secondary',
};
