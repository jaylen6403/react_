import { RowData } from './AGGridTable';
import { DateFormatter, DateHelper } from '@luma-fe-workspace/utility';

// "this" is the list of columnValues
function columnSearch(this: (string | null)[], searchValue: string): boolean {
  if (
    !this.map((columnValue: string | null) => columnValue?.toLowerCase()).some(
      (columnValue: string | undefined) =>
        columnValue?.includes(searchValue.toLowerCase())
    )
  ) {
    return false;
  }
  return true;
}

const searchFilter = (data: RowData, searchFilterValue: string[]): boolean => {
  const columnValues = [
    data.Product,
    data.eventProductData?.productSymbol,
    data.eventProductData?.issuer,
    data?.Underliers?.map((underlier) => underlier.ticker).join(' '),
    data.confirmationStatus?.status,
    data['Event Type'],
  ];

  return searchFilterValue.every(columnSearch, columnValues);
};

export const doesExternalFilterPass = (
  data: RowData | undefined,
  eventTypeFilterValues: string[],
  confirmationStatusFilterValues: string[],
  searchFilterValue: string[],
  startDateValue: Date | null,
  endDateValue: Date | null,
  regTypeFilterValues: string[]
): boolean => {
  if (data) {
    if (
      data['Event Type'] &&
      eventTypeFilterValues.length &&
      !eventTypeFilterValues.includes(data['Event Type'])
    )
      return false;
    if (
      data.confirmationStatus?.status &&
      confirmationStatusFilterValues.length &&
      !confirmationStatusFilterValues.includes(data.confirmationStatus?.status)
    )
      return false;
    if (!searchFilter(data, searchFilterValue)) return false;

    if (data['Event Date']) {
      const obvDate = new Date(
        DateFormatter.formatLocalDate(new Date(data['Event Date']))
      );

      if (
        (startDateValue &&
          DateHelper.isDateBefore(
            obvDate,
            new Date(DateFormatter.formatLocalDate(startDateValue))
          )) ||
        (endDateValue &&
          DateHelper.isDateBefore(
            new Date(DateFormatter.formatLocalDate(endDateValue)),
            obvDate
          ))
      ) {
        return false;
      }
    }

    if (
      data['Registration Type'] &&
      regTypeFilterValues.length &&
      !regTypeFilterValues.includes(data['Registration Type'])
    ) {
      return false;
    }
  }
  return true;
};
