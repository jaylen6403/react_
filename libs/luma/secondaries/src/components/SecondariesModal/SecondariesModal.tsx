import { Modal, ModalProps, ActionModalFooter, ModalHeader } from '../Modal';
import { ModalBody } from '../Modal/Modal.styles';
import { ModalActionProp } from '../Modal/ModalFooter/ActionModalFooter/ActionModalFooter';
import {
  generateAriaDescriptors,
  ModalSeperatorColor,
  SearchNameDescriptor,
} from '../Modal/ModalHelpers';

interface Props extends ModalProps {
  title: string;
  secondaryTitle?: string;
  /**
   * boolean value whether to show Secondaries Modal or not
   */
  showModal: boolean;
  /**
   * Submit ModalActionProp that describes the
   *   Primary Button on the right
   */
  submitAction: ModalActionProp;
  /**
   * Submit ModalActionProp that describes the
   *   Primary Button on the right
   */
  disableSubmit?: boolean;
  /**
     Show Close Button, default to true
   */
  showCancel?: boolean;
  /**
   * Specify the color of the Modal Header Divider
   *  buy: limeGreen
   *  red: red
   *  none (default): greyFade
   */
  seperator?: ModalSeperatorColor;
  /**
   * If provided, describes input field in Modal Header
   */
  searchAction?: SearchNameDescriptor;
  /**
   * Submit ModalActionProp that describes the
   *   Secondary Button on the right next to submit
   */
  secondarySubmitAction?: ModalActionProp;
  /**
   * Error message to present on the footer if provided
   */
  errorMessage?: string;
}

export const SecondariesModal = ({
  id,
  title,
  secondaryTitle,
  children,
  showModal,
  handleOnClose,
  submitAction,
  disableSubmit,
  secondarySubmitAction,
  errorMessage,
  searchAction,
  seperator = 'NONE',
  showCancel = true,
}: Props) => {
  const { titleId, contentId } = generateAriaDescriptors(id);
  return (
    <Modal id={id} showModal={showModal} handleOnClose={handleOnClose}>
      <ModalHeader
        id={titleId}
        title={title}
        handleOnClose={handleOnClose}
        secondaryTitle={secondaryTitle}
        searchActionObj={searchAction}
        seperator={seperator}
      />
      <ModalBody id={contentId}>{children}</ModalBody>
      <ActionModalFooter
        errorMessage={errorMessage}
        cancel={
          showCancel ? { text: 'cancel', onClick: handleOnClose } : undefined
        }
        secondarySubmit={secondarySubmitAction}
        submit={submitAction}
        disableSubmit={disableSubmit}
      />
    </Modal>
  );
};
