import { RowNode } from 'ag-grid-community';
import { useCallback, useState } from 'react';

export type FiltersFor<D, F> = {
  field: keyof F;
  handler: (filterValues: string[], data: D) => boolean;
}[];

export function useFilter<D, F extends object>(filters: FiltersFor<D, F>) {
  const [filterValues, setFilterValues] = useState<
    Partial<Record<keyof F, string[]>>
  >({});

  const isExternalFilterPresent = useCallback((): boolean => true, []);

  const doesExternalFilterPass = useCallback(
    (node: RowNode): boolean => {
      return filters.every(
        ({ field, handler }) =>
          !filterValues[field] ||
          filterValues[field]?.length === 0 ||
          handler(filterValues[field] ?? [], node.data)
      );
    },
    [filterValues, filters]
  );

  const handleInputFilter = (key: keyof F, value: string) => {
    setFilterValues({ ...filterValues, [key]: [value] });
  };

  const handleCheckboxFilter = (key: keyof F, checked: string[]) => {
    setFilterValues({ ...filterValues, [key]: checked });
  };

  const handleClearFilters = () => {
    setFilterValues({});
  };

  return {
    isExternalFilterPresent,
    doesExternalFilterPass,
    handleInputFilter,
    handleCheckboxFilter,
    handleClearFilters,
    filterValues,
  };
}
