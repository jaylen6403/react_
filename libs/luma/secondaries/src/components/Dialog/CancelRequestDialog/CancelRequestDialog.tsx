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
   * Setter function to set showDialog
   */
  setShowDialog: (isOpen: boolean) => void;
  /**
   * Description of dialog action used to provide more information to user
   */
  description: string;
}

export const CancelRequestDialog = ({
  id,
  showDialog,
  setShowDialog,
  onDelete,
  parentId,
  description,
  title,
  deleteText,
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
      {/* To do: Add functionality to show the number of bids. in the dialog Description. */}
      <DialogDescription id={contentId}>{description}</DialogDescription>
      <DialogActions>
        <DialogButton variant="secondary" onClick={handleOnClose}>
          NO
        </DialogButton>
        <DialogButton
          variant="delete"
          onClick={(e) => {
            handleOnSubmit(e);
            handleOnClose();
          }}
        >
          {deleteText}
        </DialogButton>
      </DialogActions>
    </Dialog>
  );
};
