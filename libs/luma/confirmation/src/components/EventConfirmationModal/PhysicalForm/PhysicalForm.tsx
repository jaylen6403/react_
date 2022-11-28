import { useState, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { ButtonsComponent } from '../ButtonsComponent';
import { Statuses } from '../EventConfirmationModal';
import {
  FormButtonValidation,
  validateButtonsPhysicalForm,
} from '../../../utils/formValidators';
import { UnderlierDropdown } from './UnderlierDropdown';
import {
  EventProductData,
  useUpdateEventProductDataUsingPutMutation,
  useCreateEventConfirmationListUsingGetQuery,
} from '@luma-fe-workspace/redux';
import {
  handlePhysicalConfirmationStatus,
  preselectedUnderlier,
  getPhysicalSettlementValues,
  valueSelector,
  Underlier,
} from '../../../utils/modalUtils';
import {
  Input,
  LabelText,
  Form,
  InputWrapper,
  ContentWrapper,
  ButtonContainer,
} from './PhysicalForm.style';
import {
  useEventConfirmationOptions,
  StatusOptions,
} from '../../../utils/hooks/useEventConfirmationOptions';
import { EventTypesDisplay } from '../../../utils/gridUtils';

interface Props {
  eventType: EventTypesDisplay | '';
}

export const PhysicalForm = ({ eventType }: Props) => {
  const { opsModal, toastData } = useEventConfirmationOptions();
  const [confirmationStatus, setConfirmationStatus] = useState<Statuses>(
    Statuses.NOT_SET
  );

  const [shareValues, cashValues] = opsModal.data?.physicalSettlements
    ? [
        valueSelector(opsModal.data?.physicalSettlements, 'Shares'),
        valueSelector(opsModal.data?.physicalSettlements, 'Cash in Lieu'),
      ]
    : [null, null];
  const [selectedUnderlier, setSelectedUnderlier] = useState<Underlier>(
    preselectedUnderlier(shareValues?.securityId, opsModal.data?.underlierList)
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
      lumaShares: shareValues?.lumaValue ?? '',
      issuerShares: shareValues?.issuerValue ?? '',
      confirmedShares: shareValues?.value ?? '',
      lumaCash: cashValues?.lumaValue ?? '',
      issuerCash: cashValues?.issuerValue ?? '',
      confirmedCash: cashValues?.value ?? '',
    }),
    [shareValues, cashValues]
  );
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (formValues) => {
      const modalDataSubmission: EventProductData = {
        ...opsModal.data,
      };

      modalDataSubmission.physicalSettlements = getPhysicalSettlementValues(
        formValues,
        selectedUnderlier,
        shareValues,
        cashValues
      );

      const finalSubmission = handlePhysicalConfirmationStatus(
        { ...modalDataSubmission },
        formValues,
        confirmationStatus
      );
      await submitRates({ eventProductData: finalSubmission });
      eventsRefetch();
      opsModal.setOpen(false);
      opsModal.setData(undefined);
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
      setSelectedUnderlier({
        display: '',
        value: { name: '', ticker: '', type: undefined },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opsModal.data]);

  useEffect(() => {
    setButtonValidation(
      validateButtonsPhysicalForm(formik.values, selectedUnderlier)
    );
  }, [formik.values, selectedUnderlier]);

  return (
    <>
      <UnderlierDropdown
        modalData={opsModal.data}
        selectedUnderlier={selectedUnderlier}
        setSelectedUnderlier={setSelectedUnderlier}
      />
      <Form onSubmit={formik.handleSubmit}>
        <ContentWrapper>
          <InputWrapper>
            <LabelText htmlFor="Luma">Luma</LabelText>
            <Input
              id="lumaShares"
              name="lumaShares"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.lumaShares}
              placeholder="Shares…"
            />
            <Input
              id="lumaCash"
              name="lumaCash"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.lumaCash}
              placeholder="Cash in Leiu…"
            />
          </InputWrapper>
          <InputWrapper>
            <LabelText htmlFor="Issuer">Issuer</LabelText>
            <Input
              id="issuerShares"
              name="issuerShares"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.issuerShares}
              placeholder="Shares…"
            />
            <Input
              id="issuerCash"
              name="issuerCash"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.issuerCash}
              placeholder="Cash in Leiu…"
            />
          </InputWrapper>
          <InputWrapper>
            <LabelText htmlFor="Confirmed">Confirmed</LabelText>
            <Input
              id="confirmedShares"
              name="confirmedShares"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.confirmedShares}
              placeholder="Shares…"
            />
            <Input
              id="confirmedCash"
              name="confirmedCash"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.confirmedCash}
              placeholder="Cash in Leiu…"
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
    </>
  );
};
