import styled from 'styled-components';
import { breakpoints } from '@luma-fe-workspace/design-system';

export const EventsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem 1.25rem 1.5rem;

  @media ${breakpoints.phablet} {
    padding: 0.5rem 1rem 1.25rem 1rem;
  }
`;
