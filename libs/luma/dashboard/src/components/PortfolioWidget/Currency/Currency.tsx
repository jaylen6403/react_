import { Dispatch, SetStateAction } from 'react';

import {
  CurrencySelectWrapper,
  DateText,
  DropdownSelector,
  MobileWrapper,
} from '../PortfolioWidget.styles';
import {
  MenuItemSingleType,
  SingleSelect,
} from '@luma-fe-workspace/design-system';
import { useGetAllCurrenciesUsingGetQuery } from '@luma-fe-workspace/redux';
import { currencySymbols } from '../StructuredProducts/structuredProductsPortfolioUtils';
import { DateHelper } from '@luma-fe-workspace/utility';

interface Props {
  screenWidth: number;
  selectedCurrency: MenuItemSingleType<string>;
  setSelectedCurrency: Dispatch<SetStateAction<MenuItemSingleType<string>>>;
}

export const Currency = ({
  screenWidth,
  selectedCurrency,
  setSelectedCurrency,
}: Props) => {
  const { data: currencyData } = useGetAllCurrenciesUsingGetQuery();

  const updateCurrency = (item?: MenuItemSingleType<string> | null) => {
    if (!item) return;
    localStorage.setItem('selectedCurrency', item.value);
    setSelectedCurrency(item);
  };

  const isoCodes = currencyData
    ? currencyData
        .filter((item) =>
          ['USD', 'GBP', 'EUR', 'CHF', 'SEK', 'NOK'].includes(item.isoCode)
        )
        .map<MenuItemSingleType<string>>((item) => ({
          display: `${currencySymbols[item.isoCode]} (${item.isoCode})`,
          value: item.isoCode,
        }))
    : [];

  const lastUpdatedDate = currencyData
    ? currencyData[0].conversionRates?.['CHF']['asOfDatetime']
    : '';
  const date = new Date(
    lastUpdatedDate ? DateHelper.convertToUTC(lastUpdatedDate) : ''
  );
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const timezoneAbbreviation = date
    .toLocaleTimeString(undefined, { timeZoneName: 'short' })
    .split(' ')[2];

  return (
    <CurrencySelectWrapper>
      {screenWidth > 544 ? (
        <DropdownSelector>
          <SingleSelect
            items={isoCodes}
            placeholder={`${
              currencySymbols[selectedCurrency.value]
            } (${selectedCurrency})`}
            variant={'secondary'}
            onChange={updateCurrency}
            selectedItem={selectedCurrency}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </DropdownSelector>
      ) : (
        <MobileWrapper>
          <SingleSelect
            items={isoCodes}
            placeholder={`${selectedCurrency.value}`}
            selectedItem={selectedCurrency}
            variant={'secondary'}
            onChange={updateCurrency}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </MobileWrapper>
      )}
      {lastUpdatedDate ? (
        <DateText>
          As of {date.toLocaleDateString(undefined)} {hours}:{minutes}:{seconds}{' '}
          {timezoneAbbreviation}
        </DateText>
      ) : null}
    </CurrencySelectWrapper>
  );
};
