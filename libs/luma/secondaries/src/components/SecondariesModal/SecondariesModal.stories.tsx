import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { SecondariesModal } from './SecondariesModal';
import styled from 'styled-components';

export default {
  title: 'Secondaries/Modals',
  component: SecondariesModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=258%3A31022',
    },
  },
} as ComponentMeta<typeof SecondariesModal>;

const TemplateForm = () => {
  const Root = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.125rem;
  `;
  return (
    <Root>
      <Root>
        <label htmlFor="input1">Critera 1</label>
        <input id="input1" />
      </Root>
      <Root className="input-group">
        <label htmlFor="input2">Critera 2</label>
        <input id="input2" />
      </Root>
    </Root>
  );
};

const Template: ComponentStory<typeof SecondariesModal> = (args) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <SecondariesModal
      {...args}
      showModal={showModal}
      handleOnClose={() => setShowModal(false)}
    >
      <TemplateForm />
    </SecondariesModal>
  );
};

export const SecModal = Template.bind({});
SecModal.storyName = 'Secondaries Modal';
SecModal.args = {
  id: 'test',
  handleOnClose: () => console.log('Closing modal'),
  title: 'RFQ Search',
  showModal: true,
  searchAction: {
    name: '',
    placeholder: 'Search',
    setName(value) {
      console.log(value);
    },
  },
  errorMessage: 'Your quantity must respect the quantity available.',
  submitAction: { text: 'submit', onClick: () => console.log('Submitted!') },
};

export const SecModalWithSecondaryAction = Template.bind({});
SecModalWithSecondaryAction.storyName =
  'Secondaries Modal with Secondary Action';
SecModalWithSecondaryAction.args = {
  id: 'order-confirmation',
  handleOnClose: () => console.log('Closing modal'),
  seperator: 'BUY',
  title: 'Order Preview',
  showModal: true,
  secondarySubmitAction: {
    text: 'edit',
    onClick: () => console.log('Please edit your order'),
  },
  submitAction: {
    text: 'submit',
    onClick: () => console.log('Order confirmed!'),
  },
};
