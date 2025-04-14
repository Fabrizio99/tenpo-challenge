import { useReducer, ReactNode, useEffect } from "react";

import { AuthContext } from "./context";
import { getToken } from "@/utils/token";
import { AuthActionTypes, INITIAL_STATE, reducer } from "./reducer";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    const token = getToken();
    dispatch({ type: AuthActionTypes.INIT_SESSION, token });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
