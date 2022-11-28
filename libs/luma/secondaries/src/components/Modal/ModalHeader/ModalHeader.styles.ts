import styled from 'styled-components';
import { colors, Icon, Input } from '@luma-fe-workspace/design-system';
import { ModalSeperatorColor } from '../ModalHelpers';
import { FONT_IBM_SANS } from '../../../lib/luma-secondaries.styles';

const SEPERATOR_VARIANT_MAP = {
  BUY: colors.limeGreen,
  SELL: colors.red,
  NONE: colors.greyLight,
};

export const ModalTitle = styled.div`
  font-family: ${FONT_IBM_SANS};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3125rem;
  letter-spacing: 0.03;
  text-transform: uppercase;
  color: ${colors.greyDarker};
  margin: 0rem 0.25rem 0 0;
`;

export const ModalHeaderActions = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
`;

export const ModalSearchNameInput = styled(Input)`
  font-size: 0.75rem;
  line-height: 1rem;
  width: 14.375rem;
  height: 2rem;
  padding: 0.375rem 0.5rem;
  border-color: ${colors.greyLightest};
  border-radius: 0.25rem;
`;

export const ModalCloseButton = styled.button`
  border: 0rem transparent;
  background: transparent;
  width: 2rem;
  height: 2rem;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.625rem;
`;

export const ModalCloseIcon = styled(Icon)`
  text-transform: uppercase;
  color: ${colors.greyLightest};
  line-height: 1.25rem;
  width: 1.125rem;
  height: 1.125rem;
`;

export const StyledModalHeader = styled.div<{
  seperatorColor: ModalSeperatorColor;
}>`
  width: 100%;
  height: 2.5rem;
  display: flex;
  order: 0;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  opacity: 1;
  border-bottom: 0.0625rem
    ${(props) => SEPERATOR_VARIANT_MAP[props.seperatorColor]} solid;
`;

export const ModalClock = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTimer = styled.div`
  display: flex;
  padding: 0rem 0.5rem 0rem 0rem;
  height: 1.5rem;
  width: 4.125rem;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ModalTimerIcon = styled(Icon)`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: 0.01875rem;
  text-transform: uppercase;
`;
