import { ComputationMode, ValueTypes } from '@luma-fe-workspace/redux';
import { ChangeEvent } from 'react';
import { getDate } from './FormFieldUtils';

describe('FormFieldUtils', () => {
  describe('getDate', () => {
    it('should return proper value', () => {
      const value = 'testDate';
      const computationMode = ComputationMode.MODIFIABLE;
      const event = {
        target: { value },
      } as ChangeEvent<HTMLInputElement>;
      expect(getDate(event, computationMode)).toEqual({
        type: ValueTypes.LocalDate,
        value,
        computationMode,
      });
    });
  });
});
