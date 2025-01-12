import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const updateUserProfile = async (formData: FormData) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No valid token available. Please log in again.');
  }

  try {
    const response = await axios.patch(`${baseURL}/user/settings/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Failed to update user profile:', error.response?.data || error.message);
    } else {
      console.error('Failed to update user profile:', (error as Error).message);
    }
    throw error;
  }
};