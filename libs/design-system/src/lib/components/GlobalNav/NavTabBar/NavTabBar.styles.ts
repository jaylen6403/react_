import styled from 'styled-components';
import { colors } from '../../../colors';

export const NavTabBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);
  align-items: center;
  max-height: 48px;
  background-color: ${colors.white};
  margin-top: 1px;
`;

export const NavTabBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 24px;
`;
