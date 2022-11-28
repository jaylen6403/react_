import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LumaDatePicker } from './LumaDatePicker';

export default {
  title: 'Components/Waiting/DatePicker',
  component: LumaDatePicker,
  parameters: {
    zeplinLink: [
      {
        name: 'Large Filled',
        link: 'zpl://components?coids=624df2a00e93dd16e2e4ac57&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Large Filled Disabled',
        link: 'zpl://components?coids=624df2a260bcdf122b7dd662&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Large Unfilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29ec3999c14256c14ae',
      },
      {
        name: 'Large Unfilled Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a010c93b17b2f40ed5',
      },
      {
        name: 'Large Unfilled Error',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a01749f015cc7df335',
      },
      {
        name: 'Medium Filled',
        link: 'zpl://components?coids=624df2a6dff8ce1478a6f1ab&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Filled Disabled',
        link: 'zpl://components?coids=624df2aa61d5cc1410ee4ad5&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Unfilled',
        link: 'zpl://components?coids=624df2a6347ce510be27bfeb&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Unfilled Disabled',
        link: 'zpl://components?coids=624df2aa10c93b17b2f40ef3&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Unfilled Error',
        link: 'zpl://components?coids=624df2aa35b6021684c28972&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Small Filled',
        link: 'zpl://components?coids=624df2ad9826ea120ea25ebc&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Small Filled Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2addc18db1243b38824',
      },
      {
        name: 'Small Unfilled',
        link: 'zpl://components?coids=624df2ad630e3a15bf0ffdb3&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Small Unfilled Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b061c89b13927d3925',
      },
      {
        name: 'Small Unfilled Error',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b0de43f6140e04fae8',
      },
    ],
  },
} as ComponentMeta<typeof LumaDatePicker>;

const Template: ComponentStory<typeof LumaDatePicker> = (args) => {
  return <LumaDatePicker {...args} onChange={action('onChange')} />;
};

export const LargeUnfilled = Template.bind({});
LargeUnfilled.args = {
  label: 'Field Title',
  size: 'large',
};
LargeUnfilled.story = {
  name: 'Large Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df29ec3999c14256c14ae',
  },
};

export const LargeFilled = Template.bind({});
LargeFilled.args = {
  size: 'large',
  label: 'Field Title',
  defaultValue: new Date(2022, 0, 2),
};
LargeFilled.story = {
  name: 'Large Filled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a00e93dd16e2e4ac57&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeFilledDisabled = Template.bind({});
LargeFilledDisabled.args = {
  disabled: true,
  size: 'large',
  label: 'Field Title',
  defaultValue: new Date(2022, 4, 11),
};
LargeFilledDisabled.story = {
  name: 'Large Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a260bcdf122b7dd662&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeUnfilledDisabled = Template.bind({});
LargeUnfilledDisabled.args = {
  disabled: true,
  size: 'large',
  label: 'Field Title',
};
LargeUnfilledDisabled.story = {
  name: 'Large Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a010c93b17b2f40ed5',
  },
};

export const LargeUnfilledError = Template.bind({});
LargeUnfilledError.args = {
  size: 'large',
  label: 'Field Title',
  error: true,
  helperText: 'Error Message',
};
LargeUnfilledError.story = {
  name: 'Large Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a01749f015cc7df335',
  },
};

export const MediumUnfilled = Template.bind({});
MediumUnfilled.args = {
  label: 'Field Title',
  size: 'medium',
};
MediumUnfilled.story = {
  name: 'Medium Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a6347ce510be27bfeb&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumFilled = Template.bind({});
MediumFilled.args = {
  size: 'medium',
  label: 'Field Title',
  defaultValue: new Date(2022, 4, 11),
};
MediumFilled.story = {
  name: 'Medium Filled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a6dff8ce1478a6f1ab&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumFilledDisabled = Template.bind({});
MediumFilledDisabled.args = {
  disabled: true,
  size: 'medium',
  label: 'Field Title',
  defaultValue: new Date(2022, 4, 11),
};
MediumFilledDisabled.story = {
  name: 'Medium Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2aa61d5cc1410ee4ad5&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilledDisabled = Template.bind({});
MediumUnfilledDisabled.args = {
  disabled: true,
  size: 'medium',
  label: 'Field Title',
};
MediumUnfilledDisabled.story = {
  name: 'Medium Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2aa10c93b17b2f40ef3&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilledError = Template.bind({});
MediumUnfilledError.args = {
  size: 'medium',
  label: 'Field Title',
  error: true,
  helperText: 'Error Message',
};
MediumUnfilledError.story = {
  name: 'Medium Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2aa35b6021684c28972&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallUnfilled = Template.bind({});
SmallUnfilled.args = {
  label: 'Field Title',
  size: 'small',
};
SmallUnfilled.story = {
  name: 'Small Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2ad630e3a15bf0ffdb3&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  size: 'small',
  label: 'Field Title',
  defaultValue: new Date(2022, 4, 11),
};
SmallFilled.story = {
  name: 'Small Filled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2ad9826ea120ea25ebc&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilledDisabled = Template.bind({});
SmallFilledDisabled.args = {
  disabled: true,
  size: 'small',
  label: 'Field Title',
  defaultValue: new Date(2022, 4, 11),
};
SmallFilledDisabled.story = {
  name: 'Small Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2addc18db1243b38824',
  },
};

export const SmallUnfilledDisabled = Template.bind({});
SmallUnfilledDisabled.args = {
  disabled: true,
  size: 'small',
  label: 'Field Title',
};
SmallUnfilledDisabled.story = {
  name: 'Small Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b061c89b13927d3925',
  },
};

export const SmallUnfilledError = Template.bind({});
SmallUnfilledError.args = {
  size: 'small',
  label: 'Field Title',
  error: true,
  helperText: 'Error Message',
};
SmallUnfilledError.story = {
  name: 'Small Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b0de43f6140e04fae8',
  },
};
