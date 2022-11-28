import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

import { Modal } from '@luma-fe-workspace/design-system';
import { CashForm } from './CashForm';
import { PhysicalForm } from './PhysicalForm';
import { IssuerLogo } from '../AGGridTable/AGGridTableComponents.style';
import { bofaLogo } from '../../utils/constants';
import {
  ModalContainer,
  ModalSubTitle,
  CloseButton,
  CloseIcon,
  TopElementsWrapper,
  ToggleButtons,
  ToggleWrapper,
} from './EventConfirmationModal.styles';
import { useEventConfirmationOptions } from '../../utils/hooks/useEventConfirmationOptions';
import { EventTypesDisplay, formatEventType } from '../../utils/gridUtils';

interface Props {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

// using an enum instead of boolean incase there are more later
enum SettlementTypes {
  CASH = 0,
  PHYSICAL = 1,
}

export enum Statuses {
  CONFIRMED = 'CONFIRMED',
  REQUIRES_RESOLUTION = 'REQUIRES_RESOLUTION',
  NOT_CONFIRMED = 'NOT_CONFIRMED',
  NOT_SET = '',
}

export const EventConfirmationModal = ({ modalOpen, setModalOpen }: Props) => {
  const { opsModal } = useEventConfirmationOptions();
  const [modalToggle, setModalToggle] = useState<SettlementTypes>(
    SettlementTypes.CASH
  );

  const eventType = useMemo(
    () => formatEventType(opsModal.data?.eventType) || '',
    [opsModal.data]
  );

  const cashOnly = useMemo(
    () =>
      opsModal.data?.settlementType === 'CASH' ||
      (opsModal.data?.settlementType === 'PHYSICAL' &&
        eventType !== EventTypesDisplay.MATURITY),
    [opsModal.data, eventType]
  );

  useEffect(() => {
    if (
      opsModal.data &&
      opsModal.data?.settlementType === 'PHYSICAL' &&
      eventType === EventTypesDisplay.MATURITY
    ) {
      setModalToggle(SettlementTypes.PHYSICAL);
    } else {
      setModalToggle(SettlementTypes.CASH);
    }
  }, [opsModal.data, eventType]);

  return opsModal.data ? (
    <Modal
      isOpen={modalOpen}
      background={'transparent'}
      position={'absolute'}
      top={'0%'}
    >
      <ModalContainer cashOnly={cashOnly}>
        <TopElementsWrapper>
          <IssuerLogo
            src={bofaLogo}
            alt={opsModal.data?.issuer}
            height={'2rem'}
          />
          <CloseButton
            onClick={() => {
              setModalOpen(false);
              opsModal.setData(undefined);
            }}
          >
            <CloseIcon iconCode="xmark" />
          </CloseButton>
        </TopElementsWrapper>
        <ModalSubTitle>{opsModal.data?.structureNameInternal}</ModalSubTitle>
        {cashOnly ? null : (
          <ToggleWrapper>
            <ToggleButtons
              isSelected={modalToggle === SettlementTypes.CASH}
              onClick={() => setModalToggle(SettlementTypes.CASH)}
            >
              Cash
            </ToggleButtons>
            <ToggleButtons
              isSelected={modalToggle === SettlementTypes.PHYSICAL}
              onClick={() => setModalToggle(SettlementTypes.PHYSICAL)}
            >
              Physical
            </ToggleButtons>
          </ToggleWrapper>
        )}

        {modalToggle === SettlementTypes.CASH ? (
          <CashForm cashOnly={cashOnly} eventType={eventType} />
        ) : (
          <PhysicalForm eventType={eventType} />
        )}
      </ModalContainer>
    </Modal>
  ) : null;
};
