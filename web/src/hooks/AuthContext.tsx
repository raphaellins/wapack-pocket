import React, { createContext, useCallback, useState, useContext } from "react";

import UserProxy from "../services/user.proxy";

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  email: string;
  token: string;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

interface AuthState {
  email: string;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@WapackPocket:token");
    const email = localStorage.getItem("@WapackPocket:email");

    if (token && email) {
      return { email, token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const token = await new UserProxy().login(email, password);

    if (token) {
      localStorage.setItem("@WapackPocket:token", `Bearer ${token}`);
      localStorage.setItem("@WapackPocket:email", email);

      setData({ email, token });

      return true;
    } else {
      //TODO error

      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@WapackPocket:token");
    localStorage.removeItem("@WapackPocket:email");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ email: data.email, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
