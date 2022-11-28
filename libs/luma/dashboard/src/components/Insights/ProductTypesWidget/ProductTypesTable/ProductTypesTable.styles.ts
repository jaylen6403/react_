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

export const ReturnTypeCell = styled.div<{ color: string }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 0 0.25rem;
  color: ${LumaColor.NEUTRAL_80};
  height: 3.375rem;
  /* border-left: 0.5rem ${LumaColor.PRIMARY_80_DAINTREE} solid; */
  text-indent: 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 80%;
    width: 0.5rem;
    left: 0;
    top: 10%;

    ${(props) =>
      props.color === 'primary80' &&
      `
      background-color: ${LumaColor.PRIMARY_80_DAINTREE}
    `};
    ${(props) =>
      props.color === 'primary60' &&
      `
      background-color: ${LumaColor.PRIMARY_60}
    `};
    ${(props) =>
      props.color === 'primary40' &&
      `
      background-color: ${LumaColor.PRIMARY_40}
    `};
    ${(props) =>
      props.color === 'primary20' &&
      `
      background-color: ${LumaColor.PRIMARY_20}
    `};
  }
`;
