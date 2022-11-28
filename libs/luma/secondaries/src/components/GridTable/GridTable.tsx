import React from 'react';
import {
  StyledHeader,
  StyledTable,
  TableCell,
  TableCellBold,
  TableRow,
} from './GridTable.styles';

interface TableProps {
  data: object;
  header?: string;
  className?: string;
}

const GridTable = ({ data, header, className }: TableProps) => {
  return (
    <StyledTable aria-label="gridtable" id="gridtable" className={className}>
      {header && <StyledHeader>{header}</StyledHeader>}
      {data &&
        Object.entries(data).map(([key, value]) => (
          <TableRow key={key}>
            <TableCellBold>{key}</TableCellBold>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
    </StyledTable>
  );
};

export default GridTable;
