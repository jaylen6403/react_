import styled from 'styled-components';
import { colors, LumaFont, spacing } from '@luma-fe-workspace/design-system';

export const Cell = styled.td`
  padding: ${spacing.xs} ${spacing.m};
  font-size: ${spacing.s};
  font-family: ${LumaFont.DEFAULT.LIGHT};
  max-width: 200px;
  svg {
    margin-right: 0.75rem;
  }
  border-radius: 0rem;
`;

export const Row = styled.tr``;

export const Table = styled.table`
  ${Cell}:nth-of-type(1) {
    background-color: ${colors.neutral10};
  }
  // color: black;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 500;
  // overflow: hidden;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-spacing: 0;
  max-width: 600px;
`;
