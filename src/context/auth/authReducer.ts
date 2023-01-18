import type { AuthState } from "./AuthContext";

export enum AuthActionKind {
  SAVE_USER = "SAVE_USER",
  GET_USER = "GET_USER",
}

interface AuthAction {
  type: AuthActionKind;
  payload: string | null;
}

export default (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;

  const reducerType = {
    SAVE_USER: {
      ...state,
      user: payload,
    },
    GET_USER: {
      ...state,
      user: payload,
    },
  };

  return reducerType[type];
};
