import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const logoutUser = async (refreshToken: string) => {
  try {
    const response = await axios.post(`${baseURL}/logout/`, { refresh_token: refreshToken }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};