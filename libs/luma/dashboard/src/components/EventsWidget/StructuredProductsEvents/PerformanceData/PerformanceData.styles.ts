import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';
import {
  Indicator,
  INDICATOR_COLORS,
} from '../../../../utils/structuredProductsEventsUtils';

export const BarrierMessage = styled.div<{ indicator: Indicator }>`
  color: ${(props) => INDICATOR_COLORS[props.indicator]};
  padding-top: 0.3125rem;
`;

export const UnderlierTicker = styled.div<{ isMore?: boolean }>`
  background-color: ${colors['tag-grey']};
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 0.6875rem;
  margin: 0 0.25rem 0.25rem 0;
  padding: 0.125rem 0.5rem;
  text-transform: uppercase;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border: ${(props) =>
      props.isMore ? `1px solid ${colors.neutral80}` : null};
  }
`;

export const PerformanceDataWrapper = styled.div`
  margin-bottom: 1rem;
  min-height: 2.3125rem;
  height: 3.125rem;
  width: 100%;
`;

export const TooltipPerformanceDataWrapper = styled.div`
  max-height: 12rem;
  width: 100%;
`;
