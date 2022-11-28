import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import { colors } from '@luma-fe-workspace/design-system';

export const CustomAgGrid = styled(AgGridReact)<{
  customStyles?: string;
  isMobile?: boolean;
}>`
  ${(props) => props.customStyles}
  .ag-header-row {
    background-color: ${colors.white};
    border-bottom: 0.0625rem solid ${colors.greyLighter};
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .ag-header-cell-label {
    display: flex;
    height: 100%;
    text-indent: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  .ag-header-cell {
    display: flex;
    align-items: left;
    text-indent: 0.5rem;
    font-family: IBM Plex sans;
    font-size: ${(props) => (props.isMobile ? '0.75rem' : '0.875rem')};
    font-style: medium;
    font-weight: 500;
    line-height: 1rem;
  }
  .ag-row-even {
    background-color: ${colors.white};
    /* &:hover:not(.ag-row-selected) {
      background-color: ${colors.greyLighter};
    } */
  }
  .ag-row-odd {
    background-color: ${colors.white};
    /* &:hover:not(.ag-row-selected) {
      background-color: ${colors.greyLighter};
    } */
  }
  .ag-cell {
    display: flex;
    align-items: center;
    border-bottom: 0.0625rem solid ${colors.greyLighter};
    text-wrap: wrap;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: ${(props) => (props.isMobile ? '0.75rem' : '0.875rem')};
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
    text-transform: capitalize;
    padding-left: 0.625rem;
  }
  .ag-cell:after {
    content: '';
    position: absolute;
    height: 4px;
    background: white;
    width: 100%;
    bottom: -1px;
    left: 0;
    margin-left: -8px;
    border-bottom: 0.1rem solid #dbdbdb;
  }
  .ag-cell-value {
    justify-content: left;
  }
  .ag-cell-label-container {
    display: initial;
    flex-direction: row;
    width: 100%;
  }
  .ag-header ag-pivot-off {
    height: 3rem !important ;
    min-height: 3rem !important;
  }
`;
