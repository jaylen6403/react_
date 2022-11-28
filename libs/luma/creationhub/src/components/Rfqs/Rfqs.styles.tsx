import styled from 'styled-components';
import { LumaColor, LumaIcon } from '@luma-fe-workspace/design-system';

export const SearchWrapper = styled.div`
  width: 18.75rem;
  height: 2.5rem;
  margin: 0 0 0.75rem;
  padding: 0 0.75rem 0 0;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  border-radius: 0.375rem;
  border: 0.0625rem solid ${LumaColor.NEUTRAL_40};
  display: flex;
  align-items: center;
  :hover {
    border: 0.0625rem solid ${LumaColor.NEUTRAL_60};
  }
  :focus-within {
    border: 0.0625rem solid ${LumaColor.NEUTRAL_60};
    box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  }
`;

export const SearchInput = styled.input`
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  border: none;
  color: ${LumaColor.NEUTRAL_80};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;
  flex: 1;
  margin-left: 0.6875rem;
  ::placeholder {
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${LumaColor.NEUTRAL_40};
  }
  :focus {
    caret-color: ${LumaColor.NEUTRAL_60};
    outline: none;
  }
  :not(:focus):not(:placeholder-shown):valid {
    color: ${LumaColor.NEUTRAL_60};
  }
`;

export const SearchIcon = styled(LumaIcon)`
  font-size: 0.875rem;
  color: ${LumaColor.NEUTRAL_40};
  margin-left: 0.6875rem;
`;

export const ClearIcon = styled(LumaIcon)`
  font-size: 0.875rem;
  color: ${LumaColor.NEUTRAL_40};
  :hover {
    color: ${LumaColor.NEUTRAL_60};
  }
  cursor: pointer;
`;
