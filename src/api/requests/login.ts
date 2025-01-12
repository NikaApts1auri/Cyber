import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

interface LoginResponse {
  tokens: {
    access: string;
    refresh: string;
  };
}

export const loginUser = async (userData: {
  identifier: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${baseURL}/login/`, userData);
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