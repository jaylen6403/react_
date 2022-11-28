import { SetStateAction } from 'react';
import { FormButtonValidation } from '../../../utils/formValidators';
import { EventTypesDisplay } from '../../../utils/gridUtils';
import { Statuses } from '../EventConfirmationModal';
import { ActionButtons } from './ButtonComponent.style';

interface Props {
  eventType: EventTypesDisplay | '';
  setConfirmationStatus: React.Dispatch<SetStateAction<Statuses>>;
  buttonValidation: FormButtonValidation;
}

export const ButtonsComponent = ({
  eventType,
  setConfirmationStatus,
  buttonValidation,
}: Props) => {
  const confirmations = {
    'Coupon Payment': {
      secondButton: 'Missed',
      thirdButton: 'Confirmed',
    },
    'Issuer Call': {
      secondButton: 'Not Called',
      thirdButton: 'Called',
    },
    'Auto Call': {
      secondButton: 'Not Called',
      thirdButton: 'Called',
    },
    Maturity: {
      secondButton: 'Not Matured',
      thirdButton: 'Matured',
    },
  };

  const confirmationObject = eventType ? confirmations[eventType] : null;

  if (confirmationObject && Object.keys(confirmationObject).length > 0) {
    return (
      <>
        <ActionButtons
          variant={'secondary'}
          disabled={
            buttonValidation.allButtonsDisabled || !buttonValidation.canReview
          }
          size="medium"
          type="submit"
          onClick={() => setConfirmationStatus(Statuses.REQUIRES_RESOLUTION)}
        >
          {'Review'}
        </ActionButtons>

        <ActionButtons
          variant={'secondary'}
          disabled={
            buttonValidation.allButtonsDisabled ||
            !buttonValidation.canNotConfirm
          }
          size="medium"
          type="submit"
          onClick={() => setConfirmationStatus(Statuses.NOT_CONFIRMED)}
        >
          {confirmationObject.secondButton}
        </ActionButtons>

        <ActionButtons
          variant={'primary'}
          disabled={
            buttonValidation.allButtonsDisabled || !buttonValidation.canConfirm
          }
          size="medium"
          type="submit"
          onClick={() => setConfirmationStatus(Statuses.CONFIRMED)}
        >
          {confirmationObject.thirdButton}
        </ActionButtons>
      </>
    );
  } else {
    return null;
  }
};
