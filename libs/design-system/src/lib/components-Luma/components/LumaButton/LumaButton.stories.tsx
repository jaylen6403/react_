import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaButton } from './LumaButton';
import { LumaIcon } from '../LumaIcon';
import { LumaButtonDropdown } from './ButtonDropdown/LumaButtonDropdown';
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';
import { action } from '@storybook/addon-actions';

const ITEMS: DataItemProps[] = [
  {
    label: 'First Checkbox',
    value: 'option1',
    checkboxIndex: 0,
  },
  {
    label: 'Second Checkbox - Disabled',
    value: 'option2',
    checkboxIndex: 1,
    isDisabled: true,
  },
  {
    label: 'Third Checkbox - Section',
    value: 'option3',
    checkboxIndex: 2,
    sectionName: 'Section',
  },
  {
    label: 'Fourth Option',
    value: 'option4',
    iconCode: 'folder-download',
    checkboxIndex: 3,
  },
];

export default {
  component: LumaButton,
  title: 'Components/In-Progress/Button',
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'tertiary_positive',
        'tertiary_negative',
        'document_error',
        'remove',
      ],
    },
    size: {
      options: ['x_small', 'small', 'medium', 'large', 'icon_only'],
    },
  },
  parameters: {
    zeplinLink: [
      {
        name: 'Large Primary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf747cf75712f04d82e7',
      },
      {
        name: 'Large Primary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf75f6239e1616a23ee8',
      },
      {
        name: 'Large Secondary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf76544b73133f01c43c',
      },
      {
        name: 'Large Secondary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf75313199153d08a68d',
      },
      {
        name: 'Large Tertiary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f6c64af721a42c570b',
      },
      {
        name: 'Large Tertiary Disabled',
        link: 'zpl://components?coids=6255d2ea7d005423b9fafbb3&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Large Secondary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf752827a0a8116b2e5c',
      },
      {
        name: 'Large Secondary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf778d244216a86a9281',
      },
      {
        name: 'Medium Primary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf76f6239e1616a23ef8',
      },
      {
        name: 'Medium Primary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf764a488d1560015431',
      },
      {
        name: 'Medium Secondary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7635ce75bab34f3b54',
      },
      {
        name: 'Medium Secondary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf77c83f1c4c2b6e4b64',
      },
      {
        name: 'Medium Tertiary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fa3a5c9925b66179bc',
      },
      {
        name: 'Medium Tertiary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2eb3a5c9925b6617985',
      },
      {
        name: 'Medium Primary Split',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196102c58a413bb75a14d',
      },
      {
        name: 'Medium Primary Split Disabled',
        link: 'zpl://components?coids=62719609e2620a1584735040&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Medium Primary Split Disabled Dropdown',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960899ca1b10f9de3845',
      },
      {
        name: 'Medium Secondary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf77932015145fc94920',
      },
      {
        name: 'Medium Secondary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf78313199153d08a69f',
      },
      {
        name: 'Small Primary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7995ac5e32d9d30e29',
      },
      {
        name: 'Small Primary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf78f197ad33eb7d0dff',
      },
      {
        name: 'Small Secondary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7828798f10eefad6f9',
      },
      {
        name: 'Small Secondary Disabled',
        link: 'zpl://components?coids=624ddf797bdc0e11fa6e2673&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Small Tertiary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fb95c06a23086e642f',
      },
      {
        name: 'Small Tertiary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2ecb522682373ad77ab',
      },
      {
        name: 'Small Primary Split',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960abf3de613881b66f2',
      },
      {
        name: 'Small Primary Split Disabled',
        link: 'zpl://components?coids=627196131d53631200748c9e&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Small Primary Split Disabled Dropdown',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719612d8278d12a122529b',
      },
      {
        name: 'Small Secondary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf792a78d116549c5b11',
      },
      {
        name: 'Small Secondary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf795e839212b16823d3',
      },
      {
        name: 'Small Secondary Icon Only',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960c98d349170a4db617',
      },
      {
        name: 'Small Secondary Icon Only Disabled',
        link: 'zpl://components?coids=6271960fcaa1d513655ecdfc&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'X-Small Primary',
        link: 'zpl://components?coids=625f18a05dd82a112ba407a7&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'X-Small Primary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fe331a9b257cad9c78',
      },
      {
        name: 'X-Small Secondary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196284f697a14ff39301e',
      },
      {
        name: 'X-Small Secondary Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271962ab1a58414124f0cd8',
      },
      {
        name: 'X-Small Secondary Dropdown',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d300be1ee121be0ee9c6',
      },
      {
        name: 'X-Small Secondary Dropdown Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d301c150b823c5353311',
      },
      {
        name: 'X-Small Tertiary Positive',
        link: 'zpl://components?coids=6255d301bf29b222e5a60cbf&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'X-Small Tertiary Positive Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d3042d55f5220a8883b7',
      },
      {
        name: 'X-Small Tertiary Negative',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62e81fe315c39115e40467a5',
      },
      {
        name: 'X-Small Tertiary Negative Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62e81fe05efea91398fd70b4',
      },
      {
        name: 'Large Tertiary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15767f3c026fa6857c6',
      },
      {
        name: 'Large Tertiary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15a2b711a29c637586f',
      },
      {
        name: 'Medium Tertiary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15c578e272cc9671a11',
      },
      {
        name: 'Medium Tertiary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15d8748282b139c4a70',
      },
      {
        name: 'Small Tertiary Icon',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fe9f51578e272cc967121d',
      },
      {
        name: 'Small Tertiary Icon Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fe9f523b1c8a2a3f51ceff',
      },
      {
        name: 'Document Upload Area',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03b903492c28a9455d2f',
      },
      {
        name: 'Document Upload Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03b903492c28a9455d2f',
      },
      {
        name: 'Document Upload Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03bf5aecc92d3ea71aa6',
      },
    ],
  },
} as ComponentMeta<typeof LumaButton>;

