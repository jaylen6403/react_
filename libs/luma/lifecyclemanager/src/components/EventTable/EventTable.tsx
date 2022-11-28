import { useState, useEffect } from 'react';
import {
  LifecycleEventLM,
  selectLifecycle,
  selectLifecycleEventDisplayCurrency,
  selectLifecycleEventRequestObject,
  useAppSelector,
  useGetAccountEventsByUsingPostQuery,
} from '@luma-fe-workspace/redux';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { getEventListColumns } from './columnHelpers';
import { AGGridTable } from '../AGGridTable/AGGridTable';
import { LMPadding } from '../../lib/luma-lifecyclemanager';
import { PaginationPanel } from '../PaginationPanel/PaginationPanel';
import { Spinner } from '@luma-fe-workspace/design-system';
import { CustomLumaStatus } from '../CustomLumaStatus/CustomLumaStatus.styles';
import { EventWrapper, ResultsCount } from './EventTable.styles';

interface EventsTableProps {
  setSelectedEvent: (event: LifecycleEventLM) => void;
  currentGridApi: GridApi | undefined;
  setCurrentGridApi: (gridApi: GridApi) => void;
}

export const rowHeight = 94;
export const headerHeight = 46;
export const headerMargin = 1;

export const EventTable = ({
  setSelectedEvent,
  currentGridApi,
  setCurrentGridApi,
}: EventsTableProps) => {
  // Hardcoded page size for now, but will need to change to be dynamic later on when users are able to select the page size
  const PAGE_SIZE = 20;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);
  const logoData = useAppSelector(selectLifecycle).logoObject;
  const displayCurrency = useAppSelector(selectLifecycleEventDisplayCurrency);

  const eventRequestObject = {
    pageNumber,
    pageSize: PAGE_SIZE,
    ...useAppSelector(selectLifecycleEventRequestObject),
  };

  const getEventsResponse =
    useGetAccountEventsByUsingPostQuery(eventRequestObject);

  const nextEventRequestObject = {
    pageNumber: nextPageNumber,
    pageSize: PAGE_SIZE,
    ...useAppSelector(selectLifecycleEventRequestObject),
  };

  const getNextEventsResponse = useGetAccountEventsByUsingPostQuery(
    nextEventRequestObject
  );

  useEffect(() => {
    const eventListColumns = getEventListColumns(
      setSelectedEvent,
      displayCurrency,
      logoData
    );
    currentGridApi?.setColumnDefs(eventListColumns);
  }, [currentGridApi, displayCurrency, logoData, setSelectedEvent]);

  const currentEventsResponse =
    pageNumber >= 1 &&
    getNextEventsResponse.isSuccess &&
    !getNextEventsResponse.isFetching
      ? getNextEventsResponse
      : getEventsResponse;

  useEffect(() => {
    if (currentEventsResponse.isSuccess && !currentEventsResponse.isFetching) {
      currentGridApi?.setRowData(currentEventsResponse.data.content);
    }
  }, [currentEventsResponse, currentGridApi]);

  useEffect(() => {
    if (currentEventsResponse.isFetching) {
      currentGridApi?.setRowData([]);
      currentGridApi?.showLoadingOverlay();
    }
  }, [currentEventsResponse, currentGridApi]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const onDataRendered = (params: GridReadyEvent) => {
    const gridColumnApi: ColumnApi = params.columnApi;
    gridColumnApi.sizeColumnsToFit(windowSize.innerWidth - LMPadding * 16 * 2);
  };

  const onButtonPrevious = () => {
    setPageNumber(pageNumber - 1);
    setNextPageNumber(nextPageNumber - 1);
  };

  const onButtonNext = () => {
    setPageNumber(pageNumber + 1);
    setNextPageNumber(nextPageNumber + 1);
  };

  const totalResults = currentEventsResponse.data?.totalElements;
  const widgetView = currentEventsResponse.isError ? (
    <CustomLumaStatus
      variant={'failed'}
      ariaLabel={'Failed Message'}
      titleMessage={'Request Failed'}
      helperMessage={'Something went wrong!'}
    />
  ) : (
    <>
      <EventWrapper
        numberOfRows={Math.min(
          currentEventsResponse.data?.content.length ?? PAGE_SIZE,
          PAGE_SIZE
        )}
      >
        <ResultsCount>{`${totalResults ?? 0} Result${
          totalResults !== 1 && 's'
        }`}</ResultsCount>

        <AGGridTable
          getRowNodeId={(data: LifecycleEventLM) => data.eventId}
          gridOptions={{
            rowModelType: 'clientSide',
            headerHeight: headerHeight,
            rowHeight: rowHeight,
            onFirstDataRendered: onDataRendered,
            onGridReady: (e: GridReadyEvent) => {
              setCurrentGridApi(e.api);
            },
            pagination: true,
            cacheBlockSize: PAGE_SIZE,
            paginationPageSize: PAGE_SIZE,
            suppressPaginationPanel: true,
            loadingOverlayComponent: () => <Spinner />,
          }}
        />
      </EventWrapper>
      <PaginationPanel
        pageNumber={pageNumber}
        pageSize={PAGE_SIZE}
        eventsResponse={currentEventsResponse.data}
        onButtonPrevious={onButtonPrevious}
        onButtonNext={onButtonNext}
      />
    </>
  );
  return widgetView;
};
