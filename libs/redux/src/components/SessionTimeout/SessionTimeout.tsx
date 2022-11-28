import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../redux/auth/actions';
import { isLoggedIn, selectAuth } from '../../redux/auth/selector';
import store, { RootState } from '../../redux/configureStore';
import { useAppDispatch } from '../../utils/hooks';

export const SessionTimeout = () => {
  const interval = 5000;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalChecker = setInterval(async () => {
      const auth = selectAuth(store.getState() as RootState);
      const loginStatus = isLoggedIn(store.getState() as RootState);
      if (auth !== null && loginStatus === false) {
        await dispatch(logout()).then(() => navigate('/'));
      }
    }, interval);
    return () => clearInterval(intervalChecker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
