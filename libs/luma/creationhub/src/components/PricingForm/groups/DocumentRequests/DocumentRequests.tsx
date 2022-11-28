import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ColDef,
  GetRowIdParams,
  GridApi,
  GridOptions,
  GroupCellRendererParams,
} from 'ag-grid-community';
import { Rfq } from '@luma-fe-workspace/redux';
import { LumaAgGrid, LumaIcon } from '@luma-fe-workspace/design-system';
import { usePricingAPI } from '../../usePricingAPI';
import { Title } from '../Quoting/Quoting.styles';
import { AddDocumentForm } from './AddDocumentForm';
import { RequestedDocuments } from './RequestedDocuments';
import {
  DocumentRequestsWrapper,
  DocumentValidationRulesWrapper,
  OpenDocumentButton,
} from './DocumentRequests.style';
import { getDocuments, IssuerDocumentToRender } from './DocumentRequestsUtils';

type DocumentRequestsProps = {
  rfq: Rfq;
  updateRfq: (rfq: Rfq) => void;
};

export function DocumentRequests({ rfq, updateRfq }: DocumentRequestsProps) {
  const api = usePricingAPI();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [rowData, setRowData] = useState(getDocuments(rfq, api));
  const columnDefs: ColDef[] = [
    {
      field: 'documentType',
      headerName: 'Document Type',
      filter: 'agTextColumnFilter',
    },
    { field: 'language', headerName: 'Language', filter: 'agTextColumnFilter' },
    { field: 'uploadTimestamp', headerName: 'Uploaded' },
    {
      field: 'filename',
      headerName: 'File Name',
      filter: 'agTextColumnFilter',
    },
    {
      field: 'downloadAction',
      headerName: '',
      sortable: false,
      cellRenderer: (
        params: GroupCellRendererParams<
          IssuerDocumentToRender['downloadAction']
        >
      ) => {
        return (
          <OpenDocumentButton
            variant="secondary"
            onClick={params.value.action}
            size="icon_only"
            data-testid={`file-${params.value.filename}`}
          >
            <LumaIcon iconCode="file-arrow-down" type="solid" />
          </OpenDocumentButton>
        );
      },
    },
  ];
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      menuTabs: [],
    };
  }, []);
  const onGridReady = useCallback((params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  }, []);

  useEffect(() => {
    const updatedRowData = getDocuments(rfq, api);
    if (updatedRowData) {
      setRowData(updatedRowData);
      if (gridApi) {
        gridApi.setRowData(updatedRowData);
        gridApi.refreshCells();
        gridApi.sizeColumnsToFit();
      }
    }
  }, [rfq.documents]);

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    onGridReady: onGridReady,
    paginationPageSize: 5,
    getRowId: (row: GetRowIdParams<IssuerDocumentToRender>) =>
      row.data.documentId,
    rowData: rowData,
  };

  return (
    <DocumentRequestsWrapper>
      <Title>Document Requests</Title>
      <RequestedDocuments
        documents={rfq.requestedDocuments}
      ></RequestedDocuments>
      <AddDocumentForm rfq={rfq} updateRfq={updateRfq} />
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={{ height: 500, width: '100%' }}
        additionalStyles={`
          & .ag-header-cell {
            padding: 0.5rem inherit;
            font-size: 0.75rem;
          }
          & .ag-cell-value {
            font-size: 0.6875rem;
          }
        `}
      />
      <DocumentValidationRulesWrapper>
        <b>We support the following file formats:</b> PDF, DOC, DOCX, XLS, and
        XLSX.
      </DocumentValidationRulesWrapper>
      <DocumentValidationRulesWrapper>
        <b>Max file size:</b> 10MB
      </DocumentValidationRulesWrapper>
    </DocumentRequestsWrapper>
  );
}
