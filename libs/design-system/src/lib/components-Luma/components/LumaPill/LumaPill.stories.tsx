import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaPill } from './LumaPill';

export default {
  title: 'Components/In-Progress/Pill',
  component: LumaPill,
  parameters: {
    zeplinLink: [],
  },
} as ComponentMeta<typeof LumaPill>;

const Template: ComponentStory<typeof LumaPill> = (args) => {
  return <LumaPill {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  onClose: () => null,
  variant: 'primary',
  fullPillClickable: false,
};
Primary.story = {
  name: 'Primary',
};

export const Split = Template.bind({});
Split.args = {
  title: 'One',
  onClose: () => null,
  variant: 'primary',
  fullPillClickable: false,
  secondaryTitle: 'Two',
};
Split.story = {
  name: 'Split',
};
