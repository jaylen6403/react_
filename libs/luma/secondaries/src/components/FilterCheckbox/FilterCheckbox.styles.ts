import { colors } from '@luma-fe-workspace/design-system';
import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.div`
  position: relative;
`;

export const StyledFilterCheckbox = styled.div<{
  isOpen: boolean;
  selected: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  height: 100%;
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
  color: ${colors.greyMedium};
  ${({ isOpen }) =>
    isOpen &&
    css`
      input {
        outline: none;
        padding: 0.625rem;
        height: 1.875rem;
      }
    `};
  ${({ selected }) =>
    selected &&
    css`
      background: ${colors.neutral80};
      color: ${colors.greyFade};
      svg {
        color: ${colors.greyFade};
      }
    `};
  &:hover {
    background: ${colors.neutral10};
    box-shadow: 1px 1px 3px solid ${colors.greyFade};
    color: ${colors.greyDark};
    svg {
      color: ${colors.greyDark};
    }
  }

  svg {
    margin: 0.5rem;
  }
`;

export const FilterCheckboxList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 1.875rem;
  left: 1.25rem;
  z-index: 1;
  border-radius: 0.25rem;
  background: ${colors.greyFade};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

export const FilterListItem = styled.li`
  cursor: pointer;
  width: 13.75rem;
  background: ${colors.greyFade};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${colors.greyLighter};
  }

  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
  }

  div {
    width: 13.125rem;
    border-bottom: 1px solid ${colors.greyLight};
    padding: 0.625rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilterCheckboxListItem = styled(FilterListItem)<{
  isFaded?: boolean;
}>`
  ${({ isFaded }) =>
    isFaded &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  &:hover {
    background: ${colors.greyLighter};
  }

  label {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.375rem 0.75rem;
  }

  // default checkbox style is invisible
  input {
    display: none;
  }

  // svg for checked state sits over invisible checkbox
  input + label svg {
    opacity: 0;
  }

  // svg becomes visible when checkbox is checked
  input:checked + label svg {
    opacity: 1;
  }
`;

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  margin: 0;
`;
