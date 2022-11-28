import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PerformanceSummary } from './PerformanceSummary';

export default {
  title: 'Lifecycle Manager 2/Annuity Pdf Components',
  component: PerformanceSummary,
  parameters: {},
} as ComponentMeta<typeof PerformanceSummary>;

const Template: ComponentStory<typeof PerformanceSummary> = (args) => {
  return <PerformanceSummary {...args} />;
};

export const PerformanceSummaryComponent = Template.bind({});
PerformanceSummaryComponent.args = {
  title: 'Performance Summary',
  data: [
    {
      field: 'Active Underlier',
      value: 'AFK',
    },
    {
      field: 'Current Level (Strike)',
      value: '1,906.09 (2,285,68)',
    },
    {
      field: 'Underlier Performance',
      value: '-16.61%',
    },
    {
      field: 'Intrinsic Value',
      value: '116.61%',
    },
  ],
};
