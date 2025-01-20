import { supabase } from "../../../supabase";

const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
  
    if (error) {
      console.error('Error fetching user:', error);
    } else {
      console.log('User data:', data);
    }
  };
  
  fetchUser();
  