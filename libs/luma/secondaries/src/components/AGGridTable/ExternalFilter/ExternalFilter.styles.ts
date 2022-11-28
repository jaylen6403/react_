import { Button, Input } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FilterInput = styled(Input)``;

export const FilterClearButton = styled(Button)`
  font-size: 0.75rem;
  line-height: 0.75rem;
`;
