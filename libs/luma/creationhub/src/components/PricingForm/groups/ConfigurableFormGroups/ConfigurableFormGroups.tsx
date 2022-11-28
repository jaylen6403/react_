import { FormSection } from './formElements';
import { PricingFormProps } from '../../PricingForm';
import {
  Pricing,
  Section,
  PricingInCreation,
  Rfq,
} from '@luma-fe-workspace/redux';

interface ConfigurableFormGroupsProps extends PricingFormProps {
  pricing: Pricing | Rfq;
}

export function ConfigurableFormGroups({
  pricing,
  ...params
}: ConfigurableFormGroupsProps) {
  const { sections } = pricing.productLayout;
  if (!sections) {
    return null;
  }

  return (
    <>
      {sections.map((section: Section) => {
        return (
          <FormSection
            key={section.label}
            section={section}
            constraints={(pricing as PricingInCreation).constraints}
            {...params}
          />
        );
      })}
    </>
  );
}
