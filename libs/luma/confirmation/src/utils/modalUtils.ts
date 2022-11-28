import { MenuItemSingleType } from '@luma-fe-workspace/design-system';
import {
  CashSettlementRates,
  EventProductData,
  PhysicalSettlement,
  UnderlierRest,
} from '@luma-fe-workspace/redux';
import { Statuses } from '../components/EventConfirmationModal/EventConfirmationModal';

type DropdownUnderlier = 'BLOOMBERG' | 'RIC';

type PhysicalSettlementType = 'Shares' | 'Cash in Lieu';

type SecurityIdType = 'Bloomberg';

export type Underlier = MenuItemSingleType<UnderlierRest>;

export interface initialCashValues {
  Luma: string | number;
  Issuer: string | number;
  Confirmed: string | number;
}

export interface initialPhysicalValues {
  lumaShares: string | number;
  issuerShares: string | number;
  confirmedShares: string | number;
  lumaCash: string | number;
  issuerCash: string | number;
  confirmedCash: string | number;
}

export const titleCase = (word: DropdownUnderlier | undefined) => {
  if (word === 'BLOOMBERG') {
    return 'Bloomberg';
  }
  return word;
};

export const valueSelector = (
  physicalSettlementArray: PhysicalSettlement[] | undefined,
  valueType: 'Shares' | 'Cash in Lieu'
) =>
  physicalSettlementArray?.find(
    (physicalSettlement: PhysicalSettlement) =>
      physicalSettlement.physicalSettlementType === valueType
  );

export const preselectedUnderlier = (
  securityId: string | undefined,
  underlierArray: UnderlierRest[] | undefined
) => {
  if (securityId) {
    const selectedUnderlier = underlierArray?.find(
      (underlier: UnderlierRest) => underlier.ticker === securityId
    );
    return {
      display: selectedUnderlier?.ticker,
      value: {
        name: selectedUnderlier?.ticker,
        ticker: selectedUnderlier?.ticker,
        type: selectedUnderlier?.type,
      },
    };
  } else {
    return {
      display: '',
      value: { name: '', ticker: '', type: undefined },
    };
  }
};

export const getCashSettlementValues = (formValues: initialCashValues) => {
  const settlements: CashSettlementRates = {};
  settlements.issuerRate =
    formValues.Issuer !== '' ? Number(formValues.Issuer) : undefined;
  settlements.rate =
    formValues.Confirmed !== '' ? Number(formValues.Confirmed) : undefined;

  settlements.lumaRate =
    formValues.Luma !== '' ? Number(formValues.Luma) : undefined;
  return settlements;
};

export const getPhysicalSettlementValues = (
  formValues: initialPhysicalValues,
  selectedUnderlier: Underlier,
  shareValues: PhysicalSettlement | null | undefined,
  cashValues: PhysicalSettlement | null | undefined
) => [
  {
    recordId: shareValues?.recordId || undefined,
    physicalSettlementType: 'Shares' as PhysicalSettlementType,
    securityId: selectedUnderlier.value.ticker,
    securityIdType: titleCase(selectedUnderlier.value.type) as SecurityIdType,
    value:
      formValues.confirmedShares !== ''
        ? Number(formValues.confirmedShares)
        : undefined,
    issuerValue:
      formValues.issuerShares !== ''
        ? Number(formValues.issuerShares)
        : undefined,
    lumaValue:
      formValues.lumaShares !== '' ? Number(formValues.lumaShares) : undefined,
  },
  {
    recordId: cashValues?.recordId || undefined,
    physicalSettlementType: 'Cash in Lieu' as PhysicalSettlementType,
    securityId: cashValues?.securityId || undefined,
    securityIdType: cashValues?.securityIdType || undefined,
    value:
      formValues.confirmedCash !== ''
        ? Number(formValues.confirmedCash)
        : undefined,
    issuerValue:
      formValues.issuerCash !== '' ? Number(formValues.issuerCash) : undefined,
    lumaValue:
      formValues.lumaCash !== '' ? Number(formValues.lumaCash) : undefined,
  },
];

export const handlePhysicalConfirmationStatus = (
  modalDataSubmission: EventProductData,
  formValues: initialPhysicalValues,
  status: Statuses
) => {
  modalDataSubmission.confirmationStatus = status;

  const [shareValues, cashValues] = [
    valueSelector(modalDataSubmission?.physicalSettlements, 'Shares'),
    valueSelector(modalDataSubmission?.physicalSettlements, 'Cash in Lieu'),
  ];
  if (
    formValues?.confirmedShares ||
    ((formValues.lumaShares || formValues.lumaCash) &&
      (formValues.issuerShares || formValues.issuerCash) &&
      formValues?.lumaShares === formValues?.issuerShares &&
      formValues?.lumaCash === formValues?.issuerCash)
  ) {
    if (!formValues?.confirmedShares) {
      if (shareValues) {
        shareValues.value = Number(formValues.lumaShares);
      }
    }
    if (!formValues?.confirmedCash) {
      if (cashValues) {
        cashValues.value = Number(formValues.lumaCash);
      }
    }
  }
  if (shareValues && cashValues) {
    modalDataSubmission.physicalSettlements = [shareValues, cashValues];
  }
  return modalDataSubmission;
};
