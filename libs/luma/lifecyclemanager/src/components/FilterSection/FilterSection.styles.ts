import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const Header = styled.header`
  font-size: 1rem;
  font-weight: 500;
  text-transform: lowercase;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ResetButton = styled.button`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.primary50};
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export const FilterCategories = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
