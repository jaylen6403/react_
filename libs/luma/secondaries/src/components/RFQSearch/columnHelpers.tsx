import {
  CellClassParams,
  ColDef,
  EditableCallbackParams,
  ICellRendererParams,
} from 'ag-grid-community';
import { RFQSearchQuoted } from '@luma-fe-workspace/redux';
import { DateHelper } from '@luma-fe-workspace/utility';
import { colors } from '@luma-fe-workspace/design-system';
import {
  TableCellTimeOffset,
  TableCellTimeOffsetProps,
} from '../TableCellTimeOffset/TableCellTimeOffset';
import {
  QuoteResponseButton,
  QuoteResponseButtonProps,
} from '../QuoteResponseButton/QuoteResponseButton';
import { disabledCellStyleObject } from '../QuoteResponseButton/QuoteResponseButton.styles';

export const RFQSearchColumns: ColDef[] = [
  {
    headerName: 'RFQ ID',
    colId: 'requestId',
    field: 'requestId',
    sortable: true,
    resizable: false,
  },
  {
    headerName: 'Status',
    colId: 'status',
    field: 'status',
    sortable: true,
  },
  {
    headerName: 'CUSIP/ISIN',
    field: 'productIdentifier.securityIdentifierValue',
    colId: 'productIdentifier.securityIdentifierValue',
    sortable: true,
  },
  {
    headerName: 'Side',
    colId: 'requestType',
    field: 'requestType',
    sortable: true,
    cellRenderer: (e: ICellRendererParams) => {
      const requestType = e.value === 'BWIC' ? 'Bid Wanted' : 'Offer Wanted';
      return <span>{requestType}</span>;
    },
  },
  {
    headerName: 'Due By',
    field: 'endTime',
    colId: 'endTime',
    sortable: true,
    cellRenderer: (e: ICellRendererParams) => {
      const endTime = DateHelper.convertToUTC(e.value);
      return (
        <span>
          {endTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      );
    },
  },
  {
    field: 'price',
    colId: 'price',
    sortable: true,
    editable: (e: EditableCallbackParams) => {
      // Editable if there's no active response
      return !e.data.activeResponse;
    },
    cellRenderer: (e: ICellRendererParams) => {
      const rowData: RFQSearchQuoted = e.data;
      if (rowData.status === 'OPEN') {
        return <span>{rowData.price ?? 'Enter'}</span>;
      } else {
        return <span>-</span>;
      }
    },
    cellStyle: (e: CellClassParams) => {
      const rowData: RFQSearchQuoted = e.data;
      if (rowData.activeResponse || rowData.status !== 'OPEN') {
        return disabledCellStyleObject;
      } else {
        return {
          color: colors.greyLight,
          backgroundColor: `${colors.white}`,
          border: `0.0625rem solid ${colors.greyLight}`,
          cursor: 'default',
        };
      }
    },
  },
  { field: 'quantity', colId: 'quantity', sortable: true },
  {
    headerName: 'Good Until',
    field: 'quoteDeadline',
    colId: 'quoteDeadline',
    resizable: false,
    sortable: true,
    width: 108,
    cellRenderer: (e: ICellRendererParams & TableCellTimeOffsetProps) => {
      const rowData: RFQSearchQuoted = e.data;
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!e.data.activeResponse && rowData.status === 'OPEN') {
        return (
          <span>
            {new Date(e.value).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        );
      } else if (rowData.status === 'OPEN') {
        return (
          <TableCellTimeOffset
            setValue={e.setValue}
            goodForTime={rowData.endTime}
          />
        );
      } else {
        return <span>-</span>;
      }
    },
    cellStyle: (e: CellClassParams) => {
      const rowData: RFQSearchQuoted = e.data;
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!rowData.activeResponse || rowData.status !== 'OPEN') {
        return disabledCellStyleObject;
      }
      return;
    },
  },
  {
    headerName: 'Action',
    field: 'activeResponse',
    colId: 'activeResponse',
    sortable: true,

    resizable: false,
    maxWidth: 76,
    cellRenderer: QuoteResponseButton,
    cellRendererParams: (e: ICellRendererParams) => {
      const rowData: RFQSearchQuoted = e.data;
      const activeResponse = rowData.activeResponse;
      let props: QuoteResponseButtonProps;
      if (activeResponse && rowData.status === 'OPEN') {
        props = {
          variant: 'secondary',
          children: 'OTW', // "On the Wire"
          cellRendererParams: e,
        };
      } else if (rowData.status === 'OPEN') {
        props = {
          variant: 'primary',
          children: 'SUBMIT',
          cellRendererParams: e,
        };
      } else {
        props = {
          variant: 'disabled',
          children: 'INACTIVE',
          cellRendererParams: e,
        };
      }
      return props;
    },
  },
  {
    headerName: 'Counterparty',
    field: 'createdByUserId',
    colId: 'createdByUserId',
  },
  {
    field: 'description',
    colId: 'description',
    headerClass: 'row-header-left-align',
  },
  {
    field: 'parValue',
    colId: 'parValue',
  },
];
