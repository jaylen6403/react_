import styled from 'styled-components';
import { Variant, VARIANT_MAP } from '..';

export const MobileTabWrapper = styled.div<{
  isDropdown?: boolean;
  variantType: Variant;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 56px;
  border-bottom: ${(props) =>
    props.isDropdown
      ? null
      : `1px solid ${VARIANT_MAP[`${props.variantType}`].mobileBorder}`};
`;

export const MobileButton = styled.button<{
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

export const ActiveButtonHighlight = styled.div<{
  issuerLogo?: string;
  isActive: boolean;
  variantType: Variant;
}>`
  width: ${(props) => (props.isActive ? '104px ' : null)};
  height: ${(props) => (props.isActive ? '3px ' : null)};
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].activeHighlightColor};
`;
