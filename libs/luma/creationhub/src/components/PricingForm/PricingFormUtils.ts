import {
  IssuerId,
  ParamName,
  ParamValue,
  Pricing,
  PricingState,
  Rfq,
  RfqTypeEnum,
} from '@luma-fe-workspace/redux';

export enum PricingFormVariants {
  NEW_PRICING = 'NEW_PRICING',
  PRICING = 'PRICING',
  RFQ = 'RFQ',
}

export enum PricingModes {
  Pricing = 'PRICING',
  Quoting = 'QUOTING',
}

export const Pending = 'Pending';
export const initialPricing: Pricing = {
  constraints: {},
  issuers: {},
  product: { params: {} },
  productLayout: { sections: [] },
  productValidationErrors: {},
  state: PricingState.InCreation,
};

export type RequestFormValuesType = Record<ParamName, ParamValue>;

export const SectionIcons: Record<string, string> = {
  coupon: 'file-invoice-dollar',
  distributiondetails: 'layer-group',
  earlyredemption: 'calendar',
  payoffatmaturity: 'money-check-edit-alt',
  productselections: 'balance-scale',
  schedule: 'calendar-alt',
};

export function isPricingEmpty(pricing: Pricing | Rfq) {
  return !Object.keys(pricing.product.params).length;
}

export function getFormValidationBody(
  values: RequestFormValuesType,
  modifiedParams: ParamName[]
) {
  return {
    pricingRequest: {
      product: { params: values, modifiedParams },
    },
  };
}

export function getFormSubmissionBody(
  values: RequestFormValuesType,
  issuers: IssuerId[],
  rfqType: RfqTypeEnum
) {
  return { pricingRequest: { product: { params: values }, issuers, rfqType } };
}

export function getDisplayedFormVariant({
  formVariant,
  displayedPricing,
}: {
  formVariant: PricingFormVariants;
  displayedPricing: Pricing | Rfq;
}) {
  if (formVariant === PricingFormVariants.RFQ) {
    return formVariant;
  }
  if (
    'state' in displayedPricing &&
    displayedPricing.state !== PricingState.InCreation
  ) {
    return PricingFormVariants.PRICING;
  }
  return PricingFormVariants.NEW_PRICING;
}

export const CloneLabel = 'Clone';
