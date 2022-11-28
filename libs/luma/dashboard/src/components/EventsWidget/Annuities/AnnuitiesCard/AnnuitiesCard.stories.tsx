import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AnnuitiesCard } from './AnnuitiesCard';

export default {
  title: 'Dashboard/AnnuitiesCard',
  component: AnnuitiesCard,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/629f69ccec1d73125b8e8ac6',
  },
} as ComponentMeta<typeof AnnuitiesCard>;

const Template: ComponentStory<typeof AnnuitiesCard> = (args) => (
  <AnnuitiesCard {...args} />
);

const defaultArgs = {
  event: {
    date: '06-01-2022',
    policyNumber: '1007446817',
    policyHolder: 'Wedbush Securities Inc, , ',
    carrier: 'Jackson National Life Insurance Company',
    productType: 'Variable Annuity Products',
    eventType: 'First Payout',
    status: 'Active',
    premium: 250355.95,
    accountValue: 226279.24,
    productName: '468495676',
  },
};

export const Annuities = Template.bind({});
Annuities.args = { ...defaultArgs };
