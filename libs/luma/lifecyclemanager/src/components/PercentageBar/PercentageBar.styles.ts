import styled from 'styled-components';
import { colors, spacing } from '@luma-fe-workspace/design-system';

export const Container = styled.div`
  height: 0.9375rem;
  width: 100%;
  position: relative;
  display: flex;
`;

export const PercentageBarContainer = styled.div`
  height: 0.25rem;
  width: 100%;
  position: relative;
  top: 0.375rem;
  border-radius: 0.5rem;
  background: ${colors.positive10};
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 0.5rem;
`;

export const PercentageFill = styled(BaseBox)<{ percentageFill: number }>`
  background: ${colors.positive30};
  width: ${({ percentageFill }) => percentageFill}%;
  max-width: 100%;
  transition: width 2s ease-in-out;
`;

export const PercentageText = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: ${spacing.xs};
  color: ${colors.neutral80};
`;
