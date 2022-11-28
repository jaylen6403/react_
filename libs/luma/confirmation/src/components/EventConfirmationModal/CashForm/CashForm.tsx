import { useState, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';

import { ButtonsComponent } from '../ButtonsComponent';
import { Statuses } from '../EventConfirmationModal';
import {
  FormButtonValidation,
  validateButtonsCashForm,
} from '../../../utils/formValidators';
import { useUpdateEventProductDataUsingPutMutation } from '@luma-fe-workspace/redux';
import { getCashSettlementValues } from '../../../utils/modalUtils';

import {
  Input,
  LabelText,
  Form,
  InputWrapper,
  ContentWrapper,
  ButtonContainer,
} from './CashForm.style';
import {
  EventProductData,
  useCreateEventConfirmationListUsingGetQuery,
} from '@luma-fe-workspace/redux';
import {
  useEventConfirmationOptions,
  StatusOptions,
} from '../../../utils/hooks/useEventConfirmationOptions';
import { EventTypesDisplay } from '../../../utils/gridUtils';

interface Props {
  cashOnly: boolean;
  eventType: EventTypesDisplay | '';
}

export const CashForm = ({ eventType, cashOnly }: Props) => {
  const { opsModal, toastData } = useEventConfirmationOptions();
  const [confirmationStatus, setConfirmationStatus] = useState<Statuses>(
    Statuses.NOT_SET
  );
  const [buttonValidation, setButtonValidation] =
    useState<FormButtonValidation>({
      allButtonsDisabled: true,
      canReview: false,
      canConfirm: false,
      canNotConfirm: false,
    });

  const [submitRates, { status }] = useUpdateEventProductDataUsingPutMutation();
  const { refetch: eventsRefetch } =
    useCreateEventConfirmationListUsingGetQuery();

  const initialValues = useMemo(
    () => ({
      Luma: opsModal.data?.cashSettlementRates?.lumaRate ?? '',
      Issuer: opsModal.data?.cashSettlementRates?.issuerRate ?? '',
      Confirmed: opsModal.data?.cashSettlementRates?.rate ?? '',
    }),
    [opsModal]
  );

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (formValues) => {
      const dataToSubmit: EventProductData | undefined = structuredClone(
        opsModal.data
      );
      if (!dataToSubmit) return;
      dataToSubmit.cashSettlementRates = getCashSettlementValues(formValues);
      dataToSubmit.confirmationStatus = confirmationStatus;
      dataToSubmit.settlementType = 'CASH';
      if (
        formValues.Confirmed ||
        (formValues.Luma &&
          formValues.Issuer &&
          formValues.Luma === formValues.Issuer)
      ) {
        if (!formValues.Confirmed) {
          if (dataToSubmit?.cashSettlementRates) {
            dataToSubmit.cashSettlementRates.rate = Number(formValues.Luma);
          }
        }
      }
      await submitRates({ eventProductData: dataToSubmit });
      eventsRefetch();
      opsModal.setOpen(false);
      formik.resetForm();
    },
  });

  useEffect(() => {
    toastData.setOpen(true);

    if (status === 'fulfilled') {
      toastData.setStatus(StatusOptions.Success);
    } else if (status === 'rejected') {
      toastData.setStatus(StatusOptions.Failure);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (!opsModal.isOpen) {
      formik.resetForm({
        values: initialValues,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opsModal.data]);

  useEffect(() => {
    setButtonValidation(validateButtonsCashForm(formik.values));
  }, [formik.values]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ContentWrapper cashOnly={cashOnly}>
        <InputWrapper>
          <LabelText htmlFor="Luma">Luma</LabelText>
          <Input
            id="Luma"
            name="Luma"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.Luma}
            placeholder="Enter Percentage…"
          />
        </InputWrapper>
        <InputWrapper>
          <LabelText htmlFor="Issuer">Issuer</LabelText>
          <Input
            id="Issuer"
            name="Issuer"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.Issuer}
            placeholder="Enter Percentage…"
          />
        </InputWrapper>
        <InputWrapper>
          <LabelText htmlFor="Confirmed">Confirmed</LabelText>
          <Input
            id="Confirmed"
            name="Confirmed"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.Confirmed}
            placeholder="Enter Percentage…"
          />
        </InputWrapper>
      </ContentWrapper>
      <ButtonContainer>
        <ButtonsComponent
          setConfirmationStatus={setConfirmationStatus}
          eventType={eventType}
          buttonValidation={buttonValidation}
        />
      </ButtonContainer>
    </Form>
  );
};
