import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Components/Waiting/Spinner',
  component: Spinner,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=201%3A4739',
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});
