import type { Nullable } from "@/models/global";
import { clearToken, setToken } from "@/utils/token";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  INIT_SESSION = "INIT_SESSION",
}

export type AuthAction =
  | { type: AuthActionTypes.LOGIN; token: string }
  | { type: AuthActionTypes.LOGOUT }
  | { type: AuthActionTypes.INIT_SESSION; token: Nullable<string> };

export type AuthState = {
  isAuthenticated: boolean;
  token: Nullable<string>;
  isLoading: boolean;
};

export const INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  token: null,
  isLoading: true,
};

export const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      setToken(action.token);
      return { isAuthenticated: true, token: action.token, isLoading: false };
    case AuthActionTypes.LOGOUT:
      clearToken();
      return { isAuthenticated: false, token: null, isLoading: false };
    case AuthActionTypes.INIT_SESSION:
      return {
        isAuthenticated: !!action.token,
        token: action.token,
        isLoading: false,
      };
    default:
      return state;
  }
};