const Template: ComponentStory<typeof LumaButton> = (args) => (
  <LumaButton {...args} onClick={action('onClick')} />
);

const TemplateDropdown: ComponentStory<typeof LumaButtonDropdown> = (args) => {
  return (
    <LumaButtonDropdown
      dropdownItems={ITEMS}
      onChangeDropdown={(e) =>
        console.log(`Choosen item from dropdown: ${e?.label}`)
      }
      {...args}
    />
  );
};

const TemplateDropdownSplit: ComponentStory<typeof LumaButtonDropdown> = (
  args
) => {
  return (
    <LumaButtonDropdown
      dropdownItems={ITEMS}
      split={true}
      disabledSplit={false}
      onChangeDropdown={(e) =>
        console.log(`Choosen item from dropdown: ${e?.label}`)
      }
      {...args}
    />
  );
};

export const XSmallSecondaryDropdown = TemplateDropdown.bind({});
XSmallSecondaryDropdown.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'x_small',
};
XSmallSecondaryDropdown.story = {
  name: 'X-Small Secondary Dropdown',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d300be1ee121be0ee9c6',
  },
};

export const XSmallSecondaryDropdownDisabled = TemplateDropdown.bind({});
XSmallSecondaryDropdownDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'x_small',
  disabled: true,
};
XSmallSecondaryDropdownDisabled.story = {
  name: 'X-Small Secondary Dropdown Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d301c150b823c5353311',
  },
};

export const SmallPrimarySplitDisabledDropdown = TemplateDropdownSplit.bind({});
SmallPrimarySplitDisabledDropdown.args = {
  children: 'Button',
  variant: 'primary',
  disabledSplit: true,
};
SmallPrimarySplitDisabledDropdown.story = {
  name: 'Small Primary Split Disabled Dropdown',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=62719612d8278d12a122529b',
  },
};

export const SmallPrimarySplitDisabled = TemplateDropdownSplit.bind({});
SmallPrimarySplitDisabled.args = {
  children: 'Button',
  variant: 'primary',
  disabled: true,
  disabledSplit: true,
  size: 'small',
};
SmallPrimarySplitDisabled.story = {
  name: 'Small Primary Split Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=627196131d53631200748c9e&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallPrimarySplit = TemplateDropdownSplit.bind({});
SmallPrimarySplit.args = {
  children: 'Button',
  variant: 'primary',
  size: 'small',
};
SmallPrimarySplit.story = {
  name: 'Small Primary Split',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960abf3de613881b66f2',
  },
};

