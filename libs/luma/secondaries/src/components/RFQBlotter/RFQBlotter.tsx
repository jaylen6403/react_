import {
  GetContextMenuItemsParams,
  GridApi,
  GridReadyEvent,
  MenuItemDef,
  RowClassParams,
  RowNode,
} from 'ag-grid-community';
import { useEffect, useState } from 'react';
import {
  ResultsText,
  RFQActionBar,
  RFQActionBarSection,
} from '../RFQSearch/RFQSearch.styles';
import { QuotesWrapper } from './RFQBlotter.styles';
import {
  useAppSelector,
  selectSecondaries,
  useCancelRequestForQuoteByRequestIdUsingPostMutation,
  SecondaryRequestForQuote,
  secondariesSlice,
  useAppDispatch,
  selectJwt,
} from '@luma-fe-workspace/redux';
import {
  AGGridTable,
  exportCSV,
  exportExcel,
} from '../AGGridTable/AGGridTable';
import { CancelRequestDialog } from '../Dialog/CancelRequestDialog/CancelRequestDialog';
import { RFQBlotterColumnDefs } from './columnHelpers';
import { refreshGridRowsOnMinute } from '../../utils/refreshGridRowsOnMinute';
import {
  FilterBar,
  FilterClearButton,
  FilterInput,
} from '../AGGridTable/ExternalFilter/ExternalFilter.styles';
import { FilterCheckBox } from '../FilterCheckbox/FilterCheckbox';
import { useGetProductDocumentUsingGetQuery } from '../../utils/pdfHooks';
import { RFQFilters } from './RFQFilters';
import { useFilter } from '../AGGridTable/hooks/useFilter';
import { SecondariesExportDropdown } from '../SecondariesExportDropdown/SecondariesExportDropdown';
import debounce from 'lodash.debounce';

interface RFQBlotterProps {
  liveRFQData: SecondaryRequestForQuote[];
  newCreatedRFQs: SecondaryRequestForQuote[];
  setLiveRFQData: (data: SecondaryRequestForQuote[]) => void;
  setNewCreatedRFQs: (data: SecondaryRequestForQuote[]) => void;
}

