import {
  ValueTypes,
  UnweightedBasket,
  WeightedBasket,
} from '@luma-fe-workspace/redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { BasketShow } from './BasketShow';

describe('BasketShow', () => {
  const onBasketRemoveMock = jest.fn();
  const onWeightChangeMock = jest.fn();
  const handleChangeMock = jest.fn();
  const handleBlurMock = jest.fn();
  const handleValidationMock = jest.fn();
  const setFieldValueMock = jest.fn();
  const unweightedBasket = {
    type: ValueTypes.UnweightedBasket,
    underliers: [{ underlier: { id: 'testId', label: 'testLabel' } }],
  } as UnweightedBasket;

  const weightedBasket = {
    type: ValueTypes.WeightedBasket,
    underliers: [
      { weight: 0.25, underlier: { id: 'testId1', label: 'testLabel1' } },
      { weight: 0.75, underlier: { id: 'testId2', label: 'testLabel2' } },
    ],
  } as WeightedBasket;

  const basketShowProps = {
    paramName: 'ParamName',
    isEditable: true,
    onBasketRemove: onBasketRemoveMock,
    onWeightChange: onWeightChangeMock,
    handleChange: handleChangeMock,
    handleBlur: handleBlurMock,
    handleValidation: handleValidationMock,
    setFieldValue: setFieldValueMock,
    values: {},
    errors: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BasketShow {...basketShowProps} basket={unweightedBasket} />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should render unweighted basket successfully', () => {
    render(<BasketShow {...basketShowProps} basket={unweightedBasket} />);
    expect(screen.getByText('testLabel')).toBeInTheDocument();
  });

  it('should render weighted basket successfully', () => {
    render(<BasketShow {...basketShowProps} basket={weightedBasket} />);
    expect(screen.getByText('testLabel1')).toBeInTheDocument();
    const firstUnderlierInput = screen.getByDisplayValue('25');
    expect(firstUnderlierInput).toBeInTheDocument();
    const totalWeightInput = screen.getByDisplayValue('100');
    expect(totalWeightInput).toBeInTheDocument();
  });

  it('should call update weight successfully', () => {
    render(<BasketShow {...basketShowProps} basket={weightedBasket} />);
    const firstUnderlierInput = screen.getByDisplayValue('25');
    fireEvent.change(firstUnderlierInput, { target: { value: '10' } });
    expect(onWeightChangeMock).toHaveBeenCalled();
  });

  it('should call validation successfully', () => {
    render(<BasketShow {...basketShowProps} basket={weightedBasket} />);
    const firstUnderlierInput = screen.getByDisplayValue('25');
    fireEvent.blur(firstUnderlierInput);
    expect(handleValidationMock).toHaveBeenCalled();
  });

  it('should call validation successfully', () => {
    render(<BasketShow {...basketShowProps} basket={weightedBasket} />);
    const firstUnderlierInput = screen.getByDisplayValue('25');
    fireEvent.blur(firstUnderlierInput);
    expect(handleValidationMock).toHaveBeenCalled();
  });

  it('should call remove successfully', () => {
    render(<BasketShow {...basketShowProps} basket={unweightedBasket} />);
    const removeUnderlierButton = screen.getByTestId('chip-remove');
    fireEvent.click(removeUnderlierButton);
    expect(onBasketRemoveMock).toHaveBeenCalled();
  });
});
