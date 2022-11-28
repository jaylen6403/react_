import { EventFilters } from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import { FilterOption } from '../FilterOption/FilterOption';
import {
  CategoryChevron,
  FilterCategoryContainer,
  FilterOptions,
  Header,
  HeaderRow,
  ShowAll,
} from './FilterCategory.styles';

interface FilterCategoryProps {
  sectionTitle: string;
  categoryTitle: string;
  options: string[];
  selectedFilters: EventFilters;
  setSelectedFilters: (data: EventFilters) => void;
}

function splitCamelCase(string: string) {
  return string.split(/(?=[A-Z])/).join(' ');
}

export const FilterCategory = ({
  sectionTitle,
  categoryTitle,
  options,
  selectedFilters,
  setSelectedFilters,
}: FilterCategoryProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
  const selectionCount = selectedFilters[sectionTitle][categoryTitle]?.length;

  useEffect(() => {
    if (expanded) {
      setShowAll(false);
    }
  }, [expanded]);

  return (
    <FilterCategoryContainer>
      <HeaderRow onClick={() => setExpanded(!expanded)}>
        <Header>
          {splitCamelCase(categoryTitle).toLocaleUpperCase()}
          {selectionCount > 0 && ` (${selectionCount})`}
        </Header>
        <CategoryChevron iconCode="chevron-down" rotate={expanded ? 180 : 0} />
      </HeaderRow>
      {expanded && (
        <FilterOptions>
          <FilterOption
            sectionTitle={sectionTitle}
            categoryTitle={categoryTitle}
            options={options}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            showAll={showAll}
          />
          {options && options.length > 2 && !showAll && (
            <ShowAll onClick={() => setShowAll(true)}>
              Show ({options.length - 2}) more
            </ShowAll>
          )}
        </FilterOptions>
      )}
    </FilterCategoryContainer>
  );
};
