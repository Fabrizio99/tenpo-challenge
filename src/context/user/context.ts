import { createContext } from "react";

import type { User } from "@/models/user";

interface UserContextType {
  user: User | null;
  fetchUser: () => void;
  removeUser: () => void;
  isLoading: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  fetchUser: () => undefined,
  removeUser: () => undefined,
  isLoading: true,
});
