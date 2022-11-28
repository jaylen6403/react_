import { EventFilters, CategoryFilter } from '@luma-fe-workspace/redux';
import { FilterCategory } from '../FilterCategory/FilterCategory';
import {
  FilterCategories,
  FilterWrapper,
  Header,
  HeaderRow,
  ResetButton,
} from './FilterSection.styles';

interface FilterSectionProps {
  sectionTitle: string;
  filters: CategoryFilter;
  selectedFilters: EventFilters;
  setSelectedFilters: (data: EventFilters) => void;
}

export const FilterSection = ({
  filters,
  sectionTitle,
  selectedFilters,
  setSelectedFilters,
}: FilterSectionProps) => {
  const filterCategories = Object.entries(filters);

  const resetKeys = () => {
    const resetObject: CategoryFilter = {};
    filterCategories.forEach((category) => {
      resetObject[category[0]] = [];
    });
    setSelectedFilters({
      ...selectedFilters,
      [sectionTitle]: resetObject,
    });
  };

  return (
    <FilterWrapper>
      <HeaderRow>
        <Header>{sectionTitle.toLowerCase().replace('attributes', '')}</Header>
        <ResetButton onClick={resetKeys}>Reset</ResetButton>
      </HeaderRow>
      <FilterCategories>
        {filterCategories.map((category) => {
          const categoryTitle = category[0];
          let options = category[1];
          if (!options || options.length === 0) {
            return null;
          }
          // Remove null or undefined options
          options = options.filter((option) => !!option);
          return (
            <FilterCategory
              key={categoryTitle}
              sectionTitle={sectionTitle}
              categoryTitle={categoryTitle}
              options={options}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          );
        })}
      </FilterCategories>
    </FilterWrapper>
  );
};
