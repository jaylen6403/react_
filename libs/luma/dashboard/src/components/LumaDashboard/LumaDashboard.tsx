import { useState, useEffect } from 'react';
import { DashboardToggle } from '../DashboardToggle/DashboardToggle';
import { AppFooter } from '../AppFooter';
import { MyPortfolio } from '../MyPortfolio/MyPortfolio';
import { ProductType, ProductTypes } from '../../utils/types';
import { StyledLumaDashboard } from './LumaDashboard.styles';
import { Insights } from '../Insights/Insights';

export const LumaDashboard = () => {
  const [productType, setProductType] = useState<ProductType>(
    ProductTypes.StructuredProducts
  );

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <>
      <StyledLumaDashboard>
        <DashboardToggle
          productType={productType}
          setProductType={setProductType}
          screenWidth={screenWidth}
        />
        <Insights screenWidth={screenWidth} />
        <MyPortfolio productType={productType} screenWidth={screenWidth} />
      </StyledLumaDashboard>
      <AppFooter />
    </>
  );
};
