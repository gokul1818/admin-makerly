import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/Makerly.png";
import logo1 from "../../assets/logo.png";
import user_profile from "../../assets/profile.png";
import { NavLink } from "react-router-dom";
import "../Header/header.css";
const Header = () => {
  const Navlink = [
    {
      path: "Home",

      display: "Home",
    },
    {
      path: "Shop",
      display: "Shop",
    },
    {
      path: "Cart",
      display: "Cart",
    },
  ];
 
  
 const menuRef =useRef(null)
const menu_toggle =()=>menuRef.current.classList.toggle('mobile_menu')
  return (
    <header className="stickey_header" >
      <Container>
        <Row>
          <div className="navbar">
            <div className="logo ">
              <img src={logo1} alt="logo"></img>
              <div>
                <h2>
                  {" "}
                  <img src={logo} alt="logo"></img>
                </h2>
              </div>
            </div>

            <div className="navigation pt-3 " ref={menuRef} onClick={menu_toggle}>
              <ul className="menu">
                {Navlink.map((items) => (
                  <li className="list">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                      style={{
                        textDecorationLine: "none",
                        color: "black",
                        marginRight: "20px",
                      }}
                      to={items.path}
                    >
                      {items.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icon">
              <span className="cart_icon me-4">
                <span className="bandage">1</span>
                <i class="ri-shopping-cart-fill "></i>
              </span>
              <span className="fav_icon me-4">
                <span className="bandage">1</span>

                <i class="ri-heart-3-line"></i>
              </span>
              <img src={user_profile} alt="profile pic"></img>
              <span onClick={menu_toggle} className="mobile_menu mx-3">
                <i class="ri-menu-line"></i>
              </span>

            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
