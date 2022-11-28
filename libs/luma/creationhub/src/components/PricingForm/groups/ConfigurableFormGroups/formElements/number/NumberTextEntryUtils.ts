import {
  ComputationMode,
  NumericValue,
  ValueTypes,
} from '@luma-fe-workspace/redux';
import { getNumberLocaleData } from '../../../../../../utils/LocaleUtils';

export function clearGroupedString(value: string): string {
  const { decimal, group } = getNumberLocaleData();
  return value
    .replace(new RegExp(`\\${decimal}`, 'g'), '.')
    .replace(new RegExp(group, 'g'), '');
}

export function parseStringToNumber(value: string): number | null {
  if (value === '') {
    return null;
  }

  const parsedString = clearGroupedString(value);
  return Number(parsedString);
}

export function insertThousandSeparator(
  value: string,
  separator: string
): string {
  return value
    .split('')
    .map((char, index) => {
      if ((value.length - index) % 3 === 0 && index > 0) {
        return separator + char;
      }
      return char;
    })
    .join('');
}

export function parseNumberStringToGroupedString(value: string) {
  const { decimal, group } = getNumberLocaleData();
  const isDecimal = value.includes(decimal);
  const [integerPart, decimalPart] = value.split('.');

  return `${insertThousandSeparator(integerPart, group)}${
    isDecimal ? decimal + decimalPart ?? '' : ''
  }`;
}

export function parseNumericValuetoGroupedString(
  numericValue: number | null
): string {
  if (numericValue === null) {
    return '';
  }
  const stringifiedNumber = Number(numericValue).toString();
  return parseNumberStringToGroupedString(stringifiedNumber);
}

export function isStringValidNumber(value: string): boolean {
  return value === '' || !isNaN(parseFloat(value));
}

export function getNumericValue(
  value: string,
  computationMode: ComputationMode
): NumericValue {
  return {
    type: ValueTypes.Numeric,
    value: parseStringToNumber(value),
    computationMode,
  };
}
