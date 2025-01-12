import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export interface User {
  user_id: number;
  username: string;
  reputation_score: number;
  likes: number;
  dislikes: number;
  answers_count: number;
  accepted_answers: number;
  profile_photo: string;
}

export interface UsersResponse {
  users: User[];
  total_users: number;
  total_pages: number;
  current_page: number;
  page_size: number;
}

export const fetchUsers = async (): Promise<UsersResponse> => {
  try {
    const response = await axios.get(`${baseURL}/users/reputation/`);
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