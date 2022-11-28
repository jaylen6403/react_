import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductDetailsTable } from './ProductDetailsTable';

export default {
  title: 'Lifecycle Manager 2/Product Details Table',
  component: ProductDetailsTable,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e837f61fd90f10a2a2d245',
    },
  },
} as ComponentMeta<typeof ProductDetailsTable>;

const Template: ComponentStory<typeof ProductDetailsTable> = (args) => {
  return <ProductDetailsTable {...args} />;
};

export const ProductDates = Template.bind({});
ProductDates.storyName = 'Product Dates';
ProductDates.args = {
  data: [
    {
      field: 'Pricing',
      value: '12-20-2019',
    },
    {
      field: 'Settlement',
      value: '12-26-2019',
    },
    {
      field: 'Final Observation',
      value: '12-20-2022',
    },
    {
      field: 'Maturity',
      value: '12-23-2022',
    },
  ],
};

export const ProductDetails = Template.bind({});
ProductDetails.storyName = 'Product Details';
ProductDetails.args = {
  data: [
    {
      field: 'Issuer',
      value: 'JPMorgan Chase Financial Company, LLC',
    },
    {
      field: 'Calculation Agent',
      value: 'JPMorgan Chase Financial Company, LLC',
    },
    {
      field: 'Structure Type',
      value: 'Autocallable Contingent Interest Note',
    },
    {
      field: 'Asset Class',
      value: 'Worst Of Basket',
    },
    {
      field: 'Underlying Tickers',
      value: 'EEM, SPX, DAL, RTY',
    },
    {
      field: 'Term (Remaining)',
      value: '3 Years (4 Months)',
    },
    {
      field: 'Call Type / NC / Freq.',
      value: 'Autocallable / 0 NC / Quarterly',
    },
    {
      field: 'Protection Level',
      value: '25.00%',
    },
    {
      field: 'Principal Threshold',
      value: '65.00%',
    },
    {
      field: 'Issuer Size',
      value: '10,985,504',
    },
    {
      field: 'Denomination',
      value: '10',
    },
    {
      field: 'Payout Information',
      value: 'View Payout Diagram', // TODO: Replace with link
    },
  ],
};

export const PayoutDetailsPayments = Template.bind({});
PayoutDetailsPayments.storyName = 'Payout Details (Payments)';
PayoutDetailsPayments.args = {
  data: [
    {
      field: 'Payments Received ($)',
      value: '$153.75',
      iconName: 'file-invoice-dollar',
    },
    {
      field: 'Possible Payments Received (%)',
      value: '67%',
      iconName: 'file-invoice-dollar',
    },
    {
      field: 'Max Payments Remaining (#)',
      value: '3',
      iconName: 'square-check',
    },
    {
      field: 'Max Payments Remaining ($)',
      value: '$76.88',
      iconName: 'square-check',
    },
  ],
};
