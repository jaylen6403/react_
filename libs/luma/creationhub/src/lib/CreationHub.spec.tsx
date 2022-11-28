import { render } from '@testing-library/react';
import { CreationHub } from './CreationHub';
import * as Store from '@luma-fe-workspace/redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as PricingAPI from '../components/PricingForm/usePricingAPI';
import pricingApiMock from '../components/PricingForm/mocks/pricingAPIMock';

describe('CreationHub', () => {
  jest.spyOn(Store, 'useAppSelector').mockReturnValue('');
  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue(pricingApiMock);

  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <CreationHub />
      </Router>
    );
    expect(baseElement).toBeInTheDocument();
  });
});
