import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { SecondaryOrder } from '@luma-fe-workspace/redux';
import { OrderResponseButton } from '../OrderResponseButton/OrderResponseButton';

export const getOrderBlotterColumns = (userName: string | undefined) => {
  if (!userName) return;
  const baseColumns: ColDef[] = [
    {
      field: 'orderId',
      colId: 'orderId',
      headerName: 'Order ID',
      filter: false,
      sortable: true,
    },
    {
      field: 'status',
      sortable: true,
      cellRenderer: OrderResponseButton,
      cellRendererParams: (e: ICellRendererParams) => {
        return {
          order: e.data,
        };
      },
    },
    {
      headerName: 'CUSIP/ISIN',
      field: 'productIdentifier.securityIdentifierValue',
      colId: 'productIdentifier.securityIdentifierValue',
      sortable: true,
    },
    {
      headerName: 'Side',
      field: 'side',
      sortable: true,
      cellStyle: () => {
        return {
          textTransform: 'capitalize',
        };
      },
    },
    { field: 'quantity', sortable: true },
    {
      field: 'price',
      resizable: false,
      maxWidth: 92,
      sortable: true,
    },
    {
      headerName: 'Counterparty',
      cellRenderer: (e: ICellRendererParams) => {
        const rowData: SecondaryOrder = e.data;
        const isLT = userName === rowData.associatedUserIds?.liquidityTaker;
        return (
          <span>
            {isLT
              ? rowData.associatedUserIds?.liquidityProvider
              : rowData.associatedUserIds?.liquidityTaker}
          </span>
        );
      },
    },
    { field: 'Yield' },
    { field: 'YTW' },
    {
      field: 'Description',
      headerClass: 'row-header-left-align',
      cellStyle: () => {
        return {
          display: 'block',
          padding: '0.5rem 0.75rem',
        };
      },
    },
    { field: 'Maturity' },
    { field: 'Type' },
    { field: 'Par Value' },
    { field: 'Principal' },
    { field: 'Interest' },
    { field: 'Net Money' },
    { field: 'Settlement' },
  ];
  return baseColumns;
};
