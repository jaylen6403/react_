import Cookies from 'js-cookie';
import { isLocal } from '@luma-fe-workspace/utility';

export const getTokenFromProxy = () => {
  const USER_TOKEN = 'user_token';

  const initialToken = Cookies.get(USER_TOKEN);

  //if in local dev, cookie persists, if in deployed env cookie is removed
  if (!isLocal) {
    setTimeout(
      () =>
        Cookies.remove(USER_TOKEN, {
          path: '',
          sameSite: 'strict',
          secure: true,
        }),
      1000
    );
  }

  return initialToken;
};
