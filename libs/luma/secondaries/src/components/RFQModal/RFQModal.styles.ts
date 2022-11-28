import styled from 'styled-components';
import {
  Button,
  colors,
  Dropdown,
  Icon,
} from '@luma-fe-workspace/design-system';

export const DropdownRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0.875rem;
`;

export const DropdownButton = styled(Dropdown)`
  margin-left: 1rem;
  z-index: 1;
  && ul {
    max-height: none;
  }
  && button {
    display: flex;
    justify-content: space-between;
    width: 6.6875rem;
  }
`;

export const RFQGrid = styled.div`
  height: 22.9375rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const BottomActionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const AddRowButton = styled(Button)`
  background-color: ${colors.white};
`;

export const PlusIcon = styled(Icon)`
  font-size: 0.875rem;
  margin-right: 0.625rem;
`;
