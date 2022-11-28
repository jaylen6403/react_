import { LumaButton, Modal } from '@luma-fe-workspace/design-system';
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  ButtonContainer,
  MessageText,
  StyledButton,
} from './TrainingModal.styles';
import { Dispatch, SetStateAction } from 'react';

type TrainingModalProps = {
  isOpen: boolean;
  setShowTrainingModal: Dispatch<SetStateAction<boolean>>;
};

export const TrainingModal = ({
  isOpen,
  setShowTrainingModal,
}: TrainingModalProps) => {
  const onClose = () => {
    setShowTrainingModal(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <ModalHeader>Product Trainings Incomplete</ModalHeader>

        <ModalContent>
          <MessageText>
            You must complete the required product training to gain access to
            the product catalogue.
          </MessageText>
          <MessageText>
            Please contact Luma Support at{' '}
            <a href="mailto:support@lumafintech.com">support@lumafintech.com</a>{' '}
            or <a href="tel:+1844844LUMA">844-844-LUMA</a> for further
            assistance.
          </MessageText>
        </ModalContent>
        <ButtonContainer>
          <StyledButton onClick={onClose} variant="primary">
            Ok
          </StyledButton>
        </ButtonContainer>
      </ModalBody>
    </Modal>
  );
};
