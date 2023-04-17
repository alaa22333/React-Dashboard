import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const ProtectedPage = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useAuth();

  if (currentUser) {
    return children;
  } else {
    <Navigate
      to="/sign in"
      state={{ path: location.pathname }}
      replace={true}
    />;
  }
};

export default ProtectedPage;
