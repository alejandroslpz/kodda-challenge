import { useContext } from "react";
import { AuthContext, AuthState } from "~context";

export const useAuthContext = (): AuthState => {
  const authContext = useContext(AuthContext);
  return authContext;
};
