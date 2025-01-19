// hooks/useLogin.ts
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
      const { error } = await supabase.auth.signInWithPassword({
        email: identifier,
        password,
      });

      if (error) {
        setError("Invalid login credentials");
        toast.error("Invalid login credentials");
        console.error("Login Error:", error.message);
        return;
      }

      // On success, update state and navigate
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
      onSuccess(); // Trigger the callback to navigate
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return {
    loginUser,
    isLoading: false, // Supabase handles loading internally
  };
};
