import { colors, LumaFont } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';
import { headerHeight, headerMargin, rowHeight } from './EventTable';

export const IssuerLogo = styled.img`
  height: 0.6875rem;
  margin-bottom: 0.4rem;
`;

export const EventWrapper = styled.div<{ numberOfRows: number }>`
  height: ${(props) =>
    (headerHeight + headerMargin + rowHeight * props.numberOfRows) / 16}rem;
  margin-top: 2.063rem;
  margin-bottom: 2rem;
`;

export const ResultsCount = styled.div`
  color: ${colors.neutral80};
  font-size: 0.75rem;
  margin-bottom: 0.625rem;
  font-family: ${LumaFont.DEFAULT.MEDIUM};
`;
