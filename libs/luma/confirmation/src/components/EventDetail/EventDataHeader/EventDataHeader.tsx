import React, { Dispatch, SetStateAction } from 'react';
import { EventProductData } from '@luma-fe-workspace/redux';
import { bofaLogo } from '../../../utils/constants';
import {
  EventHeaderContainer,
  EventHeader,
  IssuerLogo,
  LogoContainer,
  ProductDescription,
  ProductGeneralIssuer,
  InfoToggle,
  ToggleButton,
} from './EventDataHeader.style';

interface EventDataProps {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
  productDetailsData: EventProductData;
}

export const EventDataHeader: React.FC<EventDataProps> = ({
  activeButton,
  setActiveButton,
  productDetailsData,
}: EventDataProps): React.ReactElement => {
  return (
    <EventHeaderContainer>
      <EventHeader>
        <LogoContainer>
          <IssuerLogo
            src={bofaLogo}
            alt={productDetailsData.issuer}
            height={'2rem'}
          />
        </LogoContainer>

        <ProductDescription>
          <ProductGeneralIssuer>
            {productDetailsData.issuer}
          </ProductGeneralIssuer>{' '}
          | {productDetailsData.structureNameInternal}
        </ProductDescription>

        <InfoToggle>
          <ToggleButton
            selected={activeButton === 'Preview Email'}
            onClick={() => setActiveButton('Preview Email')}
          >
            Preview Email
          </ToggleButton>
          <ToggleButton
            selected={activeButton === 'More Info'}
            onClick={() => setActiveButton('More Info')}
          >
            More Info
          </ToggleButton>
        </InfoToggle>
      </EventHeader>
    </EventHeaderContainer>
  );
};
