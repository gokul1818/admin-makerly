import React from "react";
import UseAuth from "../customhook/useAuth";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const protectedRoute = () => {
  const {currentUser} = UseAuth();

  return currentUser ? <Outlet/>: <Navigate to="/login" />  ;
};

export default protectedRoute;
