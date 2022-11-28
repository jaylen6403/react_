import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';

export const CloseButton = styled.button`
  border: 0 transparent;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: ${LumaColor.NEUTRAL_80};
`;
