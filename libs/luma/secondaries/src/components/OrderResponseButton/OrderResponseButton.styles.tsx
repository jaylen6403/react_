import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const CellButton = styled.button<{ action: boolean }>`
  border: none;
  width: 100%;
  height: 100%;
  color: ${colors.oceanDarker};
  background-color: transparent;
  font-family: IBM Plex ${({ action }) => (action ? 'Sans' : 'Mono')};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: ${colors.oceanDarker};
    color: ${colors.white};
    border: none;
  }
`;
