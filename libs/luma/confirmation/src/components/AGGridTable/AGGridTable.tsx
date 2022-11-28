import React, {
  ReactNode,
  useRef,
  useCallback,
  useMemo,
  SetStateAction,
  Dispatch,
  useEffect,
  useState,
} from 'react';
import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { GridOptions, LicenseManager } from 'ag-grid-enterprise';

import {
  UnderlierRest,
  CashSettlementRates,
  PhysicalSettlement,
  EventProductData,
} from '@luma-fe-workspace/redux';

import {
  CustomAgGrid,
  EmptyCriteriaWarningDescription,
  EmptyCriteriaWarningDescriptionText,
} from './AGGridTable.styles';
import { useEventConfirmationOptions } from '../../utils/hooks/useEventConfirmationOptions';
import {
  CellClickedEvent,
  RowNode,
  GridReadyEvent,
  FilterChangedEvent,
  RowClassParams,
  ColDef,
} from 'ag-grid-community';
import * as AGGridTableFilters from './AGGridTableFilters';
import { AGGridWarningPanel } from './AGGridWarningPanel';
import {
  formatEventType,
  EventTypesDisplay,
  ISODateToFormat,
} from '../../utils/gridUtils';

LicenseManager.setLicenseKey(
  'CompanyName=Luma Financial Technologies, LLC,LicensedApplication=Luma,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-017904,ExpiryDate=12_September_2022_[v2]_MTY2MjkzNzIwMDAwMA==fa6279babc79792e4bac4be842243ea3'
);
export interface ConfirmationStatus {
  status: EventCalculationStatuses | undefined;
  cashSettlementRates?: CashSettlementRates;
  physicalSettlementRates?: PhysicalSettlement[];
}
export enum EventCalculationStatuses {
  PENDING = 'Pending Event',
  UPCOMING = 'Upcoming Event',
  REVIEW = 'Review',
  CONFIRMED = 'Confirmed',
  NOT_MATURED = 'Not Matured',
  NOT_CALLED = 'Not Called',
  MISSED = 'Missed',
  UNKNOWN = 'UNKNOWN',
}

export enum PrincipalProximity {
  POSITIVE = 'Positive',
  NEGATIVE = 'Negative',
}
export interface RowData {
  activeUnderlier: string | undefined;
  Product: string | undefined;
  'Event Date': string | undefined;
  'Registration Type': string | undefined;
  'Event Type': EventTypesDisplay | undefined;
  Threshold: number | undefined;
  Structure: string | undefined;
  Underliers: UnderlierRest[] | undefined;
  cusip: string | undefined;
  'Event Calculation': EventCalculationStatuses | undefined;
  'Basket Type': string | undefined;
  confirmationStatus: ConfirmationStatus | undefined;
  eventProductData: EventProductData | undefined;
  productSymbol: string | undefined;
  principalProximityAboveOrBelow: PrincipalProximity | undefined;
  principalProximityValue: string | undefined;
  underlierPerformance: number | undefined;
  downsideType: string | undefined;
}
interface ColumnData {
  field: string;
  cellRenderer?: ReactNode;
  sortable?: boolean;
  filter?: boolean;
}
interface Props {
  rowData: RowData[];
  columnData: ColumnData[];
  setModalOpen?: Dispatch<SetStateAction<boolean>>;
  setModalData?: Dispatch<SetStateAction<EventProductData | undefined>>;
  setProductStructure?: Dispatch<SetStateAction<string | undefined>>;
  modalOpen?: boolean;
  modalData?: EventProductData | undefined;
}

