import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  DashboardToggleCont,
  DashboardTitle,
  DashboardDropdown,
  EventsTitle,
  MobileWrapper,
} from './DashboardToggle.style';

import {
  SingleSelect,
  MenuItemSingleType,
  isAnnuityOnly,
  isStructuredProductsOnly,
  ProductTypesType,
} from '@luma-fe-workspace/design-system';

import { useGetUserTrainingStatusUsingGetQuery } from '@luma-fe-workspace/redux';
import { ProductType, ProductTypes } from '../../utils/types';

interface Props {
  productType: ProductType;
  setProductType: Dispatch<SetStateAction<ProductType>>;
  screenWidth: number;
}

export const DashboardToggle = ({
  productType,
  setProductType,
  screenWidth,
}: Props) => {
  const [selectedDashboard, setSelectedDashboard] = useState<
    MenuItemSingleType<ProductType>
  >({
    display: ProductTypes.StructuredProducts,
    value: ProductTypes.StructuredProducts,
  });
  const { data: userTrainingData } = useGetUserTrainingStatusUsingGetQuery();

  const userTrainingDataProductTypes: ProductTypesType =
    userTrainingData?.productTypes || [];
  const isAnnuitiesOnly = isAnnuityOnly(userTrainingDataProductTypes);
  const isStructuredOnly = isStructuredProductsOnly(
    userTrainingDataProductTypes
  );

  const toggleStrings: MenuItemSingleType<ProductType>[] = [
    {
      display: ProductTypes.StructuredProducts,
      value: ProductTypes.StructuredProducts,
    },
    { display: ProductTypes.Annuities, value: ProductTypes.Annuities },
  ];

  const updateDashboardSelection = (
    item?: MenuItemSingleType<ProductType> | null
  ) => {
    if (!item) return;
    setSelectedDashboard(item);
    setProductType(item.value);
  };

  useEffect(() => {
    const checkProductTypes = () => {
      if (isAnnuitiesOnly) {
        setProductType(ProductTypes.Annuities);
      } else {
        setProductType(ProductTypes.StructuredProducts);
      }
    };
    checkProductTypes();
  }, [isAnnuitiesOnly, setProductType]);

  const Dropdown = () => {
    if (screenWidth > 544) {
      return (
        <DashboardDropdown>
          <SingleSelect
            items={toggleStrings}
            placeholder={ProductTypes.StructuredProducts}
            variant={'secondary'}
            onChange={updateDashboardSelection}
            selectedItem={selectedDashboard}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </DashboardDropdown>
      );
    } else {
      return (
        <MobileWrapper>
          <SingleSelect
            items={toggleStrings}
            placeholder={ProductTypes.StructuredProducts}
            variant={'secondary'}
            onChange={updateDashboardSelection}
            selectedItem={selectedDashboard}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </MobileWrapper>
      );
    }
  };

  return (
    <DashboardToggleCont>
      {screenWidth > 544 ? (
        <DashboardTitle>Dashboard |</DashboardTitle>
      ) : (
        <DashboardTitle>Dashboard</DashboardTitle>
      )}
      {isAnnuitiesOnly || isStructuredOnly ? (
        <EventsTitle>{productType}</EventsTitle>
      ) : (
        <Dropdown />
      )}
    </DashboardToggleCont>
  );
};
