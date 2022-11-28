import { LumaButton } from '@luma-fe-workspace/design-system';
import { PricingModes } from '../../PricingFormUtils';

interface PricingFormProps {
  pricingMode: PricingModes;
  setPricingMode: (pricingMode: PricingModes) => void;
}

export function PricingFormFooter({
  pricingMode: pricingStage,
  setPricingMode: setPricingStage,
}: PricingFormProps) {
  return (
    <>
      {pricingStage === PricingModes.Pricing && (
        <LumaButton
          size="large"
          variant="primary"
          onClick={() => {
            setPricingStage(PricingModes.Quoting);
          }}
        >
          Prepare To Quote
        </LumaButton>
      )}
      {pricingStage === PricingModes.Quoting && (
        <LumaButton
          size="large"
          variant="primary"
          onClick={() => {
            setPricingStage(PricingModes.Pricing);
          }}
        >
          Edit Request
        </LumaButton>
      )}
    </>
  );
}
