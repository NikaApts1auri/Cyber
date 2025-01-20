import { supabase } from "../../supabase";
import { useAtom } from "jotai";
import { errorAtom } from "../../store/store";
import { isAuthenticatedAtom } from "../../store/authAtoms";
import { toast } from "react-toastify";

interface FormData {
  identifier: string;
  password: string;
}

export const useLogin = () => {
  const [, setError] = useAtom(errorAtom);
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  const loginUser = async (data: FormData, onSuccess: () => void) => {
    const { identifier, password } = data;

    try {
      const { data: session, error } = await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      });

      if (error) {
        setError("Invalid login credentials");
        toast.error("Invalid login credentials");
        console.error("Login Error:", error.message);
        return;
      }

      // Access and Refresh Tokens
      const { access_token, refresh_token } = session.session || {};

      if (access_token && refresh_token) {
        // Save tokens to localStorage
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);

        setIsAuthenticated(true);
        toast.success("Logged in successfully");
        onSuccess();
      } else {
        setError("Login failed. Tokens not received.");
        toast.error("Login failed. Tokens not received.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return {
    loginUser,
    isLoading: false,
  };
};
