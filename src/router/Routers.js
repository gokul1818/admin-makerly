import React from "react";

import Cart from "../pages/Cart/cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import Productdetails from "../pages/ProductDetails/productdetails";
import Shop from "../pages/Shop/shop";
import Signup from "../pages/Signup/singup";
import Checkout from "../pages/Checkout/checkout";
import ProtectedRoute from "./protectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
// import Profile from "../pages/Profile/profile";
import Profile from "../pages/Profile/profile";
import AddProduct from "../admin/AddProduct";
import AllProduct from "../admin/AllProduct";
import DashBoard from "../admin/DashBoard";
import Users from "../admin/Users";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" n/>}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
        <Route path="shop/:id" element={<Productdetails />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/*" element={<ProtectedRoute/>}>
          <Route path="home" element={<Checkout />}></Route>
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="dashboard/add-product" element={<AddProduct />}></Route>
          <Route path="dashboard/all-products" element={<AllProduct />}></Route>
          <Route path="dashboard/users" element={<Users />}></Route>

        </Route>
        <Route
          path="profile"
          element={
            // <ProtectedRoute>
            // </ProtectedRoute>
            <Profile />
          }
        ></Route>
      </Routes>
    </>
  );
};
export default Routers;
