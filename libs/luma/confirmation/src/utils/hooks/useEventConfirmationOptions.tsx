import React, {
  useState,
  useContext,
  createContext,
  useMemo,
  useCallback,
  SetStateAction,
} from 'react';
import { EventProductData } from '@luma-fe-workspace/redux';

export enum StatusOptions {
  Success = 'success',
  Failure = 'failure',
  None = 'none',
}

interface EventTypeFilter {
  value: string[];
  setFilter: React.Dispatch<string[]>;
}
interface ConfirmationStatusFilter {
  value: string[];
  setFilter: React.Dispatch<string[]>;
}
interface SearchFilter {
  value: string[];
  setFilter: React.Dispatch<string[]>;
}

interface RegTypeFilter {
  value: string[];
  setFilter: React.Dispatch<string[]>;
}
interface DateRangeFilter {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<Date | null>;
  setEndDate: React.Dispatch<Date | null>;
}
interface Events {
  data: EventProductData[];
  setEvents: React.Dispatch<EventProductData[]>;
}
interface OpsModal {
  isOpen: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  data: EventProductData | undefined;
  setData: React.Dispatch<SetStateAction<EventProductData | undefined>>;
}
interface ClientModal {
  data: EventProductData | undefined;
  setData: React.Dispatch<SetStateAction<EventProductData | undefined>>;
}

interface ToastData {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  status: StatusOptions;
  setStatus: React.Dispatch<SetStateAction<StatusOptions>>;
}
interface EventConfirmationOptions {
  events: Events;
  eventTypeFilter: EventTypeFilter;
  confirmationStatusFilter: ConfirmationStatusFilter;
  regTypeFilter: RegTypeFilter;
  // Are there currently filters selected? this must be in this hook so that we can conditionally display error messages
  // based on no events pulled back, vs no events fit this critera
  doFiltersExist: boolean;
  resetFilters: () => void;
  searchFilter: SearchFilter;
  dateRangeFilter: DateRangeFilter;
  opsModal: OpsModal;
  clientModal: ClientModal;
  toastData: ToastData;
}

export const eventConfirmationOptionsContext =
  createContext<EventConfirmationOptions>({
    events: { data: [], setEvents: () => null },
    eventTypeFilter: {
      value: [],
      setFilter: () => null,
    },
    confirmationStatusFilter: {
      value: [],
      setFilter: () => null,
    },
    doFiltersExist: false,
    resetFilters: () => {
      /** do nothing */
    },
    searchFilter: {
      value: [],
      setFilter: () => null,
    },
    opsModal: {
      isOpen: false,
      setOpen: () => null,
      data: undefined,
      setData: () => null,
    },
    dateRangeFilter: {
      startDate: null,
      endDate: null,
      setStartDate: () => null,
      setEndDate: () => null,
    },
    regTypeFilter: {
      value: [],
      setFilter: () => null,
    },
    clientModal: {
      data: undefined,
      setData: () => null,
    },
    toastData: {
      open: false,
      setOpen: () => null,
      status: StatusOptions.None,
      setStatus: () => null,
    },
  });
export const useEventConfirmationOptions = (): EventConfirmationOptions =>
  useContext<EventConfirmationOptions>(eventConfirmationOptionsContext);

interface ContextProps {
  children: React.ReactNode;
}
export const ProvideEventConfirmationOptions = ({ children }: ContextProps) => {
  const options = useProvideEventConfirmationOptions();
  return (
    <eventConfirmationOptionsContext.Provider value={options}>
      {children}
    </eventConfirmationOptionsContext.Provider>
  );
};

const useProvideEventConfirmationOptions = (): EventConfirmationOptions => {
  const [events, setEvents] = useState<EventProductData[]>([]);
  const [eventTypeFilter, setEventTypeFilter] = useState<string[]>([]);
  const [confirmationStatusFilter, setConfirmationStatusFilter] = useState<
    string[]
  >([]);
  const [searchFilter, setSearchFilter] = useState<string[]>(['']);
  const [startDateRange, setStartDateRange] = useState<Date | null>(null);
  const [endDateRange, setEndDateRange] = useState<Date | null>(null);
  const [regTypeFilter, setRegTypeFilter] = useState<string[]>([]);
  const [opsModalOpen, setOpsModalOpen] = useState<boolean>(false);
  const [clientModalModalOpen, setClientModalOpen] = useState<
    EventProductData | undefined
  >(undefined);
  const [opsModalData, setOpsModalData] = useState<
    EventProductData | undefined
  >(undefined);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [toastStatus, setToastStatus] = useState<StatusOptions>(
    StatusOptions.None
  );

  const doFiltersExist = useMemo(() => {
    if (eventTypeFilter.length) return true;
    if (confirmationStatusFilter.length) return true;
    if (startDateRange) return true;
    if (endDateRange) return true;
    if (regTypeFilter.length) return true;
    if (
      !searchFilter.every((value) => value.length === 0) ||
      searchFilter[0].length > 0
    )
      return true;
    return false;
  }, [
    eventTypeFilter,
    confirmationStatusFilter,
    searchFilter,
    startDateRange,
    endDateRange,
    regTypeFilter,
  ]);
  const resetFilters = useCallback(() => {
    setEventTypeFilter([]);
    setConfirmationStatusFilter([]);
    setSearchFilter(['']);
    setStartDateRange(null);
    setEndDateRange(null);
    setRegTypeFilter([]);
  }, [
    setEventTypeFilter,
    setConfirmationStatusFilter,
    setSearchFilter,
    setStartDateRange,
    setEndDateRange,
    setRegTypeFilter,
  ]);

  return {
    events: { data: events, setEvents },
    eventTypeFilter: {
      value: eventTypeFilter,
      setFilter: setEventTypeFilter,
    },
    confirmationStatusFilter: {
      value: confirmationStatusFilter,
      setFilter: setConfirmationStatusFilter,
    },
    doFiltersExist,
    resetFilters,
    searchFilter: {
      value: searchFilter,
      setFilter: setSearchFilter,
    },
    regTypeFilter: {
      value: regTypeFilter,
      setFilter: setRegTypeFilter,
    },
    opsModal: {
      isOpen: opsModalOpen,
      setOpen: setOpsModalOpen,
      data: opsModalData,
      setData: setOpsModalData,
    },
    clientModal: {
      data: clientModalModalOpen,
      setData: setClientModalOpen,
    },
    dateRangeFilter: {
      startDate: startDateRange,
      endDate: endDateRange,
      setStartDate: setStartDateRange,
      setEndDate: setEndDateRange,
    },
    toastData: {
      open: toastOpen,
      setOpen: setToastOpen,
      status: toastStatus,
      setStatus: setToastStatus,
    },
  };
};
