import { colors } from '../../colors';
import styled from 'styled-components';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

interface MenuItemProps {
  isAction?: boolean;
  width?: string;
}

interface RootProps {
  isOpen?: boolean;
}

export const ContextMenuItem = styled(ContextMenuPrimitive.Item)<MenuItemProps>`
  border-radius: 0.25rem;
  color: ${(props) => (props.isAction ? colors['light-nav-blue'] : 'inherit')};
  cursor: pointer;
  display: inline-block;
  margin: ${(props) =>
    props.isAction ? '0.1875rem 0 0.4375rem' : '0.1875rem 0'};
  padding: 0.25rem 0.5rem;
  width: ${(props) => props.width || '100%'};
  background-color: ${colors.greyLighter};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:focus {
    background-color: ${colors.greyLightest};
    outline: none;
  }

  ${(props) => {
    const activeStyles = `
      &:active {
        background-color: ${colors.greyMedium};
      }
    `;

    if (props.disabled) {
      return `
        color: ${colors.greyLight};
        cursor: default;
        pointer-events: none;
      `;
    }

    return activeStyles;
  }}
`;

export const ContextMenuContent = styled(ContextMenuPrimitive.Content)`
  background-color: ${colors.greyLighter};  
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

  &:hover:enabled {
    color: ${colors.greyDarker};
    background-color: ${colors.greyLightest};
`;

export const ContextMenuRoot = styled(ContextMenuPrimitive.Root)<RootProps>`
  position: absolute;

  ${ContextMenuContent} {
    ${(props) => {
      return `
        color: ${colors.greyDarker};
        background-color: ${colors.greyMedium};
        padding: ${props.isOpen ? '0.5rem 0.25rem' : '0'};

        &:hover:enabled {
          color: ${colors.greyDarker};
          background-color: ${colors.greyLightest};
        }
      `;
    }}
  }
`;

export const Instruction = styled.div`
  border-style: dashed;
  color: ${colors.blueDark};
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  font-family: 'IBM Plex Sans';
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 0.875rem;
  padding: 0.5rem;
`;
