import styled from 'styled-components';

import { Icon } from '../Icon/Icon';
import { colors } from '../../colors';

export type Variant = 'primary' | 'secondary' | 'tertiary';

export interface MenuItemProps {
  alignment: 'left' | 'center' | 'right';
  disabled?: boolean;
  isAction?: boolean;
  isHighlighted?: boolean;
  variant: Variant;
  width?: string;
}

export interface RootProps {
  isOpen?: boolean;
  variant: Variant;
}

interface VariantStyle {
  backgroundColor: string;
  backgroundColorHover: string;
  borderColor: string;
  borderColorHover: string;
  color: string;
  colorDisabled: string;
  colorHover: string;
  menuBackgroundColor: string;
  menuBackgroundColorActive: string;
  menuBackgroundColorHover: string;
  menuColor: string;
  menuColorActionHover: string;
  menuColorDisabled: string;
  menuColorHover: string;
  opacityDisabled: number;
}

const VARIANT_STYLES: { [key in Variant]: VariantStyle } = {
  primary: {
    backgroundColor: colors.blueMedium,
    backgroundColorHover: colors.blue,
    borderColor: colors.blueMedium,
    borderColorHover: colors.blueMedium,
    color: colors.white,
    colorDisabled: colors.white,
    colorHover: colors.white,
    menuBackgroundColor: colors.ocean,
    menuBackgroundColorActive: colors.blue,
    menuBackgroundColorHover: colors['light-nav-blue'],
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.white,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.white,
    opacityDisabled: 0.6,
  },
  secondary: {
    backgroundColor: colors.white,
    backgroundColorHover: colors.white,
    borderColor: colors.white,
    borderColorHover: colors.white,
    color: colors.greyMedium,
    colorDisabled: colors.greyLight,
    colorHover: colors.oceanDarker,
    menuBackgroundColor: colors.greyLighter,
    menuBackgroundColorActive: colors.greyMedium,
    menuBackgroundColorHover: colors.greyLightest,
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.blueMedium,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.greyDarker,
    opacityDisabled: 1,
  },
  tertiary: {
    backgroundColor: colors.white,
    backgroundColorHover: colors.white,
    borderColor: colors.greyLightest,
    borderColorHover: colors.oceanDarker,
    color: colors.greyMedium,
    colorDisabled: colors.greyLight,
    colorHover: colors.oceanDarker,
    menuBackgroundColor: colors.greyLighter,
    menuBackgroundColorActive: colors.greyMedium,
    menuBackgroundColorHover: colors.greyLightest,
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.blueMedium,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.greyDarker,
    opacityDisabled: 1,
  },
};

export const DropdownHeader = styled.div`
  color: ${colors.greyDark};
  margin-bottom: 0.25rem;
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: 0.03em;
  text-align: left;
`;

export const DropdownIcon = styled(Icon)`
  height: 0.75rem;
  margin-left: 0.9375rem;
  width: 0.75rem;
`;

export const Divider = styled.div`
  background-color: ${colors.greyLight};
  height: 0.0625rem;
  margin: 0.125rem 0.25rem;
  width: calc(100% - 0.5rem);
`;

export const MenuItem = styled.li<MenuItemProps>`
  border-radius: 0.25rem;
  color: ${(props) => (props.isAction ? colors['light-nav-blue'] : 'inherit')};
  cursor: pointer;
  display: flex;
  margin: ${(props) =>
    props.isAction ? '0.1875rem 0 0.4375rem' : '0.1875rem 0'};
  padding: 0.25rem 0.5rem;
  text-align: ${(props) => props.alignment || 'initial'};
  width: ${(props) => props.width || '100%'};
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => {
    const {
      menuBackgroundColorActive,
      menuBackgroundColorHover,
      menuColorActionHover,
      menuColorDisabled,
      menuColorHover,
    } = VARIANT_STYLES[props.variant];

    const activeStyles = `
      &:active {
        background-color: ${menuBackgroundColorActive};
      }
    `;

    if (props.disabled) {
      return `
        color: ${menuColorDisabled};
        cursor: default;
      `;
    }

    if (props.isHighlighted) {
      return `
        color: ${props.isAction ? menuColorActionHover : menuColorHover};
        background-color: ${menuBackgroundColorHover};

        ${activeStyles}
      `;
    }

    return activeStyles;
  }}
`;

export const Menu = styled.ul`
  background-color: ${colors.greyFade};
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  font-family: 'IBM Plex Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.125rem;
  margin: 0.5625rem 0 0;
  max-height: 17.5rem;
  max-width: 15rem;
  min-width: 7.75rem;
  overflow-y: auto;
  position: absolute;
`;

export const Button = styled.button`
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.0625rem;
  cursor: pointer;
  font-family: 'IBM Plex Sans';
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.875rem;
  padding: 0.5rem;

  &:active {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const Root = styled.div<RootProps>`
  position: relative;

  ${Button} {
    ${(props) => {
      const {
        backgroundColor,
        backgroundColorHover,
        borderColor,
        borderColorHover,
        color,
        colorDisabled,
        colorHover,
        opacityDisabled,
      } = VARIANT_STYLES[props.variant];

      return `
        color: ${color};
        border-color: ${borderColor};
        background-color: ${backgroundColor};

        &:hover:enabled {
          background-color: ${backgroundColorHover};
          border-color: ${borderColorHover};
          color: ${colorHover};
        }

        &:disabled {
          cursor: default;
          color: ${colorDisabled};
          opacity: ${opacityDisabled};
        }
      `;
    }}
  }

  ${Menu} {
    ${(props) => {
      const {
        menuBackgroundColor,
        menuBackgroundColorHover,
        menuColor,
        menuColorHover,
      } = VARIANT_STYLES[props.variant];

      return `
        color: ${menuColor};
        background-color: ${menuBackgroundColor};
        padding: ${props.isOpen ? '0.5rem 0.25rem' : '0'};

        &:hover:enabled {
          color: ${menuColorHover};
          background-color: ${menuBackgroundColorHover};
        }
      `;
    }}
  }
`;
