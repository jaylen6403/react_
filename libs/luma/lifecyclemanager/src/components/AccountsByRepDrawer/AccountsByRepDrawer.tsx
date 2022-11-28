import { Drawer } from '@luma-fe-workspace/design-system';
import { LifecycleEventLM } from '@luma-fe-workspace/redux';
import { createLink } from '../../utils/linkingUtils';
import {
  ContentContainer,
  Separator,
  RequestNewProductButton,
  RequestNewProductContainer,
} from './AccountsByRepDrawer.styles';
import { AccountsByRepHeader } from './AccountsByRepHeader/AccountsByRepHeader';
import { AccountsByRepLists } from './AccountsByRepLists/AccountsByRepLists';

interface AccountsByRepDrawerProps {
  selectedEvent?: LifecycleEventLM;
  setSelectedEvent: (event: LifecycleEventLM | undefined) => void;
}

export const AccountsByRepDrawer = ({
  selectedEvent,
  setSelectedEvent,
}: AccountsByRepDrawerProps) => {
  if (!selectedEvent) return null;

  return (
    <Drawer
      id={'Accounts by Representative'}
      isOpen={!!selectedEvent}
      closeDrawer={() => setSelectedEvent(undefined)}
    >
      <ContentContainer>
        <div>
          <AccountsByRepHeader selectedEvent={selectedEvent} />
          <AccountsByRepLists selectedEvent={selectedEvent} />
        </div>
        <div>
          <Separator />
          <RequestNewProductContainer>
            <a
              href={'https://go.lumafintech.com/creationhub/newpricing'}
              target="_blank"
              rel="noreferrer"
            >
              <RequestNewProductButton
                variant="primary"
                size="large"
                onClick={() => createLink('/creation-hub')}
              >
                Request New Product
              </RequestNewProductButton>
            </a>
          </RequestNewProductContainer>
        </div>
      </ContentContainer>
    </Drawer>
  );
};
