import { ChangeEventHandler, MouseEvent, useState } from 'react';
import {
  DialogTitle,
  DialogActions,
  DialogInput,
  TextCounter,
  DialogContent,
  DialogButton,
  DialogHidden,
  DialogAriaAlert,
} from '../Dialog.styles';
import { Dialog, DialogProps, generateAriaDialogRequirements } from '../Dialog';

interface Props extends DialogProps {
  /**
   * Functionality provided on Submit button clicked
   */
  onSubmit: (event: MouseEvent | undefined) => void;
  /**
   * Submit button text
   */
  submitText: string;
  setShowDialog: (isOpen: boolean) => void;
  title: string;
  /**
   * setter function to set the data of the input field
   */
  setInputTarget: (newText: string) => void;
  /**
   * Input field character limit (maxLength)
   */
  limit?: number;
}

export const InputDialog = ({
  id,
  title,
  showDialog,
  setShowDialog,
  submitText,
  onSubmit,
  limit = 44,
  setInputTarget,
  parentId,
}: Props) => {
  const { titleId, contentId } = generateAriaDialogRequirements(id);
  const [counter, setCounter] = useState(0);
  const [inputHasError, setInputHasError] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setCounter(() => target.value.length);
    setInputTarget(target.value);
    if (limit < counter) setInputHasError(true);
    else if (inputHasError && limit >= counter) setInputHasError(false);

    if (target.value.length === 0) setCanSubmit(false);
    else if (!canSubmit) setCanSubmit(true);
  };
  const handleOnClose = () => setShowDialog(false);
  const handleOnSubmit = (e: MouseEvent) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <Dialog
      parentId={parentId}
      id={id}
      showDialog={showDialog}
      handleOnClose={handleOnClose}
    >
      <DialogHidden>
        <DialogAriaAlert aria-live="assertive" visible={limit === counter}>
          Max length of {limit} characters reached
        </DialogAriaAlert>
      </DialogHidden>
      <DialogTitle id={titleId}>{title}</DialogTitle>
      <DialogContent id={contentId}>
        <DialogInput
          onChange={onChange}
          hasError={inputHasError}
          disabled={false}
          placeholder="Enter"
          maxLength={limit}
        />
        <TextCounter aria-hidden="true">
          {counter}/{limit}
        </TextCounter>
      </DialogContent>
      <DialogActions>
        <DialogButton variant="secondary" onClick={handleOnClose}>
          CANCEL
        </DialogButton>
        <DialogButton
          variant="primary"
          disabled={inputHasError || !canSubmit}
          onClick={handleOnSubmit}
        >
          {submitText}
        </DialogButton>
      </DialogActions>
    </Dialog>
  );
};
