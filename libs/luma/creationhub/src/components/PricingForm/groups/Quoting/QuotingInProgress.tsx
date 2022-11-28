import { ReactNode, useState } from 'react';
import {
  GetRowIdParams,
  GridOptions,
  GroupCellRendererParams,
} from 'ag-grid-community';
import {
  PricingInProgress,
  UpdatePricingUsingPostApiArg,
  IssuerDocument,
  RfqId,
} from '@luma-fe-workspace/redux';
import {
  LumaButton,
  LumaModal,
  LumaAgGrid,
  LumaIcon,
} from '@luma-fe-workspace/design-system';
import {
  QuotingWrapper,
  Title,
  Cell,
  DocumentModalTitle,
  DocumentModalRequestId,
  CellAlignLeft,
  IssuerLogo,
  QuoteTypeLabel,
  Rectangle,
  QuotingTable,
  ExternalId,
} from './Quoting.styles';
import {
  getRfqStatus,
  getRfqAction,
  issuersDisplayData,
  getRfqDisplayType,
} from './QuotingUtils';
import { usePricingAPI } from '../../usePricingAPI';
import { downloadDocument } from '../DocumentRequests/DocumentRequestsUtils';
import { PricingType } from '../../../../utils';
import { OpenDocumentButton } from '../DocumentRequests/DocumentRequests.style';

interface QuotingInProgressProps {
  pricing: PricingInProgress;
  isMutationPending: boolean;
  updatePricing: (body: UpdatePricingUsingPostApiArg) => void;
  cancelRfq: (body: UpdatePricingUsingPostApiArg) => void;
  createRfq: (body: UpdatePricingUsingPostApiArg) => void;
}

