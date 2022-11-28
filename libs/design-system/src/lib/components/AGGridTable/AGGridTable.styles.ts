import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import { colors } from '@luma-fe-workspace/design-system';

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 0.0625rem solid ${colors.greyLight};
`;

export const CustomAgGrid = styled(AgGridReact)<{ customStyles?: string }>`
  ${(props) => props.customStyles}
  .ag-root-wrapper {
    background-color: ${colors.greyLight};
  }
  .ag-header-row {
    background-color: ${colors.greyLighter};
  }
  .ag-header-cell-label {
    display: flex;
    justify-content: center;
    height: 100%;
    text-indent: 0;
  }
  .ag-header-cell {
    display: flex;
    align-items: center;
    border: 0.03125rem solid ${colors.greyLight};
    border-bottom: none;
    text-indent: 0.5rem;
    font-family: IBM Plex Mono;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
  }

  .row-header-left-align .ag-header-cell-label {
    display: block;
    padding: 1rem 0.75rem;
  }
  .ag-hidden {
    display: none;
  }
  .ag-header-icon {
    display: flex;
    margin-left: 0.75rem;
  }
  .ag-row-even {
    background-color: ${colors.white};
  }
  .ag-row-odd {
    background-color: ${colors.greyFade};
  }
  .grid-row-even {
    &:hover:not(.ag-row-selected) {
      background-color: ${colors.ocean35};
    }
  }
  .grid-row-odd {
    &:hover:not(.ag-row-selected) {
      background-color: ${colors.ocean35};
    }
  }
  .order-success {
    &:hover {
      background-color: ${colors.successGreen};
    }
  }
  .order-fail {
    &:hover {
      background-color: ${colors.failRed};
    }
  }
  .ag-row-selected {
    background-color: ${colors.messageWarn};
  }
  .ag-row {
    z-index: 0;
  }
  .ag-row.ag-row-focus {
    z-index: 1;
  }
  .ag-cell {
    display: flex;
    align-items: center;
    border: 0.03125rem solid ${colors.greyLight};
    font-family: IBM Plex Mono;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;
  }
  .ag-cell-value {
    justify-content: center;
  }
  .ag-cell-label-container {
    display: initial;
    flex-direction: row;
    width: 100%;
  }
  .ag-cell-focus {
    overflow: visible;
  }

  input {
    text-align: center;
    font-family: IBM Plex Mono;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;
    border: none;
  }

  input:focus {
    outline: none;
    border: none;
  }

  .ag-header ag-pivot-off {
    height: 3rem;
    min-height: 3rem;
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
`;
