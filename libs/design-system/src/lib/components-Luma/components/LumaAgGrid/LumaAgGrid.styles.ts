import { RowStyle } from 'ag-grid-community';
import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';

type AgGridWrapperProps = {
  additionalStyles: string;
};

export const AgGridWrapper = styled.div<
  Pick<AgGridWrapperProps, 'additionalStyles'>
>`
  --ag-border-color: ${LumaColor.NEUTRAL_30};
  --ag-border-radius: 8px;

  & .ag-root-wrapper,
  & .ag-root {
    border-radius: 8px;
  }
  & .ag-header {
    border-radius: 8px 8px 0 0;
  }
  & .ag-header-cell {
    &:first-child {
      border-radius: 8px 0 0 0;
    }
    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }
  & .ag-cell {
    display: flex;
    text-align: left;
    align-items: center;
  }

  ${(props) => props.additionalStyles}
`;

export const rowStyle: RowStyle = {};
