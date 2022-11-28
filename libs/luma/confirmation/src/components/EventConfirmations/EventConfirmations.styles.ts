import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const ConfirmationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${colors.neutral80};
  margin: 0.5rem 0;
`;
