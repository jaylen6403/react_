import { mockPayoutBreakdownData } from '@luma-fe-workspace/redux';

import { PieChartCard } from './PieChartCard';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { colors } from '@luma-fe-workspace/design-system';

const Template: ComponentStory<typeof PieChartCard> = (args) => {
  return <PieChartCard {...args} />;
};

export const EventsPieChartCardStory = Template.bind({});
EventsPieChartCardStory.storyName = 'Events Pie Chart Card';
EventsPieChartCardStory.args = {
  mockPayoutBreakdownData: mockPayoutBreakdownData,
  title: 'Exposure Allocation',
  styles: ` width: 32.438rem; border-radius: 0.623rem; border: solid 0.063rem ${colors.neutral30};`,
};

export default {
  title: 'Lifecycle Manager 2/PieChartCard',
  component: PieChartCard,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62619a5283e0acab4c5be17d',
  },
} as ComponentMeta<typeof PieChartCard>;
