import styled from 'styled-components';

/**
 * Wrapper container for the EventDetails.
 */
export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

/**
 * Content associated with the EventDetails.
 */
export const EventContent = styled.div`
  flex-grow: 1;
  overflow-x: auto;
  width: 100%;
`;

export const PreviewEmailContent = styled.div``;

export const MoreInfoContent = styled.div``;

export const EmailPills = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;
