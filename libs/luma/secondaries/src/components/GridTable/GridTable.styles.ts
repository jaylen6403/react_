import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.0625rem;
  width: 100%;
  background: ${colors.greyLighter};
  border: 0.0625rem solid ${colors.greyLighter};
  font-family: IBM Plex Mono;
  font-style: normal;
`;

export const TableRow = styled['tr']`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.0625rem;
  width: 100%;
  height: 2rem;
  background: ${colors.greyLightest};
  :nth-child(even) td:nth-child(odd),
  :nth-child(even) td:nth-child(even) {
    background: ${colors.greyFade};
  }
`;

export const TableCell = styled.td`
  display: flex;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  width: 50%;
  height: 100%;
  background: ${colors.neutral00white};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${colors.greyDark};
`;

export const TableCellBold = styled(TableCell)`
  font-weight: 500;
`;

export const StyledHeader = styled.th`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  height: 2rem;
  background: ${colors.greyLighter};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.03em;
  color: ${colors.greyDark};
`;
