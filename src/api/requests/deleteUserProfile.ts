import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const deleteUserProfile = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No valid token available. Please log in again.');
  }

  try {
    const response = await axios.delete(`${baseURL}/users/delete/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Failed to delete user profile:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Failed to delete user profile:', error.message);
    } else {
      console.error('Failed to delete user profile:', String(error));
    }
    throw error;
  }
};