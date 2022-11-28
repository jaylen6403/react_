import { prepareHeadersWithAuth } from './prepareHeadersWithAuth';

describe('prepareHeadersWithAuth', () => {
  const mockApi = {
    dispatch: jest.fn(),
    endpoint: '/',
    extra: jest.fn(),
    getState: jest.fn(),
    type: 'query' as const,
    signal: {
      aborted: false,
      onabort: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should attach authorization header with accessToken', async () => {
    const ACCESS_TOKEN = 'ACCESS_TOKEN';
    mockApi.getState.mockReturnValueOnce({
      auth: { accessToken: ACCESS_TOKEN },
    });

    const authHeaders = await prepareHeadersWithAuth()(new Headers(), mockApi);

    expect(authHeaders.get('Authorization')).toBe(`Bearer ${ACCESS_TOKEN}`);
  });
});
