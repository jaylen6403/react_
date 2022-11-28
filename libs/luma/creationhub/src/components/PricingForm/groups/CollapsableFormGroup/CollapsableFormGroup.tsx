import { FC, useState } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
  CollapsableFormGroupWrapper,
  CollapseBar,
  ChildrenWrapper,
  GroupTitle,
  GroupIcon,
  ToggleGroupOpen,
} from './CollapsableFormGroup.styles';
import { Icon } from '@luma-fe-workspace/design-system';
import { createDataTestId } from '../ConfigurableFormGroups';

export interface CollapsableFormGroupProps {
  title: string;
  icon: IconName;
  isValid: boolean;
  tooltip?: string;
}

export const CollapsableFormGroup: FC<CollapsableFormGroupProps> = ({
  title,
  icon,
  isValid,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CollapsableFormGroupWrapper>
      <CollapseBar>
        <GroupIcon type="solid" iconCode={icon} />
        <GroupTitle>{title}</GroupTitle>
        <ToggleGroupOpen
          onClick={onToggleClick}
          type="button"
          data-testid={createDataTestId('button', `collapse ${title}`)}
        >
          <Icon iconCode={isOpen ? 'chevron-down' : 'chevron-up'} />
        </ToggleGroupOpen>
      </CollapseBar>
      {isOpen && (
        <ChildrenWrapper
          data-testid={createDataTestId('childrenWrapper', `${title}`)}
        >
          {children}
        </ChildrenWrapper>
      )}
    </CollapsableFormGroupWrapper>
  );
};
