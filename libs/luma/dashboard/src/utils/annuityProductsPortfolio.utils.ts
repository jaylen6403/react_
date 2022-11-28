import { ColDef } from 'ag-grid-community';
import { LifecycleProduct } from '@luma-fe-workspace/redux';
import { colors } from '@luma-fe-workspace/design-system';

type AnnuitySum = {
  count: number;
  totalSum: number;
};

type emptySum = {
  count: number;
  totalSum: string;
};

export type AnnuitySums = {
  'fixed index': AnnuitySum;
  'fixed rate': AnnuitySum;
  variable: AnnuitySum;
  'reg. index': AnnuitySum;
  'income*': emptySum;
};

export const annuityDefault: AnnuitySums = {
  'fixed index': { count: 0, totalSum: 0 },
  'fixed rate': { count: 0, totalSum: 0 },
  variable: { count: 0, totalSum: 0 },
  'reg. index': { count: 0, totalSum: 0 },
  'income*': { count: 0, totalSum: '--' },
};

export const policyAcctValues = (data: LifecycleProduct[]): AnnuitySums => {
  if (!data) {
    return annuityDefault;
  }

  const acctValues = data.reduce((acc: AnnuitySums, cur: LifecycleProduct) => {
    const productType = cur?.productType?.toLowerCase();

    if (productType === 'fixed indexed annuity' && cur.accountValue) {
      const totalFixedIndexCount = acc['fixed index'].count + 1;
      const totalFixedIndexValue =
        acc['fixed index'].totalSum + cur.accountValue;
      return {
        ...acc,
        'fixed index': {
          count: totalFixedIndexCount,
          totalSum: totalFixedIndexValue,
        },
      };
    }
    if (productType === 'fixed annuity products' && cur.accountValue) {
      const totalFixedIndexCount = acc['fixed rate'].count + 1;
      const totalFixedIndexValue =
        acc['fixed rate'].totalSum + cur.accountValue;
      return {
        ...acc,
        'fixed rate': {
          count: totalFixedIndexCount,
          totalSum: totalFixedIndexValue,
        },
      };
    }
    if (productType === 'variable annuity products' && cur.accountValue) {
      const totalFixedIndexCount = acc.variable.count + 1;
      const totalFixedIndexValue = acc.variable.totalSum + cur.accountValue;
      return {
        ...acc,
        variable: {
          count: totalFixedIndexCount,
          totalSum: totalFixedIndexValue,
        },
      };
    }
    if (
      (productType === 'registered index annuity' ||
        productType === 'index variable annuity') &&
      cur.accountValue
    ) {
      const totalFixedIndexCount = acc['reg. index'].count + 1;
      const totalFixedIndexValue =
        acc['reg. index'].totalSum + cur.accountValue;
      return {
        ...acc,
        'reg. index': {
          count: totalFixedIndexCount,
          totalSum: totalFixedIndexValue,
        },
      };
    }
    if (
      (productType === 'variable immediate annuity' ||
        productType === 'fixed immediate annuity') &&
      cur.accountValue
    ) {
      const totalFixedIndexCount = acc['income*'].count + 1;
      const totalFixedIndexValue = acc['income*'].totalSum;
      return {
        ...acc,
        'income*': {
          count: totalFixedIndexCount,
          totalSum: totalFixedIndexValue,
        },
      };
    }

    return acc;
  }, annuityDefault);
  return acctValues;
};

export const annuityTableColumnData: ColDef[] = [
  {
    field: 'Type',
    cellStyle: (params) => {
      if (params.value === 'fixed index') {
        return {
          borderLeft: `0.5rem ${colors.accent90} solid`,
        };
      }
      if (params.value === 'fixed rate') {
        return {
          borderLeft: `0.5rem ${colors.accent70} solid`,
        };
      }
      if (params.value === 'variable') {
        return {
          borderLeft: `0.5rem ${colors.accent50} solid`,
        };
      }
      if (params.value === 'reg. index') {
        return {
          borderLeft: `0.5rem ${colors.accent40} solid`,
        };
      }
      if (params.value === 'income*') {
        return {
          borderLeft: `0.5rem ${colors.accent20} solid`,
        };
      }
      return;
    },
  },
  {
    field: 'Policies',
    cellStyle: { justifyContent: 'flex-end' },
    headerClass: 'ag-right-aligned-header',
  },
  {
    field: 'Acct Value',
    cellStyle: { justifyContent: 'flex-end' },
    headerClass: 'ag-right-aligned-header',
  },
];
