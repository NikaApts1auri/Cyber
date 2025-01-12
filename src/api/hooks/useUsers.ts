import { useQuery } from "react-query";
import {
  fetchUsers,
  UsersResponse,
} from "../requests/users";

export const useUsers = () => {
  return useQuery<UsersResponse, Error>(
    "users",
    fetchUsers
  );
};
