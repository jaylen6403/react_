import styled from 'styled-components';
import { Variant } from '..';
import { colors } from '../../../colors';

const VARIANT_MAP = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    dropdownIcon: colors.blue,
    accountIconActiveColor: '#007dc2',
    textColor: colors.blue,
    activeHighlightColor: '#007dc2',
    tabHoverColor: '#02629D',
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    dropdownIcon: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    tabHoverColor: '#858F93',
  },
};

export const NavTabWrapper = styled.div`
  padding: 14px 51px 0 0;
`;

export const NavButton = styled.button<{
  variantType: Variant;
  isActive: boolean;
}>`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? 'bold' : ' 500')};
  font-family: 'IBM Plex Sans';
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].textColor};
  padding-bottom: 9px;
  :hover {
    color: ${(props) => VARIANT_MAP[`${props.variantType}`].tabHoverColor};
  }
  border-bottom: ${(props) =>
    props.isActive
      ? ` 5px solid ${VARIANT_MAP[`${props.variantType}`].activeHighlightColor}`
      : null};
`;
