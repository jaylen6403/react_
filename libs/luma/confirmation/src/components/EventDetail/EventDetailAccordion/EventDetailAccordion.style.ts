import styled from 'styled-components';
import { LumaColor, Icon } from '@luma-fe-workspace/design-system';

interface AccordionProps {
  borderBottom: string;
}
export const Accordion = styled.div<AccordionProps>`
  padding: 1.5rem 0;
  border-bottom: ${(props) =>
    `0.063rem solid ${LumaColor.NEUTRAL_40};` || props.borderBottom};
`;

export const AccordionHeader = styled.div`
  font-weight: 700;
  color: ${LumaColor.NEUTRAL_80};
  font-size: 20px;
`;

export const AccordionContent = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const AccordionIcon = styled(Icon)`
  color: ${LumaColor.NEUTRAL_80};
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 0.5rem;
  margin-top: 3px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const AccordionSubText = styled.div`
  display: flex;
`;

export const ValueMismatch = styled.div`
  color: ${LumaColor.NEGATIVE_60};
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  margin-left: 1rem;
`;

export const ValueMismatchIcon = styled(Icon)`
  margin-right: 0.5rem;
  align-self: center;
`;

export const ValueMismatchText = styled.div`
  align-self: center;
`;
