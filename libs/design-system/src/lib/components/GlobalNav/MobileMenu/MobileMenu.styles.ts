import styled from 'styled-components';
import { Icon } from '../../Icon/Icon';
import { Variant, VARIANT_MAP } from '..';

export const MobileMenuWrapper = styled.div<{
  isOpen: boolean;
  variantType: Variant;
}>`
  min-height: ${(props) => (props.isOpen ? '100vh' : '64px')};
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].topNavBackground};
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  border-bottom-right-radius: ${(props) => (props.isOpen ? '0px ' : '24px')};
  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);
  border: 1px solid
    ${(props) => VARIANT_MAP[`${props.variantType}`].topNavBorder};
`;

export const MobileNavWrapper = styled.nav<{
  issuerLogo?: string;
  isOpen: boolean;
  variantType: Variant;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  border-bottom-right-radius: ${(props) => (props.isOpen ? '0px ' : '24px')};
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].topNavBackground};
`;

export const NavTabWrapper = styled.div<{
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

export const NavTabButton = styled.button<{
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
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  font-family: 'IBM Plex Sans';
  color: ${(props) =>
    props.isDropdown
      ? VARIANT_MAP[`${props.variantType}`].activeTextColor
      : VARIANT_MAP[`${props.variantType}`].textColor};
  margin-top: 19px;

  :active {
    font-weight: ${(props) =>
      VARIANT_MAP[`${props.variantType}`].activeFontWeight};
    color: ${(props) => VARIANT_MAP[`${props.variantType}`].activeTextColor};
  }
`;

export const DropdownIcon = styled(Icon)<{ variantType: Variant }>`
  margin-right: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].accountIconMainColor};
`;

export const LogoContainer = styled.div<{ width?: string; height?: string }>`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 16px;
  width: ${(props) => (props.width ? props.width : '144px')};
  height: ${(props) => (props.height ? props.height : '28px')};
`;

export const MobileMenuIcon = styled(Icon)<{ variantType: Variant }>`
  font-size: 28px;
  color: ${(props) => VARIANT_MAP[`${props.variantType}`].activeTextColor};
`;

export const MobileMenuButton = styled.button`
  all: unset;
  padding: 20px 24px 20px 16px;
`;

export const MobileTabConatiner = styled.div`
  padding: 0px 16px;
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

export const MobileDropdownWrapper = styled.ul`
  padding: 0 16px 0 16px;
`;

export const PoweredByLogoContainer = styled.div`
  width: 100vw;
  min-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f5;
`;
