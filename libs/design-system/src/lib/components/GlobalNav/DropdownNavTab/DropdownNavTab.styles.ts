import styled from 'styled-components';
import { colors } from '../../../colors';
import { Icon } from '../../Icon/Icon';
import { Variant } from '..';

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
} as const;

export const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #fff;
  margin-top: -5px;
  max-height: 260px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);
  overflow: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 19px 22px 19px 16px;
`;

export const DropdownIcon = styled(Icon)<{ variantType: Variant }>`
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].dropdownIcon};
`;

export const DropdownButtonWrapper = styled.div`
  padding: 14px 51px 0 0;
  white-space: nowrap;
`;

export const DropdownButton = styled.button<{
  variantType: Variant;
  isActive: boolean;
}>`
  all: unset;
  font-size: 16px;
  font-weight: 500;
  font-family: 'IBM Plex Sans';
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].textColor};
  padding-bottom: 9px;
  cursor: pointer;
  :hover {
    color: ${(props) => VARIANT_MAP[`${props.variantType}`].tabHoverColor};
  }
  border-bottom: ${(props) =>
    props.isActive
      ? `5px solid ${VARIANT_MAP[`${props.variantType}`].activeHighlightColor}`
      : null};
`;

export const DropdownListButton = styled.button<{
  variantType: Variant;
  isActive: boolean;
}>`
  all: unset;
  font-size: 14px;
  font-weight: 500;
  font-family: 'IBM Plex Sans';
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].textColor};
  padding-bottom: 0;
  cursor: pointer;
  :hover {
    color: ${(props) => VARIANT_MAP[`${props.variantType}`].tabHoverColor};
  }
  border-bottom: ${(props) =>
    props.isActive
      ? ` 3px solid ${VARIANT_MAP[`${props.variantType}`].activeHighlightColor}`
      : null};
`;
