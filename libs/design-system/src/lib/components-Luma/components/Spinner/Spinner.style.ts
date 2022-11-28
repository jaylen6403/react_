import { colors } from '@luma-fe-workspace/design-system';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-top: 0.125rem solid ${colors.primary80Daintree};
  border-right: 0.125rem solid ${colors.primary80Daintree};
  border-bottom: 0.125rem solid ${colors.primary80Daintree};
  border-left: 0.125rem solid transparent;
  background: transparent;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

export const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
