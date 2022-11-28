import styled from 'styled-components';
import { colors, breakpoints } from '@luma-fe-workspace/design-system';

export const HomePageWrapper = styled.div`
  padding: 1.25rem;
`;
export const LinksLabel = styled.div``;
export const IdWrapper = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.688rem;

  @media ${breakpoints.mobile} {
    width: 17.875rem;
    margin-left: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const Header = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.primary75};
  margin: 0;
`;
