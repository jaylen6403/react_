import styled from 'styled-components';
import { colors, LumaFont, spacing } from '@luma-fe-workspace/design-system';

export const Cell = styled.td`
  padding: ${spacing.xs} ${spacing.m};
  font-size: ${spacing.s};
  font-family: ${LumaFont.DEFAULT.LIGHT};

  svg {
    margin-right: 0.75rem;
  }
`;

export const Row = styled.tr``;

export const Table = styled.table`
  ${Cell}:nth-of-type(1) {
    color: ${colors.neutral60};
    background-color: ${colors.neutral10};
  }
  overflow: hidden;
  color: ${colors.neutral80};
  border: solid 0.063rem ${colors.neutral40};
  border-radius: 0.5rem;
  border-spacing: 0;
`;
