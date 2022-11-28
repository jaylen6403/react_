import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Message } from './Message';

export default {
  title: 'Secondaries/Message',
  component: Message,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=512%3A65500',
    },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => {
  const [showMsg, setShowMsg] = useState(args.showMessage);
  return (
    <Message {...args} showMessage={showMsg} setShowMessage={setShowMsg} />
  );
};

export const MessageStory = Template.bind({});
MessageStory.storyName = 'Message w/ Title';
MessageStory.args = {
  messageType: 'info',
  title: 'Your transfer has processed.',
  timer: 5,
  showMessage: true,
};

export const MessageStoryWDesc = Template.bind({});
MessageStoryWDesc.storyName = 'Message w/ Description';
MessageStoryWDesc.args = {
  messageType: 'info',
  title: 'Your transfer has processed.',
  timer: 5,
  showMessage: true,
  description: 'Please check your orders for more info',
};
