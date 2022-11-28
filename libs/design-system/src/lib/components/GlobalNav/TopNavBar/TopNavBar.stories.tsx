import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopNavBar } from './TopNavBar';

export default {
  title: 'Global Nav/TopNavBar',
  component: TopNavBar,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/6244c3d0ee142a1641f4fcd2',
  },
} as ComponentMeta<typeof TopNavBar>;

const Template: ComponentStory<typeof TopNavBar> = (args) => (
  <TopNavBar {...args} />
);

const defaultArgs = {
  accountAriaLabel: 'profile button',
};

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, variantType: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variantType: 'secondary',
  issuerLogo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png',
};
