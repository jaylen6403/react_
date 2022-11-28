import styled from 'styled-components';
import { breakpoints } from '@luma-fe-workspace/design-system';

export const StyledPortfolio = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 0 1.5rem;

  @media (max-width: 1439px) {
    flex-direction: column;
  }
  @media ${breakpoints.phablet} {
    padding: 0 1rem;
  }
`;
