// hooks/useAuth.ts
import { useEffect } from 'react';
import { useRefreshToken } from './useRefreshToken';

const isTokenExpired = (token: string) => {
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.exp * 1000 < Date.now();
};

export const useAuth = () => {
  const { refreshUserToken } = useRefreshToken();

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');

    if (refreshToken && accessToken && isTokenExpired(accessToken)) {
      refreshUserToken(refreshToken);
    }
  }, [refreshUserToken]);
};
