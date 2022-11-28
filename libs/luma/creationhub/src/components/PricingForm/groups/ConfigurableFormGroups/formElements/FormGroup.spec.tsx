import { fireEvent, render, screen } from '@testing-library/react';
import {
  ComputationMode,
  FieldTypes,
  NumericValue,
  ValueTypes,
  WeightedBasket,
} from '@luma-fe-workspace/redux';
import { FormGroup } from './FormGroup';
import * as PricingAPI from '../../../usePricingAPI';
import pricingApiMock from '../../../mocks/pricingAPIMock';

describe('FormGroup', () => {
  const testGroup = 'Test Group 1';
  const setFieldValueMock = jest.fn();
  const handleValidationMock = jest.fn();
  const handleChangeMock = jest.fn();
  const getMatchingUnderliersMock = jest.fn();
  const numericFieldProps = {
    field: {
      paramName: 'numericEntry',
      type: FieldTypes.Numeric,
      label: 'Numeric field',
    },
  };
  const underliersMock = [
    { label: 'testLabel', id: 'testId' },
    { label2: 'testLabel', id: 'testId' },
  ];

  const weightedBasket = {
    field: {
      paramName: 'weightedBasketEntry',
      type: FieldTypes.Basket,
      basket: {
        type: ValueTypes.UnweightedBasket,
      } as WeightedBasket,
    },
  };

  const formGroupProps = {
    group: {
      label: testGroup,
      fields: [numericFieldProps.field, weightedBasket.field],
    },
    values: {
      [numericFieldProps.field.paramName]: {
        type: ValueTypes.Numeric,
        value: 10,
        computationMode: ComputationMode.MODIFIABLE,
      } as NumericValue,
      weightedBasketEntry: {
        type: ValueTypes.WeightedBasket,
        underliers: [
          { weight: 0.25, underlier: { id: 'testId2', label: 'testLabel2' } },
        ],
      } as WeightedBasket,
    },
    constraints: {},
    setFieldValue: setFieldValueMock,
    errors: {},
    isEditable: true,
    handleChange: handleChangeMock,
    handleBlur: jest.fn(),
    handleValidation: handleValidationMock,
  };

  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
    ...pricingApiMock,
    getMatchingUnderliers: getMatchingUnderliersMock.mockReturnValue({
      unwrap: jest.fn().mockReturnValue(underliersMock),
    }),
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<FormGroup {...formGroupProps} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should create a group with specific name', () => {
    render(<FormGroup {...formGroupProps} />);
    screen.getByText(testGroup);
  });

  it('should render field in group', () => {
    render(<FormGroup {...formGroupProps} />);
    expect(screen.getByText('Numeric field')).toBeInTheDocument();
    const input = screen.getByTestId('input-numericentry') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.blur(input);
    expect(setFieldValueMock).toBeCalledTimes(1);
  });

  it('should trigger handle validation', () => {
    render(<FormGroup {...formGroupProps} />);
    expect(screen.getByText('Numeric field')).toBeInTheDocument();
    const input = screen.getByTestId('input-numericentry') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.blur(input);
    expect(handleValidationMock).toBeCalledTimes(1);
  });

  it('should trigger handle validation on chip remove', () => {
    render(<FormGroup {...formGroupProps} />);
    const removeButton = screen.getByTestId('chip-remove');
    fireEvent.click(removeButton);
    expect(handleValidationMock).toBeCalledTimes(1);
  });

  it('should trigger handle weighted basket validation', () => {
    render(<FormGroup {...formGroupProps} />);
    const removeButton = screen.getByTestId('chip-remove');
    fireEvent.click(removeButton);
    expect(handleValidationMock).toBeCalledTimes(1);
  });

  it('should call set field value', async () => {
    render(<FormGroup {...formGroupProps} />);
    const input = screen.getAllByTestId('chip-entry')[0];
    fireEvent.change(input, { target: { value: 2 } });
    expect(setFieldValueMock).toBeCalledTimes(1);
  });
});
