import { Dispatch, SetStateAction } from 'react';
import {
  initialCashValues,
  initialPhysicalValues,
  Underlier,
} from './modalUtils';

interface FormStatus {
  allValuesFilled: boolean;
  atLeastOneValueFilled: boolean;
  noValuesFilled: boolean;
}

interface Props {
  allValuesFilled: boolean;
  noValuesFilled: boolean;
  setFormsStatus: Dispatch<SetStateAction<FormStatus>>;
  formsStatus: FormStatus;
}

export const formsFilledCheck = ({
  allValuesFilled,
  noValuesFilled,
  setFormsStatus,
  formsStatus,
}: Props) => {
  if (noValuesFilled) {
    setFormsStatus({
      ...formsStatus,
      noValuesFilled: true,
      allValuesFilled: false,
      atLeastOneValueFilled: false,
    });
  } else if (allValuesFilled) {
    setFormsStatus({
      ...formsStatus,
      allValuesFilled: true,
      noValuesFilled: false,
      atLeastOneValueFilled: false,
    });
  } else {
    setFormsStatus({
      ...formsStatus,
      atLeastOneValueFilled: true,
      allValuesFilled: false,
      noValuesFilled: false,
    });
  }
  return formsStatus;
};

export interface FormButtonValidation {
  allButtonsDisabled: boolean;
  canReview: boolean;
  canConfirm: boolean;
  canNotConfirm: boolean;
}

export const validateButtonsCashForm = (
  values: initialCashValues
): FormButtonValidation => {
  const transformedValues = {
    Confirmed: Number(values.Confirmed),
    Luma: Number(values.Luma),
    Issuer: Number(values.Issuer),
  };
  const allButtonsDisabled = false;
  const canReview = Boolean(
    !values.Confirmed &&
      (values.Issuer || values.Luma) &&
      values.Issuer !== values.Luma
  );
  const canConfirm = Boolean(
    values.Confirmed ||
      (values.Issuer && values.Luma && values.Issuer === values.Luma)
  );
  const canNotConfirm = Boolean(
    !transformedValues.Confirmed &&
      !transformedValues.Luma &&
      !transformedValues.Issuer
  );

  return {
    allButtonsDisabled: allButtonsDisabled,
    canReview: canReview,
    canConfirm: canConfirm,
    canNotConfirm: canNotConfirm,
  };
};

export const validateButtonsPhysicalForm = (
  values: initialPhysicalValues,
  selectedUnderlier: Underlier
): FormButtonValidation => {
  const transformedValues = {
    lumaShares: Number(values.lumaShares),
    issuerShares: Number(values.issuerShares),
    confirmedShares: Number(values.confirmedShares),
    lumaCash: Number(values.lumaCash),
    issuerCash: Number(values.issuerCash),
    confirmedCash: Number(values.confirmedCash),
  };
  const allButtonsDisabled = !selectedUnderlier.display;

  //Can confirm if confirmed shares exist, or luma/issuer values are the same
  const canConfirm =
    Boolean(transformedValues.confirmedShares) ||
    Boolean(
      (transformedValues.lumaShares || transformedValues.lumaCash) &&
        transformedValues?.lumaShares === transformedValues?.issuerShares &&
        transformedValues?.lumaCash === transformedValues?.issuerCash
    );

  let canReview = false;
  if (canConfirm) canReview = false;
  else {
    canReview = Boolean(
      transformedValues.lumaShares ||
        transformedValues.lumaCash ||
        transformedValues.issuerShares ||
        transformedValues.issuerCash
    );
  }

  const canNotConfirm =
    !transformedValues.lumaShares &&
    !transformedValues.issuerShares &&
    !transformedValues.confirmedShares &&
    !transformedValues.lumaCash &&
    !transformedValues.issuerCash &&
    !transformedValues.confirmedCash;

  return {
    allButtonsDisabled: allButtonsDisabled,
    canReview: canReview,
    canConfirm: canConfirm,
    canNotConfirm: canNotConfirm,
  };
};
