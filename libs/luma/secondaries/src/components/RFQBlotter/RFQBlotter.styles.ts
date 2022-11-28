import styled from 'styled-components';
import { colors, Dropdown } from '@luma-fe-workspace/design-system';

export const ActionBarDropdown = styled(Dropdown)`
  z-index: 2;
`;

export const QuotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white};
`;
