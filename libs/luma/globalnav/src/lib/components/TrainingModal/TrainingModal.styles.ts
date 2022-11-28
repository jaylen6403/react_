import styled from 'styled-components';

import { Button, colors } from '@luma-fe-workspace/design-system';

export const ModalBody = styled.div`
  background-color: #f4f6f8;
  border-radius: 0.5rem;
  box-shadow 0 0.25rem 0.5rem 0 rgba(0,0,0, 0.2);
  display: flex;
  flex-direction: column;
  height: 12.625rem;
  padding: 1.25rem;
  width: 29rem;
`;

export const ModalHeader = styled.div`
  color: ${colors.neutral80};
  display: flex;
  font-size: 1rem;
  width: 100%;
`;

export const ModalContent = styled.div`
  color: ${colors.neutral80};
  display: flex;
  flex-direction: column;
  padding-top: 0.9375rem;
`;

export const MessageText = styled.div`
  font-size: 0.75rem;
  height: 2rem;
  width: 26.5rem;
  margin 0 0 0.5rem 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: end;
  width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 0.875rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 6rem;
`;
