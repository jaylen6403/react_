import styled from 'styled-components';
import { colors, LumaIcon } from '@luma-fe-workspace/design-system';

export const PillContainer = styled.div<{ clickable: boolean }>`
  cursor: ${(props) => Boolean(props.clickable) && 'pointer'};
  display: flex;
  flex-direction: row;
  padding: 0.3125rem 0.5625rem;
  border-radius: 0.5rem;
  background-color: ${colors.neutral40};
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-size: 0.75rem;
`;
export const PillIcon = styled(LumaIcon)``;
