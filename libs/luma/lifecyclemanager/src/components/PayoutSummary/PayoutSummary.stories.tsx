import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PayoutSummary } from './PayoutSummary';
import { mockSummaryData } from '@luma-fe-workspace/redux';

export default {
  title: 'Lifecycle Manager 2/PayoutSummary',
  component: PayoutSummary,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/6305042a4124e9119fe20390',
    },
  },
} as ComponentMeta<typeof PayoutSummary>;

const Template: ComponentStory<typeof PayoutSummary> = (args) => {
  return <PayoutSummary {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  styles: 'width: 19.125rem;',
  title: ' Payout Summary',
  mockPayoutSummaryData: mockSummaryData,
};

export const ExampleData = Template.bind({});
ExampleData.args = {
  styles: 'width: 19.125rem;',
  title: ' Payout Summary',
  mockPayoutSummaryData: {
    notional: {
      amount: 1.0061814221e11,
      percentage: 1.0,
    },
    holdings: {
      amount: 5068,
      percentage: 1.0,
    },
    totalPayoutAmount: {
      amount: 5.109996748905687e10,
      percentage: 1.0,
    },
    totalEventCount: {
      amount: 3279,
      percentage: 1.0,
    },
  },
};
