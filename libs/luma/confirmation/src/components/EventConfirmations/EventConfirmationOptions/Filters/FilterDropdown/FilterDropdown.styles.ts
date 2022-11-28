import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { MultiSelect } from '@luma-fe-workspace/design-system';

export const FilterDropdownContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.0625rem;
  border-radius: 0.5rem;
  background-color: ${colors.neutral00white};
  color: ${colors.greyDark};
  font-size: 0.75rem;
  border: solid 1px ${colors.neutral40};
  width: 10rem;
`;

export const CustomMultiSelectDropDown = styled(MultiSelect)`
  text-align: start;
  width: 100%;

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  ul {
    border: solid 1px ${colors.neutral80};
    color: blue;
    background-color: ${colors.neutral00white} !important;
    li {
      width: 10rem;
      justify-content: start;
      border-bottom: solid 1px ${colors.neutral40};
      border-radius: 0px;
    }
  }
  ul:empty {
    border: none;
  }
`;
