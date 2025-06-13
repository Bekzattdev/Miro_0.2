import { useState } from "react";

const TOKEN_KEY = "token";
export const useSession = () => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    setToken(token)
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return { token, login, logout };
};
