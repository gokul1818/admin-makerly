import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Link } from "react-router-dom"
import Routers from "../../router/Routers";
const Layout = () => {
  return (
    <>
      <Header></Header>

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
