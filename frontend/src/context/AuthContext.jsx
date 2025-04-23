import { createContext, useContext, useState, useEffect } from "react";
import {
  setAccessToken,
  setAccessTokenForForm,
  removeAccessToken
} from "../api/api.js";
import { useNavigate } from "react-router";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthentiCated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  const setToken = token => {
    setIsAuthenticated(token);
    setAccessToken(token);
    setAccessTokenForForm(token);
  };
  const clearToken = () => {
    setIsAuthenticated(null);
    removeAccessToken();
  };


  const value = {
    setToken,
    clearToken,
    isAuthentiCated,
    user,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
