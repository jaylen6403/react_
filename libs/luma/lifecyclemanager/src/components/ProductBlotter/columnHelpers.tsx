import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { productService } from '@luma-fe-workspace/redux';

export const productBlotterColumns: ColDef[] = [
  {
    field: 'productIdentifier',
    colId: 'productIdentifier',
    headerName: 'Product ID/Issuer',
    filter: false,
    sortable: true,
  },
  {
    field: 'structureType',
    colId: 'structureType',
    headerName: 'Structure Type',
    filter: true,
    sortable: true,
  },
  {
    field: 'documents',
    colId: 'documents',
    headerName: 'Documents',
    filter: true,
  },
  {
    field: 'markToMarket',
    colId: 'markToMarket',
    headerName: 'MTM',
    filter: true,
    sortable: true,
  },
  {
    field: 'CCY', // This means: Currency
    colId: 'CCY',
    headerName: 'CCY',
    filter: true,
  },
  {
    field: 'notional',
    colId: 'notional',
    headerName: 'Notional',
    resizable: false,
    sortable: true,
  },
  {
    field: 'totalHoldings',
    colId: 'totalHoldings',
    headerName: 'Total Holdings',
  },
  {
    field: 'timeToMaturity',
    colId: 'timeToMaturity',
    headerName: 'Time To Maturity',
  },
  {
    field: 'assetClass',
    colId: 'assetClass',
    headerName: 'Asset',
  },
  {
    field: 'activeUnderlier',
    colId: 'activeUnderlier',
    headerName: 'Underlier Performance',
  },
  {
    field: 'underlierList',
    colId: 'underlierList',
    headerName: 'Underliers',
    cellStyle: () => {
      return {
        display: 'flex',
        flexDirection: 'column',
      };
    },
    cellRenderer: (e: ICellRendererParams) => {
      const rowData: productService.LifecycleProduct = e.data;
      const underlierList: productService.Underlier[] | undefined =
        rowData.underlierList;
      if (!underlierList) return null;

      const uniqueUnderliers = [
        ...new Set(
          underlierList
            .map((underlier) => underlier?.source)
            .filter((underlier) => underlier !== undefined) as string[]
        ),
      ];

      return (
        <>
          {uniqueUnderliers.map((underlier) => (
            <span key={underlier}>{underlier}</span>
          ))}
        </>
      );
    },
  },
  {
    field: 'productStatus',
    colId: 'productStatus',
    headerName: 'Product Status',
  },
  {
    field: 'principalProximity',
    colId: 'principalProximity',
    headerName: 'Protection Proximity',
  },
  {
    field: 'nextEvent',
    colId: 'nextEvent',
    headerName: 'Next Event',
    cellStyle: () => {
      return {
        display: 'flex',
        flexDirection: 'column',
      };
    },
    cellRenderer: (e: ICellRendererParams) => {
      const rowData: productService.LifecycleProduct = e.data;
      const nextEvent: productService.PortfolioEventV2 | undefined =
        rowData.nextEvent;
      if (!nextEvent) return null;
      return (
        <>
          <span>{nextEvent.eventDate}</span>
          <span>{nextEvent.eventType}</span>
        </>
      );
    },
  },
  {
    field: 'returnType',
    colId: 'returnType',
    headerName: 'Return Type',
  },
];
