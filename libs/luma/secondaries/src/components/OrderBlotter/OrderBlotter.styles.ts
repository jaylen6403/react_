import styled from 'styled-components';
import { colors, Dropdown } from '@luma-fe-workspace/design-system';

export const ActionBarDropdown = styled(Dropdown)`
  margin-right: 0rem 0.5rem;
  z-index: 2;
`;

export const OrderBlotterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;
