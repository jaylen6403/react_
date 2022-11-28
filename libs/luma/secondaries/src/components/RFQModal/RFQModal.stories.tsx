import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RFQModal } from './RFQModal';

export default {
  title: 'Secondaries/RFQModal',
  component: RFQModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=2116%3A317116',
    },
  },
} as ComponentMeta<typeof RFQModal>;

const Template: ComponentStory<typeof RFQModal> = (args) => {
  return <RFQModal {...args} />;
};
export const RFQSubmit = Template.bind({});
RFQSubmit.args = {
  showModal: true,
  setShowModal: () => true,
};
