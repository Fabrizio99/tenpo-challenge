import { createContext } from "react";

import { INITIAL_STATE, AuthState, AuthAction } from "./reducer";

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});
