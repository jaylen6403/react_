import { Product } from '@luma-fe-workspace/redux';

import {
  SearchResultsTextCusip,
  SearchResultsTextDetails,
} from './SecondariesSearchResults.styles';

interface Props {
  item: Product | undefined;
}

export const SecondariesSearchResults = ({ item }: Props) => {
  return (
    <>
      <SearchResultsTextCusip>
        {item && item.productGeneral.cusip ? item.productGeneral.cusip : null}
      </SearchResultsTextCusip>

      <SearchResultsTextDetails>
        {item && item.productGeneral.issuer ? item.productGeneral.issuer : null}{' '}
        {item && item.productGeneral.structureNameInternal
          ? item.productGeneral.structureNameInternal
          : null}
      </SearchResultsTextDetails>
    </>
  );
};
