import React, { useState } from "react";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useState();
  const { state } = useLocation();

  if (!loading && !user) {
    return <Navigate to="/auth/login" state={state} />;
  }

  return children;
};

export default PrivetRoute;