export const AGGridConfirmationsTable = ({
  rowData,
  columnData,
  setModalOpen,
  setModalData,
  setProductStructure,
  modalOpen,
  modalData,
}: Props) => {
  const {
    eventTypeFilter,
    confirmationStatusFilter,
    resetFilters,
    doFiltersExist,
    searchFilter,
    dateRangeFilter,
    regTypeFilter,
    clientModal,
  } = useEventConfirmationOptions();
  const [currentRowsDisplayed, setCurrentRowsDisplayed] = useState<number>(0);
  const gridRef = useRef<AgGridReact>(null);

  // Just returns true implying that there is an external filter,
  // could probably be isExternalFilterPresent={()=>true}
  const isExternalFilterPresent = useCallback(() => {
    return true;
  }, []);

  useEffect(() => {
    gridRef?.current?.api?.onFilterChanged();
  }, [
    eventTypeFilter.value,
    confirmationStatusFilter.value,
    searchFilter.value,
    dateRangeFilter.startDate,
    dateRangeFilter.endDate,
    regTypeFilter.value,
  ]);

  const doesExternalFilterPass = useCallback(
    ({ data }: RowNode<RowData>) =>
      AGGridTableFilters.doesExternalFilterPass(
        data,
        eventTypeFilter.value,
        confirmationStatusFilter.value,
        searchFilter.value,
        dateRangeFilter.startDate,
        dateRangeFilter.endDate,
        regTypeFilter.value
      ),
    [
      eventTypeFilter.value,
      confirmationStatusFilter.value,
      searchFilter.value,
      dateRangeFilter.startDate,
      dateRangeFilter.endDate,
      regTypeFilter.value,
    ]
  );

  const defaultColDef = useMemo(
    (): ColDef<RowData> => ({
      sortable: true,
      filter: true,
      resizable: false,

      menuTabs: ['filterMenuTab'],
    }),
    []
  );

  const gridOptions: GridOptions = {
    suppressCellFocus: true,
  };

  const windowResize = useCallback((gridOptions: GridOptions<RowData>) => {
    if (window.innerWidth < 1440) {
      gridOptions.columnApi?.setColumnVisible('Structure', false);
    } else {
      gridOptions.columnApi?.setColumnVisible('Structure', true);
    }

    if (window.innerWidth < 1024) {
      gridOptions.columnApi?.setColumnVisible('Underliers', false);
    } else {
      gridOptions.columnApi?.setColumnVisible('Underliers', true);
    }
  }, []);

  const onGridReady = useCallback(
    (params: GridReadyEvent<RowData>) => {
      window.addEventListener('resize', function () {
        setTimeout(function () {
          params.api.sizeColumnsToFit();
        });
      });

      windowResize(gridOptions);
      gridRef.current?.api.sizeColumnsToFit();
      setCurrentRowsDisplayed(params.api.getDisplayedRowCount());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [windowResize]
  );

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current?.api.paginationSetPageSize(20);
  }, []);

  const cellClickedListener = useCallback(
    ({ colDef, data }: CellClickedEvent<RowData>) => {
      if (
        colDef.field === 'Event Calculation' &&
        data?.confirmationStatus?.status !== EventCalculationStatuses.UPCOMING
      ) {
        if (setModalData && setModalOpen) {
          setModalData(data?.eventProductData);
          setModalOpen(true);
        }

        if (setProductStructure) {
          setProductStructure(data?.eventProductData?.structureNameInternal);
        }
      }
    },
    [setModalData, setModalOpen, setProductStructure]
  );

  const onFilterChanged = useCallback(
    (param: FilterChangedEvent<RowData>) => {
      setCurrentRowsDisplayed(param.api.getDisplayedRowCount());
    },
    [setCurrentRowsDisplayed]
  );

  const rowClassRules = useMemo(
    () => ({
      'selected-row': ({ data }: RowClassParams<RowData>) => {
        if (
          modalOpen &&
          data?.cusip === modalData?.productIdentifier &&
          data?.['Event Date'] === ISODateToFormat(modalData?.eventDate) &&
          data?.['Event Type'] === formatEventType(modalData?.eventType)
        )
          return true;
        if (
          clientModal.data &&
          data?.cusip === clientModal.data.productIdentifier &&
          data?.['Event Date'] ===
            ISODateToFormat(clientModal.data?.eventDate) &&
          data?.['Event Type'] === formatEventType(clientModal.data?.eventType)
        )
          return true;
        return false;
      },
    }),
    [modalOpen, modalData, clientModal.data]
  );

  // This is added so that when the modal opens/closes the styling will be applied to highlight the selected row
  useEffect(() => {
    gridRef?.current?.api?.redrawRows();
  }, [modalOpen, clientModal.data]);

  useEffect(() => {
    function handleResize() {
      windowResize(gridOptions);
    }

    window.addEventListener('resize', () => handleResize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowResize]);

  const warningPanel = useMemo((): React.ReactNode => {
    // warning messages are displayed if no rows are displayed, and the internal AGGrid filter is not used
    if (currentRowsDisplayed === 0) {
      // if external filters are present, show this panel
      if (doFiltersExist)
        return (
          <AGGridWarningPanel
            message="No products match your search critera."
            description={
              <EmptyCriteriaWarningDescription>
                <EmptyCriteriaWarningDescriptionText>
                  Adjust your criteria or&nbsp;
                </EmptyCriteriaWarningDescriptionText>
                <EmptyCriteriaWarningDescriptionText
                  onClick={() => resetFilters()}
                >{`reset all to default.`}</EmptyCriteriaWarningDescriptionText>
              </EmptyCriteriaWarningDescription>
            }
          />
        );
      //if there are no events
      else if (rowData.length === 0)
        return <AGGridWarningPanel message="You have no events to display" />;
    }
    return null;
  }, [currentRowsDisplayed, doFiltersExist, rowData, resetFilters]);

  return (
    <>
      {warningPanel}
      <div
        className="ag-theme-alpine"
        style={{
          width: '98vw',
          display: warningPanel ? 'none' : 'contents',
        }}
      >
        <CustomAgGrid<RowData>
          ref={gridRef}
          rowData={rowData}
          rowHeight={108}
          columnDefs={columnData}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          onFirstDataRendered={onFirstDataRendered}
          onCellClicked={cellClickedListener}
          gridOptions={gridOptions}
          domLayout="autoHeight"
          isExternalFilterPresent={isExternalFilterPresent}
          doesExternalFilterPass={doesExternalFilterPass}
          onFilterChanged={onFilterChanged}
          rowClassRules={rowClassRules}
        />
      </div>
    </>
  );
};
