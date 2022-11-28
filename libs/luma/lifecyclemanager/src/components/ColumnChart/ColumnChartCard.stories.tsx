import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColumnChartCard } from './ColumnChartCard';

export default {
  title: 'Lifecycle Manager 2/ColumnChartCard (Default 400 Days in the Future)',
  component: ColumnChartCard,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/6305042a4124e9119fe20390',
    },
  },
} as ComponentMeta<typeof ColumnChartCard>;

const Template: ComponentStory<typeof ColumnChartCard> = (args) => {
  return <ColumnChartCard {...args} />;
};

export const EventsPayoutHorizon400 = Template.bind({});
EventsPayoutHorizon400.storyName = 'Events - Event Forecast - WITH Date Range';
EventsPayoutHorizon400.args = {
  title: 'Event Forecast',
  styles: 'width: 32rem; border: none;',
};

export const EventsPayoutHorizonNODateRange = Template.bind({});
EventsPayoutHorizonNODateRange.storyName =
  'Events - Event Forecast - No Date Range, No Stack Labels';
EventsPayoutHorizonNODateRange.args = {
  title: 'Event Forecast',
  styles: 'width: 32rem; border: none;',
  highchartOptions: {
    rangeSelector: {
      inputEnabled: false,
      enabled: false,
    },
    yAxis: {
      min: 0,
      title: {
        text: undefined,
      },
      lineWidth: 1,
      reversedStacks: false,
      opposite: false,
    },
    chart: {
      type: 'column',
      height: 300,
    },
  },
};
