import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // if (!roles.includes(user.role)) {
  //   return <Navigate to="/dashboard" replace state={{ from: location }} />;
  // }

  return children;
};

export default PrivateRoute;
