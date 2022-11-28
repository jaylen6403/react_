import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaStatus } from './LumaStatus';

const Message = () => {
  return (
    <>
      <h1>Error!</h1>
      <p>Custom Status Template</p>
    </>
  );
};

export default {
  title: 'Components/Waiting/Status',
  component: LumaStatus,
  parameters: {
    design: {
      type: 'Zeplin',
      url: 'https://app.zeplin.io/styleguide/624c74edc63a9e13edc17931/components?seid=624df38e4aa53e15706755c4',
    },
  },
} as ComponentMeta<typeof LumaStatus>;

const Template: ComponentStory<typeof LumaStatus> = (args) => {
  return <LumaStatus {...args} />;
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  variant: 'failed',
  ariaLabel: 'Failed Message',
};

export const CustomTemplate = Template.bind({});
CustomTemplate.args = {
  variant: 'failed',
  ariaLabel: 'Failed Message',
  renderContent: <Message />,
};

export const CustomAttributes = Template.bind({});
CustomAttributes.args = {
  variant: 'failed',
  ariaLabel: 'Failed Message',
  icon: 'check-circle',
  titleMessage: 'Custom Message',
  helperMessage: 'Custom helper Message',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'progress',
  ariaLabel: 'Progress Message',
  iconAnimate: 'fa-spin',
  statusBorder: true,
};

export const AnimateErrorIcon = Template.bind({});
AnimateErrorIcon.args = {
  variant: 'failed',
  ariaLabel: 'Animate Icon',
  iconAnimate: 'fa-spin',
};
