import { AccountsByRepresentative } from '@luma-fe-workspace/redux';
import { useState } from 'react';
import {
  CheckBox,
  DataHeader,
  DataRow,
  DropdownArrow,
  DropdownContainer,
} from './AccountsByRepLists.styles';

interface AccountsByRepDropdownProps {
  account: AccountsByRepresentative;
}

export const AccountsByRepDropdown = ({
  account,
}: AccountsByRepDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalNotional = account.accountNotionals.reduce(
    (total, obj) => obj.notional + total,
    0
  );

  return (
    <>
      <DataRow
        key={account.representative}
        onClick={() => setIsOpen(!isOpen)}
        dropdownOpen={isOpen}
      >
        <DataHeader>
          <DropdownArrow iconCode={'chevron-right'} isOpen={isOpen} />
          <CheckBox type="checkbox" onClick={(e) => e.stopPropagation()} />
          {account.representative}
        </DataHeader>
        {Intl.NumberFormat().format(totalNotional)}
      </DataRow>
      <DropdownContainer
        numberOfRows={account.accountNotionals.length}
        isOpen={isOpen}
      >
        {account.accountNotionals.map((accountNotional) => {
          return (
            <DataRow key={accountNotional.accountId}>
              <DataHeader accountDropdownRow={true}>
                <CheckBox type="checkbox" />
                {accountNotional.accountId}
              </DataHeader>
              {Intl.NumberFormat().format(accountNotional.notional)}
            </DataRow>
          );
        })}
      </DropdownContainer>
    </>
  );
};
