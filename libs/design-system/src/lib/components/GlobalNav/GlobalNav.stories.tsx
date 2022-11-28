import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dispatch, SetStateAction } from 'react';
import { NAV_TABS } from './generatedNavTabsConst';

import { GlobalNav } from './GlobalNav';

export default {
  title: 'Global Nav/GlobalNav',
  component: GlobalNav,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/6244c3d0ee142a1641f4fcd2',
  },
} as ComponentMeta<typeof GlobalNav>;

const Template: ComponentStory<typeof GlobalNav> = (args) => (
  <GlobalNav {...args} />
);

const clickHandler = (
  title: string,
  route: string,
  setActiveTabFunc: Dispatch<SetStateAction<string>>,
  navigate?: (arg: string) => void
) => {
  setActiveTabFunc(title);
  if (navigate) navigate(route);
};
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
  tabs: NAV_TABS,
  accountAriaLabel: 'profile button',
  menuAriaLabel: 'mobile menu',
  clickHandler,
};

export const LumaLogo = Template.bind({});
LumaLogo.argTypes = argTypeOptions;
LumaLogo.args = defaultArgs;

export const IssuerLogo = Template.bind({});
IssuerLogo.args = {
  ...defaultArgs,
  issuerLogo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1280px-HSBC_logo_%282018%29.svg.png',
};
