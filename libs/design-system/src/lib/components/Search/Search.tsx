import * as React from 'react';
import { useCombobox } from 'downshift';

import {
  Root,
  Input,
  CircleButton,
  SearchWrapper,
  ResultsWrapper,
  SearchListItemContainer,
  SearchResultsList,
  StyledSearchIcon,
  StyledCloseIcon,
} from './Search.styles';

interface Props<Item> {
  items: Item[];
  initialValue: string;
  handleSelectItem?: (item: Item | null | undefined) => void;
  handleChange?: (value: string | undefined) => void;
  handleBlur?: () => void;
  itemToString?: (item: Item | null) => string;
  placeholder?: string;
  renderContent: React.ReactElement<{ item: Item }>;
  inputAriaLabel: string;
  buttonAriaLabel: string;
  width?: string;
  marginRight?: string;
}

export const Search = <Item,>({
  items,
  initialValue,
  handleSelectItem,
  handleChange,
  handleBlur,
  renderContent,
  itemToString,
  inputAriaLabel,
  buttonAriaLabel,
  width,
  marginRight,
  ...rest
}: Props<Item>) => {
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    reset,
  } = useCombobox<Item>({
    itemToString,
    inputValue: initialValue,
    items,
    onInputValueChange: ({ inputValue }) => {
      handleChange?.(inputValue);
      return;
    },
    onSelectedItemChange({ selectedItem: selectedItemEvent }) {
      handleSelectItem?.(selectedItemEvent);
    },
  });

  const inputProps = getInputProps({
    'aria-label': inputAriaLabel,
    'aria-labelledby': '',
  });
  return (
    <SearchWrapper>
      <div {...getComboboxProps()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Root width={width} marginRight={marginRight}>
            <StyledSearchIcon iconCode="search" />

            <Input {...rest} name={'search'} {...inputProps} />
            <CircleButton
              name="clear input"
              aria-label={buttonAriaLabel}
              onClick={() => {
                reset();
              }}
            >
              <StyledCloseIcon iconCode="times-circle" />
            </CircleButton>
          </Root>
        </form>
      </div>
      <ResultsWrapper>
        <SearchResultsList
          isOpen={isOpen && items.length > 0}
          {...getMenuProps({ 'aria-labelledby': inputProps.id })}
          width={width}
        >
          {isOpen && items.length > 0
            ? items.map((item: Item, index: number) => (
                <SearchListItemContainer
                  isHighlighted={highlightedIndex === index}
                  key={index}
                  {...getItemProps({ item, index })}
                >
                  {React.cloneElement(renderContent, { item })}
                </SearchListItemContainer>
              ))
            : null}
        </SearchResultsList>
      </ResultsWrapper>
    </SearchWrapper>
  );
};
