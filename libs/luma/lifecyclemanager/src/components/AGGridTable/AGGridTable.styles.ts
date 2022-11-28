import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import { colors, spacing } from '@luma-fe-workspace/design-system';

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CellWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div<{
  color?: string;
  fontWeight?: string;
}>`
  color: ${({ color }) => (color ? color : colors.neutral80)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  padding-bottom: ${spacing.xxs};
`;

export const ProductIdentifier = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primary50};
  font-size: 0.88rem;
  font-weight: 500;
  :hover {
    color: ${colors.primary60};
  }
`;

export const NotionalDrawerButton = styled.button`
  cursor: pointer;
  text-indent: 0.5rem;
  text-decoration: none;
  height: max-content;
  color: ${colors.primary50};
  font-size: 0.88rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
  :hover {
    color: ${colors.primary60};
  }
`;

export const UnderliersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ color }) => color};
  flex-wrap: wrap;
  position: absolute;
  margin-top: 1.1rem;
  margin-left: 0.5rem;
  font-family: 'IBM Plex Sans', sans-serif;
`;

export const ActiveUnderlier = styled.div<{
  underlierPerformance: number;
}>`
  font-size: 0.688rem;
  font-weight: normal;
  color: ${colors.neutral00white};
  border-radius: 0.25rem;
  max-width: 100%;
  height: 1rem;
  margin-bottom: 0.313rem;
  margin-right: 0.25rem;
  padding-right: 0.5rem;
  color: ${({ underlierPerformance }) =>
    underlierPerformance >= 0
      ? colors.positiveUnderlierText
      : colors.negativeUnderlierText};
  background-color: ${({ underlierPerformance }) =>
    underlierPerformance >= 0
      ? colors.positiveUnderlierChipBackground
      : colors.negativeUnderlierChipBackground};
`;

export const InactiveUnderlier = styled.div`
  max-width: 100%;
  height: 1rem;
  font-size: 0.688rem;
  font-weight: normal;
  background-color: ${colors.neutral20};
  margin-right: 0.25rem;
  border-radius: 0.25rem;
  padding-right: 0.5rem;
  padding-left: -1rem;
  margin-bottom: 0.313rem;
`;

export const CustomAgGrid = styled(AgGridReact)<{ customStyles?: string }>`
  ${(props) => props.customStyles}

  .ag-header-row {
    background-color: ${colors.neutral20};
    border: 0.0625rem solid ${colors.neutral40};
    border-radius: 0.25rem 0.25rem 0 0;
    padding-right: 0.625rem;
  }

  .ag-header-cell {
    display: flex;
    align-items: center;
    font-family: IBM Plex Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-indent: 0.5rem;
    max-width: 100%;
  }

  .ag-header-cell-label {
    display: flex;
    align-items: end;
    padding-bottom: ${spacing.xs};
  }

  .right-numeric-header-padding {
    padding-right: 1rem;
  }

  .header-left-padding {
    padding-left: 0.5rem;
  }

  .last-column-right-padding {
    padding-right: 1rem;
  }

  .ag-row {
    z-index: 0;
    background-color: ${colors.neutral00white};
    border: 0.0625rem solid ${colors.neutral20};
  }

  .ag-row.ag-row-focus {
    z-index: 1;
  }

  .ag-cell {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.88rem;
    display: flex;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;
    text-indent: 0.5rem;
    margin-top: 0.6875rem;
  }

  .ag-menu {
    background-color: ${colors.greyLighter};
    border-radius: 0.25rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
    font-family: IBM Plex Sans;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.03em;
    line-height: 1.125rem;
    margin: 0.5625rem 0 0;
    max-height: 17.5rem;
    max-width: 15rem;
    min-width: 7.75rem;
    overflow-y: auto;
    position: absolute;
    padding: 0.5rem 0.25rem;
  }

  .ag-menu-option {
    border-radius: 0.25rem;
    cursor: pointer;
    display: block;
    margin: 0.1875rem 0 0.4375rem;
    padding: 0.25rem 0.5rem;
    text-align: left;
    width: 100%;
    background-color: ${colors.greyLighter};
    position: static;

    &:nth-child(2) {
      margin-top: 0;
    }

    &:nth-last-child(2) {
      margin-bottom: 0;
    }

    &:focus {
      background-color: ${colors.greyLightest};
      outline: none;
    }
  }

  .ag-popup-child {
    margin-top: -0.5625rem;
    margin-left: 0.3125rem;
  }

  .ag-overlay-no-rows-center {
    font-family: IBM Plex Sans;
  }

  .eventDate {
    font-weight: 500;
    color: ${colors.neutral80};
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

export const CurrencyBubble = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.688rem;
  color: ${colors.neutral80};
  border-radius: 0.5rem;
  border: solid 0.06rem ${colors.neutral40};
  height: 1.13rem;
  justify-content: center;
  margin-left: 0.25rem;
  text-indent: -0.03rem;
  width: 2rem;
  text-align: center;
`;