export const SmallPrimarySplitTop = TemplateDropdownSplit.bind({});
SmallPrimarySplitTop.args = {
  children: 'Button',
  variant: 'primary',
  size: 'small',
  dropdownPosition: 'top',
};
SmallPrimarySplitTop.story = {
  name: 'Small Primary Split Top',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6283f1af2b42240c0a5d72c2&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumPrimarySplitDisabledDropdown = TemplateDropdownSplit.bind(
  {}
);
MediumPrimarySplitDisabledDropdown.args = {
  size: 'medium',
  children: 'Button',
  variant: 'primary',
  disabledSplit: true,
};
MediumPrimarySplitDisabledDropdown.story = {
  name: 'Medium Primary Split Disabled Dropdown',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960899ca1b10f9de3845',
  },
};

export const MediumPrimarySplitDisabled = TemplateDropdownSplit.bind({});
MediumPrimarySplitDisabled.args = {
  size: 'medium',
  children: 'Button',
  variant: 'primary',
  disabled: true,
  disabledSplit: true,
};
MediumPrimarySplitDisabled.story = {
  name: 'Medium Primary Split Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62719609e2620a1584735040&stid=624c74edc63a9e13edc17931',
  },
};

export const MediumPrimarySplit = TemplateDropdownSplit.bind({});
MediumPrimarySplit.args = {
  size: 'medium',
  children: 'Button',
  variant: 'primary',
};
MediumPrimarySplit.story = {
  name: 'Medium Primary Split',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196102c58a413bb75a14d',
  },
};

export const MediumPrimarySplitTop = TemplateDropdownSplit.bind({});
MediumPrimarySplitTop.args = {
  size: 'medium',
  children: 'Button',
  variant: 'primary',
  dropdownPosition: 'top',
};
MediumPrimarySplitTop.story = {
  name: 'Medium Primary Split Top',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6283f251b920fc0dab44bb58',
  },
};

export const LargePrimary = Template.bind({});
LargePrimary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'large',
};
LargePrimary.story = {
  name: 'Large Primary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf747cf75712f04d82e7',
  },
};

export const LargePrimaryDisabled = Template.bind({});
LargePrimaryDisabled.args = {
  children: 'Button',
  variant: 'primary',
  disabled: true,
  size: 'large',
};
LargePrimaryDisabled.story = {
  name: 'Large Primary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf75f6239e1616a23ee8',
  },
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'large',
};
LargeSecondary.story = {
  name: 'Large Secondary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf76544b73133f01c43c',
  },
};

export const LargeSecondaryDisabled = Template.bind({});
LargeSecondaryDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  disabled: true,
  size: 'large',
};
LargeSecondaryDisabled.story = {
  name: 'Large Secondary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf75313199153d08a68d',
  },
};

export const LargeTertiary = Template.bind({});
LargeTertiary.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'large',
};
LargeTertiary.story = {
  name: 'Large Tertiary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f6c64af721a42c570b',
  },
};

export const LargeTertiaryDisabled = Template.bind({});
LargeTertiaryDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  disabled: true,
  size: 'large',
};
LargeTertiaryDisabled.story = {
  name: 'Large Tertiary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6255d2ea7d005423b9fafbb3&stid=624c74edc63a9e13edc17931',
  },
};

export const LargeSecondaryIcon = Template.bind({});
LargeSecondaryIcon.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'large',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
};
LargeSecondaryIcon.story = {
  name: 'Large Secondary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf752827a0a8116b2e5c',
  },
};

export const LargeSecondaryIconDisabled = Template.bind({});
LargeSecondaryIconDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
  disabled: true,
  size: 'large',
};
LargeSecondaryIconDisabled.story = {
  name: 'Large Secondary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf778d244216a86a9281',
  },
};

export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'medium',
};
MediumPrimary.story = {
  name: 'Medium Primary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf76f6239e1616a23ef8',
  },
};

export const MediumPrimaryDisabled = Template.bind({});
MediumPrimaryDisabled.args = {
  children: 'Button',
  variant: 'primary',
  size: 'medium',
  disabled: true,
};
MediumPrimaryDisabled.story = {
  name: 'Medium Primary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf764a488d1560015431',
  },
};

export const MediumSecondary = Template.bind({});
MediumSecondary.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'medium',
};
MediumSecondary.story = {
  name: 'Medium Secondary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7635ce75bab34f3b54',
  },
};

export const MediumSecondaryDisabled = Template.bind({});
MediumSecondaryDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'medium',
  disabled: true,
};
MediumSecondaryDisabled.story = {
  name: 'Medium Secondary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf77c83f1c4c2b6e4b64',
  },
};

export const MediumTertiary = Template.bind({});
MediumTertiary.args = {
  children: 'Button',
  variant: 'tertiary',
};
MediumTertiary.story = {
  name: 'Medium Tertiary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fa3a5c9925b66179bc',
  },
};

