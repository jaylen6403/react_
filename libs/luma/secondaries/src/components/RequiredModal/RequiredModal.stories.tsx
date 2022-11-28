import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { colors } from '@luma-fe-workspace/design-system';
import { RequiredModal } from './RequiredModal';

export default {
  title: 'Secondaries/Modals',
  component: RequiredModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=258%3A31022',
    },
  },
} as ComponentMeta<typeof RequiredModal>;

const Template: ComponentStory<typeof RequiredModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  args.rejectAction = {
    text: 'reject',
    onClick() {
      setShowModal(() => false);
      console.log('Rejected order');
    },
  };
  args.acceptAction = {
    text: 'fill',
    onClick() {
      setShowModal(() => false);
      console.log('Accepted order');
    },
  };
  return (
    <RequiredModal {...args} showModal={showModal}>
      <div
        style={{
          padding: '3.125rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: colors.limeGreen,
          fontFamily: 'IBM Plex Sans',
          fontWeight: '500',
          fontSize: '1rem',
          width: '34.5rem',
          height: '5.5rem',
        }}
      >
        Buy 100 x 4557CF48 @ 100.045
      </div>
    </RequiredModal>
  );
};

export const ReqModal = Template.bind({});
ReqModal.storyName = 'Required Modal';
ReqModal.args = {
  id: 'pending-order',
  title: 'Pending order',
  showModal: true,
  seperator: 'BUY',
  rejectAction: {
    text: 'reject',
    onClick: () => console.log('Rejected order'),
  },
  acceptAction: { text: 'fill', onClick: () => console.log('Submitted!') },
};

export const TimedModal = Template.bind({});
TimedModal.storyName = 'Timed Modal';
TimedModal.args = {
  id: 'pending-order',
  title: 'Pending order',
  showModal: true,
  seperator: 'BUY',
  rejectAction: {
    text: 'reject',
    onClick: () => console.log('Rejected order'),
  },
  acceptAction: { text: 'fill', onClick: () => console.log('Submitted!') },
  timer: 0.15,
};
