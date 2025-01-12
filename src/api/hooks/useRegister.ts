import { useMutation } from 'react-query';
import { useAtom } from 'jotai';
import { errorAtom } from '../../store/store';
import { registerUser as apiRegisterUser } from '../requests/register';
import { toast } from 'react-toastify';

interface FormData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

interface RegisterResponse {
  user: {
    id: number;
    username: string;
    email: string;
  };
  tokens: {
    access: string;
    refresh: string;
  };
  message: string;
}

export const useRegister = () => {
  const [, setError] = useAtom(errorAtom);

  const mutation = useMutation<RegisterResponse, unknown, FormData>(apiRegisterUser, {
    onSuccess: () => {
      setError(null);
      toast.success('User registered successfully');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      setError('Error registering user');
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.username) {
          toast.error(`Username: ${errorData.username.join(', ')}`);
        }
        if (errorData.email) {
          toast.error(`Email: ${errorData.email.join(', ')}`);
        }
        if (errorData.password) {
          toast.error(`Password: ${errorData.password.join(', ')}`);
        }
      } else {
        toast.error('An unexpected error occurred');
      }
      console.error('Error registering user:', error);
    },
  });

  const registerUser = async (data: FormData, onSuccess: () => void) => {
    mutation.mutate({
      username: data.username,
      email: data.email,
      password: data.password,
      repeat_password: data.repeat_password,
    }, {
      onSuccess,
    });
  };

  return { registerUser, isLoading: mutation.isLoading };
};