import { LumaColor } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const TableRow = styled.div`
  display: flex;
  font-size: 14px;
  font-family: 'IBM Plex Sans';
  height: 2.5rem;
  color: ${LumaColor.NEUTRAL_80};
  border-bottom: solid 1px ${LumaColor.NEUTRAL_40};
  align-items: center;
`;

export const TableData = styled.div<{ headerRow: boolean }>`
  padding: 0 0.5rem;
  width: ${(props) => (props.headerRow ? '12.375rem' : '100%')};
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
