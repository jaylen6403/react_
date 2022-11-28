import { render } from '@testing-library/react';
import { FormSection } from './FormSection';

describe('FormSection', () => {
  it('should render successfully', () => {
    const formSectionProps = {
      section: { label: 'label', fieldGroups: [] },
      values: {},
      constraints: {},
      errors: {},
      isEditable: true,
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      handleValidation: jest.fn(),
    };
    const { baseElement } = render(<FormSection {...formSectionProps} />);
    expect(baseElement).toBeInTheDocument();
  });
});
