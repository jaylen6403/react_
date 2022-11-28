import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import {
  breakpoints,
  spacing,
  colors,
  TextEntryField,
} from '@luma-fe-workspace/design-system';

export const PieChartWidgetWrapper = styled.div`
  width: 100%;
`;

export const PieChartHeaderButtons = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
  justify-content: space-between;
  font-family: 'IBM Plex Sans', sans-serif;
  margin-bottom: 1.5rem;

  @media ${breakpoints.phablet} {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
  }
`;

export const DropdownWrapper = styled.div`
  margin-right: ${spacing.xs};
  text-overflow: ellipsis;
  width: 11.75rem;
  .TextEntryMockLabel {
    top: 74.5%;
    margin: 0;
    height: 100%;
    position: absolute;
    color: ${colors.neutral80};
  }

  input {
    margin: 0;
    width: 83%;
    cursor: pointer;
    position: absolute;
    padding: 0 0 0 4.25rem;
    text-overflow: ellipsis;
  }

  svg {
    right: ${spacing.xs};
    position: absolute;
  }
  .text-entry--outlined {
    height: 1.9rem;
  }
  ul {
    max-height: 9rem;
    margin-top: 0.4rem;
    min-height: fit-content;
    svg {
      position: relative;
      right: 0;
    }
  }
  & ${TextEntryField} {
    z-index: 0;
  }
`;

export const PieChartWidgetBody = styled.div`
  width: 100%;
  display: flex;
  min-height: 6.25rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 64.063rem) {
    width: 100%;
  }

  @media ${breakpoints.phablet} {
    max-width: 31rem;
    flex-direction: column;
    justify-content: center;
  }
  @media ${breakpoints.mobile} {
    width: 18.75rem;
    margin: 0 auto;
    flex-direction: column;
  }
`;

export const PieChartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 47.938rem) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Chart = styled.div`
  width: 14.687rem;
  min-width: 12.688rem;

  @media (max-width: 47.938rem) {
    align-items: center;
  }

  @media ${breakpoints.phablet} {
    width: 100%;
    height: 100%;
    max-width: 15rem;
    align-items: center;
    max-height: 16.875rem;
  }

  @media ${breakpoints.mobile} {
    width: 100%;
    height: 100%;
    max-width: 15rem;
    align-items: center;
    max-height: 16.875rem;
  }
`;

export const Table = styled.div`
  color: ${colors.neutral80};
  width: 17.75rem;
  padding: 0.312rem;
  padding-right: 1rem;

  @media (max-width: 64.063rem) {
    margin-right: 1.5rem;
  }
  @media ${breakpoints.tablet} {
    height: 21.25rem;
    min-width: 3.125rem;
    padding: 1rem;
  }
  @media (max-width: 47.938rem) {
    width: 100%;
    margin-left: 1.5rem;
  }
  @media ${breakpoints.phablet} {
    width: 100%;
  }
  @media ${breakpoints.mobile} {
    padding: 0;
    margin: 0 auto;
    width: 16.875rem;
    align-items: flex-start;
  }
`;

export const TableWidget = styled(AgGridReact)`
  width: 100%;

  .ag-header-row {
    background-color: ${colors.white};
    font-family: 'IBM Plex Sans', sans-serif;
    border-bottom: 0.1rem solid ${colors.greyLighter};
  }
  .ag-header-cell-label {
    height: 100%;
    display: flex;
    text-indent: 0;
    font-size: 0.75rem;
    font-family: 'IBM Plex Sans', sans-serif;
    padding-right: ${spacing.s};
  }
  .ag-header-cell {
    display: flex;
    font-weight: 500;
    line-height: 1rem;
    align-items: left;
    font-size: 0.75rem;
    font-style: medium;
    font-family: 'IBM Plex Sans', sans-serif;
    :last-child {
      text-align: end;
    }
  }

  .ag-cell-wrapper {
    font-size: 0.75rem;
  }

  .ag-cell {
    display: flex;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    align-items: center;
    font-size: 0.875rem;
    letter-spacing: normal;
    padding-left: 0.625rem;
    padding-right: ${spacing.s};
    font-family: 'IBM Plex Sans', sans-serif;
    white-space: nowrap;
  }
  .ag-center-cols-viewport .ag-row-even,
  .ag-center-cols-viewport .ag-row-odd {
    border-bottom: 0.12rem solid ${colors.greyLighter};
  }
  .ag-center-cols-viewport .ag-row-even:after,
  .ag-center-cols-viewport .ag-row-odd:after {
    right: 100%;
    top: 92%;
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    background: conic-gradient(
      ${colors.white} 0deg 90deg,
      ${colors.greyLighter} 90deg 270deg,
      ${colors.white} 270deg 360deg
    );
  }
  .ag-center-cols-viewport .ag-row-even::before,
  .ag-center-cols-viewport .ag-row-odd::before {
    right: 100%;
    top: 0;
    content: '';
    width: 0.4rem;
    height: 0.2rem;
    position: absolute;
    background: ${colors.white};
  }

  .ag-row-pinned {
    .ag-cell {
      padding-left: 1rem;
    }

    .pinned-row-value {
      padding-right: 0.34rem;
    }
  }
  .ag-cell-value {
    justify-content: left;
  }
  .ag-cell-label-container {
    width: 100%;
    display: initial;
    flex-direction: row;
  }
  .ag-center-cols-viewport .ag-cell {
    font-weight: normal;
    padding-right: ${spacing.s};
  }
  .ag-floating-bottom {
    overflow-y: hidden !important; // <-- Only solution found that removes scrollbar from last row
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  .ag-row-pinned {
    font-weight: '500';
  }
`;
export const AmountTotal = styled.div`
  color: ${colors.neutral80};
`;
