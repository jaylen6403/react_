import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EventProductData } from '@luma-fe-workspace/redux';
import { URL_PATHS } from '@luma-fe-workspace/utility';

import {
  UnderlierColumn,
  formatIssuerColumn,
  generateActions,
  IssuerNameTooltip,
  StatusComponent,
  StructuredComponent,
  ThresholdProximityColumn,
} from '../../AGGridTable/AGGridTableComponents';
import { AGGridConfirmationsTable, RowData } from '../../AGGridTable';
import { EmailPreviewDrawer } from '../../EmailPreviewDrawer';
import { EventDetail } from '../../EventDetail';
import {
  formatConfirmationStatus,
  formatEventType,
  getPrincipalProximityData,
  ISODateToFormat,
  eventDateFilterComparator,
} from '../../../utils/gridUtils';
import { ConfirmationPopUp } from '../../ConfirmationPopUp';
import {
  StatusOptions,
  useEventConfirmationOptions,
} from '../../../utils/hooks/useEventConfirmationOptions';
interface Props {
  eventsData: EventProductData[];
}

export const ClientApproverEventConfirmations = ({ eventsData }: Props) => {
  const { events, clientModal, toastData } = useEventConfirmationOptions();

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
    { field: 'Structure', cellRenderer: StructuredComponent },
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
    {
      field: 'Action',
      cellRenderer: generateActions(clientModal.setData, setProductStructure),
      suppressMenu: true,
      sortable: false,
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
    };
    compileRowData();
    events.setEvents(eventsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsData]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const productQuery = new URLSearchParams(location.search).get('product');

    if (productQuery) {
      const event = eventsData.filter(
        (elem) => elem.productIdentifier === productQuery
      );
      clientModal.setData(event[0]);
      setProductStructure(event[0].structureNameInternal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsData]);

  useEffect(() => {
    if (clientModal.data)
      navigate(
        `/${URL_PATHS.CONFIRMATIONS}?product=${clientModal.data.productIdentifier}`
      );
    else {
      navigate(`/${URL_PATHS.CONFIRMATIONS}`);
    }
  }, [clientModal.data, navigate]);

  return (
    <>
      <AGGridConfirmationsTable rowData={rowData} columnData={columnDefs} />
      <EmailPreviewDrawer
        isOpen={Boolean(clientModal.data)}
        closeDrawer={() => clientModal.setData(undefined)}
      >
        {clientModal.data ? (
          <EventDetail
            isOpen={Boolean(clientModal.data)}
            productData={clientModal.data}
            closeDrawer={() => clientModal.setData(undefined)}
          />
        ) : null}
      </EmailPreviewDrawer>
      <ConfirmationPopUp
        closePopUp={() => toastData.setStatus(StatusOptions.None)}
        productStructure={productStructure}
        successHeader="Email Sent"
        failureHeader="Failed to Send"
      />
    </>
  );
};
