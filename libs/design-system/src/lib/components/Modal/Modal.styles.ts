import styled, { css } from 'styled-components';

export const ModalBackground = styled.div<{
  isOpen: boolean;
  background?: string;
  top?: string;
  left?: string;
  position?: string;
}>`
  background-color: ${(props) =>
    props.background ? props.background : 'rgba(47, 54, 65, 0.9)'};
  height: 100%;
  font-family: 'IBM Plex Sans';
  left: ${(props) => (props.left ? props.left : '0')};
  overflow: auto;
  position: ${(props) => (props.position ? props.position : 'fixed')};
  top: ${(props) => (props.top ? props.top : '0')};
  width: 100%;
  ${(props) =>
    props.isOpen
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};
`;

export const ModalContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
