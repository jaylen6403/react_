import { faCircleExclamation } from '@fortawesome/pro-solid-svg-icons';
import {
  AGGridWarningWrapper,
  AGGridWarningHeaderRow,
  AGGridWarningBody,
  AGGridWarningIcon,
  AGGridWarningMessage,
} from './AGGridWarningPanel.styles';

interface AGGridWarningPanelProps {
  message: string;
  description?: React.ReactNode;
}
export const AGGridWarningPanel = ({
  message,
  description,
}: AGGridWarningPanelProps) => (
  <AGGridWarningWrapper>
    <AGGridWarningHeaderRow />
    <AGGridWarningBody>
      <AGGridWarningIcon icon={faCircleExclamation} />
      <AGGridWarningMessage>{message}</AGGridWarningMessage>
      {description}
    </AGGridWarningBody>
  </AGGridWarningWrapper>
);
