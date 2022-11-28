import { ValueTypes } from '@luma-fe-workspace/redux';
import { RfqTypeEnum } from '../../../../../redux/src';
import {
  initialPricing,
  isPricingEmpty,
  getFormValidationBody,
  getFormSubmissionBody,
} from './PricingFormUtils';

const testValues = { test: { type: ValueTypes.Numeric, value: 1 } };

describe('PricingFormUtils', () => {
  describe('isPricingEmpty', () => {
    it('should return true when pricing has no params', () => {
      const result = isPricingEmpty(initialPricing);
      expect(result).toBeTruthy();
    });
    it('should return false when pricing has params', () => {
      const result = isPricingEmpty({
        ...initialPricing,
        product: { params: testValues },
      });
      expect(result).toBeFalsy();
    });
  });

  describe('getFormValidationBody', () => {
    it('should return proper value', () => {
      const result = getFormValidationBody(testValues);
      expect(result).toEqual({
        pricingRequest: { product: { params: testValues } },
      });
    });
  });

  describe('getFormSubmissionBody', () => {
    const testIssuers = ['issuer1', 'issuer2'];
    const testType = RfqTypeEnum.INDICATIVE;
    it('should return proper value', () => {
      const result = getFormSubmissionBody(testValues, testIssuers, testType);
      expect(result).toEqual({
        pricingRequest: {
          product: { params: testValues },
          issuers: testIssuers,
          rfqType: testType,
        },
      });
    });
  });
});
