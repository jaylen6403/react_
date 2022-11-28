import { useEffect } from 'react';
import { syncLogout } from '../utils/logout';

export const useSyncLogout = () => {
  useEffect(() => {
    window.addEventListener('storage', syncLogout);
    return () => window.removeEventListener('storage', syncLogout);
  }, []);
};
