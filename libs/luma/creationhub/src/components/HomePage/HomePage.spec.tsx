import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as RTKQuery from '@luma-fe-workspace/redux';
import { store } from '@luma-fe-workspace/redux';
import { HomePage } from './HomePage';
import * as PricingAPI from '../PricingForm/usePricingAPI';
import pricingAPIMock from '../PricingForm/mocks/pricingAPIMock';

describe('HomePage', () => {
  jest.spyOn(RTKQuery, 'useAppSelector').mockReturnValueOnce([]);
  jest.spyOn(RTKQuery, 'useAppSelector').mockReturnValueOnce('Issuer');
  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue(pricingAPIMock);
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', async () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    await waitFor(() => {
      expect(baseElement).toBeInTheDocument();
    });
  });
});
