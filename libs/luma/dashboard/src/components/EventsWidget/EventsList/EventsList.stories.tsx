import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EventsList } from './EventsList';
import { ProductTypes } from '../../../utils/types';
import { annuitiesData } from '../../../utils/annuitiesUtils';
import { EventsWidgetBody } from '../Scroll/Scroll.styles';

export default {
  title: 'Dashboard/EventsList',
  component: EventsList,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/62619a5283e0acab4c5be17d',
  },
} as ComponentMeta<typeof EventsList>;

const spsData = [
  {
    eventFutureInfo: '--',
    eventType: 'Coupon Payment Date',
    productIdentifier: '17328YXR0',
    underlierList: [
      {
        name: undefined,
        symbol: 'SPX-ABCDEFG',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'RTY',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'RTY',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'RTY',
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
    eventDate: '2022-06-09',
    notional: 557000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: 'No Call Barrier Level',
    eventType: 'Call Evaluation Date',
    productIdentifier: '06741WRN2',
    underlierList: [
      {
        name: undefined,
        symbol: 'NDX',
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
    eventDate: '2022-06-13',
    notional: 1104000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '100% Call Barrier',
    eventType: 'Call Evaluation Date',
    productIdentifier: '48132TQW9',
    underlierList: [
      {
        name: undefined,
        symbol: 'ARKK UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 2515000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Single',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '100% Call Barrier',
    eventType: 'Call Evaluation Date',
    productIdentifier: '48132RY95',
    underlierList: [
      {
        name: undefined,
        symbol: 'ICLN UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
      {
        name: undefined,
        symbol: 'TAN UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 1138000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '100% Call Barrier',
    eventType: 'Call Evaluation Date',
    productIdentifier: '48132TQV1',
    underlierList: [
      {
        name: undefined,
        symbol: 'ARKK UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 2236000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Single',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '60% Coupon Barrier',
    eventType: 'Coupon Evaluation Date',
    productIdentifier: '48132TAM8',
    underlierList: [
      {
        name: undefined,
        symbol: 'ARKK UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 1251000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Single',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '100% Call Barrier',
    eventType: 'Call Evaluation Date',
    productIdentifier: '48132TRE8',
    underlierList: [
      {
        name: undefined,
        symbol: 'ARKK UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 3248000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Single',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '70% Coupon Barrier',
    eventType: 'Coupon Evaluation Date',
    productIdentifier: '48132RZ52',
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
    eventDate: '2022-06-15',
    notional: 1614000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '60% Coupon Barrier',
    eventType: 'Coupon Evaluation Date',
    productIdentifier: '48132RZ86',
    underlierList: [
      {
        name: undefined,
        symbol: 'ARKK UP',
        source: 'BLOOMBERG',
        weight: undefined,
      },
    ],
    eventDate: '2022-06-15',
    notional: 1367000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Single',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: 'No Call Barrier Level',
    eventType: 'Call Evaluation Date',
    productIdentifier: '06748EH48',
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
    notional: 7860000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: '67.5% Coupon Barrier',
    eventType: 'Coupon Evaluation Date',
    productIdentifier: '61771VGM6',
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
    notional: 987000.0,
    currency: 'USD',
    eventProximity: '9.08% Above Barrier Level',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
    eventFutureInfo: 'No Call Barrier Level',
    eventType: 'Call Evaluation Date',
    productIdentifier: '06748EHY2',
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
    notional: 2090000.0,
    currency: 'USD',
    eventProximity: 'No Proximity Data',
    basketType: 'Worst Of',
    productStatus: 'LIVE',
  },
  {
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
];

const Template: ComponentStory<typeof EventsList> = (args) => (
  <EventsWidgetBody>
    <EventsList {...args} />
  </EventsWidgetBody>
);

const defaultArgs = {
  productType: ProductTypes.StructuredProducts,
  data: spsData,
  annuitiesToggle: { next: true, past: false },
};

export const Structured = Template.bind({});
Structured.args = { ...defaultArgs };

export const Annuities = Template.bind({});
Annuities.args = {
  ...defaultArgs,
  productType: ProductTypes.Annuities,
  data: annuitiesData[0].calendarEvents,
};
