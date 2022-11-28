import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CircleInfoIcon = styled(FontAwesomeIcon)`
  color: ${colors.primary50};
  font-size: 0.875rem;
  padding-bottom: 0.1rem;
`;

export const InfoWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const InsightsTooltip = styled.div`
  width: 16.75rem;
  min-height: 4.25rem;
  padding: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral80};
  font-size: 0.75rem;
`;
