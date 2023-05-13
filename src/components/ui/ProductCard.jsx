import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";
const ProductCard = ({item}) => {
  return (
    <Col lg="3" md="4">
      <motion.div
        whileTap={{ scale: 1.1, transition: { duration: 0.3 } }}
        className="products_items"
      >
        <Link
          to={`/shop/${item.id}`}   
          style={{
            textDecorationLine: "none",
            color: "black",
          }}
        >
          <div className="products_img">
            <img src={item.imgUrl} alt="img"></img>
          </div>
          <div className="product_info">
            <h4>{item.productName}</h4>
            <span className="p-2">{item.category}</span>
          </div>
        </Link>
      </motion.div>
      <div className="product_bottom d-flex justify-content-between">
        <span>₹{item.price}</span>
        <motion.span whileTap={{ scale: 1.2 }}>
          <i class="ri-add-fill"></i>
        </motion.span>
      </div>
    </Col>
  );
};
export default ProductCard;
