import { colors, LumaColor } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export interface TableColumn {
  label: string;
  header?: JSX.Element;
  field: any;
}

export interface TableRow {
  id: string;
  values: any[];
}

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
}

const TableWrapper = styled.table`
  width: 100%;
  border: 1px solid ${colors['grid-blue-3']};
  border-spacing: 0;
  border-radius: 0.3125rem;
  thead {
    background-color: ${colors['tag-grey']};
    border-radius: 0.3125rem 0.3125rem 0 0;
  }
  td,
  th {
    padding: 0.625rem;
  }
`;

export const TableHead = styled.thead`
  font-size: 0.75rem;
`;

export const TableBody = styled.tbody`
  font-size: 0.875rem;
`;

export const Th = styled.th`
  border-bottom: 1px solid ${colors['grid-blue-3']};
`;
export const Td = styled.td``;

export const Tr = styled.tr`
  &:not(:last-child) {
    color: ${LumaColor.NEUTRAL_60};
    font-weight: bold;
  }
`;

export function Table({ columns, rows, className }: TableProps) {
  const headers = columns.map(({ label, header }) => {
    return <Th key={label}>{header ?? label}</Th>;
  });
  const body = rows.map(({ id, values }) => {
    const fields = columns.map(({ label, field }, columnIndex) => {
      const value = values[columnIndex];
      return <Td key={`${columnIndex}-${id}-${label}`}>{field(value)}</Td>;
    });
    return <Tr key={id}>{fields}</Tr>;
  });

  return (
    <TableWrapper className={className}>
      <TableHead>
        <tr>{headers}</tr>
      </TableHead>
      <TableBody>{body}</TableBody>
    </TableWrapper>
  );
}
