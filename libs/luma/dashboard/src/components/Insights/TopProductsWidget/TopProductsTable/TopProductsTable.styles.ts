import styled from 'styled-components';
import { breakpoints, LumaColor } from '@luma-fe-workspace/design-system';

export const Cell = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 0 0.25rem;
  color: ${LumaColor.NEUTRAL_80};
  height: 3.375rem;

  @media ${breakpoints.tablet} {
    &:nth-child(n + 3):nth-last-child(n + 2) {
      display: none;
    }
  }

  :nth-child(4) {
    justify-content: center;
  }

  &:last-child {
    justify-content: right;
  }

  @media ${breakpoints.mobile} {
    flex-wrap: nowrap;
  }
`;

export const OverflowContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CellLink = styled.a`
  text-decoration: none;
  color: ${LumaColor.PRIMARY_50};
`;

export const UnderlierChip = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  margin-right: 0.25rem;
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  border: solid 1px ${LumaColor.NEUTRAL_20};
  background-color: ${LumaColor.NEUTRAL_20};
`;

export const CurrencyChip = styled.div`
  display: flex;
  align-items: center;
  height: 1.125rem;
  margin-left: 0.25rem;
  padding: 0.3125rem 0.375rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  border: solid 1px ${LumaColor.NEUTRAL_40};
`;
