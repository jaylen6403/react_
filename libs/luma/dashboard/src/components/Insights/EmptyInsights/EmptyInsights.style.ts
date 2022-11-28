import styled from 'styled-components';
import { breakpoints, colors } from '@luma-fe-workspace/design-system';

export const StyledEmptyInsightsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${breakpoints.tablet} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${breakpoints.mobile} {
    width: 300px;
    flex-direction: column;
    margin: 0px;
  }
`;

export const MainText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral60};
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2.375rem;
`;
