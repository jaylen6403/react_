import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { Icon, colors } from '@luma-fe-workspace/design-system';

interface TriggerProps extends Tabs.TabsTriggerProps {
  isHighlighted?: boolean;
  activeTab?: boolean;
  hasClose?: boolean;
}

export const TabRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: row;
`;

export const TabList = styled(Tabs.List)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 2.5rem;
  align-self: stretch
  row-gap: 0.25rem;
`;

export const Notifications = styled.div`
  position: absolute;
  top: 0.125rem;
  right: 0;
  background-color: ${colors.ocean};
  color: ${colors.white};
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: IBM Plex Sans;
  font-size: 0.625rem;
`;

export const TabTrigger = styled(Tabs.Trigger)<TriggerProps>`
  color: ${(props) =>
    props.activeTab ? colors['greyDark'] : colors['greyMedium']};
  background-color: ${(props) =>
    props.activeTab ? colors['white'] : colors['greyFade']};
  background-color-hover: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 4rem;
  width: fit-content;
  cursor: pointer;
  height: ${(props) => (props.activeTab ? '2.0625rem' : '2rem')};
  top: 0.5rem;
  colordisabled: ${colors.white};
  colorhover: ${colors.white};
  font-family: IBM Plex Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  border-width: 0rem;
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  box-shadow: ${(props) =>
    props.activeTab ? `-2px -4px 8px -4px ${colors.boxShadow}` : 'none'};
  margin-bottom: ${(props) => (props.activeTab ? '-0.0625rem' : '0')};
  margin-right: 0.375rem;
`;

export const TabCloseIcon = styled(Icon)`
  height: 0.75rem;
  margin-left: 0.25rem;
  width: 0.75rem;
  color: ${colors.greyLight};
`;

export const TabContent = styled(Tabs.Content)``;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  border-radius: 0rem;
`;
