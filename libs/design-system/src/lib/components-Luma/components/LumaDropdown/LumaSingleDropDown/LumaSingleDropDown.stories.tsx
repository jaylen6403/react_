import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaSingleDropDown } from './LumaSingleDropDown';
import { DataItemProps } from '../LumaDropDownBasicType';

const ITEMS: DataItemProps[] = [
  {
    label: 'Option 1',
    value: 'option1',
    checkboxIndex: 0,
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
    sectionName: 'Section',
  },
  {
    label: 'Option 4',
    value: 'option4',
    iconCode: 'folder-download',
    checkboxIndex: 3,
  },
];

export default {
  title: 'Components/Waiting/SingleDropDown',
  component: LumaSingleDropDown,
  parameters: {
    zeplinLink: [
      {
        name: 'Large Filled Inactive',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29f28798f10eefb388a',
      },
      {
        name: 'Large Unfilled Inactive',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29eda586717f914db8c',
      },
      {
        name: 'Large Filled Disabled',
        link: 'zpl://components?coids=624df2a1c5aa2015d3b8e172&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Large Unfilled Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29fbfaf191564faa040',
      },
      {
        name: 'Large Unfilled Error',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29e77521f14c17506be',
      },
    ],
  },
} as ComponentMeta<typeof LumaSingleDropDown>;

const Template: ComponentStory<typeof LumaSingleDropDown> = (args) => {
  return (
    <LumaSingleDropDown
      {...args}
      items={ITEMS}
      onChange={(e) => console.log(`Choosen item from dropdown: ${e?.label}`)}
    />
  );
};

export const LargeFilledInactive = Template.bind({});
LargeFilledInactive.args = {
  placeholder: 'Field Title',
  readOnly: false,
  defaultSelectedItem: ITEMS[0],
  size: 'large',
};
LargeFilledInactive.story = {
  name: 'Large Filled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29f28798f10eefb388a',
  },
};

export const LargeUnfilledInactive = Template.bind({});
LargeUnfilledInactive.args = {
  placeholder: 'Field Title',
  readOnly: false,
  size: 'large',
};
LargeUnfilledInactive.story = {
  name: 'Large Unfilled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29eda586717f914db8c',
  },
};

export const LargeFilledDisabled = Template.bind({});
LargeFilledDisabled.args = {
  placeholder: 'Field Title',
  defaultSelectedItem: ITEMS[0],
  disabled: true,
  size: 'large',
};
LargeFilledDisabled.story = {
  name: 'Large Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a1c5aa2015d3b8e172&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeUnfilledDisabled = Template.bind({});
LargeUnfilledDisabled.args = {
  placeholder: 'Field Title',
  readOnly: false,
  disabled: true,
  size: 'large',
};
LargeUnfilledDisabled.story = {
  name: 'Large Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29fbfaf191564faa040',
  },
};

export const LargeUnfilledError = Template.bind({});
LargeUnfilledError.args = {
  placeholder: 'Field Title',
  readOnly: false,
  error: true,
  helperText: 'Error Message',
  size: 'large',
};
LargeUnfilledError.story = {
  name: 'Large Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29e77521f14c17506be',
  },
};

export const MediumFilledInactive = Template.bind({});
MediumFilledInactive.args = {
  placeholder: 'Field Title',
  readOnly: false,
  defaultSelectedItem: {
    label: 'Option 1',
    value: 'option1',
    checkboxIndex: 0,
  },
  size: 'medium',
};
MediumFilledInactive.story = {
  name: 'Large Filled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a79ae28a152b864446&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilledInactive = Template.bind({});
MediumUnfilledInactive.args = {
  placeholder: 'Field Title',
  readOnly: false,
  size: 'medium',
};
MediumUnfilledInactive.story = {
  name: 'Medium Unfilled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a7b45ca3183228aed2',
  },
};

export const MediumFilledDisabled = Template.bind({});
MediumFilledDisabled.args = {
  placeholder: 'Field Title',
  defaultSelectedItem: ITEMS[0],
  disabled: true,
  size: 'medium',
};
MediumFilledDisabled.story = {
  name: 'Medium Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a835b6021684c2895c',
  },
};

export const MediumUnfilledDisabled = Template.bind({});
MediumUnfilledDisabled.args = {
  placeholder: 'Field Title',
  readOnly: false,
  disabled: true,
  size: 'medium',
};
MediumUnfilledDisabled.story = {
  name: 'Medium Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a98afe9321ec143a19',
  },
};

export const MediumUnfilledError = Template.bind({});
MediumUnfilledError.args = {
  placeholder: 'Field Title',
  readOnly: false,
  error: true,
  helperText: 'Error Message',
  size: 'medium',
};
MediumUnfilledError.story = {
  name: 'Medium Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2aa8c5bbf10964e856a&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilledInactive = Template.bind({});
SmallFilledInactive.args = {
  placeholder: 'field Title',
  readOnly: false,
  defaultSelectedItem: ITEMS[0],
  size: 'small',
};
SmallFilledInactive.story = {
  name: 'Small Filled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2af1749f015cc7df36a&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallUnfilledInactive = Template.bind({});
SmallUnfilledInactive.args = {
  placeholder: 'Field Title',
  readOnly: false,
  size: 'small',
};
SmallUnfilledInactive.story = {
  name: 'Small Unfilled Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2acabe900bce9892253',
  },
};

export const SmallFilledDisabled = Template.bind({});
SmallFilledDisabled.args = {
  placeholder: 'Field Title',
  defaultSelectedItem: ITEMS[0],
  disabled: true,
  size: 'small',
};
SmallFilledDisabled.story = {
  name: 'Small Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2ae408b4c15ac6267d3',
  },
};

export const SmallUnfilledDisabled = Template.bind({});
SmallUnfilledDisabled.args = {
  placeholder: 'Field Title',
  readOnly: false,
  disabled: true,
  size: 'small',
};
SmallUnfilledDisabled.story = {
  name: 'Small Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2af61c89b13927d3912&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallUnfilledError = Template.bind({});
SmallUnfilledError.args = {
  placeholder: 'Field Title',
  readOnly: false,
  error: true,
  helperText: 'Error Message',
  size: 'small',
};
SmallUnfilledError.story = {
  name: 'Small Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2ae79f687143e3c8b3c&stid=624c74edc63a9e13edc17931',
  },
};
