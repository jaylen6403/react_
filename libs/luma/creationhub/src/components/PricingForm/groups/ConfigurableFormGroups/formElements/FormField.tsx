import produce from 'immer';
import { useCallback } from 'react';
import {
  LumaDatePicker,
  LumaTextEntry,
} from '@luma-fe-workspace/design-system';
import {
  Basket,
  ComputationMode,
  EnumValue,
  LocalDateValue,
  MultiEnumValue,
  NumericValue,
  ParamConstraints,
  ParamName,
  ParamValue,
  SectionField,
  UnderlierDetails,
  ValueTypes,
} from '@luma-fe-workspace/redux';
import { PricingFormProps } from '../../../PricingForm';
import { BasketSelect } from './basket';
import { isModifiable } from './FormFieldUtils';
import DropdownWrapper from './dropdown/DropdownWrapper';
import MultiDropdownWrapper from './dropdown/MultiDropdownWrapper';
import { NumberTextEntry } from './number/NumberTextEntry';
import { DateFormatter } from '@luma-fe-workspace/utility';
interface FieldProps extends PricingFormProps {
  field: SectionField;
  constraints?: Record<ParamName, ParamConstraints>;
  hasError: boolean;
  name: string;
  onValidation: (
    paramName: ParamName,
    newValue: ParamValue | undefined
  ) => void;
}

export const createDataTestId = (componentName: string, id: string) => {
  const preparedId = id.toLowerCase().replace(/\s/g, '_');
  return `${componentName}-${preparedId}`;
};

export function FormField({
  field,
  values,
  handleValidation,
  setFieldValue,
  hasError,
  constraints,
  isEditable,
  onValidation,
}: FieldProps): JSX.Element | null {
  const { paramName } = field;
  const label = 'label' in field ? field.label : '';
  const value = values[paramName];
  const fieldProps = {
    id: paramName,
  };
  const onChange = useCallback(
    (newValue: ParamValue | undefined) => {
      setFieldValue(paramName, newValue as ParamValue);
    },
    [paramName, setFieldValue]
  );

  const onUnderlierSelect = ({ id, label }: UnderlierDetails) => {
    const basket = value as Basket;
    const isIdSelected = basket.underliers.some(
      ({ underlier }) => underlier.id === id
    );
    if (!isIdSelected) {
      const newBasket = produce(basket, (draft) => {
        const newUnderlier = { weight: undefined, underlier: { id, label } };
        draft.underliers.push(newUnderlier);
      });
      setFieldValue(paramName, newBasket);
      onValidation(paramName, newBasket);
    }
  };

  if (!value) {
    return null;
  }

  const computationMode =
    ('computationMode' in value && value.computationMode) ||
    ComputationMode.MODIFIABLE;

  if (computationMode === ComputationMode.SOLVED) {
    return (
      <LumaTextEntry
        label={label}
        type="string"
        readOnly={true}
        value="Solve For"
        sizeVariant="large"
        {...fieldProps}
      />
    );
  }

  const isDisabled = !isEditable || !isModifiable(computationMode);
  switch (value?.type) {
    case ValueTypes.Enum:
      return (
        <DropdownWrapper
          paramName={paramName}
          label={label}
          value={value as EnumValue}
          constraints={constraints}
          onChange={onChange}
          onValidation={(newValue) => onValidation(paramName, newValue)}
          isDisabled={isDisabled}
          readOnly={false}
          data-testid={createDataTestId('dropdown', fieldProps.id)}
          {...fieldProps}
        />
      );
    case ValueTypes.MultiEnum:
      return (
        <MultiDropdownWrapper
          paramName={paramName}
          label={label}
          value={value as MultiEnumValue}
          constraints={constraints}
          onChange={onChange}
          onBlur={() => {
            handleValidation(values);
          }}
          isDisabled={isDisabled}
          readOnly={false}
          data-testid={createDataTestId('multidropdown', fieldProps.id)}
          {...fieldProps}
        />
      );
    case ValueTypes.WeightedBasket:
    case ValueTypes.UnweightedBasket:
      return (
        <BasketSelect
          onUnderlierSelect={onUnderlierSelect}
          isEditable={isEditable}
          data-testid={createDataTestId('basket', fieldProps.id)}
          {...fieldProps}
        />
      );
    case ValueTypes.LocalDate:
      return (
        <LumaDatePicker
          label={label}
          variant="datetime"
          inputFormat="yyyy-MM-dd"
          disabled={isDisabled}
          error={hasError}
          defaultValue={new Date((value as LocalDateValue)?.value as string)}
          onChange={(date) => {
            const param = {
              type: ValueTypes.LocalDate,
              value: DateFormatter.formatLocalDate(date),
              computationMode,
            };
            onChange(param);
            onValidation(paramName, param);
          }}
          size="large"
          data-testid={createDataTestId('datepicker', fieldProps.id)}
          {...fieldProps}
        />
      );
    case ValueTypes.Numeric:
      return (
        <NumberTextEntry
          label={label}
          isDisabled={isDisabled}
          value={value as NumericValue}
          onChange={onChange}
          computationMode={computationMode}
          fieldProps={fieldProps}
          paramName={paramName}
          onValidation={onValidation}
          hasError={hasError}
        />
      );

    default:
      return null;
  }
}
