import { ChangeEvent } from 'react';
import { EventFilters } from '@luma-fe-workspace/redux';
import { CheckBox, OptionName, OptionRow } from './FilterOption.styles';

interface FilterCategoryProps {
  sectionTitle: string;
  categoryTitle: string;
  options: string[] | null;
  selectedFilters: EventFilters;
  setSelectedFilters: (data: EventFilters) => void;
  showAll: boolean;
}

export const FilterOption = ({
  options,
  selectedFilters,
  sectionTitle,
  categoryTitle,
  setSelectedFilters,
  showAll,
}: FilterCategoryProps) => {
  if (!options) return null;
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const selection = e.target.value;
    const updatedOptions = [
      ...(selectedFilters[sectionTitle][categoryTitle] ?? []),
    ];
    const index = updatedOptions.indexOf(selection);
    if (index > -1) {
      updatedOptions.splice(index, 1);
    } else {
      updatedOptions.push(selection);
    }

    setSelectedFilters({
      ...selectedFilters,
      [sectionTitle]: {
        ...selectedFilters[sectionTitle],
        [categoryTitle]: updatedOptions,
      },
    });
  };

  return (
    <div>
      {options
        ?.sort((a, b) =>
          selectedFilters[sectionTitle][categoryTitle]?.includes(a) <
          selectedFilters[sectionTitle][categoryTitle]?.includes(b)
            ? 1
            : -1
        )
        .map((option, i) => {
          if ((!showAll && i > 1) || !option) return null;
          return (
            <OptionRow key={option}>
              <CheckBox
                type="checkbox"
                onChange={(e) => handleCheckbox(e)}
                value={option}
                checked={selectedFilters[sectionTitle][categoryTitle]?.includes(
                  option
                )}
              />
              <OptionName>{option}</OptionName>
            </OptionRow>
          );
        })}
    </div>
  );
};
