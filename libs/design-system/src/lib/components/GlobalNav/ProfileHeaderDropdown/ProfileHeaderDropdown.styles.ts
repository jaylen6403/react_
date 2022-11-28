import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';
import { colors } from '../../../colors/colors';
import type { Variant } from '..';

const VARIANT_MAP = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    dropdownIcon: colors.blue,
    accountIconActiveColor: '#26A0DC',
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

export const AccountIcon = styled(Icon)<{ variantType: Variant }>`
  font-size: 12px;
  margin-top: 5px;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].accountIconMainColor};
  cursor: pointer;
`;

export const AccountButton = styled.button<{ variantType: Variant }>`
  border-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].accountIconMainColor};
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].topNavBackground};
  border-image: none;
  border-radius: 50px;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 20px 24px 20px 0;
  width: 30px;
  :hover {
    border-color: ${(props) =>
      VARIANT_MAP[`${props.variantType}`].accountIconActiveColor};
    ${AccountIcon} {
      color: ${(props) =>
        VARIANT_MAP[`${props.variantType}`].accountIconActiveColor};
    }
  }
  :active {
    color: ${(props) =>
      VARIANT_MAP[`${props.variantType}`].accountIconActiveColor};
    ${AccountIcon} {
      color: ${(props) =>
        VARIANT_MAP[`${props.variantType}`].accountIconActiveColor};
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #fff;
  margin-left: -142px;
  margin-top: -10px;
  min-width: 170px;
  max-height: 260px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);
`;

export const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 10px 0 19px 0;
`;

export const DropdownListButton = styled.button<{
  variantType: Variant;
  isUsername: boolean;
}>`
  all: unset;
  font-size: ${(props) => (props.isUsername ? '16px' : '14px')};
  font-weight: 500;
  font-family: 'IBM Plex Sans';
  color: ${(props) =>
    props.isUsername
      ? '#858f93'
      : VARIANT_MAP[`${props.variantType}`].textColor};
  padding-bottom: ${(props) => (props.isUsername ? '10px' : '0')};
  padding-left: 16px;
  cursor: pointer;
  :hover {
    color: ${(props) =>
      props.isUsername
        ? null
        : VARIANT_MAP[`${props.variantType}`].tabHoverColor};
  }
`;

export const ListButtonWrapper = styled.div<{ isUsername: boolean }>`
  box-shadow: ${(props) =>
    props.isUsername ? `0 1px 1px 0 rgba(47, 51, 54, 0.1)` : null};
`;
