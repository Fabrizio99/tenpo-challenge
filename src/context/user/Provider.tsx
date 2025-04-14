import { ReactNode, useEffect, useState } from "react";

import { UserContext } from "./context";
import type { User } from "@/models/user";
import { useAuth } from "@/hooks/useAuth";
import { getUser } from "@/services/user";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useAuth();

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const user = await getUser();
      setUser(user);
    } catch (error) {
      setUser(null);
      console.error("Failed to fetch user", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeUser = () => {
    setUser(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!state.isAuthenticated) {
      setUser(null);
      setIsLoading(false);
      return;
    }
    fetchUser();
  }, [state.isAuthenticated]);
  return (
    <UserContext.Provider value={{ user, fetchUser, isLoading, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
