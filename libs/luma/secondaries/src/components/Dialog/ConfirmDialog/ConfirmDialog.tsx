import {
  DialogActions,
  DialogButton,
  DialogDescription,
  DialogTitle,
} from '../Dialog.styles';
import { Dialog, DialogProps, generateAriaDialogRequirements } from '../Dialog';
import { MouseEventHandler } from 'react';

interface Props extends DialogProps {
  /**
   * Functionality provided on Confirm button clicked
   */
  onDelete: () => void;
  /**
   * Delete button text
   */
  deleteText: string;
  /**
   * Title used to grab the user's attention and quickly indicate what the dialog is for
   */
  title: string;
  /**
   * setter function to set showDialog
   */
  setShowDialog: (isOpen: boolean) => void;
  /**
   * Description of dialog action used to provide more information to user
   */
  description?: string;
}

export const ConfirmDialog = ({
  id,
  showDialog,
  setShowDialog,
  title,
  description,
  deleteText,
  onDelete,
  parentId,
}: Props) => {
  const handleOnClose = () => setShowDialog(false);
  const handleOnSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onDelete();
  };
  const { titleId, contentId } = generateAriaDialogRequirements(id);
  return (
    <Dialog
      parentId={parentId}
      id={id}
      showDialog={showDialog}
      handleOnClose={handleOnClose}
    >
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <DialogDescription id={contentId}>{description}</DialogDescription>
      <DialogActions>
        <DialogButton variant="secondary" onClick={handleOnClose}>
          CANCEL
        </DialogButton>
        <DialogButton variant="delete" onClick={handleOnSubmit}>
          {deleteText}
        </DialogButton>
      </DialogActions>
    </Dialog>
  );
};
