import { useMemo } from 'react';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';
import { FilterDropdown, FilterDropdownOptions } from '../FilterDropdown';
import { formatEventType } from '../../../../../utils/gridUtils';

export const EventTypeFilterDropdown = () => {
  const { events, eventTypeFilter } = useEventConfirmationOptions();
  const eventTypes = useMemo(
    () => [
      ...new Set(
        events.data.flatMap((event) => formatEventType(event.eventType) || [])
      ),
    ],
    [events.data]
  );

  const options: FilterDropdownOptions<string>[] = useMemo(
    () =>
      eventTypes.map((eventType) => ({ label: eventType, value: eventType })),
    [eventTypes]
  );

  return (
    <FilterDropdown<string>
      options={options}
      label={`Event Type`}
      selected={eventTypeFilter.value}
      onChange={(typeValue) =>
        //Sadly this must be any for the time being as the correct MenuItem is not export from the design-system
        eventTypeFilter.setFilter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeValue.map((typeOption: any) => typeOption.value) || []
        )
      }
    />
  );
};
