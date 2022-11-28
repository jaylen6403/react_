import produce from 'immer';
import { PricingFormProps } from '../../../PricingForm';
import { FormField } from '.';
import { BasketShow } from './basket/BasketShow';
import {
  Basket,
  ParamConstraints,
  FieldGroup,
  ParamName,
  SectionField,
  ValueTypes,
  WeightedBasket,
  ParamValue,
} from '@luma-fe-workspace/redux';
import {
  FieldWrapper,
  FormFieldError,
  FormGroupWrapper,
  GroupLabel,
  LineBreak,
} from './FormGroup.style';

interface FormGroupProps extends PricingFormProps {
  group: FieldGroup;
  constraints: Record<ParamName, ParamConstraints>;
}

export function FormGroup({
  group: { fields, label },
  ...params
}: FormGroupProps) {
  const basketId = fields?.find(({ paramName }: SectionField) => {
    const type = params.values[paramName]?.type;
    return [ValueTypes.UnweightedBasket, ValueTypes.WeightedBasket].includes(
      type as ValueTypes
    );
  })?.paramName;

  const onValidation = (
    paramName: ParamName,
    newValue: ParamValue | undefined
  ) => {
    const newValues = { ...params.values };
    if (newValue === undefined) {
      delete newValues[paramName];
    } else {
      newValues[paramName] = newValue;
    }
    params.handleValidation(newValues);
  };

  const onBasketRemove = (paramName: ParamName, id: string) => {
    const newBasket = produce(
      params.values[paramName] as Basket,
      (draft: Basket) => {
        draft.underliers = draft.underliers.filter(
          ({ underlier }) => underlier.id !== id
        );
      }
    );
    params.setFieldValue(paramName, newBasket);
    onValidation(paramName, newBasket);
  };

  const onWeightChange = (paramName: ParamName, id: string, value: string) => {
    const newWeight = parseInt(value, 10) / 100 || undefined;
    const newBasket = produce(
      params.values[paramName] as WeightedBasket,
      (draft: WeightedBasket) => {
        const underlierIndex = draft.underliers.findIndex(
          ({ underlier }) => underlier.id === id
        );
        draft.underliers[underlierIndex].weight = newWeight;
      }
    );
    params.setFieldValue(paramName, newBasket);
  };

  const row =
    fields?.map((field: SectionField) => {
      const fieldName = field.paramName;
      const hasError = fieldName in params.errors;
      return (
        <FieldWrapper key={fieldName}>
          <FormField
            name={fieldName}
            field={field}
            hasError={hasError}
            onValidation={onValidation}
            {...params}
          />
          {hasError && (
            <FormFieldError>{params.errors[fieldName]}</FormFieldError>
          )}
        </FieldWrapper>
      );
    }) ?? null;
  return (
    <FormGroupWrapper>
      {label && <GroupLabel>{label}</GroupLabel>}
      {row}
      {!!basketId && (
        <>
          <LineBreak />
          <BasketShow
            paramName={basketId}
            basket={params.values[basketId] as Basket}
            onBasketRemove={onBasketRemove}
            onWeightChange={onWeightChange}
            {...params}
          />
        </>
      )}
    </FormGroupWrapper>
  );
}
