import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Option } from './Option';

export default {
  title: 'Secondaries/Option',
  component: Option,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=201%3A4739',
    },
  },
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const checkedListener = () => {
    setChecked(!checked);
  };
  return <Option {...args} checked={checked} onChange={checkedListener} />;
};

export const OptionButton = Template.bind({});
OptionButton.args = {
  children: 'Option',
  disabled: false,
  key: 'Option',
};

export const OptionButtonInDiv = Template.bind({});
OptionButtonInDiv.args = {
  children: 'Option',
  disabled: false,
};
OptionButtonInDiv.decorators = [
  (Option) => (
    <div style={{ width: '5.5625rem' }}>
      <Option />
    </div>
  ),
];
