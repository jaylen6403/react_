import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaToggleSwitch } from './LumaToggleSwitch';

export default {
  component: LumaToggleSwitch,
  title: 'Components/Waiting/ToggleSwitch',
  parameters: {
    zeplinLink: [
      {
        name: 'XSmallSideLabelOff',
        link: 'zpl://components?coids=62719619b7b8601249a06e1a&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallSideLabelOn',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271961afe24eb132defbf9a',
      },
      {
        name: 'XSmallSideLabelOffDisabled',
        link: 'zpl://components?coids=6271961bf5cf6f15974ca217&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallSideLabelOnDisabled',
        link: 'zpl://components?coids=6271961d4f697a14ff393000&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallTopLabelOff',
        link: 'zpl://components?coids=6271961bd8bf6412f035aaed&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallTopLabelOn',
        link: 'zpl://components?coids=62719623dcbf9a1204f2a77c&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallTopLabelOffDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271961c43e220112d63d66e',
      },
      {
        name: 'XSmallTopLabelOnDisabled',
        link: 'zpl://components?coids=6271961f70a48811f2e948d8&stid=624c74edc63a9e13edc17931',
      },
    ],
  },
} as ComponentMeta<typeof LumaToggleSwitch>;

const Template: ComponentStory<typeof LumaToggleSwitch> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const checkedListener = () => {
    setChecked(!checked);
  };
  return (
    <LumaToggleSwitch {...args} checked={checked} onChange={checkedListener} />
  );
};

export const XSmallSideLabelOff = Template.bind({});
XSmallSideLabelOff.args = {
  label: {
    position: 'side',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: false,
};
XSmallSideLabelOff.story = {
  name: 'X-Small Side Label Off',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62719619b7b8601249a06e1a&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallSideLabelOn = Template.bind({});
XSmallSideLabelOn.args = {
  label: {
    position: 'side',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: false,
  checked: true,
};
XSmallSideLabelOn.story = {
  name: 'X-Small Side Label On',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271961afe24eb132defbf9a',
  },
};

export const XSmallSideLabelOffDisabled = Template.bind({});
XSmallSideLabelOffDisabled.args = {
  label: {
    position: 'side',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: true,
};
XSmallSideLabelOffDisabled.story = {
  name: 'X-Small Side Label Off Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961bf5cf6f15974ca217&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallSideLabelOnDisabled = Template.bind({});
XSmallSideLabelOnDisabled.args = {
  label: {
    position: 'side',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: true,
  checked: true,
};
XSmallSideLabelOnDisabled.story = {
  name: 'X-Small Side Label On Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961d4f697a14ff393000&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallTopLabelOff = Template.bind({});
XSmallTopLabelOff.args = {
  label: {
    position: 'top',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: false,
};
XSmallTopLabelOff.story = {
  name: 'X-Small Side Label On Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961bd8bf6412f035aaed&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallTopLabelOn = Template.bind({});
XSmallTopLabelOn.args = {
  label: {
    position: 'top',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: false,
  checked: true,
};
XSmallTopLabelOn.story = {
  name: 'X-Small Top Label On',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62719623dcbf9a1204f2a77c&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallTopLabelOffDisabled = Template.bind({});
XSmallTopLabelOffDisabled.args = {
  label: {
    position: 'top',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: true,
  checked: false,
};
XSmallTopLabelOffDisabled.story = {
  name: 'X-Small Top Label Off Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271961c43e220112d63d66e',
  },
};

export const XSmallTopLabelOnDisabled = Template.bind({});
XSmallTopLabelOnDisabled.args = {
  label: {
    position: 'top',
    textChecked: 'on',
    textUnchecked: 'off',
  },
  disabled: true,
  checked: true,
};
XSmallTopLabelOnDisabled.story = {
  name: 'X-Small Top Label On Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271961f70a48811f2e948d8&stid=624c74edc63a9e13edc17931',
  },
};
