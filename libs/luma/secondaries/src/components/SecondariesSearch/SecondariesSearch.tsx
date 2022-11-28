import { useCallback, useState } from 'react';

import { Search } from '@luma-fe-workspace/design-system';

import {
  useGetProductsUsingGetQuery,
  Product,
  useAppDispatch,
  secondariesSlice,
} from '@luma-fe-workspace/redux';

import { SecondariesSearchResults } from './SecondariesSearchResults';

type handleItemType = Product | undefined | null;

export const SecondariesSearch = () => {
  const [value, setValue] = useState('');
  const { data } = useGetProductsUsingGetQuery({
    paged: true,
    pageSize: 50,
  });
  const [items, setItems] = useState(data);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (inputVal: string) => {
      dispatch(secondariesSlice.actions.setSecurityDetailsCusip(inputVal));
    },
    [dispatch]
  );

  const handleSelectItem = (selectedItem: handleItemType) => {
    if (selectedItem?.productGeneral.cusip) {
      setValue(selectedItem.productGeneral.cusip);
      handleSubmit(selectedItem.productGeneral.cusip);
    } else {
      setValue('');
    }
  };

  const handleChange = useCallback(
    (newValue = '') => {
      setValue(newValue);
      if (data) {
        const relevantItems = data.filter((item: Product) => {
          if (item.productGeneral.cusip) {
            return (
              item.productGeneral.cusip
                .toLowerCase()
                .startsWith(newValue.toLowerCase()) ||
              item.productGeneral.issuer
                ?.toLowerCase()
                .startsWith(newValue.toLowerCase())
            );
          } else {
            return false;
          }
        });
        setItems(relevantItems);
      }
    },
    [setValue, data]
  );

  return (
    <Search
      items={items ?? []}
      width="clamp(18.8125rem, 33.33vw, 25.0625rem)"
      marginRight="1rem"
      initialValue={value}
      handleSelectItem={handleSelectItem}
      handleChange={handleChange}
      placeholder="Search CUSIP/ISIN"
      itemToString={(item) => {
        if (item?.productGeneral.cusip) {
          return item.productGeneral.cusip;
        } else {
          return '';
        }
      }}
      renderContent={<SecondariesSearchResults item={undefined} />}
      inputAriaLabel={'input cusip'}
      buttonAriaLabel={'clear input'}
    />
  );
};
