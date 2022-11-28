import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaIconLink } from './LumaIconLink';

export default {
  component: LumaIconLink,
  title: 'Components/Waiting/IconLink',
  parameters: {
    zeplinLink: [
      {
        name: 'Medium',
        link: 'zpl://components?coids=628d270cb76173bba913db25&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d270ecc0603bbd2cb975f',
      },
      {
        name: 'Small',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d270f98b419baab035f13',
      },
      {
        name: 'Small Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d2712df1008be66d9fece',
      },
    ],
  },
} as ComponentMeta<typeof LumaIconLink>;

const Template: ComponentStory<typeof LumaIconLink> = (args) => (
  <LumaIconLink {...args} />
);

export const Medium = Template.bind({});
Medium.args = {
  sizeVariant: 'medium',
  iconCode: 'file-pdf',
  label: 'Button',
  onClick: () => console.log('click on the link'),
};
Medium.story = {
  name: 'Medium',
  parameters: {
    zeplinLink:
      'zpl://components?coids=628d270cb76173bba913db25&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumDisabled = Template.bind({});
MediumDisabled.args = {
  sizeVariant: 'medium',
  iconCode: 'file-pdf',
  label: 'Button',
  onClick: () => console.log('click on the link'),
  disabled: true,
};
MediumDisabled.story = {
  name: 'Medium Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d270ecc0603bbd2cb975f',
  },
};

export const Small = Template.bind({});
Small.args = {
  sizeVariant: 'small',
  iconCode: 'file-pdf',
  label: 'Button',
  onClick: () => console.log('click on the link'),
};
Small.story = {
  name: 'Small',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d270f98b419baab035f13',
  },
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  sizeVariant: 'small',
  iconCode: 'file-pdf',
  label: 'Button',
  onClick: () => console.log('click on the link'),
  disabled: true,
};
SmallDisabled.story = {
  name: 'Small Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=628d2712df1008be66d9fece',
  },
};
