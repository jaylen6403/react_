import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from '@luma-fe-workspace/design-system';
import { SecondariesSearch } from './SecondariesSearch';
import {
  SearchResultsTextCusip,
  SearchResultsTextDetails,
} from './SecondariesSearchResults.styles';

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
      <SearchResultsTextCusip>XS2343811993</SearchResultsTextCusip>

      <SearchResultsTextDetails>
        JP Morgan Structured Products B.V. Phoneix Autocall CTF linked to
        MQUSTVA Index
      </SearchResultsTextDetails>
    </>
  ),
  itemToString: (item) => 'XS2343811993',
};

export const Secondary: ComponentStory<typeof SecondariesSearch> = () => (
  <SecondariesSearch />
);
