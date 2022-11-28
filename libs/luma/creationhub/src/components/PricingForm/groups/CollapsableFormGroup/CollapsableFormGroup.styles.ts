import { LumaColor, LumaIcon } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const CollapsableFormGroupWrapper = styled.div``;

export const CollapseBar = styled.div`
  display: flex;
  align-items: center;
`;

export const ChildrenWrapper = styled.div`
  margin-top: 1.25rem;
`;

export const GroupTitle = styled.span`
  margin: 0 1.875rem;
  font-weight: bold;
`;

export const GroupIcon = styled(LumaIcon)`
  color: ${LumaColor.NEUTRAL_80};
`;

export const ToggleGroupOpen = styled.button`
  margin-left: auto;
  border: none;
  background-color: transparent;
  font-size: 1.5625rem;
`;
