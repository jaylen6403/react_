import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RenderContent, LumaTextSearch } from './LumaTextSearch';
import {
  DataItemProps,
  TextSearchItem,
} from '../LumaDropdown/LumaDropDownBasicType';

const data = [
  {
    id: 'XS2343811993',
    label: 'MSWM',
  },
  {
    id: 'XS2343811994',
    label: 'Morgan Stanly',
  },
  {
    id: 'XS2343811995',
    label: 'CS',
  },
  {
    id: 'XS2343811996',
    label: 'HSBC',
  },
  {
    id: 'XS2343811997',
    label: 'Barclays',
  },
  {
    id: 'XS2343811998',
    label: 'Citi',
  },
];

export default {
  title: 'Components/Waiting/TextSearch',
  component: LumaTextSearch,
  parameters: {
    zeplinLink: [
      {
        name: 'LargeInactive',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a4d87e7810ec1f696e',
      },
      {
        name: 'LargeDisabled',
        link: 'zpl://components?coids=624df2a2d23b3613a54b4766&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'LargeError',
        link: 'zpl://components?coids=6261c1ca39ab2ead16347ab7&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumInactive',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a81749f015cc7df34e',
      },
      {
        name: 'MediumDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a995ac5e32d9d352c2',
      },
      {
        name: 'MediumError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1cb773926aa0d4532a8',
      },
      {
        name: 'SmallInactive',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2ae25267b12b851528e',
      },
      {
        name: 'SmallDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2af410bc71132bd5ca9',
      },
      {
        name: 'SmallError',
        link: 'zpl://components?coids=6261c1ce359d7cac47a992d0&stid=624c74edc63a9e13edc17931',
      },
    ],
  },
} as ComponentMeta<typeof LumaTextSearch>;

const Template: ComponentStory<typeof LumaTextSearch> = (args) => {
  return (
    <LumaTextSearch
      {...args}
      handleChange={(value: string | undefined) => {
        console.log(value);
      }}
    />
  );
};

const itemToString = (item: DataItemProps | TextSearchItem | null) => {
  if (item && 'id' in item) {
    return item.label;
  }
  return '';
};

export const LargeInactive = Template.bind({});
LargeInactive.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'large',
};
LargeInactive.story = {
  name: 'Large Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a4d87e7810ec1f696e',
  },
};

export const LargeDisabled = Template.bind({});
LargeDisabled.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'large',
  disabled: true,
};
LargeDisabled.story = {
  name: 'Large Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a2d23b3613a54b4766&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeError = Template.bind({});
LargeError.args = {
  error: true,
  items: data,
  itemToString,
  placeholder: 'Search',
  helperText: 'Error Message',
  renderContent: <RenderContent />,
  sizeVariant: 'large',
};
LargeError.story = {
  name: 'Large Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1ca39ab2ead16347ab7&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumInactive = Template.bind({});
MediumInactive.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'medium',
};
MediumInactive.story = {
  name: 'Medium Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a81749f015cc7df34e',
  },
};

export const MediumDisabled = Template.bind({});
MediumDisabled.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'medium',
  disabled: true,
};
MediumDisabled.story = {
  name: 'Medium Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a995ac5e32d9d352c2',
  },
};

export const MediumError = Template.bind({});
MediumError.args = {
  error: true,
  items: data,
  itemToString,
  placeholder: 'Search',
  helperText: 'Error Message',
  renderContent: <RenderContent />,
  sizeVariant: 'medium',
};
MediumError.story = {
  name: 'Medium Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1cb773926aa0d4532a8',
  },
};

export const SmallInactive = Template.bind({});
SmallInactive.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'small',
};
SmallInactive.story = {
  name: 'Small Inactive',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2ae25267b12b851528e',
  },
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  placeholder: 'Search',
  items: data,
  itemToString,
  inputAriaLabel: 'input id',
  buttonAriaLabel: 'clear input',
  renderContent: <RenderContent />,
  sizeVariant: 'small',
  disabled: true,
};
SmallDisabled.story = {
  name: 'Small Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2af410bc71132bd5ca9',
  },
};

export const SmallError = Template.bind({});
SmallError.args = {
  error: true,
  items: data,
  itemToString,
  placeholder: 'Search',
  helperText: 'Error Message',
  renderContent: <RenderContent />,
  sizeVariant: 'small',
};
SmallError.story = {
  name: 'Small Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1ce359d7cac47a992d0&stid=624c74edc63a9e13edc17931',
  },
};
