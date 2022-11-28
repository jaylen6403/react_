import { colors } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const disabledCellStyleObject = {
  cursor: 'not-allowed',
};

export const CellButton = styled.button<{
  variant: 'primary' | 'secondary' | 'disabled';
}>`
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.white : colors.orange};
  color: ${(props) =>
    props.variant === 'primary' ? colors.oceanDarker : colors.greyDarker};
  border: ${(props) => (props.variant === 'primary' ? '.0625' : '.03125')}rem
    solid ${colors.greyLighter};
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.01875rem;
  cursor: pointer;
  &:hover:not([disabled]) {
    background-color: ${colors.oceanDarker};
    color: ${colors.white};
    border: none;
  }
  :disabled {
    ${disabledCellStyleObject};
    background-color: ${colors.yellowLighter};
    color: ${colors.black};
  }
`;
