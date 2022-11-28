import { colors } from '@luma-fe-workspace/design-system';
import { useEffect, useState } from 'react';
import { ModalSubTitle } from '../../Modal.styles';
import {
  ModalErrorIcon,
  ModalActionButton,
  ModalActions,
  ModalActionText,
  ModalError,
  RedCancelButton,
  ModalActionGroup,
} from '../ModalFooter.styles';

export interface ModalActionProp {
  onClick: () => void;
  text: string;
}

interface Props {
  /**
   * Submit ModalActionProp that describes the
   *   Primary Button on the right
   */
  submit: ModalActionProp;
  /**
   * DisableSubmit
   */
  disableSubmit?: boolean;
  /**
   * Error message to present on the footer
   */
  errorMessage?: string;
  /**
   * Submit ModalActionProp that describes the
   *   Secondary Button on the right next to submit
   */
  secondarySubmit?: ModalActionProp;
  /**
   * Reject ModalActionProp that describes the
   *   Red Cancel Button on the left
   */
  reject?: ModalActionProp;
  /**
   * Cancel ModalActionProp that describes the
   *   Secondary Button on the left side
   */
  cancel?: ModalActionProp;
  /**
   * Whether the errorMessage should be presented
   *   default = true
   */
  canHaveError?: boolean;
}

export const ActionModalFooter = ({
  cancel,
  submit,
  secondarySubmit,
  reject,
  errorMessage,
  canHaveError = true,
  disableSubmit,
}: Props) => {
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  useEffect(() => {
    const handleSubmitDisable = () => {
      if (disableSubmit) {
        setSubmitDisabled(true);
      } else if (disableSubmit === false) {
        setSubmitDisabled(false);
      } else if (canHaveError && errorMessage !== undefined) {
        setSubmitDisabled(true);
      } else {
        setSubmitDisabled(false);
      }
    };
    handleSubmitDisable();
  }, [canHaveError, disableSubmit, errorMessage]);

  return (
    <ModalActions>
      <ModalActionGroup>
        {reject ? (
          <RedCancelButton
            disabled={false}
            variant="secondary"
            onClick={reject.onClick}
          >
            {reject.text}
          </RedCancelButton>
        ) : null}
        {cancel ? (
          <ModalActionButton
            disabled={false}
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              cancel.onClick();
            }}
          >
            <ModalActionText>Cancel</ModalActionText>
          </ModalActionButton>
        ) : null}
      </ModalActionGroup>
      <ModalActionGroup>
        {canHaveError && errorMessage ? (
          <ModalSubTitle textColor={colors.redDarker}>
            <ModalError>
              {errorMessage}
              <ModalErrorIcon iconCode="times-circle" />
            </ModalError>
          </ModalSubTitle>
        ) : null}
        {secondarySubmit ? (
          <ModalActionButton
            disabled={false}
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              secondarySubmit.onClick();
            }}
          >
            <ModalActionText>{secondarySubmit.text}</ModalActionText>
          </ModalActionButton>
        ) : null}
        <ModalActionButton
          disabled={submitDisabled}
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            submit.onClick();
          }}
        >
          <ModalActionText>{submit.text}</ModalActionText>
        </ModalActionButton>
      </ModalActionGroup>
    </ModalActions>
  );
};
