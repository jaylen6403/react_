import {
  OptionsContainer,
  FiltersContainer,
  SelectedOptionsContainer,
  ClearAllFilters,
} from './EventConfirmationOptions.styles';
import { DateRangeFilter } from './Filters/DatePicker';
import { EventTypeFilterDropdown } from './Filters/EventTypeFilterDropdown';
import { EventConfirmationsSearch } from './Filters/EventConfirmationsSearch';
import { Pill } from '../../Pill';
import { useEventConfirmationOptions } from '../../../utils/hooks/useEventConfirmationOptions';
import { ConfirmationStatusFilterDropdown } from './Filters/ConfirmationStatusFilterDropdown';
import { RegTypeFilterDropdown } from './Filters/RegTypeFilterDropdown';
import { LumaIcon } from '@luma-fe-workspace/design-system';

// simple function to remove a value from an array by value
function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const EventConfirmationOptions = () => {
  const {
    eventTypeFilter,
    confirmationStatusFilter,
    doFiltersExist,
    resetFilters,
    regTypeFilter,
  } = useEventConfirmationOptions();

  return (
    <OptionsContainer>
      <FiltersContainer>
        <EventConfirmationsSearch />
        <DateRangeFilter />
        <EventTypeFilterDropdown />
        <ConfirmationStatusFilterDropdown />
        <RegTypeFilterDropdown />
      </FiltersContainer>
      {doFiltersExist && (
        <SelectedOptionsContainer>
          {eventTypeFilter.value.map((eventType: string, idx: number) => (
            <Pill
              text={eventType}
              icon="xmark"
              key={idx}
              onPillClick={() =>
                eventTypeFilter.setFilter(
                  removeItem<string>([...eventTypeFilter.value], eventType)
                )
              }
            />
          ))}
          {confirmationStatusFilter.value.map(
            (confirmationStatus: string, idx: number) => (
              <Pill
                text={confirmationStatus}
                icon="xmark"
                key={idx}
                onPillClick={() =>
                  confirmationStatusFilter.setFilter(
                    removeItem<string>(
                      [...confirmationStatusFilter.value],
                      confirmationStatus
                    )
                  )
                }
              />
            )
          )}
          {regTypeFilter.value.map((regType: string, idx: number) => (
            <Pill
              text={regType}
              icon="xmark"
              key={idx}
              onPillClick={() =>
                regTypeFilter.setFilter(
                  removeItem<string>([...regTypeFilter.value], regType)
                )
              }
            />
          ))}
          <ClearAllFilters onClick={() => resetFilters()}>
            <LumaIcon iconCode="xmark" />
            Clear All Filters
          </ClearAllFilters>
        </SelectedOptionsContainer>
      )}
    </OptionsContainer>
  );
};
