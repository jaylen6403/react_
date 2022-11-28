import styled, { css } from 'styled-components';

import { colors } from '../../colors';
import { Icon } from '../Icon/Icon';

export const SearchWrapper = styled.div`
  width: 25.0625rem;
`;

export const Root = styled.div<{ width?: string; marginRight?: string }>`
  background-color: ${colors.white};
  border-radius: 0.375rem;
  border: 0.0625rem solid ${colors.greyLight};
  width: ${(props) => props.width ?? '25.0625rem'};
  margin-right: ${(props) => props.marginRight ?? '0'};
  display: flex;
  align-items: center;
  padding: 0.125rem 0.125rem;

  :hover {
    border: 0.0625rem solid #4594b0;
  }

  :focus-within {
    border: 0.0625rem solid #4594b0;
    box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  }
`;

export const Input = styled.input`
  background-color: ${colors.white};
  border: none;
  color: ${colors.greyDarker};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;
  flex: 1;
  margin-left: 0.6875rem;

  ::placeholder {
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${colors.greyLight};
  }

  :focus {
    caret-color: #4594b0;
    outline: none;
  }

  :not(:focus):not(:placeholder-shown):valid {
    color: ${colors.greyLight};
  }

  /* removes x from search input field */
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export const CircleButton = styled.button`
  all: unset;
  margin: 0.75rem;
`;

export const ResultsWrapper = styled.div`
  position: absolute;
`;

const menuIsOpen = css`
  border: 0.0625rem solid ${colors.greyLight};
`;
const menuIsClosed = css`
  border: none;
`;
export const SearchResultsList = styled.ul<{
  isOpen?: boolean;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  width: ${(props) => props.width ?? '25.0625rem'};
  max-height: 18.6875rem;
  background-color: ${colors.white};
  list-style-type: none;
  overflow: auto;
  border-radius: 0.25rem;
  ${(props) => (props.isOpen ? menuIsOpen : menuIsClosed)}
  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
`;

export const SearchResultsTextCusip = styled.p`
  color: ${colors.greyMedium};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0.125rem;
`;

export const SearchResultsTextDetails = styled.p`
  color: ${colors.greyDarker};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 0rem;
  margin-bottom: 0.5rem;
`;

export const SearchListItemContainer = styled.li<{ isHighlighted: boolean }>`
  align-content: flex-start;
  padding: 0rem 1.25rem 0rem 1.25rem;
  box-shadow: inset 0rem -0.0625rem 0rem ${colors.greyLightest};
  min-height: 4.375rem;
  background-color: ${(props) =>
    props.isHighlighted ? 'rgba(147, 195, 213, 0.2)' : colors.white};

  :active {
    background-color: ${colors.ocean};
  }
`;

export const StyledSearchIcon = styled(Icon)`
  font-size: 0.875rem;
  color: ${colors.greyMedium};
  margin-left: 0.6875rem;
`;

export const StyledCloseIcon = styled(Icon)`
  font-size: 0.875rem;
  color: ${colors.greyLightest};

  :hover {
    color: ${colors.greyMedium};
  }
`;
