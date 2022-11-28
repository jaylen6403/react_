import ReactModal, { Styles } from 'react-modal';
import { LumaIcon } from '../LumaIcon';
import { CloseButton } from './LumaModal.styles';

export interface LumaModalProps {
  /**
   * Modal's content
   */
  children: React.ReactNode;
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * App's root element (for setting aria-hidden)
   */
  appElement: string | HTMLElement;
  /**
   * Callback fired after opening
   */
  onAfterOpen?: () => void;
  /**
   * Callback fired after closing
   */
  onAfterClose?: () => void;
  /**
   * Custom styling
   */
  style?: Styles;
  /**
   * Specifies whether to show the close button and its action
   */
  closeButton?: { show: boolean; handleClose: () => void };
}

export function LumaModal({
  children,
  isOpen,
  appElement,
  onAfterOpen,
  onAfterClose,
  style,
  closeButton = {
    show: false,
    handleClose: function (): void {
      throw new Error('Function not implemented.');
    },
  },
}: LumaModalProps) {
  const customStyles: Styles = {
    content: {
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'inherit',
      textAlign: 'center',
      inset: '20% auto auto 50%',
      background: '#f4f6f8',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    overlay: {
      zIndex: '2',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
  };
  if (!style) {
    style = { content: {}, overlay: {} };
  }
  style.content = { ...customStyles.content, ...style.content };
  style.overlay = { ...customStyles.overlay, ...style.overlay };

  ReactModal.setAppElement(appElement);

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      style={style}
    >
      {closeButton.show && (
        <CloseButton data-testid="modal-close">
          <LumaIcon iconCode="times" onClick={closeButton.handleClose} />
        </CloseButton>
      )}
      {children}
    </ReactModal>
  );
}
