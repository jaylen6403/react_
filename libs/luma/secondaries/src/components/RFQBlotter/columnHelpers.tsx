import { ColDef, ICellRendererParams } from 'ag-grid-community';
import {
  SecondaryQuote,
  SecondaryRequestForQuote,
} from '@luma-fe-workspace/redux';
import {
  TableCellQuoteSelector,
  TableCellQuoteSelectorProps,
} from '../TableCellQuoteSelector/TableCellQuoteSelector';
import { DateFormatter, DateHelper } from '@luma-fe-workspace/utility';

const getOTWSortedQuotes = (quotes: SecondaryQuote[]) => {
  const sortedQuotes = quotes.sort(
    (a: SecondaryQuote, b: SecondaryQuote) => b.quoteAmount - a.quoteAmount
  );
  const OTWQuotes = sortedQuotes.filter(
    (quote: SecondaryQuote) => quote.status === 'OTW'
  );
  return OTWQuotes;
};

export const RFQBlotterColumnDefs: ColDef[] = [
  {
    headerName: 'RFQ ID',
    colId: 'requestId',
    field: 'requestId',
    sortable: true,
    resizable: false,
    cellRenderer: (e: ICellRendererParams) => {
      return <span>{e.value}</span>;
    },
  },
  { field: 'status', colId: 'status', sortable: true },
  {
    headerName: 'Order ID',
    colId: 'acceptedQuote.orderId',
    field: 'acceptedQuote.orderId',
    sortable: true,
    resizable: false,
  },
  {
    headerName: 'CUSIP/ISIN',
    field: 'productIdentifier.securityIdentifierValue',
    colId: 'productIdentifier.securityIdentifierValue',
    sortable: true,
  },
  {
    headerName: 'Side',
    colId: 'side',
    field: 'requestType',
    sortable: true,
    cellRenderer: (e: ICellRendererParams) => {
      const requestType = e.value === 'BWIC' ? 'Bid Wanted' : 'Offer Wanted';
      return <span>{requestType}</span>;
    },
  },
  {
    headerName: 'Due For',
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
  { field: 'quantity', colId: 'quantity', sortable: true },
  {
    field: 'price',
    colId: 'price',
    resizable: false,
    maxWidth: 92,
    cellClass: 'action-button-cell',
    cellStyle: { padding: '0rem' },
    cellRenderer: TableCellQuoteSelector,
    cellRendererParams: (e: ICellRendererParams) => {
      const rowData: SecondaryRequestForQuote = e.data;
      const props: TableCellQuoteSelectorProps = {
        id: 'quote-selector',
        quotes: [],
        status: e.data.status,
        disabled: true,
        RFQRequestId: rowData.requestId,
      };
      if (rowData.acceptedQuote) {
        props.quotes = [rowData.acceptedQuote];
      } else if (rowData.quotes && rowData.status === 'OPEN') {
        const unexpiredQuotes = getOTWSortedQuotes([...rowData.quotes]);
        props.disabled = unexpiredQuotes.length < 1;
        props.quotes = unexpiredQuotes;
      }
      return props;
    },
  },
  {
    field: 'Good Until',
    colId: 'quoteDeadline',
    cellRenderer: (e: ICellRendererParams) => {
      const rowData: SecondaryRequestForQuote = e.data;
      if (rowData.acceptedQuote) {
        return (
          <span>
            {DateHelper.convertToUTC(
              rowData.acceptedQuote.goodUntilTime
            ).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        );
      } else if (rowData.quotes && rowData.status === 'OPEN') {
        const unexpiredQuotes = getOTWSortedQuotes([...rowData.quotes]);
        if (!unexpiredQuotes[0]) return null;

        return (
          <span>
            {DateHelper.convertToUTC(
              unexpiredQuotes[0].goodUntilTime
            ).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        );
      }
      return null;
    },
  },
  { field: 'yield', colId: 'yield' },
  { field: 'YTW', colId: 'YTW' },
  {
    field: 'description',
    colId: 'description',
    headerClass: 'row-header-left-align',
  },

  {
    field: 'Maturity',
    colId: 'maturity',
  },
  {
    field: 'Type',
    colId: 'type',
  },
  {
    field: 'Par Value',
    colId: 'parValue',
  },
  { field: 'Principal', colId: 'principal' },
  {
    field: 'Interest',
    colId: 'interest',
  },
  { field: 'Net Money', colId: 'netMoney' },
  {
    headerName: 'Settlement',
    field: 'settlementTimestamp',
    colId: 'settlementTimestamp',
    sortable: true,
    cellRenderer: (e: ICellRendererParams) => {
      const settlement = DateHelper.convertToUTC(e.value);
      return <span>{DateFormatter.formatLocalDate(settlement, 'M/dd')}</span>;
    },
  },
];
