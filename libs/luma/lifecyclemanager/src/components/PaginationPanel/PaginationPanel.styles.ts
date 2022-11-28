import { colors, spacing } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  left: 50%;
  width: 50%;
  font-size: 0.88rem;
  padding-top: ${spacing.s};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  transform: translateX(-50%);
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;

export const Button = styled.button`
  border: none;
  background-color: ${colors.neutral10};

  &:hover:enabled {
    cursor: pointer;
  }
`;
