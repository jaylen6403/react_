import { colors, LumaIcon } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const FilterCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.0625rem solid ${colors.neutral60};
  font-family: IBM Plex Sans;
`;

export const HeaderRow = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  border: none;
  padding: none;
  background: transparent;
  cursor: pointer;
  color: ${colors.neutral60};
  :hover {
    color: ${colors.neutral80};
  }
`;

export const Header = styled.header`
  font-size: 0.875rem;
  font-weight: normal;
`;

export const CategoryChevron = styled(LumaIcon)`
  width: 0.75rem;
  height: 1rem;
  color: ${colors.neutral80};
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ShowAll = styled.button`
  border: none;
  width: max-content;
  background: transparent;
  color: ${colors.primary50};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;
