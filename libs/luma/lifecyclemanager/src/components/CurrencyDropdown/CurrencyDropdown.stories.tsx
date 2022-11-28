import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyDropdown } from './CurrencyDropdown';
import { DataItemProps } from '@luma-fe-workspace/design-system';
import { mockCurrencyDropdownItems } from '@luma-fe-workspace/redux';

export default {
  title: 'Lifecycle Manager 2/CurrencyDropdown',
  component: CurrencyDropdown,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e05594a3a7ae11b8a47e42',
  },
} as ComponentMeta<typeof CurrencyDropdown>;

const Template: ComponentStory<typeof CurrencyDropdown> = (args) => (
  <CurrencyDropdown {...args} />
);
export const CurrencyDropdownStory = Template.bind({});
CurrencyDropdownStory.storyName = 'Currency Dropdown';
CurrencyDropdownStory.args = {
  currencyDropdownItems: mockCurrencyDropdownItems as DataItemProps[],
  defaultSelectedItem: mockCurrencyDropdownItems[0] as DataItemProps,
};
