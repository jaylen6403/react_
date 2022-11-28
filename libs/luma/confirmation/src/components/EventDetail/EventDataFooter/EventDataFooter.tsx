import { useEffect, useMemo } from 'react';
import { LumaButton } from '@luma-fe-workspace/design-system';
import {
  EmailActions,
  EmailActionsWrapper,
  EmailActionsText,
} from './EventDataFooter.styles';
import {
  EventProductData,
  useSendUsingPostMutation,
} from '@luma-fe-workspace/redux';

import { formatEventType, handleLMProductLink } from '../../../utils/gridUtils';
import { getTemplateValues } from '../../../utils/emailUtils';
import {
  useEventConfirmationOptions,
  StatusOptions,
} from '../../../utils/hooks/useEventConfirmationOptions';

interface Props {
  emailRecipientsTo: string[];
  emailRecipientsCC: string[];
  emailRecipientsBCC: string[];
  eventData: EventProductData;
  payout: string;
  templateKey: string;
  closeDrawer?: () => void;
}
export const EventDataFooter = ({
  emailRecipientsTo,
  emailRecipientsCC,
  emailRecipientsBCC,
  eventData,
  payout,
  templateKey,
  closeDrawer = () => {
    /* do nothing */
  },
}: Props) => {
  const [sendUsingPost, { status }] = useSendUsingPostMutation();
  const { toastData } = useEventConfirmationOptions();

  const emailTemplateValues: { [key: string]: string | undefined } = useMemo(
    () => getTemplateValues(eventData, payout),
    [eventData, payout]
  );

  useEffect(() => {
    toastData.setOpen(true);

    if (status === 'fulfilled') {
      toastData.setStatus(StatusOptions.Success);
    } else if (status === 'rejected') {
      toastData.setStatus(StatusOptions.Failure);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleSendEmail = async () => {
    try {
      await sendUsingPost({
        emailTemplate: {
          to: emailRecipientsTo,
          cc: emailRecipientsCC,
          bcc: emailRecipientsBCC,
          from: 'support@lumafintech.com',
          subject: `${formatEventType(eventData.eventType)} Notification ${
            emailTemplateValues['description']
          } ${eventData.productSymbol || ''}`,
          templateKey: templateKey,
          companyKey: 'luma',
          model: emailTemplateValues,
        },
      });
    } catch {
      console.error(Error);
    }

    closeDrawer();
  };

  return (
    <EmailActionsWrapper>
      <EmailActions>
        <LumaButton
          variant="secondary"
          size="medium"
          onClick={() => handleLMProductLink(eventData.productIdentifier)}
        >
          <EmailActionsText>View in Lifecycle</EmailActionsText>
        </LumaButton>
        <LumaButton variant="primary" size="medium" onClick={handleSendEmail}>
          <EmailActionsText>Send Event Email</EmailActionsText>
        </LumaButton>
      </EmailActions>
    </EmailActionsWrapper>
  );
};
