import Cookies from 'js-cookie';
import { getTokenFromProxy } from './getTokenFromProxy';

jest.mock('@luma-fe-workspace/utility', () => {
  return {
    isLocal: false,
  };
});

describe('getTokenFromProxy', () => {
  const USER_TOKEN = 'user_token';
  const testTokenValue = 'vbifvgiufebv';

  beforeAll(() => {
    Cookies.set(USER_TOKEN, testTokenValue);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should retrive and return a token from cookie storage', () => {
    const token = getTokenFromProxy();
    expect(token).toEqual(testTokenValue);
  });

  it('should delete cookie after retrival, should use setTimeout', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const initialToken = getTokenFromProxy();
    expect(initialToken).toEqual(testTokenValue);

    jest.runAllTimers();
    const tokenCheck = getTokenFromProxy();
    expect(tokenCheck).toEqual(undefined);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
