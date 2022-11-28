import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';

export const ValidUntilInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${LumaColor.NEUTRAL_40};
`;

export const ValidUntilButton = styled.button`
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  font-size: 0.75rem;
  font-weight: 500;
  color: inherit;
  padding: 0.5rem 2.625rem;
  border: 1px solid ${LumaColor.NEUTRAL_40};
  border-radius: 8px;
  cursor: pointer;
  min-height: 1.875rem;
`;
