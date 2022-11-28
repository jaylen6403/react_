import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockConvertedPayoutHorizonData400 } from '@luma-fe-workspace/redux';
import { ColumnChart } from './ColumnChart';

export default {
  title: 'Lifecycle Manager 2/ColumnChart',
  component: ColumnChart,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/6305042a4124e9119fe20390',
    },
  },
} as ComponentMeta<typeof ColumnChart>;

const Template: ComponentStory<typeof ColumnChart> = (args) => {
  return <ColumnChart {...args} />;
};

// Lifecycle Manager 2 - Events Stories
export const EventsPayoutHorizon400 = Template.bind({});
EventsPayoutHorizon400.storyName =
  'Events - Event Forecast Column Chart (400 Days in the Future)';
EventsPayoutHorizon400.args = {
  data: mockConvertedPayoutHorizonData400,
};
