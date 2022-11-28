import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchBaseQueryWithRefresh } from './fetchBaseQueryWithRefresh';
import { mockData } from '../testUtils/mocks';
import { prepareHeadersWithAuth } from './prepareHeadersWithAuth';

const QUERY_URL = 'https://app.lumafintech.com';
const REFRESH_URL = '*/auth-service/oauth/token';
const { mockAuthResponse, mockAuthErrorResponse } = mockData;
const AUTH_RESPONSE = mockAuthResponse();
const REFRESH_FAILURE_RESPONSE = mockAuthErrorResponse();

describe('fetchBaseQueryWithRefresh', () => {
  const mockDispatch = jest.fn();
  const mockGetState = jest
    .fn()
    .mockReturnValue({ auth: { refreshToken: 'REFRESH_TOKEN' } });
  const mockApi = {
    dispatch: mockDispatch,
    endpoint: '/',
    extra: jest.fn(),
    getState: mockGetState,
    type: 'query' as const,
    signal: {
      aborted: false,
      onabort: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    },
  };
  const mockQuery = jest.fn();
  const mockRefresh = jest.fn();

  const server = setupServer(
    rest.get(QUERY_URL, (req, res, ctx) => {
      mockQuery();
      return res(ctx.status(200), ctx.json({ status: 'success' }));
    }),
    rest.post(REFRESH_URL, (req, res, ctx) => {
      mockRefresh();
      return res(ctx.status(200), ctx.json(AUTH_RESPONSE));
    })
  );

  let promise: Promise<any>;
  let promiseResolver: (value?: unknown) => void;
  let refreshPromise: Promise<any>;
  let refreshResolver: (value?: unknown) => void;

  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    refreshPromise = new Promise((resolve) => {
      refreshResolver = resolve;
    });
    promise = new Promise((resolve) => {
      promiseResolver = resolve;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should refresh on 401', async () => {
    const baseQuery = fetchBaseQueryWithRefresh({
      baseUrl: QUERY_URL,
      prepareHeaders: prepareHeadersWithAuth(['login', 'validateToken']),
    });
    server.use(
      rest.get(QUERY_URL, (req, res, ctx) => {
        mockQuery();
        return res.once(ctx.status(401));
      })
    );

    await baseQuery({ url: '/' }, mockApi, {});

    expect(mockRefresh.mock.calls.length).toBe(1);
    expect(mockQuery.mock.calls.length).toBe(2);
  });

  it('should handle logout on failed refresh', async () => {
    const baseQuery = fetchBaseQueryWithRefresh({ baseUrl: QUERY_URL });
    server.use(
      rest.get(QUERY_URL, (req, res, ctx) => {
        mockQuery();
        return res.once(ctx.status(401));
      }),
      rest.post(REFRESH_URL, (req, res, ctx) => {
        mockRefresh();
        return res.once(ctx.status(400), ctx.json(REFRESH_FAILURE_RESPONSE));
      })
    );

    await baseQuery({ url: '/' }, mockApi, {});

    expect(mockRefresh.mock.calls.length).toBe(1);
    expect(mockQuery.mock.calls.length).toBe(1);
  });

  it('should handle subsequent requests while waiting for refresh token', async () => {
    const baseQuery = fetchBaseQueryWithRefresh({ baseUrl: QUERY_URL });
    server.use(
      rest.get(QUERY_URL, (req, res, ctx) => {
        mockQuery();
        return res.once(ctx.status(401));
      }),
      rest.post(REFRESH_URL, async (req, res, ctx) => {
        mockRefresh();
        refreshResolver();

        await promise;

        return res(ctx.status(200), ctx.json(AUTH_RESPONSE));
      })
    );

    const p1 = baseQuery({ url: '/' }, mockApi, {});

    await refreshPromise;

    // Requests that are waiting
    const p2 = baseQuery({ url: '/' }, mockApi, {});
    const p3 = baseQuery({ url: '/' }, mockApi, {});

    expect(mockRefresh.mock.calls.length).toBe(1);
    expect(mockQuery.mock.calls.length).toBe(1);

    // Resolve promise to allow refresh server to respond
    promiseResolver();
    await Promise.all([p1, p2, p3]);

    expect(mockRefresh.mock.calls.length).toBe(1);
    expect(mockQuery.mock.calls.length).toBe(4);
  });
});
