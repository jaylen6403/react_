import { DataItemProps } from '@luma-fe-workspace/design-system';
import { CurrencyDropdownWrapper } from './CurrencyDropdown.styles';
import { LumaSingleDropDown } from '@luma-fe-workspace/design-system';
import {
  lifecycleSlice,
  useAppDispatch,
  useAppSelector,
  selectLifecycleEventDisplayCurrency,
} from '@luma-fe-workspace/redux';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface CurrencyDropdownProps {
  currencyDropdownOptions: string[];
}

const getCurrencySymbol = (ISOCode: string) => {
  const numberFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: ISOCode,
  });
  const currencySymbol = numberFormat
    .formatToParts()
    ?.find((part) => part.type === 'currency')?.value;
  return currencySymbol;
};

const getCurrencyDropdownItemLabel = (ISOCode: string) => {
  const currencySymbol = getCurrencySymbol(ISOCode);
  const dropdownItemLabel =
    // This check avoids cases like `CHF (CHF)`
    currencySymbol !== ISOCode
      ? `${currencySymbol} (${ISOCode})`
      : `(${ISOCode})`;
  return dropdownItemLabel;
};

export const CurrencyDropdown = ({
  currencyDropdownOptions,
}: CurrencyDropdownProps) => {
  const dispatch = useAppDispatch();
  const displayCurrency = useAppSelector(selectLifecycleEventDisplayCurrency);
  const currencyDropdownItems = currencyDropdownOptions.map((ISOCode) => {
    return {
      label: getCurrencyDropdownItemLabel(ISOCode),
      value: ISOCode,
      iconCode: displayCurrency === ISOCode ? ('check' as IconName) : undefined,
    };
  });

  return (
    <CurrencyDropdownWrapper>
      <LumaSingleDropDown
        id={'currencyDropdown'}
        name={'displayCurrency'} // Required property
        items={currencyDropdownItems}
        fullWidth={true}
        readOnly={true}
        defaultSelectedItem={{
          label: getCurrencyDropdownItemLabel(displayCurrency),
          value: displayCurrency,
          iconCode: 'check',
        }}
        placeholder={'Display CCY:'}
        onChange={(selectedItem: DataItemProps | null) => {
          currencyDropdownItems.forEach(
            (item: DataItemProps) => (item.iconCode = undefined)
          );
          if (selectedItem) {
            dispatch(
              lifecycleSlice.actions.setDisplayCurrency(
                selectedItem.value as string
              )
            );
          }
        }}
      />
    </CurrencyDropdownWrapper>
  );
};
