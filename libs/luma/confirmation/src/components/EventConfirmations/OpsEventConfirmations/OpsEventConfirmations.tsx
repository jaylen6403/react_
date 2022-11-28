import { useState, useEffect } from 'react';
import { EventProductData } from '@luma-fe-workspace/redux';

import { EventConfirmationModal } from '../../EventConfirmationModal/EventConfirmationModal';
import {
  UnderlierColumn,
  formatIssuerColumn,
  StatusComponent,
  StructuredComponent,
  IssuerNameTooltip,
  ThresholdProximityColumn,
} from '../../AGGridTable/AGGridTableComponents';
import { AGGridConfirmationsTable, RowData } from '../../AGGridTable';
import {
  formatConfirmationStatus,
  formatEventType,
  getPrincipalProximityData,
  ISODateToFormat,
  eventDateFilterComparator,
} from '../../../utils/gridUtils';
import {
  useEventConfirmationOptions,
  StatusOptions,
} from '../../../utils/hooks/useEventConfirmationOptions';

import { ConfirmationPopUp } from '../../ConfirmationPopUp';

interface Props {
  eventsData: EventProductData[];
}

export const OpsEventConfirmations = ({ eventsData }: Props) => {
  const { events, opsModal, toastData } = useEventConfirmationOptions();
  const [rowData, setRowData] = useState<RowData[] | []>([]);
  const [productStructure, setProductStructure] = useState<string | undefined>(
    undefined
  );

  const [columnDefs] = useState([
    {
      field: 'Product',
      cellRenderer: formatIssuerColumn,
      tooltipComponent: IssuerNameTooltip,
      tooltipField: 'Product',
      suppressMenu: true,
    },
    {
      field: 'Event Date',
      comparator: eventDateFilterComparator,
    },
    {
      field: 'Registration Type',
      filter: false,
      suppressMenu: true,
    },
    { field: 'Event Type', suppressMenu: true },
    {
      field: 'Proximity',
      suppressMenu: true,
      sortable: false,
      filter: false,
      cellRenderer: ThresholdProximityColumn,
    },
    {
      field: 'Structure',
      cellRenderer: StructuredComponent,
    },
    { field: 'Basket Type', suppressMenu: true },
    {
      field: 'Underliers',
      cellRenderer: UnderlierColumn,
      sortable: false,
      filter: false,
      suppressMenu: true,
    },
    {
      field: 'Event Calculation',
      cellRenderer: StatusComponent,
      suppressMenu: true,
    },
  ]);

  useEffect(() => {
    const compileRowData = () => {
      const updatedEvents = eventsData.map((event) => {
        const eventType = formatEventType(event.eventType);
        const confirmationStatus = formatConfirmationStatus(event);
        const { principalProximityAboveOrBelow, principalProximityValue } =
          getPrincipalProximityData(event.principalProximity);

        return {
          activeUnderlier: event.activeUnderlier,
          Product: event.productIdentifier,
          'Event Date': ISODateToFormat(event.eventDate),
          'Registration Type': event.registrationType,
          'Event Type': eventType,
          Threshold: event.principalProximityThreshold,
          Structure: event.structureNameInternal,
          Underliers: event.underlierList,
          cusip: event.productIdentifier,
          'Event Calculation': confirmationStatus?.status,
          'Basket Type': event.basketType,
          cashSettlementRates: event.cashSettlementRates,
          confirmationStatus: confirmationStatus,
          eventProductData: event,
          productSymbol: event.productSymbol,
          principalProximityAboveOrBelow: principalProximityAboveOrBelow,
          principalProximityValue: principalProximityValue,
          underlierPerformance: event.underlierPerformance,
          downsideType: event.downsideType,
        };
      });

      setRowData(updatedEvents);
      events.setEvents(eventsData);
    };
    compileRowData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsData]);

  return (
    <>
      <AGGridConfirmationsTable
        rowData={rowData}
        columnData={columnDefs}
        setModalOpen={opsModal.setOpen}
        modalOpen={opsModal.isOpen}
        modalData={opsModal.data}
        setModalData={opsModal.setData}
        setProductStructure={setProductStructure}
      />
      <EventConfirmationModal
        modalOpen={opsModal.isOpen}
        setModalOpen={opsModal.setOpen}
      />
      <ConfirmationPopUp
        closePopUp={() => toastData.setStatus(StatusOptions.None)}
        productStructure={productStructure}
        successHeader="Values Submitted"
        failureHeader="Failed to Submit"
      />
    </>
  );
};
