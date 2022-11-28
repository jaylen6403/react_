import { FocusEvent, Fragment } from 'react';
import {
  Basket,
  ParamName,
  UnderlierId,
  ValueTypes,
} from '@luma-fe-workspace/redux';
import {
  BasketSeparator,
  BasketShowWrapper,
  UnderlierWrapper,
} from './BasketShow.styles';
import { parseWeight } from './BasketUtils';
import { PricingFormProps } from '../../../../PricingForm';
import { LumaChip } from '@luma-fe-workspace/design-system';

interface BasketShowProps extends PricingFormProps {
  paramName: ParamName;
  basket: Basket;
  isEditable: boolean;
  onBasketRemove: (paramName: ParamName, id: UnderlierId) => void;
  onWeightChange: (
    paramName: ParamName,
    id: UnderlierId,
    value: string
  ) => void;
}

export function BasketShow({
  paramName,
  basket,
  onBasketRemove,
  onWeightChange,
  handleValidation,
  values,
  isEditable,
}: BasketShowProps) {
  if (!basket) {
    return null;
  }
  const { underliers, type } = basket;
  const isWeighted = type === ValueTypes.WeightedBasket;
  const onBlurValidation = (_: FocusEvent) => {
    handleValidation(values);
  };
  const basketValues =
    underliers?.map((u, index: number) => {
      const displaySeparator = isWeighted || index < underliers.length - 1;
      const { id, label } = u.underlier;
      const weight = isWeighted ? (u as { weight?: number }).weight : undefined;
      return (
        <Fragment key={id}>
          <UnderlierWrapper>
            <LumaChip
              variant="primary"
              state={isEditable ? 'removable' : 'locked'}
              sizeVariant="regular"
              entry={isWeighted}
              unit="%"
              disabled={!isEditable}
              value={parseWeight(weight) as number}
              onRemove={() => {
                onBasketRemove(paramName, id);
              }}
              onChange={(e) => {
                onWeightChange(paramName, id, e.target.value);
              }}
              onBlur={onBlurValidation}
              data-testid={`underlier-${id}`}
            >
              {label}
            </LumaChip>
          </UnderlierWrapper>
          {displaySeparator && <BasketSeparator />}
        </Fragment>
      );
    }) ?? null;
  const totalPercent =
    isWeighted && underliers?.length
      ? (underliers as { weight?: number }[]).reduce(
          (sum, { weight }) => sum + (weight ?? 0),
          0
        )
      : 0;
  const total = (
    <LumaChip
      variant="primary"
      state="locked"
      sizeVariant="regular"
      entry={true}
      value={parseWeight(totalPercent) as number}
      unit="%"
      disabled={true}
      data-testid="underlier-total"
    >
      Total
    </LumaChip>
  );
  return (
    <BasketShowWrapper>
      {basketValues}
      {isWeighted && total}
    </BasketShowWrapper>
  );
}
