import {
  GetContextMenuItemsParams,
  GridApi,
  GridReadyEvent,
  MenuItemDef,
  RowClassParams,
} from 'ag-grid-community';
import { useEffect, useState } from 'react';
import {
  useAppSelector,
  RFQSearchQuoted,
  selectSecondariesQuotedAvailableRFQs,
  SecondaryRequestForQuote,
  secondariesSlice,
  useAppDispatch,
  selectMyRespondedRFQs,
  SecondaryQuote,
  selectJwt,
} from '@luma-fe-workspace/redux';

import { defaultQuoteDeadlineOffsetMs } from '../TableCellTimeOffset/TableCellTimeOffset';
import {
  ResultsText,
  RFQActionBar,
  RFQActionBarSection,
  RFQSearchWrapper,
} from './RFQSearch.styles';
import {
  AGGridTable,
  exportCSV,
  exportExcel,
} from '../AGGridTable/AGGridTable';
import { RFQSearchColumns } from './columnHelpers';
import { refreshGridRowsOnMinute } from '../../utils/refreshGridRowsOnMinute';
import { useGetProductDocumentUsingGetQuery } from '../../utils/pdfHooks';
import { SecondariesExportDropdown } from '../SecondariesExportDropdown/SecondariesExportDropdown';
import {
  FilterBar,
  FilterClearButton,
  FilterInput,
} from '../AGGridTable/ExternalFilter/ExternalFilter.styles';
import { FilterCheckBox } from '../FilterCheckbox/FilterCheckbox';
import { useFilter } from '../AGGridTable/hooks/useFilter';
import { RFQSearchFilters } from './RFQSearchFilters';
import debounce from 'lodash.debounce';

interface RFQSearchProps {
  liveRFQData: SecondaryRequestForQuote[];
  setLiveRFQData: (data: SecondaryRequestForQuote[]) => void;
  blotterType: 'RFQ Search' | 'LP Blotter';
}

//IMPORTANT
//Please note that RFQ Search serves as a blotter for both the RFQ Search and LP Blotter tables.
//This decision was made due to the heavy similarity between the two blotters, with only the filtering and selector
//being different. We use the same slice, but the LP Blotter selector filters down the data more so that it only shows
//RFQs that the user has interacted with
export const RFQSearch = ({
  liveRFQData,
  setLiveRFQData,
  blotterType,
}: RFQSearchProps) => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const JWT = useAppSelector(selectJwt);
  const dispatch = useAppDispatch();
  const { setProductDocumentObject } = useGetProductDocumentUsingGetQuery();
  const availableRFQs = useAppSelector(
    blotterType === 'RFQ Search'
      ? selectSecondariesQuotedAvailableRFQs
      : selectMyRespondedRFQs
  );

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

  const getRFQSearchContextMenuItems = (
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] => {
    const rowData: SecondaryRequestForQuote = params.node?.data;
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
              exportCSV(params.api, blotterType);
            },
          },
          {
            name: 'Excel Export',
            action: () => {
              exportExcel(params.api, blotterType);
            },
          },
        ],
      },
    ];
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
  } = useFilter(RFQSearchFilters);

  useEffect(() => {
    if (gridApi) {
      gridApi.onFilterChanged();
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
    }
  }, [filterValues, gridApi]);

  useEffect(() => {
    if (gridApi) {
      const gridRowCount = gridApi.getDisplayedRowCount();
      // We are checking gridRowCount because we only want to set all the rows on mount
      if (gridRowCount === 0) {
        gridApi.setRowData(availableRFQs);
      }
    }
  }, [gridApi, availableRFQs]);

  useEffect(() => {
    let newAvailableRFQs: SecondaryRequestForQuote[];
    const userName = JWT?.user_name;
    if (blotterType === 'RFQ Search') {
      newAvailableRFQs = liveRFQData.filter(
        (RFQ: SecondaryRequestForQuote) => RFQ.createdByUserId !== userName
      );
    } else {
      newAvailableRFQs = liveRFQData.filter((RFQ: SecondaryRequestForQuote) =>
        RFQ.quotes?.find(
          (quote: SecondaryQuote) =>
            quote.createdByUserId && quote.createdByUserId === userName
        )
      );
    }

    if (gridApi && newAvailableRFQs[0]?.requestId) {
      const existingRowNode = gridApi.getRowNode(
        newAvailableRFQs[0].requestId.toString()
      );
      const quotedRFQs: RFQSearchQuoted[] = newAvailableRFQs.map(
        (RFQ: SecondaryRequestForQuote) => {
          return {
            ...RFQ,
            // Default offset for quote response in minutes
            quoteDeadline: defaultQuoteDeadlineOffsetMs,
          };
        }
      );
      if (existingRowNode) {
        gridApi.applyTransaction({ update: quotedRFQs });
        gridApi.refreshCells({ rowNodes: [existingRowNode], force: true });
      } else {
        gridApi.applyTransaction({ add: quotedRFQs, addIndex: 0 });
      }
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
      setLiveRFQData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveRFQData, blotterType]);

  useEffect(() => {
    if (gridApi) {
      refreshGridRowsOnMinute(gridApi, ['quoteDeadline', 'account']);
      return () => {
        gridApi.destroy();
      };
    }
    return;
  }, [gridApi]);

  return (
    <RFQSearchWrapper>
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
            tableName={blotterType}
          />
        </RFQActionBarSection>
      </RFQActionBar>
      <AGGridTable
        aria-label={blotterType}
        getRowNodeId={(data: RFQSearchQuoted) =>
          data.requestId ? data.requestId.toString() : ''
        }
        gridOptions={{
          onGridReady: (event) => setGridApi(event.api),
          onFirstDataRendered: onDataRendered,
          columnDefs: RFQSearchColumns,
          rowHeight: 32,
          headerHeight: 48,
          suppressLoadingOverlay: true,
          defaultColDef: { resizable: true },
          getContextMenuItems: getRFQSearchContextMenuItems,
          rowClassRules: {
            'grid-row-even': (e: RowClassParams) => e.rowIndex % 2 === 0,
            'grid-row-odd': (e: RowClassParams) => e.rowIndex % 2 !== 0,
            'grid-row-expired': (e: RowClassParams) => e.data.status !== 'OPEN',
          },
        }}
        isExternalFilterPresent={isExternalFilterPresent}
        doesExternalFilterPass={doesExternalFilterPass}
      />
    </RFQSearchWrapper>
  );
};
