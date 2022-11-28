import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Secondaries/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=182%3A1092',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Log In',
  variant: 'primary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Log In',
  disabled: true,
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Log In',
  variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Log In',
  disabled: true,
  variant: 'secondary',
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <Icon iconCode="plus" />,
  variant: 'primary',
};
