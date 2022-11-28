import { setupServer } from 'msw/node';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import {
  getSuccessUserTokenInfoHandler,
  getFailureUserTokenInfoHandler,
} from '../../testUtils/mocks/authService/handlers';
import { AuthGuard } from './AuthGuard';
import * as utils from '../../utils/getTokenFromProxy';
import store from '../../redux/configureStore';
import { selectAccessToken } from '../../redux/auth/selector';

const successTokenHandler = getSuccessUserTokenInfoHandler();
const failureTokenHandler = getFailureUserTokenInfoHandler();

const server = setupServer();

jest.mock('../../utils/getTokenFromProxy', () => ({
  getTokenFromProxy: jest.fn(),
}));

jest.mock('../../redux/auth/selector', () => ({
  selectAccessToken: jest.fn(),
}));

describe('AuthGuard', () => {
  const dashboardText = 'Hello';
  const indexText = 'home';

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    jest.resetAllMocks();
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render the route if user token is valid', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (utils.getTokenFromProxy as any).mockReturnValue('user_token');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (selectAccessToken as any).mockReturnValue(undefined);
    server.use(successTokenHandler);

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Provider store={store}>
          <Routes>
            <Route index element={<div>{indexText}</div>} />
            <Route
              element={
                <AuthGuard>
                  <Outlet />
                </AuthGuard>
              }
            >
              <Route path="/dashboard" element={<div>{dashboardText}</div>} />
            </Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const text = await screen.findAllByText(dashboardText);
    expect(text).toHaveLength(1);
  });

  it('should render the homepage if no token is available', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (utils.getTokenFromProxy as any).mockReturnValue(undefined);
    server.use(failureTokenHandler);

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Provider store={store}>
          <Routes>
            <Route index element={<div>{indexText}</div>} />
            <Route
              element={
                <AuthGuard>
                  <Outlet />
                </AuthGuard>
              }
            >
              <Route path="/dashboard" element={<div>{dashboardText}</div>} />
            </Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const text = await screen.findAllByText(indexText);
    expect(text).toHaveLength(1);
  });

  it('should render homepage if token is invalid', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (utils.getTokenFromProxy as any).mockReturnValue(null);
    server.use(failureTokenHandler);

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Provider store={store}>
          <Routes>
            <Route index element={<div>{indexText}</div>} />
            <Route
              element={
                <AuthGuard>
                  <Outlet />
                </AuthGuard>
              }
            >
              <Route path="/dashboard" element={<div>{dashboardText}</div>} />
            </Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const text = await screen.findAllByText(indexText);
    expect(text).toHaveLength(1);
  });

  it('should render the route if an accessToken is present', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (utils.getTokenFromProxy as any).mockReturnValue(undefined);
    server.use(failureTokenHandler);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (selectAccessToken as any).mockReturnValue('ACCESS_TOKEN');

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Provider store={store}>
          <Routes>
            <Route index element={<div>{indexText}</div>} />
            <Route
              element={
                <AuthGuard>
                  <Outlet />
                </AuthGuard>
              }
            >
              <Route path="/dashboard" element={<div>{dashboardText}</div>} />
            </Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const text = await screen.findAllByText(dashboardText);
    expect(text).toHaveLength(1);
  });
});
