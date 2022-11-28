import { useMemo } from 'react';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';
import {
  FilterDropdown,
  FilterDropdownOptions,
} from '../FilterDropdown/FilterDropdown';

export const RegTypeFilterDropdown = () => {
  const { events, regTypeFilter } = useEventConfirmationOptions();
  const regTypes = useMemo(
    () => [
      ...new Set(events.data.flatMap((event) => event.registrationType || [])),
    ],
    [events.data]
  );

  const options: FilterDropdownOptions<string>[] = useMemo(
    () =>
      regTypes.map((regType) => ({
        label: regType,
        value: regType,
      })),
    [regTypes]
  );

  return (
    <FilterDropdown<string>
      options={options}
      label={`Registration Type`}
      selected={regTypeFilter.value}
      onChange={(typeValue) =>
        //Sadly this must be any for the time being as the correct MenuItem is not export from the design-system
        regTypeFilter.setFilter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeValue.map((typeOption: any) => typeOption.value) || []
        )
      }
    />
  );
};
