import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

export default {
  title: 'Global Nav/MobileMenu',
  component: MobileMenu,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/625469e176dca86b0d8067d6',
  },
} as ComponentMeta<typeof MobileMenu>;

const Template: ComponentStory<typeof MobileMenu> = (args) => (
  <MobileMenu {...args} />
);

const argTypeOptions = {
  issuerLogo: {
    options: {
      Luma: undefined,
      UBS: 'https://logos-download.com/wp-content/uploads/2016/04/UBS_logo_logotype_emblem.png',
      HSBC: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png',
    },
    control: { type: 'radio' },
  },
};

const defaultArgs = {
  tabs: [
    { title: 'HOME', route: '/home', isDropdown: false },
    { title: 'LEARN', route: '/learn', isDropdown: false },
    { title: 'MARKETPLACE', route: '/marketplace', isDropdown: true },
    { title: 'CREATE', route: '/create', isDropdown: true },
    { title: 'LIFECYCLE', route: '/lifecycle', isDropdown: false },
    { title: 'TRADE', route: '/trade', isDropdown: false },
  ],
  menuAriaLabel: 'mobile menu button',
};

export const LumaLogo = Template.bind({});
LumaLogo.argTypes = argTypeOptions;
LumaLogo.args = { ...defaultArgs, variantType: 'primary' };

export const IssuerLogo = Template.bind({});
IssuerLogo.args = {
  ...defaultArgs,
  variantType: 'secondary',
  issuerLogo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png',
};
