import Mustache from 'mustache';
import {
  EmailContainer,
  EmailDetails,
  EmailPreviewWrapper,
} from './EventEmail.style';

import { Spinner } from '@luma-fe-workspace/luma/dashboard';
import { EventProductData } from '@luma-fe-workspace/redux';
import { useMemo } from 'react';
import { getTemplateValues } from '../../../utils/emailUtils';

interface Props {
  eventData: EventProductData;
  template: string | undefined;
  payout: string;
}

export const EventEmail = ({
  eventData,
  template = '',
  payout = '0',
}: Props) => {
  const emailTemplateValues: { [key: string]: string | undefined } = useMemo(
    () => getTemplateValues(eventData, payout),
    [eventData, payout]
  );

  const view = Mustache.render(template ?? '', emailTemplateValues);

  return (
    <EmailContainer>
      {template ? (
        <EmailDetails>
          <EmailPreviewWrapper dangerouslySetInnerHTML={{ __html: view }} />
        </EmailDetails>
      ) : (
        <Spinner />
      )}
    </EmailContainer>
  );
};
