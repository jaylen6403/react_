import { CSSProperties } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridOptions } from 'ag-grid-community';
import 'ag-grid-community/src/styles/ag-grid.scss';
import 'ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss';
import { AgGridWrapper, rowStyle } from './LumaAgGrid.styles';

export type AgGridProps = {
  gridOptions: GridOptions;
  /**
   * Additional styling for AgGrid (passed in as an object)
   */
  gridStyles?: CSSProperties;
  /**
   * Additional styling for AgGrid passed in as styled-component's string.
   * Useful for styling nested elements of the grid.
   */
  additionalStyles?: string;
};

export function LumaAgGrid({
  gridOptions,
  gridStyles,
  additionalStyles = '',
}: AgGridProps) {
  return (
    <AgGridWrapper
      additionalStyles={additionalStyles}
      style={{ ...gridStyles }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        rowStyle={rowStyle}
        gridOptions={{ ...gridOptions }}
      ></AgGridReact>
    </AgGridWrapper>
  );
}
