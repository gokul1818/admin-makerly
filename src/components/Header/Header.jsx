import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/Makerly.png";
import logo1 from "../../assets/logo.png";
import user_profile from "../../assets/user_profile.png";
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
  const headerRef = useRef(null);
  const stickyheader = () => {
    if (document.body.scrollTo > 80 || document.documentElement.scrollTo > 80) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticker_header");
    }
  };
  useEffect(() => {
    stickyheader();
    return ()=> window.removeEventListener('scroll',stickyheader)
  });
  return (
    <header className="stickey_header" ref={headerRef}>
      <Container>
        <Row>
          <div className="navbar">
            <div className="logo">
              <img src={logo1} alt="logo"></img>
              <div>
                <h2>
                  {" "}
                  <img src={logo} alt="logo"></img>
                </h2>
              </div>
            </div>

            <div className="navigation pt-3">
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
            </div>

            {/* <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div> */}
          </div>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
