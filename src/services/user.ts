import { api } from "./api";
import { PATHS } from "@/config/api";
import { User } from "@/models/user";

export const getUser = async (): Promise<User> => {
  const response = await api.get<User>(PATHS.USER);
  return response.data;
};
