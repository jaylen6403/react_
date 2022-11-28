import { ComputationMode, ValueTypes } from '@luma-fe-workspace/redux';
import { render } from '@testing-library/react';
import { NumberTextEntry } from './NumberTextEntry';

describe('NumberTextEntry', () => {
  const onChangeMock = jest.fn();
  const onValidationMock = jest.fn();
  const props = {
    value: {
      type: ValueTypes.Numeric,
      value: 1000,
      computationMode: ComputationMode.MODIFIABLE,
    },
    onChange: onChangeMock,
    onValidation: onValidationMock,
    isDisabled: false,
    computationMode: ComputationMode.MODIFIABLE,
    fieldProps: { id: 'testId' },
    paramName: 'numberTextEntry',
    hasError: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { baseElement } = render(<NumberTextEntry {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
