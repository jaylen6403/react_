import { PricingState } from '@luma-fe-workspace/redux';
import { render } from '@testing-library/react';
import { ConfigurableFormGroups } from './ConfigurableFormGroups';

describe('ConfigurableFormGroups', () => {
  it('should render successfully', () => {
    const configurableFormGroupsProps = {
      pricing: {
        product: { params: {} },
        productValidationErrors: {},
        state: PricingState.InCreation,
        constraints: {},
        productLayout: { sections: [] },
        issuers: {},
      },
      isEditable: true,
      values: {},
      errors: {},
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      handleValidation: jest.fn(),
      setFieldValue: jest.fn(),
    };
    const { baseElement } = render(
      <ConfigurableFormGroups {...configurableFormGroupsProps} />
    );
    expect(baseElement).toBeTruthy();
  });
});
