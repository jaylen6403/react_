import styled from 'styled-components';
import {
  breakpoints,
  colors,
  LumaColor,
} from '@luma-fe-workspace/design-system';
import {
  Indicator,
  INDICATOR_COLORS,
} from '../../../../utils/structuredProductsEventsUtils';

export const BarrierCellFull = styled.div`
  grid-row: 2/3;
  grid-column: 2/2;
  max-width: 6.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

export const BarrierHeader = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  font-weight: 400;
  color: ${colors.neutral80};
  text-align: left;
  vertical-align: top;
  width: 40%;
`;

export const BarrierCellTooltip = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral80};
  font-size: 0.875rem;
  font-weight: normal;
  margin: 0;
`;
export const EventsWidgetCardTableCell = styled.div<{
  gridCol?: number;
  gridRow?: number;
}>`
grid-row: ${(props) => (props.gridRow ? `${props.gridRow / 3}` : null)}
grid-column: ${(props) => (props.gridCol ? `${props.gridCol / 2}` : null)}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

`;

export const EventsWidgetCardTableHeading = styled.div<{
  gridCol?: number;
  gridRow?: number;
}>`
grid-row: ${(props) => (props.gridRow ? `${props.gridRow / 3}` : null)}
grid-column: ${(props) => (props.gridCol ? `${props.gridCol / 2}` : null)}
  font-weight: 400;
  color: ${colors.neutral80};

`;

export const EventsWidgetCardTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2);
  grid-template-rows: repeat(3);
  gap: 0.25rem;
`;

export const CusipLink = styled.a`
  color: ${colors.primary50};
  font-size: 0.75rem;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

export const EventsWidgetCardHeading = styled.h3`
  font-weight: 500;
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
`;

export const EventsWidgetCardHeader = styled.div`
  color: ${colors.neutral80};
`;

export const EventsWidgetCard = styled.div<{ indicator: Indicator }>`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #c4cdd1;
  box-shadow: inset 0 -0.5rem ${(props) => INDICATOR_COLORS[props.indicator]};
  font-size: 0.75rem;
  height: 16.563rem;
  min-width: 15.625rem;
  max-width: 15.625rem;
  margin-right: 0.625rem;
  padding: 1rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    transform: scale(103%);
    transition-duration: 0.15s;
  }
  @media ${breakpoints.mobile && breakpoints.phablet} {
    &:hover {
      transform: revert;
    }
  }
`;

export const CurrencyPill = styled.div`
  border-radius: 1rem;
  border: 0.0625rem solid #c4cdd1;
  max-width: fit-content;
  margin-left: 0.1875rem;
  padding: 0.125rem 0.25rem;
  display: inline-block;
`;

export const Currency = styled.span``;

export const BasketType = styled.div`
  padding: 0.3125rem 0;
`;

export const MarkToMarket = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.438rem;
  border-top: 0.063rem solid ${LumaColor.NEUTRAL_40};
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${LumaColor.NEUTRAL_80};
`;

export const MarkToMarketTitle = styled.div``;

export const MarkToMarketValue = styled.div``;
