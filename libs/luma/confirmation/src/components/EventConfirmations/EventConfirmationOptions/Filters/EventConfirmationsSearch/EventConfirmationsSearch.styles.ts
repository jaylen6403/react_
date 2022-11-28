import styled from 'styled-components';
import {
  colors,
  Input,
  LumaColor,
  LumaIcon,
} from '@luma-fe-workspace/design-system';

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0.75rem 0 0;
  border-right: 0.063rem solid ${LumaColor.NEUTRAL_40};
`;
export const SearchInput = styled(Input)`
  pointer-events: auto;
  width: 13.75rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: solid 1px ${colors.neutral40};
  background-color: ${colors.neutral00white};
`;

export const Placeholder = styled.div`
  pointer-events: none;
  display: flex;
  gap: 0.5rem;
  z-index: 1;
  position: absolute;
  left: 0.8125rem;
`;

export const MagnifyingGlassIcon = styled(LumaIcon)`
  width: 1rem;
  height: 1rem;
  color: ${colors.neutral60};
`;

export const PlaceholderText = styled.div`
  font-size: 0.75rem;
  color: ${colors.neutral60};
`;
