import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { LumaTextEntry } from './LumaTextEntry';

export default {
  title: 'Components/Waiting/TextEntry',
  component: LumaTextEntry,
  parameters: {
    zeplinLink: [
      {
        name: 'LargeFilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a1abe900bce989223b',
      },
      {
        name: 'LargeUnfilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a1f45d951156a82cb1',
      },
      {
        name: 'LargeFilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a69826ea120ea25ea3',
      },
      {
        name: 'LargeUnfilledDisabled',
        link: 'zpl://components?coids=624df2a6da586717f914dba6&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'LargeFilledError',
        link: 'zpl://components?coids=624df2a377fe25167bc37694&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'LargeUnfilledError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a107427814be8c3fa6',
      },
      {
        name: 'MediumFilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a9f6239e1616a28b71',
      },
      {
        name: 'MediumUnfilled',
        link: 'zpl://components?coids=624df2a8d23b3613a54b4786&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumFilledDisabled',
        link: 'zpl://components?coids=624df2ab630e3a15bf0ffda0&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumUnfilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a9410bc71132bd5c95',
      },
      {
        name: 'MediumFilledError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2abc6c12a0f782d3981',
      },
      {
        name: 'MediumUnfilledError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b04cbf7c1259442173',
      },
      {
        name: 'SmallFilled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2abc6c12a0f782d3995',
      },
      {
        name: 'SmallUnfilled',
        link: 'zpl://components?coids=624df2ac0103371493bb1119&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallFilledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2ae932015145fc999e7',
      },
      {
        name: 'SmallUnfilledDisabled',
        link: 'zpl://components?coids=624df2b06aacf3112ec5f0f1&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallFilledError',
        link: 'zpl://components?coids=624df2afb1d7041694a5d8e1&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallUnfilledError',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b1c7150111171754a0',
      },
    ],
  },
} as ComponentMeta<typeof LumaTextEntry>;

const Template: ComponentStory<typeof LumaTextEntry> = (args) => {
  const [useValue, setUseValue] = useState('');
  return (
    <LumaTextEntry
      {...args}
      value={useValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setUseValue(e.target.value);
      }}
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
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a1abe900bce989223b',
  },
};

export const LargeUnfilled = Template.bind({});
LargeUnfilled.args = {
  helperText: 'Helper Message',
  sizeVariant: 'large',
  label: 'Field Entry',
};
LargeUnfilled.story = {
  name: 'Large Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a1f45d951156a82cb1',
  },
};

export const LargeFilledDisabled = Template.bind({});
LargeFilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'large',
};
LargeFilledDisabled.story = {
  name: 'Large Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a69826ea120ea25ea3',
  },
};

export const LargeUnfilledDisabled = Template.bind({});
LargeUnfilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  sizeVariant: 'large',
};
LargeUnfilledDisabled.story = {
  name: 'Large Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a6da586717f914dba6&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeFilledError = Template.bind({});
LargeFilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  value: 'Filled Entry',
  sizeVariant: 'large',
};
LargeFilledError.story = {
  name: 'Large Filled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a377fe25167bc37694&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeUnfilledError = Template.bind({});
LargeUnfilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  sizeVariant: 'large',
};
LargeUnfilledError.story = {
  name: 'Large Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a107427814be8c3fa6',
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
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a9f6239e1616a28b71',
  },
};

export const MediumUnfilled = Template.bind({});
MediumUnfilled.args = {
  label: 'Field Entry',
  helperText: 'Helper Message',
  sizeVariant: 'medium',
};
MediumUnfilled.story = {
  name: 'Medium Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a8d23b3613a54b4786&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumFilledDisabled = Template.bind({});
MediumFilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'medium',
};
MediumFilledDisabled.story = {
  name: 'Medium Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2ab630e3a15bf0ffda0&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumUnfilledDisabled = Template.bind({});
MediumUnfilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  sizeVariant: 'medium',
};
MediumUnfilledDisabled.story = {
  name: 'Medium Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a9410bc71132bd5c95',
  },
};

export const MediumFilledError = Template.bind({});
MediumFilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  value: 'Filled Entry',
  sizeVariant: 'medium',
};
MediumFilledError.story = {
  name: 'Medium Filled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2abc6c12a0f782d3981',
  },
};

export const MediumUnfilledError = Template.bind({});
MediumUnfilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  sizeVariant: 'medium',
};
MediumUnfilledError.story = {
  name: 'Medium Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b04cbf7c1259442173',
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
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2abc6c12a0f782d3995',
  },
};

export const SmallUnfilled = Template.bind({});
SmallUnfilled.args = {
  label: 'Field Entry',
  helperText: 'Helper Message',
  sizeVariant: 'small',
};
SmallUnfilled.story = {
  name: 'Small Unfilled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2ac0103371493bb1119&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilledDisabled = Template.bind({});
SmallFilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  value: 'Filled Entry',
  sizeVariant: 'small',
};
SmallFilledDisabled.story = {
  name: 'Small Filled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2ae932015145fc999e7',
  },
};

export const SmallUnfilledDisabled = Template.bind({});
SmallUnfilledDisabled.args = {
  disabled: true,
  label: 'Field Entry',
  sizeVariant: 'small',
};
SmallUnfilledDisabled.story = {
  name: 'Small Unfilled Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2b06aacf3112ec5f0f1&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallFilledError = Template.bind({});
SmallFilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  value: 'Filled Entry',
  sizeVariant: 'small',
};
SmallFilledError.story = {
  name: 'Small Filled Error',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2afb1d7041694a5d8e1&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallUnfilledError = Template.bind({});
SmallUnfilledError.args = {
  error: true,
  label: 'Field Entry',
  helperText: 'Error Message',
  sizeVariant: 'small',
};
SmallUnfilledError.story = {
  name: 'Small Unfilled Error',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2b1c7150111171754a0',
  },
};