export const RFQBlotter = ({
  liveRFQData,
  newCreatedRFQs,
  setLiveRFQData,
  setNewCreatedRFQs,
}: RFQBlotterProps) => {
  const secondariesStore = useAppSelector(selectSecondaries);
  const RFQs = secondariesStore.myRFQs;
  const [gridApi, setGridApi] = useState<GridApi>();
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [RFQToCancel, setRFQToCancel] = useState<SecondaryRequestForQuote>();
  const [cancelRFQ] = useCancelRequestForQuoteByRequestIdUsingPostMutation();
  const dispatch = useAppDispatch();
  const { setProductDocumentObject } = useGetProductDocumentUsingGetQuery();
  const RFQ_BLOTTER_NAME = 'Quotes';
  const firstName = useAppSelector(selectJwt)?.firstName;

  const statusCheckboxOptions = [
    'Open',
    'Pending',
    'Filled',
    'Canceled',
    'Expired',
  ];
  const sideCheckboxOptions = ['Bid Wanted', 'Offer Wanted'];

  const [displayedRowCount, setDisplayedRowCount] = useState(
    gridApi?.getDisplayedRowCount()
  );

  const getRFQBlotterContextMenuItems = (
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] => {
    const rowData: SecondaryRequestForQuote = params.node?.data;
    const nonCancelableStatuses = ['FILLED', 'CANCELED', 'EXPIRED', undefined];
    if (!rowData) {
      return [];
    }

    const productCusipIsin = rowData.productIdentifier?.securityIdentifierValue;
    const contextMenuItems: (string | MenuItemDef)[] = [
      {
        name: 'Term Sheet',
        action: () => {
          if (productCusipIsin) {
            setProductDocumentObject({
              cusip: productCusipIsin,
              documentType: 'TERM_SHEET',
            });
          }
        },
      },
      {
        name: 'Performance Report',
        action: () => {
          if (productCusipIsin) {
            setProductDocumentObject({
              cusip: productCusipIsin,
              documentType: 'PERFORMANCE_REPORT',
            });
          }
        },
      },
      {
        name: 'Security Details',
        action: () => {
          dispatch(
            secondariesSlice.actions.setSecurityDetailsCusip(productCusipIsin)
          );
        },
      },
      {
        name: 'Export',
        subMenu: [
          {
            name: 'CSV Export',
            action: () => {
              exportCSV(params.api, RFQ_BLOTTER_NAME);
            },
          },
          {
            name: 'Excel Export',
            action: () => {
              exportExcel(params.api, RFQ_BLOTTER_NAME);
            },
          },
        ],
      },
    ];
    //If the RFQ is in 'CANCELED', 'FILLED', or 'EXPIRED' status, or is undefined (to catch non-status edge case), then 'Cancel Request' option will not show
    if (!nonCancelableStatuses.includes(rowData.status)) {
      contextMenuItems.push('separator');
      contextMenuItems.push({
        name: 'Cancel Request',
        action: () => {
          setShowCancelDialog(true);
          setRFQToCancel(rowData);
        },
      });
    }
    return contextMenuItems;
  };

  const onDataRendered = (gridReadyEvent: GridReadyEvent) => {
    gridReadyEvent.columnApi.autoSizeAllColumns();
    setDisplayedRowCount(gridReadyEvent.api.getDisplayedRowCount());
  };

  const {
    filterValues,
    handleInputFilter,
    handleCheckboxFilter,
    handleClearFilters,
    isExternalFilterPresent,
    doesExternalFilterPass,
  } = useFilter(RFQFilters);

  useEffect(() => {
    if (gridApi) {
      gridApi.onFilterChanged();
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
    }
  }, [filterValues, gridApi]);

  useEffect(() => {
    if (gridApi && RFQs) {
      const gridRowCount = gridApi.getDisplayedRowCount();
      // We are checking gridRowCount because we only want to set all the rows on mount
      if (gridRowCount === 0) {
        gridApi.setRowData(RFQs);
      }
    }
  }, [gridApi, RFQs]);

  useEffect(() => {
    if (gridApi && liveRFQData[0]) {
      gridApi.applyTransaction({ update: liveRFQData });
      const rowNodes: RowNode[] = [];
      liveRFQData.forEach((RFQ) => {
        if (RFQ.requestId) {
          const rowNode = gridApi.getRowNode(RFQ.requestId.toString());
          rowNode && rowNodes.push(rowNode);
        }
      });
      gridApi.refreshCells({ rowNodes, force: true });
      setLiveRFQData([]);
    }
  }, [liveRFQData, gridApi, setLiveRFQData]);

  useEffect(() => {
    if (gridApi && newCreatedRFQs[0]?.requestId) {
      const firstRFQ = gridApi.getRowNode(
        newCreatedRFQs[0].requestId.toString()
      );
      if (firstRFQ) {
        return;
      }
      gridApi.applyTransaction({ add: newCreatedRFQs, addIndex: 0 });
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
      setNewCreatedRFQs([]);
    }
  }, [gridApi, newCreatedRFQs, setNewCreatedRFQs]);

  useEffect(() => {
    if (gridApi) {
      refreshGridRowsOnMinute(gridApi, ['price', 'quoteDeadline']);
      return () => {
        gridApi.destroy();
      };
    }
    return;
  }, [gridApi]);

  const handleCancelRFQ = async () => {
    if (RFQToCancel?.requestId) {
      try {
        const response = await cancelRFQ({
          requestId: RFQToCancel.requestId,
        }).unwrap();
        if (response) {
          dispatch(
            secondariesSlice.actions.setMessageObject({
              title: `${
                firstName ? firstName + 'has' : 'You have'
              } successfully canceled ${RFQToCancel.requestId} (${
                RFQToCancel.requestType
              } ${RFQToCancel.quantity.toLocaleString()}M ${
                RFQToCancel.productIdentifier?.securityIdentifierValue
              }).`,
              messageType: 'success',
              isMessageShowing: true,
            })
          );
        }
      } catch (error) {
        dispatch(
          secondariesSlice.actions.setMessageObject({
            title: `${
              firstName ? firstName + "'s" : 'Your'
            } request to cancel ${RFQToCancel.requestId} has failed (${
              RFQToCancel.requestType
            } ${RFQToCancel.quantity.toLocaleString()}M ${
              RFQToCancel.productIdentifier?.securityIdentifierValue
            }).`,
            messageType: 'error',
            isMessageShowing: true,
          })
        );
      }
    }
  };

  return (
    <QuotesWrapper>
      <CancelRequestDialog
        onDelete={() => handleCancelRFQ()}
        deleteText={'CANCEL'}
        title={'CANCEL REQUEST'}
        description={
          RFQToCancel?.quotes
            ? `Are you sure you want to cancel the request? You received ${RFQToCancel.quotes.length} bids`
            : 'Error'
        }
        setShowDialog={function (showDialog: boolean): void {
          setShowCancelDialog(showDialog);
        }}
        id={''}
        handleOnClose={function (): void {
          setShowCancelDialog(!showCancelDialog);
        }}
        showDialog={showCancelDialog}
      />
      <RFQActionBar>
        <FilterBar>
          <ResultsText>
            {displayedRowCount} Result
            {displayedRowCount !== 1 && 's'}
          </ResultsText>
          <FilterInput
            disabled={false}
            hasError={false}
            placeholder="Filter by CUSIP/ISIN"
            onChange={debounce(
              (event) => handleInputFilter('cusipOrIsin', event.target.value),
              400
            )}
          />
          <FilterCheckBox
            fieldText="Status"
            defaultOption="All"
            options={statusCheckboxOptions}
            checkedOptions={filterValues['status'] ?? []}
            setCheckedOptions={(checked) =>
              handleCheckboxFilter('status', checked)
            }
            multi
          />
          <FilterCheckBox
            fieldText="Side"
            defaultOption="All"
            options={sideCheckboxOptions}
            checkedOptions={filterValues['side'] ?? []}
            setCheckedOptions={(checked) =>
              handleCheckboxFilter('side', checked)
            }
          />
          <FilterClearButton variant="secondary" onClick={handleClearFilters}>
            Clear
          </FilterClearButton>
        </FilterBar>
        <RFQActionBarSection>
          <SecondariesExportDropdown
            gridApi={gridApi}
            tableName={RFQ_BLOTTER_NAME}
          />
        </RFQActionBarSection>
      </RFQActionBar>
      <AGGridTable
        getRowNodeId={(data: SecondaryRequestForQuote) =>
          data.requestId ? data.requestId.toString() : ''
        }
        gridOptions={{
          onGridReady: (event) => setGridApi(event.api),
          onFirstDataRendered: onDataRendered,
          columnDefs: RFQBlotterColumnDefs,
          rowHeight: 32,
          headerHeight: 48,
          suppressLoadingOverlay: true,
          defaultColDef: { resizable: true },
          getContextMenuItems: getRFQBlotterContextMenuItems,
          rowClassRules: {
            'order-success': (e: RowClassParams) => {
              const status = e.api.getValue('status', e.node);
              return status !== 'CANCELED' || status !== 'REJECTED';
            },
            'order-fail': (e: RowClassParams) => {
              const status = e.api.getValue('status', e.node);
              return status === 'CANCELED' || status === 'REJECTED';
            },
          },
        }}
        isExternalFilterPresent={isExternalFilterPresent}
        doesExternalFilterPass={doesExternalFilterPass}
      />
    </QuotesWrapper>
  );
};
