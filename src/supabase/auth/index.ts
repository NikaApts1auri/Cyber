import { supabase } from ".."

 export const register = ({email,password}:{email:string, password:string})=>{
    return supabase.auth.signUp({email,password}).then
 }