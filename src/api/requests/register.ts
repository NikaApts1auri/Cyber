import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}) => {
  try {
    const response = await axios.post(`${baseURL}/register/`, userData);
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