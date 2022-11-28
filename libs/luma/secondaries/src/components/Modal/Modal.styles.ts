import ReactModal from 'react-modal';
import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { FONT_IBM_SANS } from '../../lib/luma-secondaries.styles';

export const StyledReactModal = styled(ReactModal)<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width ?? '37.5rem'};
  background-color: ${colors.white};
  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  overflow-y: auto;
  max-height: 90vh;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 0.5rem;
`;

export const ModalSubTitle = styled.div<{ textColor?: string }>`
  height: 100%;
  font-family: ${FONT_IBM_SANS};
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.01875rem;
  ${(props) => props.textColor && `color: ${props.textColor}`};
`;
