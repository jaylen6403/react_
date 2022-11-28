import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaFilter } from './LumaFilter';
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';

const ITEMS: DataItemProps[] = [
  {
    label: 'Field Entry Field Entry',
    value: 'option1',
    checkboxIndex: 0,
    sectionName: 'Section1',
  },
  {
    label: 'Option 2',
    value: 'option2',
    checkboxIndex: 1,
    isDisabled: true,
  },
  {
    label: 'Option 3',
    value: 'option3',
    checkboxIndex: 2,
    sectionName: 'Section2',
  },
  {
    label: 'Option 4',
    value: 'option4',
    iconCode: 'folder-download',
    checkboxIndex: 3,
  },
];

export default {
  component: LumaFilter,
  title: 'Components/Waiting/Filter',
  parameters: {
    zeplinLink: [
      {
        name: 'Small',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196037905661096fd2269',
      },
      {
        name: 'Small disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719603f5cf6f15974ca1f4',
      },
    ],
  },
} as ComponentMeta<typeof LumaFilter>;

const Template: ComponentStory<typeof LumaFilter> = (args) => (
  <LumaFilter
    {...args}
    onChangeDropdown={(e) =>
      console.log(`Choosen item from dropdown: ${e?.label}`)
    }
  />
);

export const Small = Template.bind({});
Small.args = {
  dropdownItems: ITEMS,
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  disabled: true,
  dropdownItems: ITEMS,
};
