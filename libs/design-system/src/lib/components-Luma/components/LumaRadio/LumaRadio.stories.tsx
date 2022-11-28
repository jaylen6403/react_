import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { LumaRadio } from './LumaRadio';

export default {
  component: LumaRadio,
  title: 'Components/Waiting/Radio',
  parameters: {
    zeplinLink: [
      {
        name: 'WithText',
        link: 'zpl://components?coids=6258700b1e0d818ffe3a44ff&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'WithTextSelected',
        link: 'zpl://components?coids=6258700ac198958dd08d6b3d&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'WithTextDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700b6be29c908b111178',
      },
      {
        name: 'WithTextSelectedDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700fd4f20c8d7570d1ed',
      },
      {
        name: 'RadioOnly',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700d4f4cb4905590d6d4',
      },
      {
        name: 'RadioOnlySelected',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700768d2a79090b25a2a',
      },
      {
        name: 'RadioOnlyDisabled',
        link: 'zpl://components?coids=62587008b925e391f510ab78&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'RadioOnlyDisabledDisabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700ee427f4901e23e333',
      },
    ],
  },
} as ComponentMeta<typeof LumaRadio>;

const TemplateDouble: ComponentStory<typeof LumaRadio> = (args) => {
  const radios = [
    ['First', 'first'],
    ['Second', 'second'],
  ];
  const [selected, setSelected] = useState(radios[0][1]);
  const selectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      {radios.map(([text, value], i) => (
        <LumaRadio
          {...args}
          key={`Radio${i}`}
          checked={selected === value}
          onChange={selectRadio}
          value={value}
          label={text}
        />
      ))}
    </>
  );
};

const TemplateSingle: ComponentStory<typeof LumaRadio> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const checkedListener = () => {
    setChecked(!checked);
  };
  return (
    <LumaRadio
      {...args}
      key={`Radio`}
      checked={checked}
      onChange={checkedListener}
      value={'Radio'}
    />
  );
};

export const DoubleRadioActive = TemplateDouble.bind({});
DoubleRadioActive.args = {
  disabled: false,
};

export const DoubleRadioDisabled = TemplateDouble.bind({});
DoubleRadioDisabled.args = {
  disabled: true,
};

export const WithText = TemplateSingle.bind({});
WithText.args = {
  disabled: false,
  label: 'Type something',
};
WithText.story = {
  name: 'With Text',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6258700b1e0d818ffe3a44ff&stid=624c74edc63a9e13edc17931',
  },
};

export const WithTextSelected = TemplateSingle.bind({});
WithTextSelected.args = {
  disabled: false,
  label: 'Type something',
  checked: true,
};
WithTextSelected.story = {
  name: 'With Text Selected',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6258700ac198958dd08d6b3d&stid=624c74edc63a9e13edc17931',
  },
};

export const WithTextDisabled = TemplateSingle.bind({});
WithTextDisabled.args = {
  disabled: true,
  label: 'Type something',
  checked: false,
};
WithTextDisabled.story = {
  name: 'With Text Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700b6be29c908b111178',
  },
};

export const WithTextSelectedDisabled = TemplateSingle.bind({});
WithTextSelectedDisabled.args = {
  disabled: true,
  label: 'Type something',
  checked: true,
};
WithTextSelectedDisabled.story = {
  name: 'With Text Selected Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700fd4f20c8d7570d1ed',
  },
};

export const RadioOnly = TemplateSingle.bind({});
RadioOnly.args = {
  checked: false,
};
RadioOnly.story = {
  name: 'Radio Only',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700d4f4cb4905590d6d4',
  },
};

export const RadioOnlySelected = TemplateSingle.bind({});
RadioOnlySelected.args = {
  checked: true,
};
RadioOnlySelected.story = {
  name: 'Radio Only Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700768d2a79090b25a2a',
  },
};

export const RadioOnlyDisabled = TemplateSingle.bind({});
RadioOnlyDisabled.args = {
  checked: false,
  disabled: true,
};
RadioOnlyDisabled.story = {
  name: 'Radio Only Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?coids=62587008b925e391f510ab78&stid=624c74edc63a9e13edc17931',
  },
};

export const RadioOnlyDisabledSelected = TemplateSingle.bind({});
RadioOnlyDisabledSelected.args = {
  checked: true,
  disabled: true,
};
RadioOnlyDisabledSelected.story = {
  name: 'Radio Only Disabled Selected',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6258700ee427f4901e23e333',
  },
};
