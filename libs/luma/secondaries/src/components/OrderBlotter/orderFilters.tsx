import { SecondaryOrder } from '@luma-fe-workspace/redux';
import { FiltersFor } from '../AGGridTable/hooks/useFilter';

type OrderBlotterFilters = {
  cusipOrIsin: string;
  status: string[];
  side: string[];
};

export const orderFilters: FiltersFor<SecondaryOrder, OrderBlotterFilters> = [
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
    handler: (filterValues, data) =>
      filterValues[0].toLocaleLowerCase() === data.side?.toLocaleLowerCase(),
  },
];
