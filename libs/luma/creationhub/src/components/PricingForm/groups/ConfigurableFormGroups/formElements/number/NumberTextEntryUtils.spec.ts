import { ValueTypes, ComputationMode } from '@luma-fe-workspace/redux';
import {
  clearGroupedString,
  parseStringToNumber,
  insertThousandSeparator,
  parseNumericValuetoGroupedString,
  isStringValidNumber,
  getNumericValue,
} from './NumberTextEntryUtils';
import * as LocaleUtils from '../../../../../../utils/LocaleUtils';

describe('NumberTextEntryUtils', () => {
  beforeEach(() => {
    jest
      .spyOn(LocaleUtils, 'getNumberLocaleData')
      .mockReturnValue({ group: ',', decimal: '.' });
  });

  describe('clearGroupedString', () => {
    it.each([
      { input: '1', output: '1' },
      { input: '1.0', output: '1.0' },
      { input: '1,000.0', output: '1000.0' },
      { input: '1,000,000.0', output: '1000000.0' },
    ])('should return proper value', ({ input, output }) => {
      const result = clearGroupedString(input);
      expect(result).toEqual(output);
    });
  });

  describe('parseStringToNumber', () => {
    it.each([
      { stringInput: '', numberOutput: null },
      { stringInput: '1001', numberOutput: 1001 },
      { stringInput: '1,001', numberOutput: 1001 },
      { stringInput: '1,000,001', numberOutput: 1000001 },
      { stringInput: '1000001', numberOutput: 1000001 },
    ])(
      'should properly format different inputs',
      ({ stringInput, numberOutput }) => {
        const result = parseStringToNumber(stringInput);
        expect(result).toEqual(numberOutput);
      }
    );
  });

  describe('insertThousandSeparator', () => {
    it.each([
      { input: '123', separator: '.', output: '123' },
      { input: '1234', separator: ' ', output: '1 234' },
      { input: '123456', separator: '.', output: '123.456' },
      { input: '1234567', separator: ',', output: '1,234,567' },
    ])(
      'should properly insert thousand separator',
      ({ input, separator, output }) => {
        const result = insertThousandSeparator(input, separator);
        expect(result).toEqual(output);
      }
    );
  });

  describe('parseNumericValuetoString', () => {
    it.each([
      { input: 1, output: '1' },
      { input: 1.0, output: '1' },
      { input: 1.1, output: '1.1' },
    ])('should properly parse number', ({ input, output }) => {
      const result = parseNumericValuetoGroupedString(input);
      expect(result).toEqual(output);
    });
  });

  describe('parseNumericValuetoString', () => {
    it.each([
      { numericInput: null, stringOutput: '' },
      { numericInput: 100, stringOutput: '100' },
      {
        numericInput: 100000,
        stringOutput: '100,000',
      },
    ])('should return proper values', ({ numericInput, stringOutput }) => {
      const result = parseNumericValuetoGroupedString(numericInput);
      expect(result).toEqual(stringOutput);
    });
  });

  describe('isStringValidNumber', () => {
    it.each([
      { stringInput: '', booleanOutput: true },
      { stringInput: '100', booleanOutput: true },
      { stringInput: 'abc', booleanOutput: false },
    ])('should return proper values', ({ stringInput, booleanOutput }) => {
      const result = isStringValidNumber(stringInput);
      expect(result).toEqual(booleanOutput);
    });
  });

  describe('getNumericValue', () => {
    it('should return proper value', () => {
      const value = '10';
      const computationMode = ComputationMode.MODIFIABLE;
      expect(getNumericValue(value, computationMode)).toEqual({
        type: ValueTypes.Numeric,
        value: parseStringToNumber(value),
        computationMode,
      });
    });
  });
});
