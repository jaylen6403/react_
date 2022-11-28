import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  Placeholder,
  PlaceholderText,
  SearchInput,
  SearchInputWrapper,
} from './EventConfirmationsSearch.styles';
import { useEventConfirmationOptions } from '../../../../../utils/hooks/useEventConfirmationOptions';

export const EventConfirmationsSearch = () => {
  const [isFocus, setIsFocus] = useState(false);
  const { searchFilter } = useEventConfirmationOptions();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    isFocus ? setIsFocus(false) : setIsFocus(true);
  };

  return (
    <SearchInputWrapper>
      {!isFocus &&
      searchFilter.value[0].length === 0 &&
      searchFilter.value.length === 1 ? (
        <Placeholder>
          <MagnifyingGlassIcon iconCode={'magnifying-glass'} />
          <PlaceholderText>Search...</PlaceholderText>
        </Placeholder>
      ) : null}
      <SearchInput
        disabled={false}
        hasError={false}
        onChange={(event) =>
          searchFilter.setFilter(event.target.value.split(' '))
        }
        onFocus={handleFocus}
        onBlur={handleFocus}
        value={searchFilter.value.join(' ')}
      />
    </SearchInputWrapper>
  );
};
