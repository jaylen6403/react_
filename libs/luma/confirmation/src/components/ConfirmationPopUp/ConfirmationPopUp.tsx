import { Portal } from '@luma-fe-workspace/design-system';
import { useCallback, useEffect } from 'react';
import {
  useEventConfirmationOptions,
  StatusOptions,
} from '../../utils/hooks/useEventConfirmationOptions';
import {
  ConfirmationWrapper,
  CloseIconWrapper,
  CloseIcon,
  ConfirmationText,
  StatusText,
  ProductType,
  StatusIconWrapper,
  StatusIcon,
} from './ConfirmationPopUp.style';

type ConfirmationProps = {
  id?: string;
  closePopUp?: () => void;
  productStructure: string | undefined;
  successHeader: string;
  failureHeader: string;
};

export const ConfirmationPopUp = ({
  id,
  closePopUp = () => {
    /* do nothing */
  },
  productStructure,
  successHeader,
  failureHeader,
}: ConfirmationProps) => {
  const { toastData } = useEventConfirmationOptions();

  const animateCloseToast = useCallback(() => {
    /* this function allows for the animation to complete before the toast closes */
    toastData.setOpen(false);
    setTimeout(() => closePopUp(), 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closePopUp]);

  useEffect(() => {
    const timer = setTimeout(() => animateCloseToast(), 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastData]);

  return (
    <Portal id={id}>
      <ConfirmationWrapper status={toastData.status} onOpen={toastData.open}>
        <StatusIconWrapper>
          <StatusIcon
            prefix="fas"
            iconCode={
              toastData.status === StatusOptions.Success
                ? 'circle-check'
                : 'circle-exclamation'
            }
          />
        </StatusIconWrapper>
        <ConfirmationText>
          <StatusText>
            {toastData.status === StatusOptions.Success
              ? successHeader
              : failureHeader}
          </StatusText>
          <ProductType>{productStructure}</ProductType>
        </ConfirmationText>
        <CloseIconWrapper onClick={() => animateCloseToast()}>
          <CloseIcon iconCode="close" />
        </CloseIconWrapper>
      </ConfirmationWrapper>
    </Portal>
  );
};
