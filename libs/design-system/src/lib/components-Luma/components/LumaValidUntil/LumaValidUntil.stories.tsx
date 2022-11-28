import { Story, Meta } from '@storybook/react';
import { LumaValidUntil, LumaValidUntilProps } from './LumaValidUntil';

export default {
  component: LumaValidUntil,
  title: 'Components/Needs-Mock/LumaValidUntil',
} as Meta;

const Template: Story<LumaValidUntilProps> = (args) => {
  return <LumaValidUntil {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onChange: (validUntil: number | undefined) => {
    console.log(validUntil);
  },
};
