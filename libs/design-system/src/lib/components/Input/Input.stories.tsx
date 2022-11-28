import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Secondaries/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=254%3A36516',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  placeholder: 'Field Entry',
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Field Entry',
  value: 'Field Value',
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  placeholder: 'Field Entry',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Field Entry',
};
