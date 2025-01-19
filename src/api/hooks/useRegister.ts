import { supabase } from "../../supabase";
import { Database } from "../../supabase/supabase.types";

interface RegisterData {
  email: string;
  password: string;

}

export const useRegister = () => {
  const registerUser = async (data: RegisterData) => {
    const { email, password } = data;

    // Supabase-ის რეგისტრაცია
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message); 
    }


    const user = signUpData?.user;

    if (!user) {
      throw new Error("No user returned from sign up");
    }


    const { error: profileError } = await supabase
      .from<Database['profiles']>('profiles')
      .insert([{  user_id: user.id }]);

    if (profileError) {
      throw new Error(profileError.message);
    }

    return user;
  };

  return {
    registerUser,
  };
};
