import React from "react";
import "../../styles/productdetails.css";
import Helmet from "../../components/helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../../components/ui/Commonsection";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import { motion } from "framer-motion";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    desription,
    shortDesc,
  } = product;
  return (
    <section className="head">
      <Helmet>
        <CommonSection title={productName} />
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="product_img">
                  <img src={imgUrl} alt="img"></img>
                </div>
              </Col>
              <Col lg="6">
                <div className="product_details ">
                  <h3>{productName}</h3>
                  <div className="product_rating">
                    <div className="star">
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <p>{`(${avgRating}Rating)`}</p>
                  </div>
                  <span className="price">{`₹${price}`}</span>
                  <p>{shortDesc}</p>
                  <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                    Add to Cart
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </section>
  );
};
export default ProductDetails;
