import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorised] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthorised(true);
    navigate("/");
  };

  const logout = () => {
    setIsAuthorised(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
