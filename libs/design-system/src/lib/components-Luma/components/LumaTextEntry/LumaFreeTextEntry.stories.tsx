import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { LumaTextEntry } from './LumaTextEntry';

export default {
  title: 'Components/Waiting/FreeTextEntry',
  component: LumaTextEntry,
  parameters: {
    zeplinLink: [
      {
        name: 'LargeFilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dff41810441e7b65f7c3',
      },
      {
        name: 'LargeUnfilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfeeec481e1beabae810',
      },
      {
        name: 'LargeFilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfefb88b3c200fc40994',
      },
      {
        name: 'LargeUnfilledDisabled',
        link: 'zpl://components?coids=62b1dff2c6562720036567ee&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'LargeUnfilledError',
        link: 'zpl://components?coids=62b1dffbce79d71f8a4d3bf1&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'LargeFilledError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dffee366921eb06f7823',
      },
      {
        name: 'MediumFilled',
        link: 'zpl://components?coids=62b1dff134d55222e526a375&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumUnfilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1e001000f6e1eee4f459f',
      },
      {
        name: 'MediumFilledDisabled',
        link: 'zpl://components?coids=62b1e00235a1fc1f14cfb054&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumUnfilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dff5f3e3c71ecace7784',
      },
      {
        name: 'MediumUnfilledError',
        link: 'zpl://components?coids=62b1dff95639a41a15553336&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumFilledError',
        link: 'zpl://components?coids=62b1e00735a1fc1f14cfb06b&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallFilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfff3b39461d7bd46e54',
      },
      {
        name: 'SmallUnfilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dffa3707501ec75c4f6c',
      },
      {
        name: 'SmallFilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1e006304401214f21147c',
      },
      {
        name: 'SmallUnfilledDisabled',
        link: 'zpl://components?coids=62b1e0003adf221e914c0fab&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallUnfilledError',
        link: 'zpl://components?coids=62b1e0056406161f01d1804e&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallFilledError',
        link: 'zpl://components?coids=62b1e00435838b20dcf9df21&stid=624c74edc63a9e13edc17931',
      },
    ],
  },
} as ComponentMeta<typeof LumaTextEntry>;

const Template: ComponentStory<typeof LumaTextEntry> = (args) => {
  const [useValue, setUseValue] = useState(args.value);
  return (
    <LumaTextEntry
      {...args}
      value={useValue}
      onChange={(e) => {
        setUseValue(e.target.value);
      }}
      variant="free"
    />
  );
};

export const LargeFilled = Template.bind({});
LargeFilled.args = {
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'large',
};
LargeFilled.story = {
  name: 'Large Filled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dff41810441e7b65f7c3',
  },
};

export const LargeUnfilled = Template.bind({});
LargeUnfilled.args = {
  label: 'Field Entry',
  sizeVariant: 'large',
};
LargeUnfilled.story = {
  name: 'Large Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfeeec481e1beabae810',
  },
};

export const LargeFilledDisabled = Template.bind({});
LargeFilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'large',
  value: 'Field Entry',
  disabled: true,
};
LargeFilledDisabled.story = {
  name: 'Large Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfefb88b3c200fc40994',
  },
};

export const LargeUnfilledDisabled = Template.bind({});
LargeUnfilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'large',
  disabled: true,
};
LargeUnfilledDisabled.story = {
  name: 'Large Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1dff2c6562720036567ee&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeUnfilledError = Template.bind({});
LargeUnfilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'large',
  error: true,
  helperText: 'Error message',
};
LargeUnfilledError.story = {
  name: 'Larg eUnfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1dffbce79d71f8a4d3bf1&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeFilledError = Template.bind({});
LargeFilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'large',
  value: 'Field Entry',
  error: true,
  helperText: 'Error message',
};
LargeFilledError.story = {
  name: 'Large Filled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dffee366921eb06f7823',
  },
};

export const MediumFilled = Template.bind({});
MediumFilled.args = {
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'medium',
};
MediumFilled.story = {
  name: 'Medium Filled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1dff134d55222e526a375&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilled = Template.bind({});
MediumUnfilled.args = {
  label: 'Field Entry',
  sizeVariant: 'medium',
};
MediumUnfilled.story = {
  name: 'Medium Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1e001000f6e1eee4f459f',
  },
};

export const MediumFilledDisabled = Template.bind({});
MediumFilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'medium',
  value: 'Field Entry',
  disabled: true,
};
MediumFilledDisabled.story = {
  name: 'Large Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1e00235a1fc1f14cfb054&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilledDisabled = Template.bind({});
MediumUnfilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'medium',
  disabled: true,
};
MediumUnfilledDisabled.story = {
  name: 'Medium Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dff5f3e3c71ecace7784',
  },
};

export const MediumUnfilledError = Template.bind({});
MediumUnfilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'medium',
  error: true,
  helperText: 'Error message',
};
MediumUnfilledError.story = {
  name: 'Medium Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1dff95639a41a15553336&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumFilledError = Template.bind({});
MediumFilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'medium',
  value: 'Field Entry',
  error: true,
  helperText: 'Error message',
};
MediumFilledError.story = {
  name: 'MediumFilledError',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1e00735a1fc1f14cfb06b&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'small',
};
SmallFilled.story = {
  name: 'Small Filled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dfff3b39461d7bd46e54',
  },
};

export const SmallUnfilled = Template.bind({});
SmallUnfilled.args = {
  label: 'Field Entry',
  sizeVariant: 'small',
};
SmallUnfilled.story = {
  name: 'Small Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1dffa3707501ec75c4f6c',
  },
};

export const SmallFilledDisabled = Template.bind({});
SmallFilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'small',
  value: 'Field Entry',
  disabled: true,
};
SmallFilledDisabled.story = {
  name: 'Small Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62b1e006304401214f21147c',
  },
};

export const SmallUnfilledDisabled = Template.bind({});
SmallUnfilledDisabled.args = {
  label: 'Field Entry',
  sizeVariant: 'small',
  disabled: true,
};
SmallUnfilledDisabled.story = {
  name: 'Small Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1e0003adf221e914c0fab&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallUnfilledError = Template.bind({});
SmallUnfilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'small',
  error: true,
  helperText: 'Error message',
};
SmallUnfilledError.story = {
  name: 'Small Unfille dError',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1e0056406161f01d1804e&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilledError = Template.bind({});
SmallFilledError.args = {
  label: 'Field Entry',
  sizeVariant: 'small',
  value: 'Field Entry',
  error: true,
  helperText: 'Error message',
};
SmallFilledError.story = {
  name: 'Small Filled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62b1e00435838b20dcf9df21&stid=624c74edc63a9e13edc17931',
  },
};
