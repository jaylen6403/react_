import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, LumaButton } from '@luma-fe-workspace/design-system';
import { AppFooter } from '@luma-fe-workspace/luma/dashboard';

export const LumaLifecycleManagerContainer = styled.div<{ padding: number }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding}rem;
  gap: 1.5rem;
`;

export const LinkNav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const LinkTab = styled(Link)<{ isActive?: boolean }>`
  all: unset;
  cursor: pointer;
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${({ isActive }) =>
    isActive ? `${colors.neutral80}` : `${colors.neutral60}`};
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${colors.primary60}` : 'unset'};
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  font-size: 1rem;
  height: min-content;
  padding-bottom: 0.5rem;

  &:hover {
    color: ${colors.primary60};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LifecycleManagerBody = styled.div``;

export const RightNavActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LMAppFooter = styled(AppFooter)`
  margin-top: 0;
`;

export const PerformanceReportButton = styled(LumaButton)`
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 500;
  height: 2rem;
  margin-right: 1rem;
  & button {
    padding: 0 1.25rem;
  }
`;

export const PerformanceReportLink = styled.a`
  text-decoration: none;
  color: ${colors.primary50};
`;
