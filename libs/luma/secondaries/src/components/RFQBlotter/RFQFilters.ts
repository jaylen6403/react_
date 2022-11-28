import { SecondaryRequestForQuote } from '@luma-fe-workspace/redux';
import { FiltersFor } from '../AGGridTable/hooks/useFilter';

type RFQBlotterFilters = {
  cusipOrIsin: string;
  status: string[];
  side: string[];
};

export const RFQFilters: FiltersFor<
  SecondaryRequestForQuote,
  RFQBlotterFilters
> = [
  {
    field: 'cusipOrIsin',
    handler: (filterValues, data) =>
      data.productIdentifier?.securityIdentifierValue
        ?.toLocaleLowerCase()
        .includes(filterValues[0].toLocaleLowerCase()) ?? false,
  },
  {
    field: 'status',
    handler: (filterValues, data) =>
      filterValues.some(
        (filterValue) =>
          filterValue.toLocaleLowerCase() === data.status?.toLocaleLowerCase()
      ),
  },
  {
    field: 'side',
    handler: (filterValues, data) => {
      const requestType =
        data.requestType === 'BWIC' ? 'Bid Wanted' : 'Offer Wanted';
      return (
        filterValues[0].toLocaleLowerCase() === requestType.toLocaleLowerCase()
      );
    },
  },
];
