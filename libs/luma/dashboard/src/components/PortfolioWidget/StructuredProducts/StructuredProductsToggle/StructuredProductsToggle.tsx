import { Dispatch, SetStateAction, useState } from 'react';
import {
  MenuItemSingleType,
  SingleSelect,
} from '@luma-fe-workspace/design-system';
import {
  MobileWrapper,
  PortfolioWidgetToggle,
  ToggleContainer,
  TypesButton,
} from '../../PortfolioWidget.styles';
import { StructuredProductsTypes } from '../structuredProductsPortfolioUtils';

interface ToggleProps {
  screenWidth: number;
  setTableToRender: Dispatch<SetStateAction<StructuredProductsTypes>>;
  tableToRender: StructuredProductsTypes;
}
export const StructuredProductsToggle = ({
  screenWidth,
  setTableToRender,
  tableToRender,
}: ToggleProps) => {
  const [typesDropdown, setTypesDropdown] = useState<
    MenuItemSingleType<StructuredProductsTypes>
  >({
    display: StructuredProductsTypes.ReturnType,
    value: StructuredProductsTypes.ReturnType,
  });

  const toggleStrings: MenuItemSingleType<StructuredProductsTypes>[] = [
    {
      display: StructuredProductsTypes.ReturnType,
      value: StructuredProductsTypes.ReturnType,
    },
    {
      display: StructuredProductsTypes.Issuer,
      value: StructuredProductsTypes.Issuer,
    },
  ];

  const updateTypesSelection = (
    item?: MenuItemSingleType<StructuredProductsTypes> | null
  ) => {
    if (!item) return;
    if (item.display === StructuredProductsTypes.ReturnType) {
      setTableToRender(StructuredProductsTypes.ReturnType);
      setTypesDropdown(item);
    } else {
      setTableToRender(StructuredProductsTypes.Issuer);
      setTypesDropdown(item);
    }
  };
  return (
    <ToggleContainer>
      {screenWidth > 544 ? (
        <PortfolioWidgetToggle>
          <TypesButton
            isActive={tableToRender === StructuredProductsTypes.ReturnType}
            onClick={() => {
              setTableToRender(StructuredProductsTypes.ReturnType);
            }}
            StructuredProductsTypes={StructuredProductsTypes.ReturnType}
            variant="secondary"
          >
            Type
          </TypesButton>

          <TypesButton
            isActive={tableToRender === StructuredProductsTypes.Issuer}
            onClick={() => {
              setTableToRender(StructuredProductsTypes.Issuer);
            }}
            StructuredProductsTypes={StructuredProductsTypes.Issuer}
            variant="secondary"
          >
            Issuers
          </TypesButton>
        </PortfolioWidgetToggle>
      ) : (
        <MobileWrapper>
          <SingleSelect
            items={toggleStrings}
            placeholder={`${StructuredProductsTypes.ReturnType}`}
            selectedItem={typesDropdown}
            variant={'secondary'}
            onChange={updateTypesSelection}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </MobileWrapper>
      )}
    </ToggleContainer>
  );
};
