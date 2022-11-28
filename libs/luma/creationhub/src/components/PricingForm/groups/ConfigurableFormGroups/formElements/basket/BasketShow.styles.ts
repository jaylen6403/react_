import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const BasketShowWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const UnderlierWrapper = styled.span`
  margin-right: 0.75rem;
  span {
    padding: 0.125rem 0.3125rem 0.25rem 0.375rem;
  }
`;

export const Total = styled.span`
  border: 1px solid ${colors.oceanLight};
  background-color: ${colors.oceanLight};
`;

export const Underlier = styled.span`
  border: 1px solid ${colors.oceanLighter};
  background-color: ${colors.oceanLighter};

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
export const WeightInput = styled.input`
  border: none;
  text-align: right;
  font-size: 1rem;
  width: 2.5rem;
`;
export const WeightShow = styled.span`
  border: 1px solid ${colors.oceanLighter};
`;

export const BasketSeparator = styled.span`
  width: 0.0625rem;
  height: 1.375rem;
  display: inline-block;
  margin-right: 0.75rem;
  background-color: ${colors.oceanLighter};
`;
