import { Routes, Route } from 'react-router-dom';
import { CreationHubWrapper, CreationHubContent } from './CreationHub.styles';
import {
  CreationHubPages,
  HomePage,
  PricingForm,
  PricingFormVariants,
} from '../components';
import { LumaDimensions, LumaNotFound } from '@luma-fe-workspace/design-system';

export function CreationHub() {
  return (
    <CreationHubWrapper>
      <LumaDimensions />
      <CreationHubContent>
        <Routes>
          <Route index element={<HomePage />} />
          {
            <Route
              path={`/${CreationHubPages.NewPricing}`}
              element={
                <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
              }
            />
          }
          {
            <Route
              path={`/${CreationHubPages.PricingView}/:id`}
              element={
                <PricingForm formVariant={PricingFormVariants.PRICING} />
              }
            />
          }
          {
            <Route
              path={`/${CreationHubPages.IssuerPricingView}/:id`}
              element={<PricingForm formVariant={PricingFormVariants.RFQ} />}
            />
          }
          <Route path="/not-found" element={<LumaNotFound />} />
          <Route path="*" element={<LumaNotFound />} />
        </Routes>
      </CreationHubContent>
    </CreationHubWrapper>
  );
}
