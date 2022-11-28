import { ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
  HeaderWrapper,
  AccordionSubText,
  ValueMismatch,
  ValueMismatchIcon,
  ValueMismatchText,
} from './EventDetailAccordion.style';

interface Props {
  borderBottom?: string;
  children: ReactNode;
  header: string;
  status?: string;
}

const ValueMismatchMessage = () => (
  <ValueMismatch>
    <ValueMismatchIcon iconCode="circle-xmark" />
    <ValueMismatchText>Value Mismatch</ValueMismatchText>
  </ValueMismatch>
);

export const EventDetailAccordion = ({
  borderBottom,
  header,
  status,
  children,
}: Props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Accordion borderBottom="borderBottom">
      <HeaderWrapper onClick={() => setIsActive(!isActive)}>
        <AccordionIcon iconCode={isActive ? 'chevron-down' : 'chevron-right'} />
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionSubText>
          {status === 'REQUIRES_RESOLUTION' ? <ValueMismatchMessage /> : null}
        </AccordionSubText>
      </HeaderWrapper>
      {isActive && <AccordionContent>{children}</AccordionContent>}
    </Accordion>
  );
};
