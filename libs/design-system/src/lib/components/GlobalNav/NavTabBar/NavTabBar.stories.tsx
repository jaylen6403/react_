import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavTabBar } from './NavTabBar';

export default {
  title: 'Global Nav/NavTabBar',
  component: NavTabBar,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/6244c3d0ee142a1641f4fcd2',
  },
} as ComponentMeta<typeof NavTabBar>;

const Template: ComponentStory<typeof NavTabBar> = (args) => (
  <NavTabBar {...args} />
);

const defaultArgs = {
  tabs: [
    { title: 'HOME', link: '/home', isDropdown: false },
    { title: 'LEARN', link: '/learn', isDropdown: false },
    { title: 'DISCOVER', link: '/discover', isDropdown: true },
    { title: 'CREATE', link: '/create', isDropdown: true },
    { title: 'MANAGE', link: '/manage', isDropdown: false },
  ],
};

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, variantType: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...defaultArgs, variantType: 'secondary' };
