import { LumaColor } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const EmailActionsWrapper = styled.div`
  padding-bottom: 2rem;
  background-color: white;
  border-top: 0.063rem solid ${LumaColor.NEUTRAL_40};
  width: 100%;
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
