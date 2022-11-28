import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppFooter, Spinner } from '@luma-fe-workspace/luma/dashboard';
import {
  useCreateEventConfirmationListUsingGetQuery,
  EventProductData,
  WidgetPermissions,
  lumaPermissionsArray,
  useUiPermissionsQuery,
} from '@luma-fe-workspace/redux';

import { OpsEventConfirmations } from './OpsEventConfirmations';
import { ClientApproverEventConfirmations } from './ClientApproverEventConfirmations';
import {
  ConfirmationsContainer,
  Header,
  HeaderContainer,
} from './EventConfirmations.styles';
import { ProvideEventConfirmationOptions } from '../../utils/hooks/useEventConfirmationOptions';
import { EventConfirmationOptions } from './EventConfirmationOptions';

export const LumaEventConfirmation = () => {
  const { isLoading: eventsLoading, data: eventsData } =
    useCreateEventConfirmationListUsingGetQuery();

  const { data: userPermissionsData } = useUiPermissionsQuery({
    permissions: lumaPermissionsArray,
  });

  const navigate = useNavigate();

  const eventsDataExists = !eventsLoading && eventsData;

  const isAdmin = userPermissionsData?.includes(WidgetPermissions.MenuAdmin);
  const hasClientApproverAccess = userPermissionsData?.includes(
    WidgetPermissions.EventConfirmationsApprover
  );

  const showOpsTable = eventsDataExists && isAdmin;

  const chooseEventConfirmationTable = (
    showOpsTable: boolean | undefined,
    hasClientApproverAccess: boolean | undefined,
    eventsData: EventProductData[] | undefined
  ) => {
    if (showOpsTable && eventsData) {
      return <OpsEventConfirmations eventsData={eventsData} />;
    } else if (hasClientApproverAccess && eventsData) {
      return <ClientApproverEventConfirmations eventsData={eventsData} />;
    } else {
      return <Spinner />;
    }
  };

  useEffect(() => {
    if (userPermissionsData) {
      if (isAdmin || hasClientApproverAccess) return;
      return navigate('/dashboard');
    }
  }, [userPermissionsData]);

  return (
    <ProvideEventConfirmationOptions>
      <ConfirmationsContainer>
        <HeaderContainer>
          <Header>Event Notifications</Header>
        </HeaderContainer>
        <EventConfirmationOptions />
        {chooseEventConfirmationTable(
          showOpsTable,
          hasClientApproverAccess,
          eventsData
        )}
        <AppFooter />
      </ConfirmationsContainer>
    </ProvideEventConfirmationOptions>
  );
};
