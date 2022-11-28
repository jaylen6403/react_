import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DashboardToggle } from './DashboardToggle';
import { ProductTypes, ProductType } from '../../utils/types';
import { MenuItemSingleType } from '@luma-fe-workspace/design-system';

export default {
  title: 'Dashboard/DashboardToggle',
  component: DashboardToggle,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/629f69ccec1d73125b8e8ac6',
  },
} as ComponentMeta<typeof DashboardToggle>;

const Template: ComponentStory<typeof DashboardToggle> = (args) => {
  const [productType, setProductType] = useState<ProductType>(
    ProductTypes.StructuredProducts
  );
  const [selectedDashboard, setSelectedDashboard] = useState<
    MenuItemSingleType<ProductType>
  >({
    display: ProductTypes.StructuredProducts,
    value: ProductTypes.StructuredProducts,
  });
  return (
    <DashboardToggle
      selectedDashboard={selectedDashboard}
      setProductType={setProductType}
      setSelectedDashboard={setSelectedDashboard}
      productType={productType}
      screenWidth={window.innerWidth}
    />
  );
};

const defaultArgs = {
  selectedDashboard: {
    display: ProductTypes.StructuredProducts,
    value: ProductTypes.StructuredProducts,
  },
};

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs };
Primary.parameters = { isAnnuitiesOnly: false, isStructuredOnly: false };
