import {
  type FC,
  type ReactNode,
  useReducer,
  useMemo,
  createContext,
} from "react";
import authReducer, { AuthActionKind } from "./authReducer";
import * as SecureStore from "expo-secure-store";

export interface AuthState {
  user: string | null;
  saveUserInStore: (user: string) => Promise<void>;
  getUserInStore: () => Promise<void>;
  deleteUserInStore: () => Promise<void>;
}

interface AuthStateProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthState>({
  user: null,
  saveUserInStore: () => Promise.resolve(),
  getUserInStore: () => Promise.resolve(),
  deleteUserInStore: () => Promise.resolve(),
});

export const AuthContextData: FC<AuthStateProviderProps> = ({ children }) => {
  const initialState: AuthState = {
    user: null,
    saveUserInStore: () => Promise.resolve(),
    getUserInStore: () => Promise.resolve(),
    deleteUserInStore: () => Promise.resolve(),
  };

  const { SAVE_USER, GET_USER } = AuthActionKind;

  const [state, dispatch] = useReducer(authReducer, initialState);

  const saveUserInStore = async (user: string) => {
    await SecureStore.setItemAsync("User", user);
    dispatch({ type: SAVE_USER, payload: user });
  };

  const getUserInStore = async () => {
    const userInStore = await SecureStore.getItemAsync("User");
    dispatch({ type: GET_USER, payload: userInStore });
  };

  const deleteUserInStore = async () => {
    await SecureStore.deleteItemAsync("User");
    dispatch({ type: SAVE_USER, payload: null });
  };

  const contextValue = useMemo(() => {
    return {
      user: state.user,
      saveUserInStore,
      getUserInStore,
      deleteUserInStore,
    };
  }, [state.user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
