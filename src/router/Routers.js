import React from "react";

import Login from "../pages/Login/login";
import Signup from "../pages/Signup/singup";
import ProtectedRoute from "./protectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../admin/AddProduct";
import AllProduct from "../admin/AllProduct";
import DashBoard from "../admin/DashBoard";
import SwipperOffer from "../admin/swipperimg";
import AddLimitedOfferForm from "../admin/addoffers";
import Users from "../admin/Users";
import Orders from "../admin/orders";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />}></Route>

        {/* <Route path="Signup" element={<Signup />}></Route>  */}

        <Route path="login" element={<Login />}></Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="dashboard/add-product" element={<AddProduct />}></Route>
          <Route path="dashboard/all-products" element={<AllProduct />}></Route>
          <Route
            path="dashboard/add-offers"
            element={<AddLimitedOfferForm />}
          ></Route>
          <Route
            path="dashboard/swipper-offer"
            element={<SwipperOffer />}
          ></Route>
          <Route path="dashboard/orders" element={<Orders />}></Route>
          <Route path="dashboard/users" element={<Users />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default Routers;
