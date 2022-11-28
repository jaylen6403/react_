import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnderlyingPerformance } from './UnderlyingPerformance';

export default {
  title: 'Lifecycle Manager 2/Annuity Pdf Components',
  component: UnderlyingPerformance,
  parameters: {},
} as ComponentMeta<typeof UnderlyingPerformance>;

const Template: ComponentStory<typeof UnderlyingPerformance> = (args) => {
  return <UnderlyingPerformance {...args} />;
};

export const UnderlyingPerformanceComponent = Template.bind({});
UnderlyingPerformanceComponent.args = {
  title: 'Underlying Performance',
  data: [
    {
      field: 'Underlying Ticker',
      value: 'RUT',
      color: '#228ed4',
    },
    {
      field: 'Underlying Name',
      value: 'Russell 2000',
    },
    {
      field: 'Strike Price',
      value: 2285.32,
    },
    {
      field: 'Current Index Level',
      value: 1906.09,
    },
    {
      field: 'Buffer Level',
      value: 1985.35,
    },
    {
      field: 'Buffer',
      value: '19.00%',
    },
    {
      field: 'Indicative Return',
      value: '16.61%',
    },
  ],
};
