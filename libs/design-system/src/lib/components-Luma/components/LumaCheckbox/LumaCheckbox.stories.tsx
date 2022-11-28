import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { LumaCheckbox } from './LumaCheckbox';

export default {
  title: 'Components/In-Progress/Checkbox',
  component: LumaCheckbox,
  parameters: {
    zeplinLink: [
      {
        name: 'WithText',
        link: 'zpl://components?coids=62587009bd64e791a2947403&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'WithTextSelected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700ec3cc68932a993960',
      },
      {
        name: 'WithTextDisabled',
        link: 'zpl://components?coids=625870092f8f99917684f21c&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'WithTextSelectedDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700deaceb8933d886dfc',
      },
      {
        name: 'CheckboxOnly',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f320308d24915ad920',
      },
      {
        name: 'CheckboxOnlySelected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f27d005423b9fafbc9',
      },
      {
        name: 'CheckboxOnlyDisabled',
        link: 'zpl://components?coids=62586fead4f20c8d7570d166&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'CheckboxOnlyDisabledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=62587006db935491177714ae',
      },
    ],
  },
} as ComponentMeta<typeof LumaCheckbox>;

const Template: ComponentStory<typeof LumaCheckbox> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const checkedListener = () => {
    setChecked(!checked);
  };
  return (
    <LumaCheckbox {...args} checked={checked} onChange={checkedListener} />
  );
};

export const WithText = Template.bind({});
WithText.args = {
  label: 'Checkbox',
  checkboxKey: 'Checkbox',
};
WithText.story = {
  name: 'With Text',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62587009bd64e791a2947403&stid=624c74edc63a9e13edc17931',
  },
};

export const WithTextSelected = Template.bind({});
WithTextSelected.args = {
  label: 'Checkbox',
  checkboxKey: 'Checkbox',
  checked: true,
};
WithTextSelected.story = {
  name: 'With Text Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700ec3cc68932a993960',
  },
};

export const WithTextDisabled = Template.bind({});
WithTextDisabled.args = {
  label: 'Checkbox',
  disabled: true,
  checkboxKey: 'Checkbox',
};
WithTextDisabled.story = {
  name: 'With Text Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=625870092f8f99917684f21c&stid=624c74edc63a9e13edc17931',
  },
};

export const WithTextSelectedDisabled = Template.bind({});
WithTextSelectedDisabled.args = {
  label: 'Checkbox',
  disabled: true,
  checkboxKey: 'Checkbox',
  checked: true,
};
WithTextSelectedDisabled.story = {
  name: 'With Text Selected Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700deaceb8933d886dfc',
  },
};

export const CheckboxOnly = Template.bind({});
CheckboxOnly.args = {
  checked: false,
};
CheckboxOnly.story = {
  name: 'Checkbox Only',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f320308d24915ad920',
  },
};

export const CheckboxOnlySelected = Template.bind({});
CheckboxOnlySelected.args = {
  checked: true,
};
CheckboxOnlySelected.story = {
  name: 'Checkbox Only Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6255d2f27d005423b9fafbc9',
  },
};

export const CheckboxOnlyDisabled = Template.bind({});
CheckboxOnlyDisabled.args = {
  checked: false,
  disabled: true,
};
CheckboxOnlyDisabled.story = {
  name: 'Checkbox Only Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62586fead4f20c8d7570d166&stid=624c74edc63a9e13edc17931',
  },
};
