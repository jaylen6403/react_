import { CSSProperties, ReactNode } from 'react';
import { colors } from '@luma-fe-workspace/design-system';
import { StyledReactModal } from './Modal.styles';
import ReactModal from 'react-modal';
import { generateAriaDescriptors } from './ModalHelpers';

// defaulting to root specifically for storybook/testing
let root =
  document.getElementById('portals') || document.getElementById('root');
if (!root) {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'portals');
  document.body.appendChild(modalRoot);
  root = document.getElementById('portals') as HTMLElement;
}

ReactModal.setAppElement(root);
const overlayStyles: CSSProperties = {
  zIndex: 9999,
  backgroundColor: `${colors.greyLight75}`,
  width: '100%',
  height: '100%',
  left: '0rem',
  top: '0rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
};

export interface ModalProps {
  /**
   * id of modal container. Used for accessibility naming scheme
   */
  id: string;
  children: ReactNode;
  /**
   * boolean value on whether or not to show the modal
   */
  showModal: boolean;
  /**
   * function that allows us to pass a bool value to set showModal
   */
  handleOnClose: () => void;
  /**
   * Allows the modal to be closed by clicking out of the overlay. default = true.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Allows the modal to be closed by clicking the ESC key. default = true.
   */
  shouldCloseOnEsc?: boolean;
  width?: string;
}

export const Modal = ({
  id,
  showModal,
  handleOnClose,
  children,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  width,
}: ModalProps) => {
  const { titleId, contentId } = generateAriaDescriptors(id);
  return (
    <StyledReactModal
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      id={id}
      aria={{
        modal: 'true',
        labelledby: titleId,
        describedby: contentId,
      }}
      onRequestClose={handleOnClose}
      isOpen={showModal}
      style={{
        overlay: overlayStyles,
      }}
      width={width}
    >
      {children}
    </StyledReactModal>
  );
};
