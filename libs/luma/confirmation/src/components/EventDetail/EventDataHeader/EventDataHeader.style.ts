import styled from 'styled-components';
import {
  colors,
  breakpoints,
  LumaColor,
} from '@luma-fe-workspace/design-system';

/**
 * The wrapper container for the EventData
 */
export const EventHeaderContainer = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  padding-top: 1.3rem;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 8px;
  background-color: ${colors.neutral00white};
  @media ${breakpoints.desktop} {
    grid-column: auto;
    grid-row: auto;
  }
  @media ${breakpoints.tablet} {
    grid-column: auto;
    grid-row: auto;
    margin-top: 3.875rem;
  }
`;

/**
 * The header which contains the products name/issuer and issuer logo.
 */
export const EventHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px ${colors.neutral40};
  padding: 0 0.25rem;
`;

export const LogoContainer = styled.div``;

/**
 * Wrapper for the issuers logo.
 */
export const IssuerLogo = styled.img`
  height: 2rem;
`;

/**
 * Formatting for the general header text describing the product.
 */
export const ProductDescription = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2rem;
  color: ${colors.primary75};
  margin: 0;
  padding: 0.5rem 0 1.5rem 0;
`;

export const ProductGeneralIssuer = styled.span`
  font-weight: 500;
`;

export const InfoToggle = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const ToggleButton = styled.button<{ selected?: boolean }>`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 16px;
  padding: 0 0 0.625rem 0;
  color: ${(props) =>
    props.selected ? LumaColor.NEUTRAL_80 : LumaColor.NEUTRAL_60};
  border-bottom: ${(props) =>
    props.selected
      ? `3px solid ${LumaColor.PRIMARY_50}`
      : `3px solid ${LumaColor.NEUTRAL_00_WHITE}`};

  :hover {
    cursor: pointer;
  }
`;
