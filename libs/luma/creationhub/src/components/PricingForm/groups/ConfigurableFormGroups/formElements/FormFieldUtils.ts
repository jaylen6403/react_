import { ChangeEvent } from 'react';
import {
  ValueTypes,
  LocalDateValue,
  ComputationMode,
} from '@luma-fe-workspace/redux';

export function getDate(
  e: ChangeEvent<HTMLInputElement>,
  computationMode: ComputationMode
): LocalDateValue {
  return {
    type: ValueTypes.LocalDate,
    value: e.target.value,
    computationMode,
  };
}

export function isModifiable(computationMode: ComputationMode) {
  return computationMode === ComputationMode.MODIFIABLE;
}
