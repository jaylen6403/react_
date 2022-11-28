import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const MetricsDiv = styled.div`
  border: 2px solid ${colors.neutral80};
  background-color: ${colors.neutral30};
  height: 15rem;
  padding: 0 1.5rem;
`;

export const MetricsHeader = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral80};
  font-weight: 700;
  font-size: 1.5rem;
`;
