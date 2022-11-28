import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StructuredProductsCard } from './StructuredProductsCard';

export default {
  title: 'Dashboard/StructuredProductsCard',
  component: StructuredProductsCard,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62619a5283e0acab4c5be17d',
  },
} as ComponentMeta<typeof StructuredProductsCard>;

const Template: ComponentStory<typeof StructuredProductsCard> = (args) => (
  <StructuredProductsCard {...args} />
);

const defaultArgs = {
  event: {
    eventFutureInfo: '75% Coupon Barrier',
    eventType: 'Coupon Evaluation Date',
    productIdentifier: '06748EGY3',
    underlierList: [
      {
        name: undefined,
        symbol: 'NDX',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'SPX',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'RTY',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-16',
    notional: 1.175e7,
    currency: 'USD',
    eventProximity: '3.5% Above Barrier Level',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
};

export const Structured = Template.bind({});
Structured.args = { ...defaultArgs };
