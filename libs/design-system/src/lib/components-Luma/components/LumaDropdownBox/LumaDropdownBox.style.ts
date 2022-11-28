import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts';
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';
import { DropDownBoxInterface } from './LumaDropDownBox';

const DIMENSION_MAP = {
  large: {
    height: '2.5rem',
  },
  medium: {
    height: '2rem',
  },
  small: {
    height: '1.5rem',
  },
  top: {
    height: '-6rem',
  },
  bottom: {
    height: '0',
  },
};

export const DropDownBox = styled.ul<
  Pick<DropDownBoxInterface<DataItemProps>, 'variant' | 'size' | 'isOpen'>
>`
  display: none;
  flex: auto;
  flex-direction: column;
  position: absolute;
  top: ${(props) => (props.size ? DIMENSION_MAP[props.size].height : '0')};
  bottom: 2.5rem;
  width: 100%;
  min-width: 8rem;
  margin-bottom: 0;
  padding: 0;
  padding-top: ${(props) =>
    props.variant === 'no-border-bottom' ? '1.7rem' : '0'};
  padding-bottom: ${(props) =>
    props.variant === 'no-border-top' ? '1.7rem' : '0'};
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);
  border: solid 1px ${LumaColor.NEUTRAL_70};
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  transition: all 300ms ease-in-out;
  height: fit-content;
  max-height: 7.125rem;
  overflow-x: hidden;
  opacity: 0;
  z-index: 2;

  ${(props) =>
    props.isOpen
      ? `display: flex;
  opacity: 1;`
      : ''}
`;

export const InnerBox = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${LumaColor.NEUTRAL_00_WHITE};
  }

  ::-webkit-scrollbar-thumb {
    background: ${LumaColor.NEUTRAL_30};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${LumaColor.NEUTRAL_40};
  }
`;

export const DropDownListElement = styled.li<{
  isHighlighted: boolean;
  isSelected?: boolean;
  disabled?: boolean;
}>`
  padding: 0.5rem 0;
  margin: 0 1rem;
  display: flex;
  flex: auto;
  flex-direction: column;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  color: ${LumaColor.NEUTRAL_80};
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${LumaColor.NEUTRAL_30};
  }
  &:hover {
    .DropDownText {
      color: ${LumaColor.NEUTRAL_60};
      ${(props) => (props.disabled ? `cursor: not-allowed;` : '')}
    }
  }
  ${(props) =>
    props.isHighlighted
      ? `color: ${LumaColor.NEUTRAL_60};
        `
      : ''}
  ${(props) =>
    props.isSelected
      ? `font-family: ${LumaFont.DEFAULT.BOLD};
    `
      : ''}
    ${(props) =>
    props.disabled
      ? `color: ${LumaColor.NEUTRAL_60}; cursor: not-allowed;
    `
      : ''}
`;

export const DropDownSection = styled.div`
  padding: 0.25rem 0.938rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  color: ${LumaColor.NEUTRAL_80};
  background-color: ${LumaColor.NEUTRAL_20};
`;
