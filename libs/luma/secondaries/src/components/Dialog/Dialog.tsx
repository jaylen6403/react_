import { StyledReactDialog } from './Dialog.styles';
import { ReactNode } from 'react';

export interface DialogProps {
  /**
   * ID used for accessibility. This id is used to generate title and content id's
   */
  id: string;
  /**
   * function that handles onClose event
   */
  handleOnClose: () => void;
  /**
   * Boolean value on whether to show Dialog
   */
  showDialog: boolean;
  /**
   * selector that returns the Parent of this. If not provided will be appended to #portals and then body.
   *   If parent is provided and position: 'relative' the dialog will render in the center of parent and
   *   forbids user to focus on any form elements within the parent
   */
  parentId?: string;
  /**
   * children will be embedded within Dialog
   */
  children?: ReactNode;
  /**
   * Should the dialog close by pressing Escape
   *   default = true, for accessibility compliance
   */
  shouldCloseOnEsc?: boolean;
}

export function generateAriaDialogRequirements(id: string) {
  return {
    titleId: `${id}_dialog_title`,
    contentId: `${id}_dialog_content`,
  };
}

export const Dialog = ({
  id,
  handleOnClose,
  showDialog,
  children,
  parentId = 'portals',
  shouldCloseOnEsc = true,
}: DialogProps) => {
  const { titleId, contentId } = generateAriaDialogRequirements(id);
  return (
    <StyledReactDialog
      id={id}
      onRequestClose={handleOnClose}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
      parentSelector={() => document.getElementById(parentId) || document.body}
      style={{
        overlay: {
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        },
      }}
      isOpen={showDialog}
      aria={{
        modal: 'false',
        labelledby: titleId,
        describedby: contentId,
      }}
    >
      {children}
    </StyledReactDialog>
  );
};
