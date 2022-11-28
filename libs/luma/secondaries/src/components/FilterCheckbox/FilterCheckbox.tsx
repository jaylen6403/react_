import { useState, useRef, SyntheticEvent } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import {
  StyledFilterCheckbox,
  FilterCheckboxList,
  FilterCheckboxListItem,
  CheckBoxInput,
  CheckboxContainer,
  FilterListItem,
} from './FilterCheckbox.styles';
import { Icon } from '@luma-fe-workspace/design-system';

interface CheckBoxProps {
  multi?: boolean;
  fieldText: string;
  defaultOption?: string;
  options: string[];
  checkedOptions: string[];
  setCheckedOptions: (options: string[]) => void;
}

export const FilterCheckBox = ({
  multi,
  fieldText,
  defaultOption = '',
  options,
  checkedOptions,
  setCheckedOptions,
}: CheckBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const checkboxRef = useRef(null);

  const handleCheckedItem = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const clickedItem = target.name;

    if (multi) {
      if (target.checked) {
        setCheckedOptions([...checkedOptions, clickedItem]);
      } else {
        const notCheckedOptions = checkedOptions.filter(
          (option: string) => option !== clickedItem
        );
        setCheckedOptions(notCheckedOptions);
      }
    } else {
      if (checkedOptions.includes(clickedItem)) {
        const notCheckedOptions = checkedOptions.filter(
          (option: string) => option !== clickedItem
        );
        setCheckedOptions(notCheckedOptions);
      } else {
        setCheckedOptions([clickedItem]);
      }
    }
  };

  useOnClickOutside(checkboxRef, () => setIsOpen(false));

  return (
    <CheckboxContainer ref={checkboxRef}>
      <StyledFilterCheckbox
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        selected={!!checkedOptions.length}
      >
        {fieldText}
        <Icon iconCode="chevron-down" />
      </StyledFilterCheckbox>
      {isOpen && (
        <FilterCheckboxList>
          <FilterListItem onClick={() => setCheckedOptions([])}>
            <div>
              {defaultOption || options[0]}
              {checkedOptions.length === 0 && <Icon iconCode="check" />}
            </div>
          </FilterListItem>
          {options.map((option, index) => {
            const checked = checkedOptions.includes(option);
            return (
              <FilterCheckboxListItem key={`${option}${index}`}>
                <CheckBoxInput
                  id={option}
                  name={option}
                  onChange={handleCheckedItem}
                  checked={checked}
                />
                <label htmlFor={option}>
                  {option}
                  <Icon iconCode="check" />
                </label>
              </FilterCheckboxListItem>
            );
          })}
        </FilterCheckboxList>
      )}
    </CheckboxContainer>
  );
};
