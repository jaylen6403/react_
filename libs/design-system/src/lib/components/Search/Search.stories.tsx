import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from './Search';

const data = [
  {
    cusip: 'XS2343811993',
    issuer: 'JP Morgan Structured Products B.V. Phoneix',
    productName: 'Autocall CTF linked to MQUSTVA Index',
  },
  {
    cusip: 'XS2343811993',
    issuer: 'JP Morgan Structured Products B.V. Phoneix',
    productName: 'Autocall CTF linked to MQUSTVA Index',
  },
  {
    cusip: 'XS2343811993',
    issuer: 'JP Morgan Structured Products B.V. Phoneix',
    productName: 'Autocall CTF linked to MQUSTVA Index',
  },
  {
    cusip: 'XS2343811993',
    issuer: 'JP Morgan Structured Products B.V. Phoneix',
    productName: 'Autocall CTF linked to MQUSTVA Index',
  },
  {
    cusip: 'XS2343811993',
    issuer: 'JP Morgan Structured Products B.V. Phoneix',
    productName: 'Autocall CTF linked to MQUSTVA Index',
  },
];

export default {
  title: 'Secondaries/Search',
  component: Search,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=201%3A4739',
    },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search CUSIP/ISIN',
  items: data,
  renderContent: (
    <>
      <p style={{ fontSize: '0.75rem' }}>XS2343811993</p>
      <p style={{ fontSize: '0.875rem' }}>
        JP Morgan Structured Products B.V. Phoneix
      </p>
    </>
  ),
  itemToString: (item) => 'XS2343811993',
  inputAriaLabel: 'input cusip',
  buttonAriaLabel: 'clear input',
};
