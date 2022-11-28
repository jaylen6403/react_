import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { ProfileDropdown } from './ProfileDropdown';

const StorybookWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: skyblue;
  width: 100vw;
`;

export default {
  title: 'Global Nav/ProfileDropdown',
  component: ProfileDropdown,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6244c37df5157fbda8073c5b/screen/625469e176dca86b0d8067d6',
  },
} as ComponentMeta<typeof ProfileDropdown>;

const Template: ComponentStory<typeof ProfileDropdown> = (args) => (
  <StorybookWrapper>
    <ProfileDropdown {...args} />
  </StorybookWrapper>
);

const defaultArgs = {
  userName: 'Jane Smith',
  isAdmin: true,
  variantType: 'primary',
  accountAriaLabel: 'profile button',
  isMobile: false,
};

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, variantType: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variantType: 'secondary',
};
