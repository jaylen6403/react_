import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const Section = styled.section<{ usePadding: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: ${(props) => (props.usePadding ? '0.75rem' : '0')};
  max-width: 100vw;
  max-height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  position: relative;
`;

export const LumaContainer = styled.div`
  background-color: ${colors.neutral10};
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  min-height: 100vh;
  width: 100vw;
`;
