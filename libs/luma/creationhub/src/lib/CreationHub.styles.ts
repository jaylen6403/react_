import styled from 'styled-components';
import { LumaColor, breakpoints } from '@luma-fe-workspace/design-system';

export const CreationHubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 1.5rem);
  margin: 0;
  background-color: ${LumaColor.NEUTRAL_10};
  font-size: 1.25rem;

  @media ${breakpoints.desktop} {
    background-color: ${LumaColor.NEUTRAL_00_WHITE};
  }

  @media ${breakpoints.tablet} {
    background-color: ${LumaColor.NEUTRAL_00_WHITE};
  }
`;

export const CreationHubContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: fit-content;
  background-color: ${LumaColor.NEUTRAL_10};
`;

export const Footer = styled.footer`
  display: none;
  min-height: 4.5rem;
  background: ${LumaColor.NEUTRAL_00_WHITE};

  @media ${breakpoints.desktop} {
    display: flex;
    height: 4.5rem;
  }

  @media ${breakpoints.tablet} {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
