import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';
import { Variant, VARIANT_MAP } from '..';

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
  font-weight: ${(props) =>
    props.isActive
      ? VARIANT_MAP[`${props.variantType}`].activeFontWeight
      : 'normal'};
  font-family: 'IBM Plex Sans';
  color: ${(props) =>
    props.isActive
      ? VARIANT_MAP[`${props.variantType}`].activeTextColor
      : VARIANT_MAP[`${props.variantType}`].textColor};
  margin-top: 19px;
`;

export const DropdownIcon = styled(Icon)<{ variantType: Variant }>`
  margin-right: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].accountIconMainColor};
`;

export const ActiveButtonHighlight = styled.div<{
  isActive: boolean;
  variantType: Variant;
}>`
  width: ${(props) => (props.isActive ? '104px ' : null)};
  height: ${(props) => (props.isActive ? '3px ' : null)};
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].activeHighlightColor};
`;

export const MobileDropdownWrapper = styled.ul<{
  variantType: Variant;
}>`
  padding: 5px 16px 0 16px;
  border-bottom: ${(props) =>
    `1px solid ${VARIANT_MAP[`${props.variantType}`].mobileBorder}`};
`;

export const MobileListButton = styled.button<{
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
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].activeTextColor};

  :active {
    font-weight: ${(props) =>
      VARIANT_MAP[`${props.variantType}`].activeFontWeight};
    color: ${(props) => VARIANT_MAP[`${props.variantType}`].activeTextColor};
  }
`;
export const MobileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
`;
