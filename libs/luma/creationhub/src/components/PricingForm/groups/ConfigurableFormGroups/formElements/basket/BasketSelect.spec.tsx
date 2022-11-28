import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BasketSelect } from './BasketSelect';
import * as RTKQuery from '@luma-fe-workspace/redux';
import * as PricingAPI from '../../../../usePricingAPI';
import pricingApiMock from '../../../../mocks/pricingAPIMock';

describe('BasketSelect', () => {
  const getMatchingUnderliersMock = jest.fn();
  const onUnderlierSelectMock = jest.fn();
  const underliersMock = [
    { label: 'testLabel', id: 'testId' },
    { label2: 'testLabel', id: 'testId' },
  ];
  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
    ...pricingApiMock,
    getMatchingUnderliers: getMatchingUnderliersMock.mockReturnValue({
      unwrap: jest.fn().mockReturnValue(underliersMock),
    }),
  });
  const basket: RTKQuery.Basket = {
    type: RTKQuery.ValueTypes.UnweightedBasket,
    underliers: [],
  };
  const basketSelectProps = {
    basket: basket,
    id: 'BasketId',
    onUnderlierSelect: onUnderlierSelectMock,
    isEditable: true,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<BasketSelect {...basketSelectProps} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should trigger debounced call successfully', async () => {
    render(<BasketSelect {...basketSelectProps} />);
    const underlierSearch = screen.getByTestId('field-BasketId');
    fireEvent.change(underlierSearch, { target: { value: 'search ' } });
    expect(getMatchingUnderliersMock).not.toHaveBeenCalled();
    await waitFor(
      () => {
        expect(getMatchingUnderliersMock).toHaveBeenCalled();
      },
      { timeout: 600 }
    );
  });

  it('should trigger debounced call successfully', async () => {
    render(<BasketSelect {...basketSelectProps} />);
    const underlierSearch = screen.getByTestId('field-BasketId');
    fireEvent.change(underlierSearch, { target: { value: 'search ' } });
    expect(getMatchingUnderliersMock).not.toHaveBeenCalled();
    await waitFor(
      () => {
        expect(getMatchingUnderliersMock).toHaveBeenCalled();
      },
      { timeout: 600 }
    );
  });

  it('should select underlier', async () => {
    render(<BasketSelect {...basketSelectProps} />);
    const underlierSearch = screen.getByTestId('field-BasketId');
    fireEvent.change(underlierSearch, { target: { value: 'search ' } });
    expect(getMatchingUnderliersMock).not.toHaveBeenCalled();
    await waitFor(
      () => {
        expect(getMatchingUnderliersMock).toHaveBeenCalled();
      },
      { timeout: 600 }
    );
    const underliers = screen.getAllByRole('option');
    fireEvent.click(underliers[0]);
    expect(onUnderlierSelectMock).toHaveBeenCalled();
  });
});
