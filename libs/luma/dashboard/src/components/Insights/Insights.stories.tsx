import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Insights } from './Insights';

export default {
  title: 'Dashboard/Insights',
  component: Insights,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62be0a9e8e5a411957d5bedc',
  },
} as ComponentMeta<typeof Insights>;

const Template: ComponentStory<typeof Insights> = () => <Insights />;

export const InsightsWidget = Template.bind({});
InsightsWidget.args = {};
