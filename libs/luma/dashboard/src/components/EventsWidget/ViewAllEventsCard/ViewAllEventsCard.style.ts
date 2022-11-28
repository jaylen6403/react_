import styled from 'styled-components';
import { colors, Icon, breakpoints } from '@luma-fe-workspace/design-system';
import {
  Indicator,
  INDICATOR_COLORS,
} from '../../../utils/structuredProductsEventsUtils';
import { ProductType, ProductTypes } from '../../../utils/types';

export const EventsWidgetCard = styled.div<{
  indicator: Indicator;
  isSPS: boolean;
}>`
  background-color: white;
  border-radius: 0.5rem;
  border: 0.0625rem solid #c4cdd1;
  box-shadow: inset 0 -0.5rem ${(props) => INDICATOR_COLORS[props.indicator]};
  font-size: 0.75rem;
  height: ${(props) => (props.isSPS ? '16.563rem' : '15.625rem')};
  min-width: 15.625rem;
  max-width: 15.625rem;
  margin-right: 0.625rem;
  padding: 0.625rem 1.25rem 0.875rem 0.625rem;
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

export const LastCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5rem;
  text-decoration: none;
  height: 100%;
  &:hover {
    text-decoration: revert;
    text-decoration-color: ${colors.primary50};
  }
`;

export const EventsWidgetLastCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`;

export const EventsWidgetLastCardHeading = styled.div`
  display: flex;
  color: ${colors.primary50};
  font-size: 1rem;
  text-decoration: none;
  width: 9.375rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary50};
  height: 4.375rem;
  width: 4.375rem;
  border-radius: 50%;
`;

export const CalendarIcon = styled(Icon)`
  color: ${colors.white};
  font-size: 2.5rem;
`;
