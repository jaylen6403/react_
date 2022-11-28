import styled from 'styled-components';
import { colors } from '../../colors';
import { Icon } from '../Icon/Icon';
import { MessageType } from './Message';

const map = {
  error: {
    backgroundColor: colors.failRed,
  },
  warn: {
    backgroundColor: colors.messageWarn,
  },
  info: {
    backgroundColor: colors.messageInfo,
  },
  success: {
    backgroundColor: colors.successGreen,
  },
};

export const FlatXButton = styled.button`
  box-shadow: 0px 0px 0px;
  outline: 0;
  @include transition(background-color 0.3s ease);
  border-radius: 1rem;
  border: 0px transparent;
  background: transparent;
  margin-left: auto;

  &:hover {
    background: transparent;
  }
`;

export const MessageColoredIcon = styled(Icon)`
  display: flex;
  align-self: center;
  letter-spacing: 0.01875rem;
  text-transform: uppercase;
  left: calc(50% - 1.5rem / 2);
  top: calc(50% - 1.5rem / 2);
  mix-blend-mode: multiply;
  font-size: 1.25rem;
  line-height: 0.875rem;
  align-items: center;
  text-align: center;
`;

export const MessageExitIcon = styled(MessageColoredIcon)`
  font-size: 0.875rem;
  line-height: 0.875rem;
  font-weight: 400;
  font-style: normal;
  color: #333333;
  opacity: 0.25;

  &:hover {
    background: ${colors.white} '80';
    mix-blend-mode: multiply;
    box-shadow: inset 0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    opacity: 0.7;
  }
`;

export const MessageStyle = styled.div<{ messageType: MessageType }>`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 1.5rem 0.75rem;
  width: 20.875rem;
  min-height: 5.875rem;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.95;
  box-shadow: 0rem 0.125rem 0.5rem 0rem ${colors.boxShadow};
  border-radius: 0.75rem;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  background-color: ${(props) => map[`${props.messageType}`].backgroundColor};

  & > ${MessageColoredIcon} {
    color: ${(props) => map[`${props.messageType}`].backgroundColor};
  }
`;

export const MessageTitle = styled.div`
  color: ${colors.greyDarker};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: auto 0rem;
`;

export const MessageContent = styled(MessageTitle)`
  font-weight: 400;
`;

export const MessageCol = styled.div`
  font-family: 'IBM Plex Sans';
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 0;
  align-self: stretch;
  order: 0;
  color: ${colors.greyDarker};
  margin: 0 0.5rem;
`;
