import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const OptionRow = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  font-weight: normal;
  font-size: 0.75rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${colors.neutral60};
  }
`;

export const CheckBox = styled.input`
  accent-color: ${colors.neutral40};
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  margin-left: 0;
`;

export const OptionName = styled.text`
  width: 12rem;
`;
