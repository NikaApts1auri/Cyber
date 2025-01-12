import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAtom } from "jotai";
import { logoutUser as apiLogoutUser } from "../requests/logout";
import { refreshToken as apiRefreshToken } from "../requests/refreshToken";
import { isAuthenticatedAtom } from "../../store/authAtoms";

interface TokenResponse {
  access: string;
}

const isTokenExpired = (token: string) => {
  const payload = JSON.parse(
    atob(token.split(".")[1])
  );
  return payload.exp * 1000 < Date.now();
};

export const useLogout = () => {
  const navigate = useNavigate();
  const [, setIsAuthenticated] = useAtom(
    isAuthenticatedAtom
  );

  const refreshMutation = useMutation(
    apiRefreshToken,
    {
      onSuccess: (data: TokenResponse) => {
        localStorage.setItem(
          "accessToken",
          data.access
        );
        logoutMutation.mutate(
          localStorage.getItem("refreshToken")!
        );
      },
      onError: (error: unknown) => {
        console.error(
          "Error refreshing token:",
          error
        );
        navigate("/login");
      },
    }
  );

  const logoutMutation = useMutation(
    apiLogoutUser,
    {
      onSuccess: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsAuthenticated(false);
        navigate("/login");
      },
      onError: (error: unknown) => {
        console.error(
          "Error logging out:",
          error
        );
        navigate("/login");
      },
    }
  );

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem(
      "refreshToken"
    );
    const accessToken = localStorage.getItem(
      "accessToken"
    );

    if (
      accessToken &&
      isTokenExpired(accessToken) &&
      refreshToken
    ) {
      refreshMutation.mutate(refreshToken);
    } else if (refreshToken) {
      logoutMutation.mutate(refreshToken);
    }
  };

  return { handleLogout };
};
