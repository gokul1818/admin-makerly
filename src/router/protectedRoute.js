import React from "react";
import UseAuth from "../customhook/useAuth";
import { Navigate } from "react-router-dom";
const protectedRoute = ({ children }) => {
  const {currentUser} = UseAuth();

  return currentUser ? children: <Navigate to="/login" />  ;
};

export default protectedRoute;
