import { ReactNode } from 'react';
import { Modal, ActionModalFooter } from '../Modal';
import { ModalBody } from '../Modal/Modal.styles';
import { ModalActionProp } from '../Modal/ModalFooter/ActionModalFooter/ActionModalFooter';
import { RequiredModalHeader } from '../Modal/ModalHeader/RequiredModalHeader/RequiredModalHeader';
import {
  generateAriaDescriptors,
  ModalSeperatorColor,
} from '../Modal/ModalHelpers';

interface Props {
  id: string;
  children: ReactNode;
  /**
   * Specify the color of the Modal Header Divider
   *  buy: buyGreen
   *  red: sellRed
   *  none (default): greyFade
   */
  seperator: ModalSeperatorColor;
  showModal: boolean;
  /**
   * Reject ModalActionProp that describes the
   *   Red Cancel Button on the left
   */
  rejectAction: ModalActionProp;
  /**
   * Accept ModalActionProp that describes the
   *   Primary Button on the right
   */
  acceptAction: ModalActionProp;
  /**
   *onClose Function

   */
  onClose?: () => void;
  title: string;
  secondaryTitle?: string;
  /**
   * Timer in minutes that if provided gives the user a certain
   *   amount of time to respond or the onReject function will be called
   */
  timer?: number;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}

export const RequiredModal = ({
  id,
  title,
  secondaryTitle,
  children,
  showModal,
  rejectAction,
  acceptAction,
  onClose,
  seperator,
  timer = -1,
  shouldCloseOnEsc = false,
  shouldCloseOnOverlayClick = false,
}: Props) => {
  const { titleId, contentId } = generateAriaDescriptors(id);
  return (
    <Modal
      id={id}
      showModal={showModal}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      handleOnClose={onClose ? onClose : () => null}
    >
      <RequiredModalHeader
        id={titleId}
        seperatorColor={seperator}
        title={title}
        secondaryTitle={secondaryTitle}
        timer={timer}
        reject={rejectAction}
      />
      <ModalBody id={contentId}>{children}</ModalBody>
      <ActionModalFooter
        canHaveError={false}
        submit={acceptAction}
        reject={rejectAction}
      />
    </Modal>
  );
};
