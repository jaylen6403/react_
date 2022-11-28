import { MouseEventHandler } from 'react';
import {
  TabTrigger,
  TabRoot,
  TabList,
  TabCloseIcon,
  TabContent,
  Button,
  Notifications,
} from './Tab.styles';

export interface TabProps<T> {
  display: React.ReactNode;
  activeTab?: boolean;
  ariaLabel?: string;
  className?: string;
  value: string;
  hasClose?: boolean;
  setVisible?: (ignored: boolean) => void;
  tabContent?: T;
  setShowTab: MouseEventHandler<HTMLButtonElement>;
  id: string;
  showTab: boolean;
  notifications?: number;
}

export function Tab<T>({
  display,
  activeTab,
  className,
  value,
  hasClose,
  setVisible,
  tabContent,
  setShowTab,
  showTab,
  id,
  notifications,
}: TabProps<T>) {
  if (!showTab) return null;
  const handleOnClose = () => {
    if (setVisible) {
      setVisible(false);
    }
  };

  return (
    <TabRoot className={className} orientation="horizontal">
      <TabList aria-label="tabs">
        <TabTrigger value={value} activeTab={activeTab} onClick={setShowTab}>
          {notifications && notifications > 0 ? (
            <Notifications>{notifications}</Notifications>
          ) : null}
          {display}
          {hasClose && (
            <Button
              id={`${id}_close`}
              aria-describedby={`${id}_title`}
              type="button"
              onClick={handleOnClose}
            >
              <TabCloseIcon
                iconCode="times"
                prefix="fal"
                aria-label="hidden"
              ></TabCloseIcon>
            </Button>
          )}
        </TabTrigger>
      </TabList>
      {tabContent && <TabContent value={value}>{tabContent}</TabContent>}
    </TabRoot>
  );
}
