import React from "react";
import { Container, Row, Col } from "reactstrap";
import produimg from "../assets/Makerly.png";
import "../styles/allproduct.css";
const AllProduct = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <table className="product_table">
              <thead className="product_tablehead">
                <tr>
                  <th>Image</th>
                  <th>Title</th>

                  <th>Category</th>

                  <th>Price</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={produimg}
                    ></img>
                  </td>
                  <td>chair</td>
                  <td>sofa</td>
                  <td>₹12</td>
                  <td>
                    <button className="btn btn-danger">delete </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