export function QuotingInProgress({
  pricing,
  isMutationPending,
  updatePricing,
  cancelRfq,
  createRfq,
}: QuotingInProgressProps) {
  const [documentModalIsOpen, setDocumentModalIsOpen] =
    useState<boolean>(false);
  const [documentsList, setDocumentsList] = useState<DocumentRow[]>([]);
  const api = usePricingAPI();
  if (!pricing.rfqIssuers) {
    return null;
  }

  type DocumentRow = {
    id: string;
    filename: string;
    documentType: string;
    language: string;
    uploadTimestamp: string;
    action: JSX.Element;
    issuerId: string;
  };

  const getDocument = async ({
    rfqId,
    documentId,
    filename,
  }: {
    rfqId: RfqId;
    documentId: string;
    filename: string;
  }) => {
    if (!rfqId || !documentId) {
      return;
    }

    try {
      const content = await api.getDocument({ rfqId, documentId }).unwrap();
      downloadDocument(content, filename);
    } catch (error) {
      console.error(error);
    }
  };

  const createDocumentModalView = () => {
    const paginationPageSize = 5;
    const columnDefs = [
      { field: 'documentType', headerName: 'Document Type' },
      { field: 'language', headerName: 'Language' },
      { field: 'uploadTimestamp', headerName: 'Uploaded' },
      { field: 'filename', headerName: 'File Name' },
      {
        field: 'action',
        headerName: '',
        cellRenderer: (params: GroupCellRendererParams) => {
          return params.value;
        },
        width: 100,
      },
    ];
    const defaultColDef = {
      sortable: false,
      menuTabs: [],
    };
    const gridStyles = {
      height: 450,
      width: 700,
    };
    const gridOptions: GridOptions = {
      columnDefs: columnDefs,
      defaultColDef: defaultColDef,
      paginationPageSize,
      cacheBlockSize: paginationPageSize,
      getRowId: (row: GetRowIdParams<PricingType>) => row.data.id,
      onGridReady: (params) => params.api.sizeColumnsToFit(),
      rowData: documentsList,
    };
    const issuerId = documentsList[0]?.issuerId ?? '';

    return (
      <>
        <DocumentModalTitle>
          Documents&nbsp;
          <LumaIcon iconCode="file-lines" type="regular" />
          &nbsp;-&nbsp;
          {issuerId}
        </DocumentModalTitle>
        <DocumentModalRequestId>
          Pricing ID: {pricing.id.substring(0, 8)}
        </DocumentModalRequestId>
        <LumaAgGrid
          gridOptions={gridOptions}
          gridStyles={gridStyles}
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
      </>
    );
  };

  const rfqIssuers = pricing.rfqIssuers
    .filter((issuerRfq) => !!issuerRfq.rfq)
    .concat(pricing.rfqIssuers.filter((issueRfq) => !issueRfq.rfq));

  const createDocumentsRows = (
    documents: IssuerDocument[],
    rfqId: RfqId,
    issuerId: string
  ) => {
    return documents.map(
      ({ id, filename, documentType, language, uploadTimestamp }) => {
        const formattedDate = new Date(uploadTimestamp).toLocaleString();
        const action = (
          <OpenDocumentButton
            variant="secondary"
            onClick={() =>
              getDocument({
                rfqId,
                documentId: id,
                filename: filename,
              })
            }
            size="icon_only"
            data-testid={`document-download`}
          >
            <LumaIcon iconCode="file-arrow-down" type="solid" />
          </OpenDocumentButton>
        );

        return {
          id,
          filename,
          documentType: documentType.label,
          language: language.label,
          uploadTimestamp: formattedDate,
          issuerId,
          action,
        };
      }
    );
  };

  const columns = [
    {
      label: 'Issuer',
      field: ({
        issuer,
        externalId,
      }: {
        issuer: string;
        externalId: string;
      }) => {
        const displayData = issuersDisplayData[issuer] ?? { label: issuer };
        if (displayData?.icon) {
          return (
            <CellAlignLeft>
              <IssuerLogo src={displayData.icon} alt={issuer} />
              {externalId && (
                <ExternalId title={externalId}>{externalId}</ExternalId>
              )}
            </CellAlignLeft>
          );
        }
        return (
          <CellAlignLeft>
            {displayData.label}
            {externalId && (
              <ExternalId title={externalId}>{externalId}</ExternalId>
            )}
          </CellAlignLeft>
        );
      },
    },
    {
      label: 'Quote',
      field: ({ status, type }: { status: string; type: string }) => {
        return (
          <Cell>
            {status}
            <QuoteTypeLabel>{type || <Rectangle />}</QuoteTypeLabel>
          </Cell>
        );
      },
    },
    {
      label: 'Documents',
      field: ({
        documents,
        issuerId,
        rfqId,
      }: {
        documents: IssuerDocument[];
        issuerId: string;
        rfqId: RfqId;
      }) => {
        if (!documents || !documents.length) {
          return (
            <Cell>
              <Rectangle />
            </Cell>
          );
        }

        const onClickViewDocuments = () => {
          setDocumentModalIsOpen(true);
          const documentsToDownload = createDocumentsRows(
            documents,
            rfqId,
            issuerId
          );
          setDocumentsList(documentsToDownload);
        };

        return (
          <Cell>
            <LumaButton
              onClick={onClickViewDocuments}
              size="x_small"
              fullWidth={true}
              variant="secondary"
              id={`documents-${issuerId}`}
              data-testid={`documents-button-${issuerId}`}
            >
              View
            </LumaButton>
          </Cell>
        );
      },
    },
    {
      label: 'Actions',
      field: ({ action }: { action: ReactNode | string }) => {
        return <Cell>{action ?? <Rectangle />}</Cell>;
      },
    },
    {
      label: '',
      field: ({ isin }: { isin: string }) => {
        return <Cell>{isin || <Rectangle />}</Cell>;
      },
    },
  ];
  const rows = rfqIssuers.map(({ actions, issuerId, rfq }) => {
    return {
      id: issuerId,
      values: [
        { issuer: issuerId, externalId: rfq?.externalId ?? '' },
        {
          status: rfq ? getRfqStatus(rfq) : '',
          type: getRfqDisplayType(rfq?.state, rfq?.type),
        },
        {
          documents: rfq?.documents ?? null,
          issuerId,
          rfqId: rfq?.id,
        },
        {
          action: getRfqAction({
            rfqIssuer: { actions, issuerId, rfq },
            pricing,
            updatePricing,
            isMutationPending,
            cancelRfq,
            createRfq,
          }),
        },
        { isin: rfq?.isin ?? '' },
      ],
    };
  });
  return (
    <QuotingWrapper>
      <LumaModal
        closeButton={{
          show: true,
          handleClose: () => setDocumentModalIsOpen(false),
        }}
        isOpen={documentModalIsOpen}
        appElement="#root"
      >
        {createDocumentModalView()}
      </LumaModal>
      <Title>Get Quotes</Title>
      <QuotingTable columns={columns} rows={rows} />
    </QuotingWrapper>
  );
}
