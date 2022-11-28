import { GridApi } from 'ag-grid-community';

export const refreshGridRowsOnMinute = (
  gridApi: GridApi,
  columns: string[]
) => {
  const now = new Date();
  const currentMS = now.getSeconds() * 1000 + now.getMilliseconds();
  const msPerMinute = 60000;
  const refresh = () => {
    gridApi.refreshCells({
      columns,
      force: true,
    });
  };
  setTimeout(() => {
    refresh();
    const goodUntilDeadlineInterval = setInterval(() => {
      refresh();
      return () => {
        clearInterval(goodUntilDeadlineInterval);
      };
    }, 60000);
  }, msPerMinute - currentMS);
};
