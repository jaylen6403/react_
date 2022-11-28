import { render, screen, fireEvent } from '@testing-library/react';
import { PricingForm } from './PricingForm';
import { PricingFormVariants } from './PricingFormUtils';
import * as PricingAPI from './usePricingAPI';
import pricingAPIMock from '../PricingForm/mocks/pricingAPIMock';
import initialConfigMock from '../PricingForm/mocks/initialConfigMock';
import { RfqTypeEnum, store } from '@luma-fe-workspace/redux';
import * as RTKQuery from '@luma-fe-workspace/redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'root');
document.body.appendChild(modalRoot);

describe('PricingForm', () => {
  beforeEach(() => {
    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingAPIMock,
      getInitialState: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(initialConfigMock),
      }),
    });
    jest.spyOn(RTKQuery, 'useAppSelector').mockReturnValue([]);
    jest.spyOn(RTKQuery, 'useAppSelector').mockReturnValueOnce('Issuer');
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Router>
          <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
        </Router>
      </Provider>
    );
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByTestId('pricing-form')).toBeInTheDocument();
  });

  it('should render loader successfully', () => {
    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingAPIMock,
      getInitialState: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(initialConfigMock),
      }),
      isLoading: { ...pricingAPIMock.isLoading, initialState: true },
    });

    render(
      <Provider store={store}>
        <Router>
          <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
        </Router>
      </Provider>
    );
    expect(screen.queryByTestId('pricing-form')).not.toBeInTheDocument();
  });

  it('should render all buttons successfully', () => {
    render(
      <Provider store={store}>
        <Router>
          <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('button-clone')).toBeTruthy();
    (Object.keys(RfqTypeEnum) as Array<keyof typeof RfqTypeEnum>).forEach(
      (type) => {
        expect(screen.getByTestId(`button-price_${type}`)).toBeInTheDocument();
      }
    );
  });

  it('submit buttons should be disabled without any changes', () => {
    render(
      <Provider store={store}>
        <Router>
          <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
        </Router>
      </Provider>
    );
    (Object.keys(RfqTypeEnum) as Array<keyof typeof RfqTypeEnum>).forEach(
      (type) => {
        expect(screen.getByTestId(`button-price_${type}`)).toHaveProperty(
          'disabled',
          true
        );
      }
    );
  });

  it('should display tab of cloned pricing in creation', () => {
    render(
      <Provider store={store}>
        <Router>
          <PricingForm formVariant={PricingFormVariants.NEW_PRICING} />
        </Router>
      </Provider>
    );
    const cloneButton = screen.getByTestId('button-clone');
    fireEvent.click(cloneButton);
    const firstTab = screen.getByTestId('tab-Pending');
    expect(firstTab).toBeInTheDocument();
    const clonedTab = screen.getByTestId('tab-Pending - Clone1');
    expect(clonedTab).toBeInTheDocument();
  });
});
