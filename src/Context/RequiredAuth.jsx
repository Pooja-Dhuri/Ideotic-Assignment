import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuthorized } = useContext(AuthContext);
  // console.log(isAuthorized)

  if (isAuthorized) {
    return children;
  } else {
    return <Navigate to="/register" />;
  }
};

export default RequireAuth;
