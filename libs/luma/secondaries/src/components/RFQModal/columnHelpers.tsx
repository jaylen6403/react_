import {
  colors,
  TableCellDropdown,
  TableCellDropdownProps,
} from '@luma-fe-workspace/design-system';
import {
  CellClassParams,
  ColDef,
  EditableCallbackParams,
  GridApi,
  ICellRendererParams,
  NewValueParams,
} from 'ag-grid-community';

export const getRFQModalColumns = (
  handleCUSIPEntry: (e: NewValueParams) => void,
  handleRFQCount: (api: GridApi) => void
) => {
  const baseColumns: ColDef[] = [
    {
      field: '#',
      sortable: true,
      resizable: false,
      maxWidth: 40,
      cellRenderer: (e: ICellRendererParams) => {
        return <span>{e.rowIndex + 1}</span>;
      },
    },
    {
      field: 'CUSIP/ISIN',
      colId: 'cusip',
      width: 100,
      editable: true,
      onCellValueChanged: (e: NewValueParams) => {
        if (e.node) {
          handleCUSIPEntry(e);
        }
      },
      cellStyle: (e: CellClassParams) => {
        if (e.data.description === 'Invalid CUSIP') {
          return {
            border: `0.0625rem solid ${colors.redDarker}`,
          };
        } else {
          return {
            border: `0.0625rem solid ${colors.greyLight}`,
          };
        }
      },
    },
    {
      field: 'description',
      colId: 'description',
      width: 133,
      resizable: true,
      headerClass: 'row-header-left-align',
      cellStyle: (e: CellClassParams) => {
        if (e.value === 'Invalid CUSIP') {
          return {
            color: colors.red,
            display: 'flex',
            padding: '0.5rem 0.75rem',
          };
        } else {
          return {
            color: colors.greyMedium,
            display: 'block',
            padding: '0.5rem 0.75rem',
          };
        }
      },
    },
    {
      field: 'side',
      width: 112,

      cellRendererSelector: (e: ICellRendererParams) => {
        if (e.data.productId) {
          const dropdownProps: TableCellDropdownProps = {
            value: e.value === 'BWIC' ? 'Bid Wanted' : 'Offer Wanted',
            displayColor: colors.greyLight,
            items: [
              {
                display: 'Bid Wanted',
                onClick: () => (e.setValue ? e.setValue('BWIC') : null),
              },
              {
                display: 'Offer Wanted',
                onClick: () => (e.setValue ? e.setValue('OWIC') : null),
              },
            ],
          };
          return { component: TableCellDropdown, params: dropdownProps };
        } else {
          return {
            component: () => {
              return null;
            },
          };
        }
      },
    },
    {
      field: 'quantity',
      colId: 'quantity',
      width: 90,
      editable: (e: EditableCallbackParams) => !!e.data.productId,

      cellRenderer: (e: ICellRendererParams) => {
        if (e.data.productId && !e.value) {
          return <span style={{ color: colors.greyLight }}>Enter</span>;
        } else {
          return <span>{e.value}</span>;
        }
      },
      cellStyle: (e: CellClassParams) => {
        if (e.data.productId) {
          return {
            border: `0.0625rem solid ${colors.greyLight}`,
            color: colors.blue,
          };
        } else {
          return {
            border: `0.03125rem solid ${colors.greyLight}`,
            color: colors.blue,
          };
        }
      },
      onCellValueChanged: (e: NewValueParams) => {
        if (e.api) {
          handleRFQCount(e.api);
        }
      },
    },
    {
      field: 'settlement',
      width: 108,
      editable: (e: EditableCallbackParams) => !!e.data.productId,
      cellRenderer: (e: ICellRendererParams) => {
        if (e.data.productId) {
          return <span>{new Date(e.value).toLocaleDateString()}</span>;
        }
        return null;
      },
    },
  ];
  return baseColumns;
};
