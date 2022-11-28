import { useMemo } from 'react';
import { getLumaAppLogin } from '@luma-fe-workspace/utility';

type Props = {
  isLoggedIn: string | null;
};

export const LumaAppRedirect = ({ isLoggedIn }: Props) => {
  useMemo(() => {
    console.log('isLoggedIn ', isLoggedIn);
    if (isLoggedIn) {
      window.location.href = `${window.origin}/dashboard`;
      return;
    }
    window.location.href = getLumaAppLogin();
  }, [isLoggedIn]);
  return null;
};
