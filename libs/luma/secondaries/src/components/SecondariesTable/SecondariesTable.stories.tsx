import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondariesTable } from './SecondariesTable';

type InfoTableType = typeof SecondariesTable;
export default {
  title: 'Secondaries/SecondariesTable',
  component: SecondariesTable,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=3039%3A952043',
    },
  },
} as ComponentMeta<InfoTableType>;

const Root = styled.div`
  height: '19rem';
  width: '56.5rem';
`;

const Template: ComponentStory<InfoTableType> = (args) => {
  return (
    <Root>
      <SecondariesTable {...args} />
    </Root>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Security',
  data: {
    'CUSIP / ISIN': '423ASD123F',
    Quantity: 100,
    Price: 99.75,
    'Settlement Date': '02/02/2022',
    Counterparty: '2222-HELP',
    Principle: '$99,750.00',
    'Accrued Interest': '$0.00',
    'Net Money': '$99,750.00',
  },
};

export const WithCols = Template.bind({});
WithCols.storyName = 'Primary with Headers';
WithCols.args = {
  title: 'Response Received',
  data: [
    {
      '#': 1,
      Timestamp: '02/14/2022 @ 11:42:23 AM',
      'User ID': 'johndoe',
      Bid: '99.75',
      Security: (() => <Link to="#">431AB89C</Link>)(),
      Issuer: '',
    },
    {
      '#': 2,
      Timestamp: '02/14/2022 @ 11:42:23 AM',
      'User ID': 'userid',
      Bid: '99.05',
      Issuer: 'BNP Parisbara BNP Parisbara BNP Parisbara BNP Parisbara',
    },
    {
      '#': 3,
      Timestamp: '02/14/2022 @ 11:42:23 AM',
      'User ID': 'userid',
      Bid: '98.85',
      Issuer: '',
    },
    {
      '#': 4,
      Timestamp: '02/14/2022 @ 11:42:23 AM',
      'User ID': 'userid',
      Bid: '98.79',
      Security: (() => (
        <>
          <Link to="#">X1324AB8FC</Link>, <Link to="#">XS128AB702</Link>,{' '}
          <Link to="#">XS22515702147</Link>
        </>
      ))(),
      Issuer: '',
    },
  ],
};

export const WithFooter = Template.bind({});
WithFooter.storyName = 'Primary with Footer';
WithFooter.args = {
  data: {
    Account: '234643AAB',
    'CUSIP / ISIN': 'XS2251502147',
    Issuer: 'BNP Paribas Issuance Corporation',
    'Settlement Date': '02/02/2022',
  },
  showFooter: true,
};
