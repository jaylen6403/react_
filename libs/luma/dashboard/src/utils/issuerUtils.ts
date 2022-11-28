import {
  ConversionRate,
  Currency,
  PortfolioV2,
} from '@luma-fe-workspace/redux';
import { ColDef } from 'ag-grid-community';
import { colors } from '@luma-fe-workspace/design-system';
import { getConversionRate } from '../components/PortfolioWidget/StructuredProducts/structuredProductsPortfolioUtils';

type IssuerSum = {
  count: number;
  notionalSum: number;
};

type IssuerSums = {
  [key: number | string]: IssuerSum;
};

type CurrencyMap = {
  [key: string]: { [key: string]: ConversionRate };
};

export const issuerTableColumnData: ColDef[] = [
  {
    field: 'Issuers',
    cellStyle: (params) => {
      if (params.rowIndex === 0) {
        return {
          borderLeft: `0.5rem ${colors.primary90} solid`,
        };
      }
      if (params.rowIndex === 1) {
        return {
          borderLeft: `0.5rem ${colors.primary80Daintree} solid`,
        };
      }
      if (params.rowIndex === 2) {
        return {
          borderLeft: `0.5rem ${colors.primary60} solid`,
        };
      }
      if (params.rowIndex === 3) {
        return {
          borderLeft: `0.5rem ${colors.primary40} solid`,
        };
      }
      if (params.rowIndex === 4) {
        return {
          borderLeft: `0.5rem ${colors.primary20} solid`,
        };
      }
      return;
    },
  },
  {
    field: 'Orders',
    cellStyle: { justifyContent: 'flex-end' },
    headerClass: 'ag-right-aligned-header',
  },
  {
    field: 'Notional',
    cellStyle: { justifyContent: 'flex-end' },
    headerClass: 'ag-right-aligned-header',
  },
];

export const getIssuer = (
  data: PortfolioV2[],
  selectedCurrency: string,
  currencyConversionData: Currency[]
): IssuerSums | null => {
  const { portfolioProducts } = data[0];
  if (!portfolioProducts) {
    return null;
  }
  const currencyConversionMap: CurrencyMap = currencyConversionData.reduce(
    (acc, cur) => {
      if (cur.conversionRates) {
        acc[cur.isoCode] = cur.conversionRates;
      }

      return acc;
    },
    {} as CurrencyMap
  );
  return portfolioProducts.reduce((acc, cur) => {
    const { currency } = cur;
    const conversionRate = getConversionRate(
      currency || '',
      selectedCurrency,
      currencyConversionMap
    );
    if (cur.issuer) {
      const notionalSum = cur.orders?.reduce((preVal, currVal) => {
        if (currVal.quantity) {
          return preVal + currVal?.quantity;
        }
        return preVal;
      }, 0);
      const issuerSum = notionalSum ? notionalSum * conversionRate : 0;
      const count = cur.orders?.length || 0;
      if (cur.issuer in acc) {
        return {
          ...acc,
          [cur.issuer]: {
            count: acc[cur.issuer].count + count,
            notionalSum: acc[cur.issuer].notionalSum + issuerSum,
          },
        };
      } else {
        return {
          ...acc,
          [cur.issuer]: {
            count: count,
            notionalSum: issuerSum,
          },
        };
      }
    }
    return acc;
  }, Object.create({} as IssuerSums));
};
