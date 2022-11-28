import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { Link } from 'react-router-dom';

export const Root = styled.nav`
  width: 100%;
  display: flex;
  background: transparent;
  justify-content: center;
  height: 2.25rem;
`;

export const NavLink = styled(Link)<{ active: boolean }>`
  height: 2.25rem;
  padding: 0.5rem 1.25rem;
  background: ${(props) => (props.active ? colors.blueMedium : 'transparent')};
  color: ${(props) => (props.active ? colors.white : colors.blueMedium)};
  border-radius: 0.25rem 0.25rem 0rem 0rem;
  margin: 0rem 0.125rem;
  text-decoration: none;
  font-family: IBM Plex Sans;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.01875rem;
  &:hover {
    background: ${colors.ocean};
    color: ${colors.blueMedium};
  }
`;
