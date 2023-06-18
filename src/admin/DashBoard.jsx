import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css";
import useGetData from "../customhook/useGetData";
import { useNavigate } from "react-router";
const DashBoard = () => {
  const navigate=useNavigate()
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("Users");
  const { data: Orders } = useGetData("Orders");


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue_box">
                <h5>Total sales</h5>
                <span>₹22233</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="order_box">
                <h5>Order</h5>
                <span>{Orders.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products_box" onClick={()=>{navigate('/dashboard/all-products')}}>
                <h5>Total Product</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users_box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DashBoard;
