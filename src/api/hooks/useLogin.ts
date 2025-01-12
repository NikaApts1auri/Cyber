import { useMutation } from "react-query";
import { useAtom } from "jotai";
import { errorAtom } from "../../store/store";
import { loginUser as apiLoginUser } from "../requests/login";
import { refreshToken as apiRefreshToken } from "../requests/refreshToken";
import { isAuthenticatedAtom } from "../../store/authAtoms";
import { toast } from "react-toastify";
import axios from "axios";

interface FormData {
  identifier: string;
  password: string;
}

interface LoginResponse {
  tokens: {
    access: string;
    refresh: string;
  };
}

interface RefreshTokenResponse {
  access: string;
}

export const useLogin = () => {
  const [, setError] = useAtom(errorAtom);
  const [, setIsAuthenticated] = useAtom(
    isAuthenticatedAtom
  );

  const loginMutation = useMutation<
    LoginResponse,
    unknown,
    FormData
  >(apiLoginUser, {
    onSuccess: (data: LoginResponse) => {
      setError(null);
      localStorage.setItem(
        "accessToken",
        data.tokens.access
      );
      localStorage.setItem(
        "refreshToken",
        data.tokens.refresh
      );
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    },
    onError: (error: unknown) => {
      setError("Error logging in user");
      if (
        axios.isAxiosError(error) &&
        error.response?.data
      ) {
        const errorData = error.response.data;
        if (errorData.detail) {
          toast.error(errorData.detail);
        } else {
          toast.error("Error logging in user");
        }
      } else {
        toast.error(
          "An unexpected error occurred"
        );
      }
      console.error(
        "Error logging in user:",
        error
      );
    },
  });

  const refreshMutation = useMutation<
    RefreshTokenResponse,
    unknown,
    string
  >(apiRefreshToken, {
    onSuccess: (data: RefreshTokenResponse) => {
      setError(null);
      localStorage.setItem(
        "accessToken",
        data.access
      );
    },
    onError: (error: unknown) => {
      setError("Error refreshing token");
      toast.error("Error refreshing token");
      console.error(
        "Error refreshing token:",
        error
      );
    },
  });

  const loginUser = async (
    data: FormData,
    onSuccess: () => void
  ) => {
    loginMutation.mutate(data, {
      onSuccess,
    });
  };

  const refreshUserToken = async (
    refreshToken: string
  ) => {
    refreshMutation.mutate(refreshToken);
  };

  return {
    loginUser,
    refreshUserToken,
    isLoading:
      loginMutation.isLoading ||
      refreshMutation.isLoading,
  };
};
