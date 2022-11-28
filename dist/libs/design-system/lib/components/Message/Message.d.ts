/// <reference types="react" />
export declare type MessageType = 'info' | 'success' | 'error' | 'warn';
export interface MessageProps {
    title: string;
    showMessage: boolean;
    setShowMessage: (value: boolean) => void;
    messageType?: MessageType;
    description?: string;
    timer?: number;
}
export declare const Message: ({ title, description, showMessage, setShowMessage, timer, messageType, }: MessageProps) => JSX.Element | null;
