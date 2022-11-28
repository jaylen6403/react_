import { Fragment } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FormGroupWrapper } from '../../../PricingForm.styles';
import { PricingFormProps } from '../../../PricingForm';
import { SectionIcons } from '../../../PricingFormUtils';
import { Separator } from '../../../elements';
import { FormGroup } from '.';
import { CollapsableFormGroup } from '../../CollapsableFormGroup';
import {
  ParamConstraints,
  FieldGroup,
  ParamName,
  Section,
} from '@luma-fe-workspace/redux';

interface FormSectionProps extends PricingFormProps {
  section: Section;
  constraints: Record<ParamName, ParamConstraints>;
}

export function FormSection({
  section: { label, fieldGroups },
  ...params
}: FormSectionProps) {
  const rows = fieldGroups?.map((group: FieldGroup, i: number) => {
    return (
      <Fragment key={i}>
        {(i > 0 || group.label) && <Separator />}
        <FormGroup group={group} {...params} />
      </Fragment>
    );
  });
  const groupId = label?.toLowerCase().replace(/ /g, '') ?? '';
  const iconId = (SectionIcons[groupId] || 'balance-scale') as IconName;
  return (
    <FormGroupWrapper>
      <CollapsableFormGroup
        title={label as string}
        icon={iconId}
        isValid={true}
      >
        {rows}
      </CollapsableFormGroup>
    </FormGroupWrapper>
  );
}
