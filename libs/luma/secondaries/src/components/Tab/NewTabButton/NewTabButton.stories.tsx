import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewTabButton } from './NewTabButton';
import { NewTabButtonIcon } from './NewTabButton.styles';

export default {
  title: 'Secondaries/NewTabButton',
  component: NewTabButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=175%3A261',
    },
  },
} as ComponentMeta<typeof NewTabButton>;

const Template: ComponentStory<typeof NewTabButton> = (args) => (
  <NewTabButton {...args} />
);

export const IconButton = Template.bind({});
IconButton.args = {
  children: <NewTabButtonIcon iconCode="plus" prefix="far" />,
  variant: 'primary',
};
