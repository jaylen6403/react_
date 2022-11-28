import { fireEvent, render, screen } from '@testing-library/react';
import { PricingFormFooter } from './PricingFormFooter';
import { PricingModes } from '../../PricingFormUtils';

describe('PricingFormFooter', () => {
  const setPricingModeMock = jest.fn();
  const pricingMode = PricingModes.Pricing;
  const quotingMode = PricingModes.Quoting;
  const props = {
    pricingMode,
    setPricingMode: setPricingModeMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { baseElement } = render(<PricingFormFooter {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render button for pricing', () => {
    render(<PricingFormFooter {...props} />);
    screen.getByText('Prepare To Quote');
  });

  it('should handle click on pricing button', () => {
    render(<PricingFormFooter {...props} />);
    const button = screen.getByText('Prepare To Quote');
    fireEvent.click(button);
    expect(setPricingModeMock).toBeCalledTimes(1);
  });

  it('should render button for quoting', () => {
    render(<PricingFormFooter {...props} pricingMode={quotingMode} />);
    screen.getByText('Edit Request');
  });

  it('should handle click on quoting button', () => {
    render(<PricingFormFooter {...props} pricingMode={quotingMode} />);
    const button = screen.getByText('Edit Request');
    fireEvent.click(button);
    expect(setPricingModeMock).toBeCalledTimes(1);
  });
});
