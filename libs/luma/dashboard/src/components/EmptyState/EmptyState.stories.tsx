import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyState } from './EmptyState';

export default {
  title: 'Dashboard/EmptyState',
  component: EmptyState,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62aba21c359448059b59e252',
  },
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
);

const defaultArgs = {
  cardTitle: 'Annuities Portfolio',
  mainText: 'You currently have no live products in your portfolio',
  isSmall: false,
  subText: 'View new products',
  link: 'http://lm.bdev.lumafintech.com/product-marketplace',
  linkText: 'Product Marketplace',
};

export const Annuities = Template.bind({});
Annuities.args = {
  ...defaultArgs,
};

export const AnnuitiesSmall = Template.bind({});
AnnuitiesSmall.args = {
  ...defaultArgs,
  isSmall: true,
};

export const Application = Template.bind({});
Application.args = {
  ...defaultArgs,
  cardTitle: 'Application Tracker',
  mainText: 'You have no active applications',
  isSmall: false,
  subText: '',
  link: '',
  linkText: '',
};