export const MediumTertiaryDisabled = Template.bind({});
MediumTertiaryDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  disabled: true,
};
MediumTertiaryDisabled.story = {
  name: 'Medium Tertiary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2eb3a5c9925b6617985',
  },
};

export const MediumSecondaryIcon = Template.bind({});
MediumSecondaryIcon.args = {
  children: 'Button',
  variant: 'secondary',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
  size: 'medium',
};
MediumSecondaryIcon.story = {
  name: 'Medium Secondary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf77932015145fc94920',
  },
};

export const MediumSecondaryIconDisabled = Template.bind({});
MediumSecondaryIconDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
  size: 'medium',
  disabled: true,
};
MediumSecondaryIconDisabled.story = {
  name: 'Medium Secondary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf78313199153d08a69f',
  },
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'small',
};
SmallPrimary.story = {
  name: 'Small Primary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7995ac5e32d9d30e29',
  },
};

export const SmallPrimaryDisabled = Template.bind({});
SmallPrimaryDisabled.args = {
  children: 'Button',
  variant: 'primary',
  size: 'small',
  disabled: true,
};
SmallPrimaryDisabled.story = {
  name: 'Small Primary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf78f197ad33eb7d0dff',
  },
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'small',
};
SmallSecondary.story = {
  name: 'Small Secondary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf7828798f10eefad6f9',
  },
};

export const SmallSecondaryDisabled = Template.bind({});
SmallSecondaryDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'small',
  disabled: true,
};
SmallSecondaryDisabled.story = {
  name: 'Small Secondary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624ddf797bdc0e11fa6e2673&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallTertiary = Template.bind({});
SmallTertiary.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'small',
};
SmallTertiary.story = {
  name: 'Small Tertiary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fb95c06a23086e642f',
  },
};

export const SmallTertiaryDisabled = Template.bind({});
SmallTertiaryDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'small',
  disabled: true,
};
SmallTertiaryDisabled.story = {
  name: 'Small Tertiary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2ecb522682373ad77ab',
  },
};

export const SmallSecondaryIcon = Template.bind({});
SmallSecondaryIcon.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'small',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
};
SmallSecondaryIcon.story = {
  name: 'Small Secondary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf792a78d116549c5b11',
  },
};

export const SmallSecondaryIconDisabled = Template.bind({});
SmallSecondaryIconDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'small',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
  disabled: true,
};
SmallSecondaryIconDisabled.story = {
  name: 'Small Secondary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624ddf795e839212b16823d3',
  },
};

export const SmallPrimaryIconOnly = Template.bind({});
SmallPrimaryIconOnly.args = {
  variant: 'secondary',
  size: 'icon_only',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
};
SmallPrimaryIconOnly.story = {
  name: 'Small Primary Icon Only',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6271960c98d349170a4db617&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallPrimaryIconOnlyDisabled = Template.bind({});
SmallPrimaryIconOnlyDisabled.args = {
  variant: 'secondary',
  size: 'icon_only',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
  disabled: true,
};
SmallPrimaryIconOnlyDisabled.story = {
  name: 'Small Primary Icon Only Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271960fcaa1d513655ecdfc',
  },
};

export const XSmallPrimary = Template.bind({});
XSmallPrimary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'x_small',
};
XSmallPrimary.story = {
  name: 'X-Small Primary',
  parameters: {
    zeplinLink:
      'zpl://components?coids=625f18a05dd82a112ba407a7&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallPrimaryDisabled = Template.bind({});
XSmallPrimaryDisabled.args = {
  children: 'Button',
  variant: 'primary',
  size: 'x_small',
  disabled: true,
};
XSmallPrimaryDisabled.story = {
  name: 'X-Small Primary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2fe331a9b257cad9c78',
  },
};

export const XSmallSecondary = Template.bind({});
XSmallSecondary.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'x_small',
};
XSmallSecondary.story = {
  name: 'X-Small Secondary',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627196284f697a14ff39301e',
  },
};

export const XSmallSecondaryDisabled = Template.bind({});
XSmallSecondaryDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'x_small',
  disabled: true,
};
XSmallSecondaryDisabled.story = {
  name: 'X-Small Secondary Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6271962ab1a58414124f0cd8',
  },
};

