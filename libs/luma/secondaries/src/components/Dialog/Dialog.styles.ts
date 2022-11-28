import styled from 'styled-components';
import ReactModal from 'react-modal';
import { colors, Input, Button } from '@luma-fe-workspace/design-system';

export const StyledReactDialog = styled(ReactModal)`
  background: ${colors.greyLighter};
  width: 16.875rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

export const DialogHeader = styled.div`
  padding: 0rem 0rem 0.25rem;
`;

export const DialogTitle = styled.div`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  height: 1rem;
  text-transform: uppercase;
`;

export const DialogDescription = styled.div`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-bottom: 0.25rem;
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  width: 14.875rem;
  align-items: flex-end;
`;

export const DialogInput = styled(Input)`
  padding: 0.375rem 2.5rem 0.375rem 0.5rem;
  width: 14.875rem;
  height: 1.75rem;
  background: ${colors.white};
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
`;

export const TextCounter = styled.div`
  position: absolute;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  font-size: 0.6875rem;
  font-family: 'IBM Plex Sans';
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.greyLight};
  width: 2.25rem;
  height: 1.1875rem;
  left: 12rem;
  top: 0.25rem;
  margin: 0 0.625rem;
`;

export const DialogButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1.25rem;
  text-transform: uppercase;
`;

export const DialogHidden = styled.span`
  position: absolute;
  height: 0rem;
  width: 0rem;
  overflow: hidden;
`;

export const DialogAriaAlert = styled.span<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;
