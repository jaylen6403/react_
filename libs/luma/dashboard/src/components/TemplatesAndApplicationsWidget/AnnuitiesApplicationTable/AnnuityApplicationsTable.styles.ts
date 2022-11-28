import { LumaColor, breakpoints, Icon } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const Cell = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.0625rem solid ${LumaColor.NEUTRAL_40};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  height: 3.375rem;
  color: ${LumaColor.NEUTRAL_80};
  gap: 0.25rem;
  padding: 0 0.25rem;

  &:last-child {
    justify-content: right;
    padding-left: 1.25rem;
    color: ${LumaColor.PRIMARY_50};
  }

  @media ${breakpoints.tablet} {
    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
    &:first-child {
      padding-right: 0.625rem;
    }
  }
`;

export const StackedCell = styled.div<{ underlier?: boolean }>`
  display: flex;
  flex-direction: column;
  align-content: start;
  justify-content: center;
  width: 100%;
`;

export const OverflowContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CarrierName = styled.span``;

export const ProductName = styled.span`
  align-self: start;
`;

export const TransactionDate = styled.span`
  font-size: 0.75rem;
  color: ${LumaColor.NEUTRAL_60};
  font-weight: 300;
  align-self: center;
`;

export const UnderlierChip = styled.div<{
  color: string;
  margin: string;
}>`
  height: 1rem;
  margin-right: ${(props) => props.margin};
  border-radius: 4px;
  font-size: 0.688rem;
  border: solid 1px ${LumaColor.NEUTRAL_20};
  background-color: ${(props) => props.color};
  text-transform: uppercase;
  width: 100%;
  padding: 0rem 0.25rem;
  color: ${LumaColor.NEUTRAL_80};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const CellText = styled.a`
  max-width: 3.5rem;
  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const ChevronIcon = styled(Icon)`
  color: ${LumaColor.PRIMARY_50};
  font-weight: bold;
  margin-top: 2px;
`;

export const ClientWrapper = styled.div`
  white-space: nowrap;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
