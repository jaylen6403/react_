import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaTabs } from './LumaTabs';

export default {
  component: LumaTabs,
  title: 'Components/Waiting/Tabs',
  parameters: {
    zeplinLink: [
      {
        name: 'Button2',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d6c60b5ea9c5d1c53f',
      },
      {
        name: 'Link3',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195eb693cb916ca65ca03',
      },
      {
        name: 'Link4',
        link: 'zpl://components?coids=627195eaaae04c1667aa7685&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Link5',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195eb7f7f541139dbace1',
      },
      {
        name: 'ElementsLinkUnselected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e85b841f118081cfa2',
      },
      {
        name: 'ElementsLinkSelected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e7ee43ae13bdd30b9c',
      },
      {
        name: 'ElementsLinkDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195ec7905661096fd2233',
      },
      {
        name: 'ElementsButtonUnselected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d464f834ada21cd940',
      },
      {
        name: 'ElementsButtonSelected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d51aa30daa85587ed6',
      },
      {
        name: 'ElementsButtonDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d438c680aa3ef41a34',
      },
    ],
  },
} as ComponentMeta<typeof LumaTabs>;

const Template: ComponentStory<typeof LumaTabs> = (args) => {
  const [paramName, setParamName] = useState('Button1');
  const clickHandler = (e: string) => {
    setParamName(e);
  };

  return <LumaTabs {...args} activeValue={paramName} onClick={clickHandler} />;
};

export const Link3 = Template.bind({});
Link3.args = {
  variant: 'links',
  activeValue: 'Button1',
  fieldValues: [
    { paramName: 'Button1', label: 'Link' },
    { paramName: 'Button2', label: 'Link' },
    { paramName: 'Button3', label: 'Link' },
  ],
};
Link3.story = {
  name: '3 Link',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195eb693cb916ca65ca03',
  },
};

export const Link4 = Template.bind({});
Link4.args = {
  variant: 'links',
  activeValue: 'Button1',
  fieldValues: [
    { paramName: 'Button1', label: 'Link' },
    { paramName: 'Button2', label: 'Link' },
    { paramName: 'Button3', label: 'Link' },
    { paramName: 'Button4', label: 'Link' },
  ],
};
Link4.story = {
  name: '4 Link',
  parameters: {
    zeplinLink:
      'zpl://components?coids=627195eaaae04c1667aa7685&stid=624c74edc63a9e13edc17931',
  },
};

export const Link5 = Template.bind({});
Link5.args = {
  variant: 'links',
  activeValue: 'Button1',
  fieldValues: [
    { paramName: 'Button1', label: 'Link' },
    { paramName: 'Button2', label: 'Link' },
    { paramName: 'Button3', label: 'Link' },
    { paramName: 'Button4', label: 'Link' },
    { paramName: 'Button5', label: 'Link' },
  ],
};
Link5.story = {
  name: '5 Link',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195eb7f7f541139dbace1',
  },
};

export const Button2 = Template.bind({});
Button2.args = {
  variant: 'buttons',
  activeValue: 'Button1',
  fieldValues: [
    { paramName: 'Button1', label: 'Button' },
    { paramName: 'Button2', label: 'Button' },
  ],
  buttonIconCode: 'file',
};
Button2.story = {
  name: '2 Button',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d6c60b5ea9c5d1c53f',
  },
};

export const ElementsLinkUnselected = Template.bind({});
ElementsLinkUnselected.args = {
  variant: 'links',
  fieldValues: [{ paramName: 'Element1', label: 'Link' }],
};
ElementsLinkUnselected.story = {
  name: 'Elements Link Unselected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e85b841f118081cfa2',
  },
};

export const ElementsLinkSelected = Template.bind({});
ElementsLinkSelected.args = {
  variant: 'links',
  activeValue: 'Button1',
  fieldValues: [{ paramName: 'Button1', label: 'Link' }],
};
ElementsLinkSelected.story = {
  name: 'Elements Link Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e7ee43ae13bdd30b9c',
  },
};

export const ElementsLinkDisabled = Template.bind({});
ElementsLinkDisabled.args = {
  variant: 'links',
  fieldValues: [{ paramName: 'Element1', label: 'Link', isDisabled: true }],
};
ElementsLinkDisabled.story = {
  name: 'Elements Link Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195ec7905661096fd2233',
  },
};

export const ElementsButtonUnselected = Template.bind({});
ElementsButtonUnselected.args = {
  variant: 'buttons',
  fieldValues: [{ paramName: 'Element1', label: 'Button' }],
  buttonIconCode: 'retweet',
};
ElementsButtonUnselected.story = {
  name: 'Elements Button Unselected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d464f834ada21cd940',
  },
};

export const ElementsButtonSelected = Template.bind({});
ElementsButtonSelected.args = {
  variant: 'buttons',
  activeValue: 'Button1',
  fieldValues: [{ paramName: 'Button1', label: 'Button' }],
  buttonIconCode: 'retweet',
};
ElementsButtonSelected.story = {
  name: 'Elements Button Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d51aa30daa85587ed6',
  },
};

export const ElementsButtonDisabled = Template.bind({});
ElementsButtonDisabled.args = {
  variant: 'buttons',
  fieldValues: [{ paramName: 'Element1', label: 'Button', isDisabled: true }],
  buttonIconCode: 'retweet',
};
ElementsButtonDisabled.story = {
  name: 'Elements Button Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1d438c680aa3ef41a34',
  },
};
