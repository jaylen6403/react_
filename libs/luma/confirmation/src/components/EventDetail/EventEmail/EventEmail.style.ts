import styled from 'styled-components';
import { colors, breakpoints } from '@luma-fe-workspace/design-system';

/**
 * The container for the entire section containing the email preview.
 */
export const EmailContainer = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.desktop} {
    grid-column: auto;
    grid-row: auto;
    border: 0;
    border-top: solid 1px ${colors.neutral40};
  }
  @media ${breakpoints.tablet} {
    padding: 1rem;
  }
`;

/**
 * The container for the actions available on the email preview.
 */
export const EmailActions = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: end;
  padding-right: 1.5rem;
`;

/**
 * The text for the actions available on the email preview.
 */
export const EmailActionsText = styled.p`
  white-space: nowrap;
`;

/**
 * The container for the email preview.
 */
export const EmailDetails = styled.div`
  position: relative;
  height: 100%;
  align-self: stretch;
`;

/**
 * The wrapper for the html rendered for the email preview.
 */
export const EmailPreviewWrapper = styled.div`
  font-size: 14px;
`;
