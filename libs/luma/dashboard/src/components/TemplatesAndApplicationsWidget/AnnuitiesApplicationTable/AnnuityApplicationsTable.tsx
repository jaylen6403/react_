import { OrderHistoryResponse } from '@luma-fe-workspace/redux';
import { LumaTable } from '../../LumaTable';
import { TemplateLinkFn } from '../../LumaTable';
import { annuityStatusCalc } from '../../../utils/AnnuityApplicationUtils';
import { viewAnnuityExpanded } from '../../../utils/links';
import {
  StackedCell,
  CarrierName,
  ProductName,
  UnderlierChip,
  TransactionDate,
  Cell,
  CellText,
  ChevronIcon,
  OverflowContainer,
  ClientWrapper,
} from './AnnuityApplicationsTable.styles';

interface Props {
  data: OrderHistoryResponse[];
}

export const AnnuityApplicationsTable = ({ data }: Props) => {
  const headers = ['Product', 'Client', 'Premium', 'Status', ''];

  const USDformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const buildAnnuityRow = (rowData: OrderHistoryResponse, idx: number) => {
    const firstInitial = rowData.clientFirstName?.charAt(0);
    const statusData = annuityStatusCalc(rowData);
    const premium = rowData?.premium ?? 0;

    const formattedPremium = USDformatter.format(premium);

    return [
      <Cell key={`${rowData.productName}-${rowData.carrierName}-${idx}`}>
        <StackedCell>
          <OverflowContainer>
            <CarrierName>{rowData.carrierName}</CarrierName>
          </OverflowContainer>
          <OverflowContainer>
            <ProductName>{rowData.productName}</ProductName>
          </OverflowContainer>
        </StackedCell>
      </Cell>,
      <Cell key={`${rowData.clientFirstName}-${idx}`}>
        <ClientWrapper>
          {firstInitial}. {rowData['clientLastName']}
        </ClientWrapper>
      </Cell>,
      <Cell key={`${rowData.premium}-${idx}`}>{formattedPremium}</Cell>,
      <Cell key={idx}>
        <StackedCell>
          <UnderlierChip color={statusData.color} margin="0">
            {statusData.status}
          </UnderlierChip>
          <TransactionDate>{statusData.date}</TransactionDate>
        </StackedCell>
      </Cell>,
      <Cell key={idx}>
        <CellText>{statusData.linkText}</CellText>
        <ChevronIcon iconCode="chevron-right" />
      </Cell>,
    ];
  };

  const headerArray = [
    headers.map((header, idx) => <Cell key={`header${idx}`}>{header}</Cell>),
  ];

  const annuityRows = data.reduce(
    (acc, cur, idx) => {
      return {
        rows: [...acc.rows, buildAnnuityRow(cur, idx)],
        links: [...acc.links, viewAnnuityExpanded(cur.reference)],
      };
    },
    { rows: headerArray as React.ReactNode[][], links: [] as TemplateLinkFn[] }
  );

  return (
    <LumaTable
      tableData={annuityRows.rows}
      link={annuityRows.links}
      mobileColumns={3}
      annuitiesTracker={true}
    />
  );
};
