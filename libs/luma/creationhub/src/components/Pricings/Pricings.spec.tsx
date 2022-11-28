import {
  PageUserModel,
  PricingInProgress,
  PricingState,
  store,
} from '@luma-fe-workspace/redux';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { LumaAgGrid } from '@luma-fe-workspace/design-system';
import * as PricingAPI from '../PricingForm/usePricingAPI';
import { Pricings } from './Pricings';
import pricingApiMock from '../PricingForm/mocks/pricingAPIMock';

describe('Pricings', () => {
  const gridStyles = {};
  const onRowSelectedMock = jest.fn();
  const onGridReadyMock = jest.fn();
  const gridOptions = {
    columnDefs: [{ field: 'id' }, { field: 'state' }],
    rowData: [{ id: '355e5a71', state: 'IN_PROGRESS' }],
    onRowSelected: onRowSelectedMock,
    onGridReady: onGridReadyMock,
  };
  const component = (
    <Provider store={store}>
      <Router>
        <Pricings />
      </Router>
    </Provider>
  );

  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue(pricingApiMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', async () => {
    const pricingModel = {
      totalPages: 10,
      content: [
        {
          id: 'testPricing1',
          state: PricingState.InProgress,
        } as PricingInProgress,
      ],
    } as PageUserModel;

    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingApiMock,
      getPricings: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(pricingModel),
      }),
    });
    const { baseElement } = render(component);
    await waitFor(() => {
      expect(baseElement).toBeInTheDocument();
    });
  });

  it('should render grid', async () => {
    render(
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={gridStyles}
      ></LumaAgGrid>
    );
    expect(screen.getByRole('row', { name: 'Id State' })).toBeInTheDocument();
    expect(
      screen.getByRole('row', { name: '355e5a71 IN_PROGRESS' })
    ).toBeInTheDocument();
  });

  it('should call grid ready', async () => {
    render(
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={gridStyles}
      ></LumaAgGrid>
    );

    await waitFor(
      () => {
        expect(onGridReadyMock).toBeCalledTimes(1);
      },
      { timeout: 600 }
    );
  });
});
