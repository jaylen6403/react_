import { useMemo } from 'react';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';
import { FilterDropdown, FilterDropdownOptions } from '../FilterDropdown';
import { formatConfirmationStatus } from '../../../../../utils/gridUtils';

export const ConfirmationStatusFilterDropdown = () => {
  const { events, confirmationStatusFilter } = useEventConfirmationOptions();

  const confirmationStatuses = useMemo(
    () => [
      ...new Set(
        events.data.flatMap(
          (event) => formatConfirmationStatus(event)?.status || []
        )
      ),
    ],
    [events.data]
  );

  const options: FilterDropdownOptions<string>[] = useMemo(
    () =>
      confirmationStatuses.map((confirmationStatus) => ({
        label: confirmationStatus,
        value: confirmationStatus,
      })),
    [confirmationStatuses]
  );

  return (
    <FilterDropdown<string>
      options={options}
      label="Event Status"
      selected={confirmationStatusFilter.value}
      onChange={(typeValue) =>
        //Sadly this must be any for the time being as the correct MenuItem is not export from the design-system
        confirmationStatusFilter.setFilter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeValue.map((typeOption: any) => typeOption.value) || []
        )
      }
    />
  );
};
