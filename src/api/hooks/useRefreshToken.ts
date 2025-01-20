import { supabase } from "../../supabase";
import { toast } from "react-toastify";

export const useRefreshToken = () => {
  const refreshUserToken = async (refreshToken: string) => {
    try {
      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: refreshToken,
      });

      if (error) {
        toast.error("Failed to refresh token");
        console.error("Error refreshing token:", error.message);
        return;
      }

      if (data && data.session) {
        const { session } = data;
        const { access_token, refresh_token } = session;

        if (access_token && refresh_token) {
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("refreshToken", refresh_token);
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
