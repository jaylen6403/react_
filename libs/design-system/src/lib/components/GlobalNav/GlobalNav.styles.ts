import styled from 'styled-components';
import { colors } from '../../colors';

export const VARIANT_MAP = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    mobileBorder: '#5a6368',
    accountIconMainColor: '#c4cdd1',
    accountIconActiveColor: ' #007dc2',
    textColor: '#c4cdd1',
    activeTextColor: colors.white,
    activeHighlightColor: ' #007dc2',
    activeFontWeight: '500',
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    mobileBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeTextColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    activeFontWeight: '700',
  },
};

export const GlobalNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1px;
`;
