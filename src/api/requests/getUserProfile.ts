import axios from 'axios';
import { refreshToken as fetchNewToken } from './refreshToken';
import ExpiredToken from '../hooks/useIExpiredToken';

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {},
});

const refreshTokenAndUpdate = async (): Promise<string | null> => {
  const refresh = localStorage.getItem('refreshToken');
  if (!refresh) {
    console.error('No refresh token available.');
    return null;
  }

  try {
    const { access } = await fetchNewToken(refresh);
    localStorage.setItem('accessToken', access);
    return access;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export const fetchUser = async () => {
  const isTokenExpired = ExpiredToken();
  let token = localStorage.getItem('accessToken');

  if (!token || isTokenExpired(token)) {
    console.log('Token expired or missing. Refreshing...');
    token = await refreshTokenAndUpdate();
  }

  if (!token) {
    throw new Error('No valid token available. Please log in again.');
  }

  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;

  try {
    console.log('Fetching user profile...');
    const userResponse = await axiosInstance.get('/profile/');
    const userId = userResponse.data.id;

    console.log('Fetching user reputation...');
    const reputationResponse = await axiosInstance.get(
      `/users/${userId}/reputation/`
    );

    const profilePhoto =
      userResponse.data.profile_photo || '/icons/profilePhoto.svg';

    return {
      username: userResponse.data.username,
      email: userResponse.data.email,
      profilePhoto,
      reputation: reputationResponse.data.reputation,
      answers_count: reputationResponse.data.answers_count,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};