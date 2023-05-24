import React from "react";
import { Container, Row, Col } from "reactstrap";
// import produimg from "../assets/Makerly.png";
import "../styles/allproduct.css";
import useGetData from "../customhook/useGetData";
import { db } from "../firebase.config";

import {toast} from 'react-toastify'
import { doc, deleteDoc } from "firebase/firestore";
const AllProduct = () => {
  const { data: productData, loading } = useGetData(`products`);
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success('product deleted')
  };
  // console.log(productData)
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <table className="table">
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
                {loading ? (
                  <h2 className="py-5">loading...</h2>
                ) : (
                  productData.map((item) => (
                    <tr>
                      <td>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={item.imgUrl}
                        ></img>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={() => deleteProduct(item.id)}
                      
                        >
                          delete{" "}
                        </button>{" "}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
