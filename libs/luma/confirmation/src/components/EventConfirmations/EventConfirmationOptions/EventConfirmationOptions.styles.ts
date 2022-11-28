import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  background-color: ${colors.neutral00white};
  border-radius: 0.5rem;
  border: solid 1px ${colors.neutral40};
`;
export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
export const SelectedOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: start;
  align-items: center;
`;

export const ClearAllFilters = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${colors.primary50};
  font-size: 0.8125rem;
`;
