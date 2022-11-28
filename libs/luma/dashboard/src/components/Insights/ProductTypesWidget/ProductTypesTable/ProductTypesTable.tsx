import { LumaTable } from '../../../LumaTable';
import { Cell, CurrencyChip, ReturnTypeCell } from './ProductTypesTable.styles';

type ProductTypesData = {
  DIGITAL: number;
  GROWTH: number;
  GROWTH_AND_INCOME: number;
  INCOME: number;
};

interface Props {
  data: ProductTypesData;
}

export const ProductTypesTable = ({ data }: Props) => {
  const headers = ['Return Type', 'Notional'];

  const productTypesRows = [
    [
      <Cell key={headers[0]}>{headers[0]}</Cell>,
      <Cell key={headers[1]}>
        {headers[1]}
        <CurrencyChip>USD</CurrencyChip>
      </Cell>,
    ],
    [
      <ReturnTypeCell key="growth" color="primary80">
        Growth
      </ReturnTypeCell>,
      <Cell key={data.GROWTH}>${data.GROWTH.toLocaleString('en')}</Cell>,
    ],
    [
      <ReturnTypeCell key="income" color="primary60">
        Income
      </ReturnTypeCell>,
      <Cell key={data.INCOME}>${data.INCOME.toLocaleString('en')}</Cell>,
    ],
    [
      <ReturnTypeCell key="growthAndIncome" color="primary40">
        Growth and Income
      </ReturnTypeCell>,
      <Cell key={data.GROWTH_AND_INCOME}>
        ${data.GROWTH_AND_INCOME.toLocaleString('en')}
      </Cell>,
    ],
    [
      <ReturnTypeCell key="digital" color="primary20">
        Digital
      </ReturnTypeCell>,
      <Cell key={data.DIGITAL}>${data.DIGITAL.toLocaleString('en')}</Cell>,
    ],
  ];

  return <LumaTable mobileColumns={2} link={[]} tableData={productTypesRows} />;
};
