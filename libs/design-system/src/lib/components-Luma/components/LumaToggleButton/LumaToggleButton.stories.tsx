import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaToggleButton } from './LumaToggleButton';
import { useState } from 'react';

export default {
  component: LumaToggleButton,
  title: 'Components/Waiting/Toggle Button',
  parameters: {
    zeplinLink: [
      {
        name: 'XSmallElementsUnselected',
        link: 'zpl://components?coids=62587010e919868d99744c80&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallElementsSelected',
        link: 'zpl://components?coids=62587010f55c368f29586dcc&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'XSmallElementsDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=625f189f1a5436835b7edb9e',
      },
      {
        name: 'SmallElementsUnselected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d8697b41aeebbf4bdf',
      },
      {
        name: 'SmallElementsSelected',
        link: 'zpl://components?coids=6261c1d6194285ab632f10e8&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'SmallElementsDisabled',
        link: 'zpl://components?coids=6261c1dab3a3acabb6f0d812&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumElementsUnselected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d0560dc1aa157cb4e2',
      },
      {
        name: 'MediumElementsSelected',
        link: 'zpl://components?coids=6261c1d261de02ae0aa7add4&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'MediumElementsDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d9109c25ac83418c48',
      },
      {
        name: 'XSmall2Label',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a5f1fe6b1196301f1c',
      },
      {
        name: 'Small4',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1db2c3c4daa623c8beb',
      },
      {
        name: 'Medium4',
        link: 'zpl://components?coids=6261c1d824942dae712c39c7&stid=624c74edc63a9e13edc17931',
      },
    ],
  },
} as ComponentMeta<typeof LumaToggleButton>;

const Template: ComponentStory<typeof LumaToggleButton> = (args) => {
  const [paramName, setParamName] = useState('Button1');
  const clickHandler = (e: string) => {
    setParamName(e);
  };

  return (
    <LumaToggleButton
      {...args}
      activeValue={paramName}
      onClick={clickHandler}
    />
  );
};

export const XSmallElementsUnselected = Template.bind({});
XSmallElementsUnselected.args = {
  size: 'toggle_xx_small',
  fieldValues: [{ paramName: 'Element1', label: 'Button' }],
};
XSmallElementsUnselected.story = {
  name: 'X-Small Elements Unselected',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62587010e919868d99744c80&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallElementsSelected = Template.bind({});
XSmallElementsSelected.args = {
  size: 'toggle_xx_small',
  activeValue: 'Button1',
  fieldValues: [{ paramName: 'Button1', label: 'Button' }],
};
XSmallElementsSelected.story = {
  name: 'X-Small Elements Selected',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62587010f55c368f29586dcc&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallElementsDisabled = Template.bind({});
XSmallElementsDisabled.args = {
  size: 'toggle_xx_small',
  fieldValues: [{ paramName: 'Element1', label: 'Button', isDisabled: true }],
};
XSmallElementsDisabled.story = {
  name: 'X-Small Elements Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=625f189f1a5436835b7edb9e',
  },
};

export const SmallElementsUnselected = Template.bind({});
SmallElementsUnselected.args = {
  size: 'toggle_small',
  fieldValues: [{ paramName: 'Element1', label: 'Button' }],
};
SmallElementsUnselected.story = {
  name: 'Small Elements Unselected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d8697b41aeebbf4bdf',
  },
};

export const SmallElementsSelected = Template.bind({});
SmallElementsSelected.args = {
  size: 'toggle_small',
  activeValue: 'Button',
  fieldValues: [{ paramName: 'Button1', label: 'Button' }],
};
SmallElementsSelected.story = {
  name: 'Small Elements Selected',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1d6194285ab632f10e8&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallElementsDisabled = Template.bind({});
SmallElementsDisabled.args = {
  size: 'toggle_small',
  fieldValues: [{ paramName: 'Element1', label: 'Button', isDisabled: true }],
};
SmallElementsDisabled.story = {
  name: 'Small Elements Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1dab3a3acabb6f0d812&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumElementsUnselected = Template.bind({});
MediumElementsUnselected.args = {
  size: 'toggle_medium',
  fieldValues: [{ paramName: 'Element1', label: 'Button' }],
};
MediumElementsUnselected.story = {
  name: 'Medium Elements Unselected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d0560dc1aa157cb4e2',
  },
};

export const MediumElementsSelected = Template.bind({});
MediumElementsSelected.args = {
  size: 'toggle_medium',
  activeValue: 'Button',
  fieldValues: [{ paramName: 'Button1', label: 'Button' }],
};
MediumElementsSelected.story = {
  name: 'Medium Elements Selected',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1d261de02ae0aa7add4&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumElementsDisabled = Template.bind({});
MediumElementsDisabled.args = {
  size: 'toggle_medium',
  fieldValues: [{ paramName: 'Element1', label: 'Button', isDisabled: true }],
};
MediumElementsDisabled.story = {
  name: 'Medium Elements Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d9109c25ac83418c48',
  },
};

export const XSmall2Label = Template.bind({});
XSmall2Label.args = {
  activeValue: 'Button1',
  size: 'toggle_xx_small',
  title: 'Title',
  fieldValues: [
    { paramName: 'Button1', label: 'Button' },
    { paramName: 'Button2', label: 'Button' },
  ],
};
XSmall2Label.story = {
  name: 'X-Small 2+Label',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a5f1fe6b1196301f1c',
  },
};

export const Small4 = Template.bind({});
Small4.args = {
  activeValue: 'Button1',
  size: 'toggle_small',
  fieldValues: [
    { paramName: 'Button1', label: 'Button' },
    { paramName: 'Button2', label: 'Button' },
    { paramName: 'Button3', label: 'Button' },
    { paramName: 'Button4', label: 'Button' },
  ],
};
Small4.story = {
  name: 'Small 4',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1db2c3c4daa623c8beb',
  },
};

export const Medium4 = Template.bind({});
Medium4.args = {
  activeValue: 'Button1',
  size: 'toggle_small',
  fieldValues: [
    { paramName: 'Button1', label: 'Button' },
    { paramName: 'Button2', label: 'Button' },
    { paramName: 'Button3', label: 'Button' },
    { paramName: 'Button4', label: 'Button' },
  ],
};
Medium4.story = {
  name: 'Medium 4',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1d824942dae712c39c7&stid=624c74edc63a9e13edc17931',
  },
};
