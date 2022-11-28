import {
  LifecycleEventLM,
  selectLifecycleEventDisplayCurrency,
  useAppSelector,
  useGetFiltersUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { useState } from 'react';
import { AccountsByRepDrawer } from '../AccountsByRepDrawer/AccountsByRepDrawer';
import { ColumnChartCard } from '../ColumnChart/ColumnChartCard';
import { EventTable } from '../EventTable/EventTable';
import { PayoutSummary } from '../PayoutSummary/PayoutSummary';
import { PieChartCard } from '../PieChart/PieChartCard';
import {
  EventContainer,
  EventMetrics,
  EventTableContainer,
} from './EventsPage.styles';
import { GridApi } from 'ag-grid-community';

interface EventsPageProps {
  currentGridApi: GridApi | undefined;
  setCurrentGridApi: (gridApi: GridApi) => void;
}

export const EventsPage = ({
  currentGridApi,
  setCurrentGridApi,
}: EventsPageProps) => {
  const [selectedEvent, setSelectedEvent] = useState<LifecycleEventLM>();
  const [infoWidgetsCollapsed, setInfoWidgetCollapsed] =
    useState<boolean>(false);
  useGetFiltersUsingGetQuery({
    displayCurrency: useAppSelector(selectLifecycleEventDisplayCurrency),
  });

  return (
    <EventContainer>
      <AccountsByRepDrawer
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
      <EventMetrics>
        <PayoutSummary
          title={' Payout Summary'}
          styles={'width: 20%;'}
          isCollapsed={infoWidgetsCollapsed}
          setIsCollapsed={setInfoWidgetCollapsed}
        />
        <ColumnChartCard
          title={'Event Forecast'}
          styles={'width: 48%;'}
          isCollapsed={infoWidgetsCollapsed}
          setIsCollapsed={setInfoWidgetCollapsed}
        />
        <PieChartCard
          title={'Exposure Allocation'}
          styles={'width: 30%;'}
          isCollapsed={infoWidgetsCollapsed}
          setIsCollapsed={setInfoWidgetCollapsed}
        />
      </EventMetrics>
      <EventTableContainer>
        <EventTable
          setSelectedEvent={setSelectedEvent}
          currentGridApi={currentGridApi}
          setCurrentGridApi={setCurrentGridApi}
        />
      </EventTableContainer>
    </EventContainer>
  );
};
