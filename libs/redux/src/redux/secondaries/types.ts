// SecondariesMessageType is copied from design-system as the direct import creates a circular dependency

export type SecondariesMessageType = 'info' | 'success' | 'error' | 'warn';

export interface SecondariesMessageObject {
  title: string;
  messageType: SecondariesMessageType;
  isMessageShowing: boolean;
  description?: string;
}
