import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import { colors } from '@luma-fe-workspace/design-system';

export const CustomAgGrid = styled(AgGridReact)`
  .ag-root-wrapper {
    border-radius: 7px;
  }
  .ag-header {
    border-bottom: 0.0625rem solid ${colors.neutral20};
  }
  .ag-header-row {
    background-color: ${colors.neutral20};
  }
  .ag-header-cell {
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${colors.neutral80};
    padding-left: 1rem;
  }

  .ag-cell {
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${colors.neutral80};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    padding-left: 1rem;
    line-height: 0;
  }
  .ag-row {
    border-bottom: 0.0625rem solid ${colors.neutral40};
    background-color: ${colors.white};
  }
  .ag-center-cols-clipper {
    min-height: 5rem !important;
  }
  .selected-row {
    background-color: ${colors.primary10};
  }
` as React.ComponentType as new <T>() => AgGridReact<T>;

export const EmptyCriteriaWarningDescription = styled.div`
  font-family: IBM Plex Sans;
  font-weight: 300;
  display: flex;
  p:last-child {
    text-decoration: underline;
    cursor: pointer;
    color: ${colors.primary50};
  }
`;
export const EmptyCriteriaWarningDescriptionText = styled.p``;
