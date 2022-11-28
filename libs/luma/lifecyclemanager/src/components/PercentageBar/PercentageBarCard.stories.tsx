import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PercentageBarCard } from './PercentageBarCard';

export default {
  title: 'Lifecycle Manager 2/PercentageBarCard',
  component: PercentageBarCard,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e05594a3a7ae11b8a47e42',
    },
  },
} as ComponentMeta<typeof PercentageBarCard>;

const Template: ComponentStory<typeof PercentageBarCard> = (args) => {
  return <PercentageBarCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
  title: 'Max. Coupon Payments Remaining',
  content: 6177166,
};
