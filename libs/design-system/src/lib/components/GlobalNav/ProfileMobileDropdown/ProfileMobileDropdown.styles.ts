import styled from 'styled-components';
import { colors } from '../../../colors';
import { Icon } from '../../Icon/Icon';
import type { Variant } from '..';

const VARIANT_MAP = {
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

export const DropdownIcon = styled(Icon)<{ variantType: Variant }>`
  margin-right: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].accountIconMainColor};
`;

export const MobileDropdownWrapper = styled.ul<{ variantType: Variant }>`
  padding: 5px 16px 0 16px;
  border-bottom: ${(props) =>
    `1px solid ${VARIANT_MAP[`${props.variantType}`].mobileBorder}`};
`;

export const MobileListButton = styled.button<{
  isUsername: boolean;
  variantType: Variant;
}>`
  all: unset;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  font-family: 'IBM Plex Sans';
  color: ${(props) =>
    props.isUsername
      ? '#858f93'
      : VARIANT_MAP[`${props.variantType}`].activeTextColor};

  :active {
    font-weight: ${(props) =>
      props.isUsername
        ? null
        : VARIANT_MAP[`${props.variantType}`].activeFontWeight};
    color: ${(props) =>
      props.isUsername
        ? null
        : VARIANT_MAP[`${props.variantType}`].activeTextColor};
  }
`;

export const MobileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
`;
export const MobileTabWrapper = styled.div<{
  dropdownActive?: boolean;
  variantType: Variant;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 56px;
  border-bottom: ${(props) =>
    props.dropdownActive
      ? null
      : `1px solid ${VARIANT_MAP[`${props.variantType}`].mobileBorder}`};
`;

export const MobileTabButton = styled.button<{
  isDropdown?: boolean;
  variantType: Variant;
  isActive?: boolean;
}>`
  all: unset;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 14px;
  font-weight: normal;
  font-family: 'IBM Plex Sans';
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].textColor};
  margin-top: 19px;
`;
