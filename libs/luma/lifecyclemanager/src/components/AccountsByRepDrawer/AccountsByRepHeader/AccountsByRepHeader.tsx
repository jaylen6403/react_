import {
  LifecycleEventLM,
  selectLifecycle,
  selectLifecycleEventDisplayCurrency,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import {
  DownloadButton,
  EventDetailsContainer,
  EventDetailsKey,
  EventDetailsRow,
  EventDetailsValue,
  Header,
  HeaderWrapper,
  Issuer,
  IssuerLogo,
  IssuerLogoContainer,
  ProductIdentifierLink,
  StructureType,
  VerticalSeparator,
} from './AccountsByRepHeader.styles';
import { upperCaseFirstLetter } from '../../../utils/textUtils';
import { Currency } from '../../PercentageBar/PercentageBarCard.styles';
import { createProductDetailsUrl } from '../../../utils/linkingUtils';
import { useEffect, useState } from 'react';
import { useGetDocumentContentsUsingGetQueryEnhanced } from '@luma-fe-workspace/redux';
import {
  isDev,
  isHigherEnvironment,
  isQA,
  LumaIcon,
} from '@luma-fe-workspace/design-system';

interface AccountsByRepHeaderProps {
  selectedEvent: LifecycleEventLM;
}

export const AccountsByRepHeader = ({
  selectedEvent,
}: AccountsByRepHeaderProps) => {
  const [logoExists, setLogoExists] = useState<boolean>(false);
  const logoData = useAppSelector(selectLifecycle).logoObject;
  const issuerLogo = logoData?.[`${selectedEvent.issuer}`];
  const issuerURL = `https://cms.lumafintech.com/cms-assets/PROD/images/company-logos/${issuerLogo}`;
  const displayCurrency = useAppSelector(selectLifecycleEventDisplayCurrency);

  const [productPerformanceReportBlob, setProdcutPerformanceReportBlob] =
    useState<Blob>();
  const documentRequestResponse = useGetDocumentContentsUsingGetQueryEnhanced({
    key: isQA()
      ? 'ed55577b-1477-4bdd-b02b-3882e0e288fb'
      : isDev() || !isHigherEnvironment() // Allow Dev and localhost
      ? '68042759-985c-458b-a145-797f751aeb31'
      : '',
  });

  useEffect(() => {
    if (
      documentRequestResponse.isSuccess &&
      !documentRequestResponse.isFetching
    ) {
      setProdcutPerformanceReportBlob(documentRequestResponse.data);
    }
  }, [documentRequestResponse]);

  return (
    <HeaderWrapper>
      <IssuerLogoContainer visible={logoExists}>
        <IssuerLogo
          src={issuerURL}
          alt="issuer_logo"
          onError={(e) => setLogoExists(false)}
          onLoad={(e) => setLogoExists(true)}
        />
      </IssuerLogoContainer>

      <Header>
        <Issuer>{selectedEvent.issuer}</Issuer>
        <VerticalSeparator />
        <ProductIdentifierLink
          href={createProductDetailsUrl(
            selectedEvent.cusip ?? selectedEvent.isin
          )}
          target="_blank"
        >
          {selectedEvent.cusip ?? selectedEvent.isin}
        </ProductIdentifierLink>
        <DownloadButton
          size={'icon_only'}
          variant="secondary"
          icon={{
            iconComponent: (
              <LumaIcon iconCode="file-arrow-down" type="regular" />
            ),
          }}
          onClick={() =>
            productPerformanceReportBlob &&
            window.open(
              window.URL.createObjectURL(productPerformanceReportBlob),
              '_blank',
              'noreferrer, noopener'
            )
          }
        />
      </Header>
      <StructureType>{selectedEvent.structureType}</StructureType>
      <EventDetailsContainer>
        <EventDetailsRow>
          <EventDetailsKey>Event Type</EventDetailsKey>
          <EventDetailsValue>
            {upperCaseFirstLetter(selectedEvent.eventType)}
          </EventDetailsValue>
        </EventDetailsRow>
        <EventDetailsRow>
          <EventDetailsKey>Event Date</EventDetailsKey>
          <EventDetailsValue>{selectedEvent.eventDate}</EventDetailsValue>
        </EventDetailsRow>
        <EventDetailsRow>
          <EventDetailsKey>Notional</EventDetailsKey>
          <EventDetailsValue>
            {Intl.NumberFormat().format(selectedEvent.notionalHoldingsSum)}
            {'  '}
            <Currency>{displayCurrency}</Currency>
          </EventDetailsValue>
        </EventDetailsRow>
      </EventDetailsContainer>
    </HeaderWrapper>
  );
};
