import {
  useGetPricingToolTypeUsingGetQuery,
  useUiPermissionsQuery,
  lumaPermissionsArray,
} from '@luma-fe-workspace/redux';

import { EventsWidget } from '../EventsWidget';
import { PortfolioWidget } from '../PortfolioWidget';
import { TemplatesAndApplicationsWidget } from '../TemplatesAndApplicationsWidget';
import { ProductType, ProductTypes } from '../../utils/types';
import { StyledPortfolio, WidgetWrapper } from './MyPortfolio.style';
import { getWidgetAccessPermissions } from '../../utils/myPortfolioUtils';

interface Props {
  productType: ProductType;
  screenWidth: number;
}
export const MyPortfolio = ({ productType, screenWidth }: Props) => {
  const { data: userPermissionData } = useUiPermissionsQuery({
    permissions: lumaPermissionsArray,
  });

  const { data: pricingToolTypeData } = useGetPricingToolTypeUsingGetQuery();

  const {
    creationHubAccess,
    spsPortfolioAccess,
    annuitiesPortfolioAccess,
    applicationTrackerAccess,
    isIssuer,
  } = getWidgetAccessPermissions({
    productType,
    userPermissionData,
    pricingToolTypeData,
  });

  return (
    <StyledPortfolio>
      {spsPortfolioAccess || annuitiesPortfolioAccess ? (
        <EventsWidget productsType={productType} screenWidth={screenWidth} />
      ) : null}
      <WidgetWrapper>
        {spsPortfolioAccess || annuitiesPortfolioAccess ? (
          <PortfolioWidget
            productsType={productType}
            screenWidth={screenWidth}
            otherWidgetPresent={
              productType === ProductTypes.Annuities
                ? applicationTrackerAccess
                : creationHubAccess
            }
          />
        ) : null}

        {creationHubAccess || applicationTrackerAccess ? (
          <TemplatesAndApplicationsWidget
            productType={productType}
            screenWidth={screenWidth}
            otherWidgetPresent={
              productType === ProductTypes.Annuities
                ? annuitiesPortfolioAccess
                : spsPortfolioAccess
            }
            isIssuer={isIssuer}
          />
        ) : null}
      </WidgetWrapper>
    </StyledPortfolio>
  );
};
