import { render, screen } from '@testing-library/react';
import { LumaAgGrid } from './LumaAgGrid';
import '@testing-library/jest-dom/extend-expect';

describe('Pricings', () => {
  const gridStyles = {};
  const gridOptions = {
    columnDefs: [{ field: 'column1' }, { field: 'column2' }],
    rowData: [
      { column1: 'value1', column2: 'value2' },
      { column1: 'value3', column2: 'value4' },
    ],
  };

  it('should render grid', async () => {
    render(
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={gridStyles}
      ></LumaAgGrid>
    );
    expect(screen.getByRole('row', { name: 'Column1 Column2' })).toBeDefined();
    expect(screen.getByRole('row', { name: 'value1 value2' })).toBeDefined();
    expect(screen.getByRole('gridcell', { name: 'value4' })).toBeDefined();
  });
});
