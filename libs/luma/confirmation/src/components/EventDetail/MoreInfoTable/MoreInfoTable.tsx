import { TableRow, TableData, TableWrapper } from './MoreInfoTable.style';

interface Props {
  rows: string[][];
}

export const MoreInfoTable = ({ rows }: Props) => {
  return (
    <TableWrapper>
      {rows.map((row, index) => (
        <TableRow key={index}>
          {row.map((elem, index) => (
            <TableData key={index} headerRow={index === 0}>
              {elem}
            </TableData>
          ))}
        </TableRow>
      ))}
    </TableWrapper>
  );
};
