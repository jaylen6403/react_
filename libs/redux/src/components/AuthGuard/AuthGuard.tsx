import { Navigate } from 'react-router-dom';
import { useSyncLogout } from '../../hooks/UseSyncLogout';
import { useAppSelector } from '../../utils/hooks';
import { useValidateTokenQuery } from '../../redux/authService/slice';

import { selectAccessToken } from '../../redux/auth/selector';
import { getTokenFromProxy } from '../../utils/getTokenFromProxy';

interface Props {
  children: JSX.Element;
}

export const AuthGuard = ({ children }: Props) => {
  const accessToken = useAppSelector(selectAccessToken);
  const token = getTokenFromProxy();
  useSyncLogout();

  const { isLoading, isSuccess } = useValidateTokenQuery(
    {
      bearer: token ?? '',
    },
    { skip: !token }
  );

  if (accessToken || isSuccess) {
    return children;
  }

  if (!token) return <Navigate to="/" />;

  if (isLoading) {
    return <div>isLoading....</div>;
  }

  if (!isSuccess) {
    return <Navigate to="/" />;
  }

  return null;
};
