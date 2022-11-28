import { useState } from 'react';
import {
  CollapseIcon,
  InfoHeader,
  InfoWidgetContent,
  InfoWidgetTitle,
  InfoWidgetWrapper,
} from './InfoWidget.styles';

type InfoWidgetProps = {
  title: string;
  content?: React.ReactNode;
  styles?: string;
  collapsible?: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export const InfoWidget = ({
  title,
  content,
  styles,
  collapsible = true,
  isCollapsed,
  setIsCollapsed,
}: InfoWidgetProps) => {
  return (
    <InfoWidgetWrapper isCollapsed={isCollapsed} styles={styles}>
      <InfoHeader
        collapsible={collapsible}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <InfoWidgetTitle>{title}</InfoWidgetTitle>
        {collapsible && (
          <CollapseIcon
            iconCode="chevron-up"
            type="solid"
            isCollapsed={isCollapsed}
          />
        )}
      </InfoHeader>
      <InfoWidgetContent>{content}</InfoWidgetContent>
    </InfoWidgetWrapper>
  );
};
