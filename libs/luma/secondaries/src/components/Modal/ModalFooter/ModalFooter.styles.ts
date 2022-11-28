import styled from 'styled-components';
import { colors, Button, Icon } from '@luma-fe-workspace/design-system';
import { FONT_IBM_SANS } from '../../../lib/luma-secondaries.styles';

export const ModalActions = styled.div`
  height: 3.3125rem;
  width: 37.5rem;
  background: ${colors.greyLighter};
  order: 2;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  position: sticky;
  bottom: 0;
  padding: 0.5rem 0.25rem;
`;

export const ModalActionGroup = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0rem;
  height: 1.75rem;
  margin-right: 0.75rem;
`;

export const ModalActionButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1.25rem;
  margin-left: 0.75rem;
  height: 1.75rem;
  font-size: 0.6875rem;
  text-transform: uppercase;
`;

export const ModalActionText = styled.span`
  height: 0.875rem;
`;

export const RedCancelButton = styled(ModalActionButton)`
  border: 0.0625rem solid ${colors.red};
  color: ${colors.red};
`;

export const ModalError = styled.div`
  height: 100%;
  font-family: ${FONT_IBM_SANS};
  text-align: right;
  max-width: 15.625rem;
  font-size: 0.75rem;
  line-height: 0.9375rem;
  letter-spacing: 0.01875rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalErrorIcon = styled(Icon)`
  margin: 0rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-weight: 400;
  line-height: 0.875rem;
  font-size: 0.875rem;
  letter-spacing: 0.01875rem;
  text-transform: uppercase;
  margin-left: 0.625rem;
`;
