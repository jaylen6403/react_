import {
  LumaColor,
  breakpoints,
  colors,
  spacing,
  LumaIcon,
} from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const InfoWidgetWrapper = styled.div<{
  isCollapsed: boolean;
  styles?: string;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 0.0625rem solid ${LumaColor.NEUTRAL_40};
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${colors.white};
  height: ${(props) => (props.isCollapsed ? '3.25rem' : '22.5rem')};
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  @media ${breakpoints.tablet} {
    width: 100%;
  }
  ${(props) => props.styles}
`;

export const InfoHeader = styled.div<{ collapsible: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: ${(props) => (props.collapsible ? 'pointer' : 'default')};
`;

export const CollapseIcon = styled(LumaIcon)<{ isCollapsed: boolean }>`
  width: 1.125rem;
  height 1.25rem;
  padding: 1rem;
  transform: ${(props) =>
    props.isCollapsed ? 'rotate(-180deg)' : 'rotate(0deg)'};
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
`;

export const InfoWidgetTitle = styled.div`
  color: ${LumaColor.NEUTRAL_80};
  padding: 1rem 1rem 0.5rem 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: ${spacing.xs};
`;

export const InfoWidgetContent = styled.div`
  overflow: hidden;
`;
