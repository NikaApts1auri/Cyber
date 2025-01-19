// hooks/useRefreshToken.ts
import { supabase } from "../../supabase";
import { toast } from "react-toastify";

export const useRefreshToken = () => {
  // Function to refresh user token
  const refreshUserToken = async (refreshToken: string) => {
    try {
      // Correct way to pass refresh_token as an object
      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: refreshToken,
      });

      if (error) {
        toast.error("Failed to refresh token");
        console.error("Error refreshing token:", error.message);
        return;
      }

      // Extract access_token from session if available
      if (data && data.session) {
        const { session } = data;
        const { access_token, refresh_token } = session;

        if (access_token && refresh_token) {
          // Store new tokens in localStorage
          localStorage.setItem('accessToken', access_token);
          localStorage.setItem('refreshToken', refresh_token);
          toast.success("Token refreshed successfully");
        } else {
          toast.error("No tokens available");
        }
      } else {
        toast.error("No session data");
      }
    } catch (err) {
      toast.error("Error refreshing token");
      console.error("Error refreshing token:", err);
    }
  };

  return { refreshUserToken };
};
