import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InfoWidget } from './InfoWidget';

export default {
  title: 'Lifecycle-Manager/InfoWidget',
  component: InfoWidget,
  parameters: {
    design: {
      type: 'zeplin',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '15.625rem', width: '62.5rem' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InfoWidget>;

const Template: ComponentStory<typeof InfoWidget> = (args) => (
  <InfoWidget {...args} />
);

export const Summary = Template.bind({});
Summary.args = {
  title: 'Summary',
  styles: 'width: 19.125rem;',
};

export const ProductDetails = Template.bind({});
ProductDetails.args = {
  title: 'Product Details',
  styles: 'width: 32.438rem;',
};

export const PayoutDetails = Template.bind({});
PayoutDetails.args = {
  title: 'Payout Details',
  styles: 'width: 32.438rem;',
};
