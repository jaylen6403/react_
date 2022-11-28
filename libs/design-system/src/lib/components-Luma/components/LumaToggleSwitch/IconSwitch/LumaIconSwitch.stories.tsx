import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaIconSwitch } from './LumaIconSwitch';

export default {
  component: LumaIconSwitch,
  title: 'Components/Waiting/LumaIconSwitch',
  parameters: {
    zeplinLink: [
      {
        name: 'SmallLeft',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719624bf5f24122f88ffc9',
      },
      {
        name: 'SmallLeftDisabled',
        link: 'zpl://components?coids=6271961e3521cb134e13bdb3&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallRight',
        link: 'zpl://components?coids=627196257c070115905bdacc&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallRightDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196209af22c11bf543d95',
      },
      {
        name: 'XSmallLeft',
        link: 'zpl://components?coids=6271961fdcbf9a1204f2a767&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallLeftDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719626bf5f24122f88ffdd',
      },
      {
        name: 'XSmallRight',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719622b6a32810e96fdd8f',
      },
      {
        name: 'XSmallRightDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196222dc90014a0052c8b',
      },
    ],
  },
} as ComponentMeta<typeof LumaIconSwitch>;

const Template: ComponentStory<typeof LumaIconSwitch> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const checkedListener = () => {
    setChecked(!checked);
  };
  return (
    <LumaIconSwitch {...args} checked={checked} onChange={checkedListener} />
  );
};

export const SmallLeft = Template.bind({});
SmallLeft.args = {
  sizeVariant: 'small',
  checked: false,
  icons: {
    right: 'star',
    left: 'star',
  },
};
SmallLeft.story = {
  name: 'Small Left',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719624bf5f24122f88ffc9',
  },
};

export const SmallLeftDisabled = Template.bind({});
SmallLeftDisabled.args = {
  sizeVariant: 'small',
  checked: false,
  disabled: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
SmallLeftDisabled.story = {
  name: 'Small Left Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961e3521cb134e13bdb3&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallRight = Template.bind({});
SmallRight.args = {
  sizeVariant: 'small',
  checked: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
SmallRight.story = {
  name: 'Small Right',
  parameters: {
    zeplinLink:
      'zpl://components?coids=627196257c070115905bdacc&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallRightDisabled = Template.bind({});
SmallRightDisabled.args = {
  sizeVariant: 'small',
  checked: true,
  disabled: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
SmallRightDisabled.story = {
  name: 'Small Right Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196209af22c11bf543d95',
  },
};

export const XSmallLeft = Template.bind({});
XSmallLeft.args = {
  sizeVariant: 'x_small',
  checked: false,
  icons: {
    right: 'star',
    left: 'star',
  },
};
XSmallLeft.story = {
  name: 'X-Small Left',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961fdcbf9a1204f2a767&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallLeftDisabled = Template.bind({});
XSmallLeftDisabled.args = {
  sizeVariant: 'x_small',
  checked: false,
  disabled: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
XSmallLeftDisabled.story = {
  name: 'X-Small Left Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719626bf5f24122f88ffdd',
  },
};

export const XSmallRight = Template.bind({});
XSmallRight.args = {
  sizeVariant: 'x_small',
  checked: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
XSmallRight.story = {
  name: 'X-Small Right',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719622b6a32810e96fdd8f',
  },
};

export const XSmallRightDisabled = Template.bind({});
XSmallRightDisabled.args = {
  sizeVariant: 'x_small',
  checked: true,
  disabled: true,
  icons: {
    right: 'star',
    left: 'star',
  },
};
XSmallRightDisabled.story = {
  name: 'X-Small Right Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196222dc90014a0052c8b',
  },
};
