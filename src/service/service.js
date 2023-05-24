import React from "react";
import "../service/service.css";
import { Container, Col, Row } from "reactstrap";
import serviceData from "../assets/data/service";
import { motion } from "framer-motion";
const Service = () => {


  return (
    <section className="animated-element {
      ">
      <Container>
        <Row>
          {serviceData.map((items, index) => (
            <Col lg="3" md="6" key={index}>
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 1 } }}
                whileTap={{ scale: 0.9 }}
                className="service_items"
                style={{ background: `${items.bg}` }}
              >
                <span>
                  <i class={items.icon}></i>
                </span>
                <div className="service_card">
                  <h4>{items.title}</h4>
                  <p>{items.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
