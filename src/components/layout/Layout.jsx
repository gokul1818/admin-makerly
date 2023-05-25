import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Link } from "react-router-dom"
import Routers from "../../router/Routers";
import { useLocation } from 'react-router-dom';
import AdminNav from "../../admin/AdminNav";
const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.startsWith('/dashboard')? <AdminNav/>: <AdminNav/>}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
