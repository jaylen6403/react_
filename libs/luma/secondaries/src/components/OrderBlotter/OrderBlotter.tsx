import { useEffect, useState } from 'react';
import {
  GetContextMenuItemsParams,
  GridApi,
  GridReadyEvent,
  MenuItemDef,
  RowClassParams,
} from 'ag-grid-community';
import {
  secondariesSlice,
  SecondaryOrder,
  SecondaryRequestForQuote,
  selectJwt,
  selectSecondaries,
  useAppDispatch,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import {
  ResultsText,
  RFQActionBar,
  RFQActionBarSection,
} from '../RFQSearch/RFQSearch.styles';
import { OrderBlotterWrapper } from './OrderBlotter.styles';
import {
  AGGridTable,
  exportCSV,
  exportExcel,
} from '../AGGridTable/AGGridTable';
import { getOrderBlotterColumns } from './columnHelpers';
import { SecondariesExportDropdown } from '../SecondariesExportDropdown/SecondariesExportDropdown';
import { useGetProductDocumentUsingGetQuery } from '../../utils/pdfHooks';
import { orderFilters } from './orderFilters';
import {
  FilterBar,
  FilterClearButton,
  FilterInput,
} from '../AGGridTable/ExternalFilter/ExternalFilter.styles';
import { FilterCheckBox } from '../FilterCheckbox/FilterCheckbox';
import { useFilter } from '../AGGridTable/hooks/useFilter';
import debounce from 'lodash.debounce';

interface OrderBlotterProps {
  liveOrderData?: SecondaryOrder;
  setLiveOrderData: (data: SecondaryOrder | undefined) => void;
}

export const OrderBlotter = ({
  liveOrderData,
  setLiveOrderData,
}: OrderBlotterProps) => {
  const userName = useAppSelector(selectJwt)?.user_name;
  const orderBlotterColumns = getOrderBlotterColumns(userName);
  const secondariesStore = useAppSelector(selectSecondaries);
  const secondariesOrders = secondariesStore.orders;
  const [gridApi, setGridApi] = useState<GridApi>();
  const ORDER_BLOTTER_NAME = 'Orders';
  const { setProductDocumentObject } = useGetProductDocumentUsingGetQuery();
  const dispatch = useAppDispatch();

  const statusCheckboxOptions = ['Pending', 'Filled', 'Canceled', 'Rejected'];
  const sideCheckboxOptions = ['Buy', 'Sell'];

  const [displayedRowCount, setDisplayedRowCount] = useState(
    gridApi?.getDisplayedRowCount()
  );

  const getOrderBlotterContextMenuItems = (
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
      'separator',
      {
        name: 'Export',
        subMenu: [
          {
            name: 'CSV Export',
            action: () => {
              exportCSV(params.api, ORDER_BLOTTER_NAME);
            },
          },
          {
            name: 'Excel Export',
            action: () => {
              exportExcel(params.api, ORDER_BLOTTER_NAME);
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
  } = useFilter(orderFilters);

  useEffect(() => {
    if (gridApi) {
      gridApi.onFilterChanged();
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
    }
  }, [filterValues, gridApi]);

  useEffect(() => {
    if (gridApi && secondariesOrders && userName) {
      const gridRowCount = gridApi.getDisplayedRowCount();
      // We are checking gridRowCount because we only want to set all the rows on mount
      if (gridRowCount === 0) {
        const sortedOrdersByAction = [...secondariesOrders].sort((a, b) => {
          const aIsPending = a.status === 'PENDING';
          const bIsPending = b.status === 'PENDING';
          const aIsLP = a.associatedUserIds?.liquidityProvider === userName;
          const bIsLP = b.associatedUserIds?.liquidityProvider === userName;

          if (aIsPending) {
            if (aIsLP) {
              return -1;
            } else if (
              a.orderId &&
              b.orderId &&
              !aIsLP &&
              bIsPending &&
              !bIsLP
            ) {
              return b.orderId - a.orderId;
            } else if (!bIsPending) {
              return -1;
            }
          } else if (a.orderId && b.orderId && !bIsPending) {
            return b.orderId - a.orderId;
          }
          return 0;
        });
        gridApi.setRowData(sortedOrdersByAction);
      }
    }
  }, [gridApi, secondariesOrders, userName]);

  useEffect(() => {
    if (gridApi && liveOrderData?.orderId) {
      const rowNode = gridApi.getRowNode(liveOrderData.orderId.toString());
      if (rowNode) {
        gridApi.applyTransactionAsync({ update: [liveOrderData] });
      } else {
        gridApi.applyTransactionAsync({ add: [liveOrderData], addIndex: 0 });
      }
      setDisplayedRowCount(gridApi.getDisplayedRowCount());
      setLiveOrderData(undefined);
    }
  }, [gridApi, liveOrderData, setLiveOrderData]);

  return (
    <OrderBlotterWrapper>
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
            tableName={ORDER_BLOTTER_NAME}
          />
        </RFQActionBarSection>
      </RFQActionBar>
      <AGGridTable
        getRowNodeId={(data: SecondaryOrder) => data.orderId?.toString() || ''}
        gridOptions={{
          onGridReady: (event) => setGridApi(event.api),
          onFirstDataRendered: onDataRendered,
          getContextMenuItems: getOrderBlotterContextMenuItems,
          columnDefs: orderBlotterColumns,
          rowHeight: 32,
          headerHeight: 48,
          suppressLoadingOverlay: true,
          defaultColDef: { resizable: true },
          rowClassRules: {
            'order-success': (e: RowClassParams) => {
              const status = e.api.getValue('status', e.node);
              return status === 'FILLED' || status === 'PENDING';
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
    </OrderBlotterWrapper>
  );
};
