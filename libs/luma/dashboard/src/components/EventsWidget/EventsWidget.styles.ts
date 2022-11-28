import styled from 'styled-components';
import { breakpoints, colors } from '@luma-fe-workspace/design-system';

export const EventsWidgetSubHeading = styled.p`
  color: ${colors.greyMedium};
  font-size: 0.75rem;
  margin: 0 0 0.25rem 1.5rem;
`;

export const EventsWidgetHeading = styled.h2`
  color: ${colors.primary75};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  white-space: wrap;
  margin: 0 0 0 1.5rem;

  @media ${breakpoints.phablet} {
    margin: 0 0 0 1rem;
  }

  @media ${breakpoints.mobile} {
    margin: 0;
  }
`;

export const EventsWidgetHeader = styled.div`
  margin-bottom: 1.688rem;
`;

export const EventsWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-family: 'IBM Plex Sans', sans-serif;
  margin-bottom: 2.5rem;
  max-width: 100vw;
  @media ${breakpoints.mobile} {
    margin-left: 1rem;
  }
`;
