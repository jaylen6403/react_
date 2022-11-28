import React, { useEffect, useState } from 'react';
import { EventDataHeader } from './EventDataHeader';
import {
  EventProductData,
  selectUsername,
  useAppSelector,
  useGetEmailTemplateAndRecipientsUsingGetQuery,
} from '@luma-fe-workspace/redux';
import {
  EventContainer,
  EventContent,
  PreviewEmailContent,
  MoreInfoContent,
  EmailPills,
} from './EventDetail.style';
import { EventDetailAccordion } from './EventDetailAccordion';
import { ProductDetails } from './ProductDetails';
import { SelectValue } from './SelectValue';
import { EventEmail } from './EventEmail';
import { EventDataFooter } from './EventDataFooter';
import { Pill } from '../Pill';

export interface EventDetailProps {
  isOpen: boolean;
  productData: EventProductData;
  closeDrawer?: () => void;
}

export enum LevelSource {
  CONFIRMED = 'Confirmed',
  LUMA = 'Luma',
  ISSUER = 'Issuer',
}
export interface SelectedValue {
  type: LevelSource;
  value: string;
}

/**
 * Base component to display all of the information associated with the event.
 * @param {boolean} isOpen - Determines if the EventDetails is currently open.
 * @param {EventProductData} productData - the product data
 * @returns {React.ReactNode} the EventDetail.
. */
export const EventDetail: React.FC<EventDetailProps> = ({
  isOpen,
  productData,
  closeDrawer = () => {
    /* do nothing */
  },
}: EventDetailProps): React.ReactElement | null => {
  const userName = useAppSelector(selectUsername);

  const [activeButton, setActiveButton] = useState('Preview Email');
  const [emailRecipientsTo, setEmailRecipientsTo] = useState<string[]>([]);
  const [emailRecipientsCC, setEmailRecipientsCC] = useState<string[]>([]);
  const [emailRecipientsBCC, setEmailRecipientsBCC] = useState<string[]>([]);
  const [templateKey] = useState<string>('singleEventNotification');
  const [selectedValue, setSelectedValue] = useState<SelectedValue>({
    type: LevelSource.CONFIRMED,
    value: '',
  });

  const { data: emailData } = useGetEmailTemplateAndRecipientsUsingGetQuery({
    templateKey: templateKey,
  });

  useEffect(() => {
    const recipients = emailData?.[0]?.recipients;

    setEmailRecipientsTo(
      (
        recipients
          ?.filter((x) => x?.email !== undefined && x.recipientType === 'to')
          .map((x) => x?.email ?? '') ?? []
      ).concat([userName])
    );
    setEmailRecipientsCC(
      recipients
        ?.filter((x) => x?.email !== undefined && x.recipientType === 'cc')
        .map((x) => x?.email ?? '') ?? []
    );
    setEmailRecipientsBCC(
      recipients
        ?.filter((x) => x?.email !== undefined && x.recipientType === 'bcc')
        .map((x) => x?.email ?? '') ?? []
    );
  }, [userName, emailData]);

  if (productData && isOpen) {
    return (
      <EventContainer>
        <EventDataHeader
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          productDetailsData={productData}
        />
        <EventContent>
          {activeButton === 'Preview Email' ? (
            <PreviewEmailContent>
              <EventDetailAccordion header="Recipients">
                <EmailPills>
                  {emailRecipientsTo.map((email) => (
                    <Pill text={email} key={email} />
                  ))}
                  {emailRecipientsCC.map((email) => (
                    <Pill text={email} key={email} />
                  ))}
                  {emailRecipientsBCC.map((email) => (
                    <Pill text={email} key={email} />
                  ))}
                </EmailPills>
              </EventDetailAccordion>
              <EventDetailAccordion
                header="Select Value*"
                status={productData.confirmationStatus}
              >
                <SelectValue
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  productData={productData}
                />
              </EventDetailAccordion>
              <EventDetailAccordion header="Email Preview" borderBottom="0">
                <EventEmail
                  eventData={productData}
                  payout={selectedValue.value}
                  template={emailData?.at(0)?.template}
                />
              </EventDetailAccordion>
            </PreviewEmailContent>
          ) : (
            <MoreInfoContent>
              <ProductDetails id={productData.productIdentifier} />
            </MoreInfoContent>
          )}
        </EventContent>
        <EventDataFooter
          emailRecipientsTo={emailRecipientsTo}
          emailRecipientsCC={emailRecipientsCC}
          emailRecipientsBCC={emailRecipientsBCC}
          eventData={productData}
          payout={selectedValue.value}
          closeDrawer={closeDrawer}
          templateKey={templateKey}
        />
      </EventContainer>
    );
  } else {
    return null;
  }
};
