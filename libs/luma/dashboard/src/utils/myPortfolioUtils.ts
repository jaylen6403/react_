import {
  WidgetPermissions,
  GetPricingToolTypeUsingGetApiResponse,
  PortfolioV2,
  LifecycleProduct,
} from '@luma-fe-workspace/redux';
import { ProductTypes, ProductType } from './types';

interface Params {
  productType: ProductType;
  userPermissionData: WidgetPermissions[] | undefined;
  pricingToolTypeData: GetPricingToolTypeUsingGetApiResponse | undefined;
}

export const getWidgetAccessPermissions = ({
  productType,
  userPermissionData,
  pricingToolTypeData,
}: Params) => {
  const widgetAccessObj = {
    creationHubAccess: false,
    spsPortfolioAccess: false,
    annuitiesPortfolioAccess: false,
    applicationTrackerAccess: false,
    isIssuer: false,
  };

  if (
    productType === ProductTypes.StructuredProducts &&
    pricingToolTypeData?.includes('GENERAL_PRICING_TOOL')
  ) {
    widgetAccessObj.creationHubAccess = true;
  }

  if (userPermissionData?.includes(WidgetPermissions.CreationHubIssuer)) {
    widgetAccessObj.isIssuer = true;
  }

  if (
    productType === ProductTypes.StructuredProducts &&
    userPermissionData?.includes(WidgetPermissions.MenuLifecycleManager)
  ) {
    widgetAccessObj.spsPortfolioAccess = true;
  }

  if (
    productType === ProductTypes.Annuities &&
    userPermissionData?.includes(
      WidgetPermissions.AccessLifecycleManagerAnnuities
    )
  ) {
    widgetAccessObj.annuitiesPortfolioAccess = true;
  }

  if (
    productType === ProductTypes.Annuities &&
    userPermissionData?.includes(WidgetPermissions.MenuMarketplaceAnnuity)
  ) {
    widgetAccessObj.applicationTrackerAccess = true;
  }
  return widgetAccessObj;
};

interface EmptyParams {
  isLoading: boolean;
  data?: PortfolioV2[] | LifecycleProduct[];
}
export const getEmptyStateBoolean = ({ isLoading, data }: EmptyParams) => {
  let showEmpty = false;
  if (!isLoading && !data?.length) {
    showEmpty = true;
  }
  return showEmpty;
};
