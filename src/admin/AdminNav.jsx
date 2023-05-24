import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/admin.css";
import usericon from '../assets/images/user-icon.png'
// import UseAuth from "../customhook/useAuth";
import { NavLink } from "react-router-dom";
const AdminNav = () => {
  // const { currentUser } = UseAuth();
  const adminNav = [
    {
      display: "Dashboard",
      path: "/dashboard",
    },
    {
      display: "All Products",
      path: "/dashboard/all-products",
    },
    {
      display: "Add Products",
      path: "/dashboard/add-product",
    },
    // {
    //   display: "users",
    //   path: "/dashboard/users",
    // },
  ];
  return (
    <>
      <header className="admin_header">
        <div className="admin_nav_top">
          <Container>
            <Row>
              <div className="admin_nav_wrapper">
                <div className="logo">
                  <h2>Makerly</h2>
                </div>
                <div className="admin_search_box">
                  <input placeholder="search.." type="text" />
                  <span>
                    <i class="ri-search-2-line"></i>
                  </span>
                </div>
                <div className="admin_right">
                  <span>
                    <i class="ri-notification-4-line"></i>
                  </span>
                  <span>
                    <i class="ri-settings-4-fill"></i>
                  </span>
                  <img src={usericon} alt="" />
                </div>
              </div>
            </Row>
            <Row>
              <Col lg='12'>
            <div className="admin_search_box_mobile">
                  <input placeholder="search.." type="text" />
                  <span>
                    <i class="ri-search-2-line"></i>
                  </span>
                </div>
              </Col>
          </Row>    
          </Container>
        </div>
      </header>
      <section className="admin_menu">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu_list">
                {adminNav.map((item, index) => (
                  <li className="admin_menu_list" key={index}>
                    <NavLink
                      className={(nav_action) =>
                        nav_action.isActive ? "active_menu_list" : ""
                      }
                      style={{ textDecorationLine: "none", color: "black" }}
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