export const XSmallTertiaryPositive = Template.bind({});
XSmallTertiaryPositive.args = {
  children: 'Button',
  variant: 'tertiary_positive',
  size: 'x_small',
};
XSmallTertiaryPositive.story = {
  name: 'X-Small Tertiary Positive',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6255d301bf29b222e5a60cbf&stid=624c74edc63a9e13edc17931',
  },
};

export const XSmallTertiaryPositiveDisabled = Template.bind({});
XSmallTertiaryPositiveDisabled.args = {
  children: 'Button',
  variant: 'tertiary_positive',
  size: 'x_small',
  disabled: true,
};
XSmallTertiaryPositiveDisabled.story = {
  name: 'X-Small Tertiary Positive Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d3042d55f5220a8883b7',
  },
};

export const XSmallTertiaryNegative = Template.bind({});
XSmallTertiaryNegative.args = {
  children: 'Button',
  variant: 'tertiary_negative',
  size: 'x_small',
};
XSmallTertiaryNegative.story = {
  name: 'X-Small Tertiary Negative',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62e81fe315c39115e40467a5',
  },
};

export const XSmallTertiaryNegativeDisabled = Template.bind({});
XSmallTertiaryNegativeDisabled.args = {
  children: 'Button',
  variant: 'tertiary_negative',
  size: 'x_small',
  disabled: true,
};
XSmallTertiaryNegativeDisabled.story = {
  name: 'X-Small Tertiary Negative Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62e81fe05efea91398fd70b4',
  },
};

export const LargeTertiaryIcon = Template.bind({});
LargeTertiaryIcon.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'large',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
};
LargeTertiaryIcon.story = {
  name: 'Large Tertiary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15767f3c026fa6857c6',
  },
};

export const LargeTertiaryIconDisabled = Template.bind({});
LargeTertiaryIconDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
  disabled: true,
  size: 'large',
};
LargeTertiaryIconDisabled.story = {
  name: 'Large Tertiary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15a2b711a29c637586f',
  },
};

export const MediumTertiaryIcon = Template.bind({});
MediumTertiaryIcon.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'medium',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
};
MediumTertiaryIcon.story = {
  name: 'Medium Tertiary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15c578e272cc9671a11',
  },
};

export const MediumTertiaryIconDisabled = Template.bind({});
MediumTertiaryIconDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
  disabled: true,
  size: 'medium',
};
MediumTertiaryIconDisabled.story = {
  name: 'Medium Tertiary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fea15d8748282b139c4a70',
  },
};

export const SmallTertiaryIcon = Template.bind({});
SmallTertiaryIcon.args = {
  children: 'Button',
  variant: 'tertiary',
  size: 'small',
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="file-pdf" />,
    isOnRight: false,
  },
};
SmallTertiaryIcon.story = {
  name: 'Small Tertiary Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fe9f51578e272cc967121d',
  },
};

export const SmallTertiaryIconDisabled = Template.bind({});
SmallTertiaryIconDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-pdf" /> },
  disabled: true,
  size: 'small',
};
SmallTertiaryIconDisabled.story = {
  name: 'Small Tertiary Icon Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fe9f523b1c8a2a3f51ceff',
  },
};

export const DocumentUploadArea = Template.bind({});
DocumentUploadArea.args = {
  children: 'Upload Document',
  variant: 'secondary',
  icon: { iconComponent: <LumaIcon type="regular" iconCode="file-arrow-up" /> },
  size: 'document_upload',
};
DocumentUploadArea.story = {
  name: 'Document Upload Area',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03b903492c28a9455d2f',
  },
};

export const DocumentUploadAreaDisabled = Template.bind({});
DocumentUploadAreaDisabled.args = {
  children: 'Waiting',
  variant: 'secondary',
  disabled: true,
  icon: {
    iconComponent: <LumaIcon type="regular" iconCode="spinner" />,
  },
  size: 'document_upload',
};
DocumentUploadAreaDisabled.story = {
  name: 'Document Upload Area Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03b903492c28a9455d2f',
  },
};

export const DocumentUploadAreaRemove = Template.bind({});
DocumentUploadAreaRemove.args = {
  children: 'Uploaded: Document',
  variant: 'remove',
  icon: {
    iconComponent: <LumaIcon type="light" iconCode="check" />,
  },
  size: 'document_upload_remove',
  xmark: true,
};
DocumentUploadAreaRemove.story = {
  name: 'Document Upload Area Remove',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62fc03b903492c28a9455d2f',
  },
};
