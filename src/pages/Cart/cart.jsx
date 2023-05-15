import React from "react";
import "../../styles/cart.css";
import Helmet from "../../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../components/ui/Commonsection";
import td_img from "../../assets/images/arm-chair-03.jpg";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
import { cart_Action } from "../../redux/slicer/cart_slice";
const Cart = () => {
  const cart_items = useSelector((state) => state.cart.cartItems);
  console.log(cart_items,'dd')
  return (
    <Helmet title="cart">
      <CommonSection title="shopping cart" />
      <section>
        <Container>
          <Row>
            <Col ld="9">
              {cart_items == 0 ? (
                <h4 className="text-center fs-4">no product found</h4>
              ) : (
                <table className="table bordered">
                  <thead className="">
                    <tr>
                      <th>image</th>
                      <th>Title</th> <th>price</th> <th>quantity</th>{" "}
                      <th>delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart_items.map((item, index) => (
                
                      <tr>
                        <td className="table_img">
                          <img src={item.image} alt="img"></img>
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <motion.td whileTap={{scale:1.2}}>
                          <i class="ri-delete-bin-6-line"></i>
                        </motion.td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Cart;
