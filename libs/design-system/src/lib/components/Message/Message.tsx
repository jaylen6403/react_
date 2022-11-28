import { useEffect } from 'react';
import { IconCode } from '../Icon/Icon';
import {
  MessageCol,
  MessageStyle,
  MessageContent,
  MessageTitle,
  MessageColoredIcon,
  MessageExitIcon,
  FlatXButton,
} from './Message.style';

export type MessageType = 'info' | 'success' | 'error' | 'warn';

export interface MessageProps {
  title: string;
  showMessage: boolean;
  setShowMessage: (value: boolean) => void;
  messageType?: MessageType;
  description?: string;
  timer?: number;
}

export const Message = ({
  /**
   * Title of the message
   */
  title,
  /**
   * Description of the message (optional)
   */
  description,
  /**
   * If true, hide the message. By default: false
   */
  showMessage = false,
  setShowMessage,
  /**
   * In seconds. By default: 3 seconds (subject to change)
   */
  timer = 3,
  /**
   * Message Type will decide the style of the Message:
   *  (Default) info: Blue Message
   *  success: Green Message
   *  warn: Yellow Message
   *  error: Red Message
   */
  messageType = 'info',
}: MessageProps) => {
  const iconCode: IconCode = {
    info: 'circle-check',
    success: 'circle-check',
    error: 'circle-xmark',
    warn: 'circle-exclamation',
  }[messageType] as IconCode;
  // if message shouldn't be off, start timer
  useEffect(() => {
    const timeout = setTimeout(() => setShowMessage(false), timer * 1000);
    return () => clearTimeout(timeout);
  }, [showMessage, timer, setShowMessage]);
  if (!showMessage) return null;
  return (
    <MessageStyle messageType={messageType}>
      <MessageColoredIcon iconCode={iconCode} />
      <MessageCol role="alert">
        <MessageTitle>{title}</MessageTitle>
        {description ? <MessageContent>{description}</MessageContent> : null}
      </MessageCol>
      <FlatXButton onClick={() => setShowMessage(false)}>
        <MessageExitIcon iconCode="times" />
      </FlatXButton>
    </MessageStyle>
  );
};
