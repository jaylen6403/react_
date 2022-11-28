import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  FieldTypes,
  ParamConstraints,
  ParamName,
  ValueTypes,
  EnumDropdownField,
  WeightedBasket,
  UnweightedBasket,
  ComputationMode,
  EnumValue,
  NumericValue,
  LocalDateValue,
} from '@luma-fe-workspace/redux';
import { createDataTestId, FormField } from './FormField';
import * as PricingAPI from '../../../usePricingAPI';
import pricingAPIMock from '../../../mocks/pricingAPIMock';
import { DateFormatter } from '@luma-fe-workspace/utility';

describe('FormField', () => {
  const underliersMock = [
    { label: 'testLabel', id: 'testId' },
    { label2: 'testLabel', id: 'testId' },
  ];
  const getMatchingUnderliersMock = jest.fn();
  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
    ...pricingAPIMock,
    getMatchingUnderliers: getMatchingUnderliersMock.mockReturnValue({
      unwrap: jest.fn().mockReturnValue(underliersMock),
    }),
  });

  const setFieldValueMock = jest.fn();
  const handleChangeMock = jest.fn();
  const handleBlurMock = jest.fn();
  const handleValidationMock = jest.fn();
  const onValidationMock = jest.fn();

  const dateFieldProps = {
    field: {
      paramName: 'dateEntry',
      type: FieldTypes.Date,
      label: 'Date field',
    },
  };
  const numericFieldProps = {
    field: {
      paramName: 'numericEntry',
      type: FieldTypes.Numeric,
      label: 'Numeric field',
    },
  };

  const sharedProps = {
    values: {
      dropdownEntry: {
        type: ValueTypes.Enum,
        id: 'DropdownId',
        label: 'DropdownLabel',
        computationMode: ComputationMode.MODIFIABLE,
      } as EnumValue,
      [numericFieldProps.field.paramName]: {
        type: ValueTypes.Numeric,
        value: 10,
        computationMode: ComputationMode.MODIFIABLE,
      } as NumericValue,
      [dateFieldProps.field.paramName]: {
        type: ValueTypes.LocalDate,
        value: '2022-01-01',
        computationMode: ComputationMode.MODIFIABLE,
      } as LocalDateValue,
      weightedBasketEntry: {
        type: ValueTypes.WeightedBasket,
        underliers: {},
      } as WeightedBasket,
      unweightedBasketEntry: {
        type: ValueTypes.UnweightedBasket,
        underliers: [
          {
            underlier: { id: 'underlier1', label: 'test' },
          },
        ],
      } as UnweightedBasket,
    },
    constraints: {
      dropdownEntry: {
        type: ValueTypes.Enum,
        availableValues: [
          { type: ValueTypes.Enum, id: 'DropdownId', label: 'DropdownLabel' },
        ],
      },
    } as Record<ParamName, ParamConstraints>,
    handleChange: handleChangeMock,
    handleBlur: handleBlurMock,
    setFieldValue: setFieldValueMock,
    handleValidation: handleValidationMock,
    onValidation: onValidationMock,
    errors: {},
    hasError: false,
    testId: 'testid1',
    name: 'input',
    isEditable: true,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render dropdown', () => {
    const formFieldProps = {
      field: {
        paramName: 'dropdownEntry',
        type: FieldTypes.Dropdown,
        label: 'Dropdown element',
        value: {
          type: ValueTypes.Enum,
          id: 'DropdownId',
          label: 'DropdownLabel',
          computationMode: ComputationMode.MODIFIABLE,
        },
      } as EnumDropdownField,
      ...sharedProps,
    };
    render(<FormField {...formFieldProps} />);
    expect(screen.getByText('Dropdown element')).toBeInTheDocument();
    const input = screen.getByTestId(
      createDataTestId('dropdown', formFieldProps.field.paramName)
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(formFieldProps.field.value.label);
    fireEvent.click(input);
    const options = screen.getAllByRole('option');
    fireEvent.click(options[0]);
    expect(onValidationMock).toBeCalledTimes(1);
  });

  it('should render numeric entry', () => {
    render(<FormField {...numericFieldProps} {...sharedProps} />);
    expect(screen.getByText(numericFieldProps.field.label)).toBeInTheDocument();
    const input = screen.getByTestId(
      createDataTestId('input', numericFieldProps.field.paramName)
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('10');
  });

  it('should update numeric entry', () => {
    const newValue = 11;
    render(<FormField {...numericFieldProps} {...sharedProps} />);
    const paramName = numericFieldProps.field.paramName;
    const input = screen.getByTestId(
      createDataTestId('input', paramName)
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: newValue } });
    fireEvent.blur(input);
    expect(setFieldValueMock).toBeCalledTimes(1);
    expect(setFieldValueMock).toBeCalledWith(paramName, {
      type: ValueTypes.Numeric,
      value: newValue,
      computationMode: ComputationMode.MODIFIABLE,
    });
  });

  it('should handle numeric blur', () => {
    render(<FormField {...numericFieldProps} {...sharedProps} />);
    const paramName = numericFieldProps.field.paramName;
    const input = screen.getByTestId(
      createDataTestId('input', paramName)
    ) as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onValidationMock).toBeCalledTimes(1);
    expect(onValidationMock).toHaveBeenCalledWith(
      paramName,
      sharedProps.values[paramName]
    );
  });

  it('should render date entry', () => {
    render(<FormField {...dateFieldProps} {...sharedProps} />);
    expect(screen.getByText(dateFieldProps.field.label)).toBeInTheDocument();
    const input = screen.getByTestId(
      'datepicker-dateentry'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    const inputDate = new Date(input.value);
    expect(DateFormatter.formatLocalDate(inputDate)).toBe('2021-12-30');
  });

  it('should update date entry', () => {
    render(<FormField {...dateFieldProps} {...sharedProps} />);
    const paramName = dateFieldProps.field.paramName;
    const input = screen.getByTestId(
      createDataTestId('datepicker', paramName)
    ) as HTMLInputElement;
    fireEvent.focus(input);
    const dayButton = screen.queryAllByText('28')[0];
    fireEvent.click(dayButton);
    expect(setFieldValueMock).toBeCalledTimes(1);
  });

  it('should render weighted basket input', () => {
    const weightedBasketFieldProps = {
      field: {
        paramName: 'weightedBasketEntry',
        type: FieldTypes.Basket,
        basket: {
          type: ValueTypes.WeightedBasket,
          underliers: [
            {
              underlier: { id: 'underlier1', label: 'test' },
              weight: 0.5,
            },
          ],
        } as WeightedBasket,
      },
    };
    render(<FormField {...weightedBasketFieldProps} {...sharedProps} />);
    const input = screen.getByTestId(
      'field-weightedBasketEntry'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it('should render unweighted basket input', async () => {
    const unweightedBasketFieldProps = {
      field: {
        paramName: 'unweightedBasketEntry',
        type: FieldTypes.Basket,
        basket: {
          type: ValueTypes.UnweightedBasket,
          underliers: [
            {
              underlier: { id: 'underlier1', label: 'test' },
            },
          ],
        } as UnweightedBasket,
      },
    };
    render(<FormField {...unweightedBasketFieldProps} {...sharedProps} />);
    const input = screen.getByTestId(
      'field-unweightedBasketEntry'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 't' } });
    await waitFor(
      () => {
        expect(getMatchingUnderliersMock).toHaveBeenCalled();
      },
      { timeout: 600 }
    );
    const underliers = screen.getAllByRole('option');
    fireEvent.click(underliers[0]);
    expect(onValidationMock).toHaveBeenCalled();
  });
});
