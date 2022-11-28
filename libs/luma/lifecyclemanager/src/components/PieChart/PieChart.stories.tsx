import { PieChart } from './PieChart';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Lifecycle Manager 2/PieChart',
  component: PieChart,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e05594a3a7ae11b8a47e42',
  },
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
  <PieChart {...args} />
);

const defaultArgs = {
  data: [
    {
      name: 'BARC',
      y: 123,
    },
    {
      name: 'CITI',
      y: 64,
    },
    {
      name: 'MS',
      y: 15,
    },
    {
      name: 'HSBC USA',
      y: 6,
    },
    {
      name: 'Bloomberg',
      y: 50,
    },
  ],
};

export const PieChartStory = Template.bind({});
PieChartStory.storyName = 'Default Pie Chart';
PieChartStory.args = { ...defaultArgs };

export const DonutChartStory = Template.bind({});
DonutChartStory.storyName = 'Donut Chart';
DonutChartStory.args = { ...defaultArgs, innerSize: '45%' };
