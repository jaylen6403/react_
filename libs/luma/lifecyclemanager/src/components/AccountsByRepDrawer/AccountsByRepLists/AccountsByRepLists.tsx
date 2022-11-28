import {
  LifecycleEventLM,
  selectLifecycleEventRequestObject,
  useAppSelector,
  useGetAccountsByRepresentativeUsingPostQuery,
  AccountsByRepresentative,
} from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import { Separator } from '../AccountsByRepDrawer.styles';
import { AccountsByRepDropdown } from './AccountsByRepDropdown';
import {
  ContentHeader,
  ContentWrapper,
  AccountRows,
  DataHeader,
  CheckBox,
  DataRow,
} from './AccountsByRepLists.styles';

interface AccountsByRepListsProps {
  selectedEvent: LifecycleEventLM;
}
export const AccountsByRepLists = ({
  selectedEvent,
}: AccountsByRepListsProps) => {
  const [accountData, setAccountData] = useState<AccountsByRepresentative[]>(
    []
  );
  const numberOfaccounts = accountData.reduce(
    (total, obj) => obj.accountNotionals.length + total,
    0
  );
  const eventRequestObject = useAppSelector(selectLifecycleEventRequestObject);
  const accountsResponse = useGetAccountsByRepresentativeUsingPostQuery({
    eventId: selectedEvent?.eventId ?? '',
    ...eventRequestObject,
  });
  useEffect(() => {
    if (accountsResponse.isSuccess && !accountsResponse.isFetching) {
      setAccountData(accountsResponse.data);
    } else if (accountsResponse.isError) {
      setAccountData([]);
    }
  }, [accountsResponse]);

  return (
    <ContentWrapper>
      <ContentHeader>Accounts ({numberOfaccounts})</ContentHeader>
      <Separator />

      <AccountRows>
        {accountData.length === 1
          ? accountData[0].accountNotionals.map((account) => {
              return (
                <DataRow key={account.accountId}>
                  <DataHeader>
                    <CheckBox type="checkbox" />
                    Account ID #{account.accountId}
                  </DataHeader>
                  {Intl.NumberFormat().format(account.notional)}
                </DataRow>
              );
            })
          : accountData.map((account) => {
              return (
                <AccountsByRepDropdown
                  key={account.representative}
                  account={account}
                />
              );
            })}
      </AccountRows>
    </ContentWrapper>
  );
};
