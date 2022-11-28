import { PageUserModel, Rfq, RfqState, store } from '@luma-fe-workspace/redux';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import * as PricingAPI from '../PricingForm/usePricingAPI';
import { Rfqs } from './Rfqs';
import pricingAPIMock from '../PricingForm/mocks/pricingAPIMock';

describe('Rfqs', () => {
  const component = (
    <Provider store={store}>
      <Router>
        <Rfqs />
      </Router>
    </Provider>
  );

  it('should render correctly', async () => {
    const rfqModel = {
      totalPages: 10,
      content: [
        {
          id: 'testRfq1',
          pricingId: 'testPricing1',
          state: RfqState.QUOTED_TRADABLE,
        } as Rfq,
      ],
    } as PageUserModel;

    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingAPIMock,
      getRFQs: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(rfqModel),
      }),
    });
    const { baseElement } = render(component);
    await waitFor(() => {
      expect(baseElement).toBeInTheDocument();
    });
  });
});
