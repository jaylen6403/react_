import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const TooltipWrapper = styled.div<{ top?: string; left?: string }>`
  position: absolute;
  top: ${(props) => (props.top ? props.top : '0')};
  left: ${(props) => (props.left ? props.left : '0')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  margin-bottom: 2rem;
  border: solid 1px ${colors.neutral40};
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999999;
`;

export const TestTooltipText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  margin: 0;
`;

export const TestText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
`;
