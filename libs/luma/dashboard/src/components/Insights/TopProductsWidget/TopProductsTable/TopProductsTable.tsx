import { LumaTable } from '../../../LumaTable';
import {
  Cell,
  CurrencyChip,
  OverflowContainer,
  UnderlierChip,
} from './TopProductsTable.styles';

export type TopProductsData = {
  currency?: string;
  cusip?: string;
  notional: number;
  structure: string;
  tenor: number;
  tenorUnit?: string;
  underliers: string[];
};

interface Props {
  data: TopProductsData[];
}

const nFormatter = (num: number) => {
  return `${(num / 1000000).toFixed(2)}M`;
};

const sortByNotional = (topProductsData: TopProductsData[]) => {
  const arrayToSort = [...topProductsData];
  return arrayToSort.sort((a: TopProductsData, b: TopProductsData) => {
    if (a.notional && b.notional) {
      return a.notional < b.notional ? 1 : -1;
    } else {
      return a.notional ? 1 : -1;
    }
  });
};

const createUnderlierChip = (content: string, index: number) => (
  <UnderlierChip key={`underlier-${index}`}>{content}</UnderlierChip>
);

const buildUnderliers = (underliers: string[] | undefined) => {
  const numberOfUnderliers = underliers?.length || '';

  if (underliers === undefined || underliers.length === 0) {
    return null;
  }
  if (underliers.length && numberOfUnderliers <= 4) {
    return underliers.map((underlier, i) => {
      return createUnderlierChip(underlier, i);
    });
  }
  if (underliers.length && numberOfUnderliers > 4) {
    const underlierArr = underliers.slice(0, 3).map((underlier, i) => {
      return createUnderlierChip(underlier, i);
    });

    return [
      ...underlierArr,
      createUnderlierChip(`+${underliers.length - 3} MORE`, 4),
    ];
  }
  return;
};

export const TopProductsTable = ({ data }: Props) => {
  const headers = [
    'Product ID',
    'Structure',
    'Underliers',
    'Tenor Yrs',
    'Notional',
  ];

  const sortedTableData = sortByNotional(data);

  const buildTopProductsRow = (rowData: TopProductsData, idx: number) => {
    return [
      <Cell key={`${rowData.cusip}-${idx}`}>{rowData.cusip}</Cell>,
      <Cell key={`${rowData.structure}-${idx}`}>
        <OverflowContainer>{rowData.structure}</OverflowContainer>
      </Cell>,
      <Cell key={`underliers-${idx + Math.random()}`}>
        {buildUnderliers(rowData.underliers)}
      </Cell>,
      <Cell key={`${rowData.tenor}-${idx}`}>
        {(Math.round(rowData.tenor * 10) / 10).toFixed(1)}
      </Cell>,
      <Cell key={`${rowData.notional}-${idx}`}>
        {nFormatter(rowData.notional)}
        <CurrencyChip>{rowData.currency}</CurrencyChip>
      </Cell>,
    ];
  };

  const headerArray = [
    headers.map((header, idx) => <Cell key={`header${idx}`}>{header}</Cell>),
  ];

  const topProductsRows = sortedTableData.reduce(
    (acc, cur, idx) => {
      return {
        rows: [...acc.rows, buildTopProductsRow(cur, idx)],
        links: [''],
      };
    },
    { rows: headerArray as React.ReactNode[][], links: [] as string[] }
  );

  return (
    <LumaTable mobileColumns={3} link={[]} tableData={topProductsRows.rows} />
  );
};
