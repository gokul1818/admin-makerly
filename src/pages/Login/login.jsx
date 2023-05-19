import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/helmet";
import { motion } from "framer-motion";
import "../../styles/Login.css";
const Login = () => {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()

  return (
    <Helmet>
      <section className="login_page mb-3">
        <Container>
          <Row>
            <Col lg="6  m-auto text-center form_box">
              <Form className="login_form  ">
                <h6 className=" fs-1 fw-1 my-4">Login</h6>
                <FormGroup className="form_grp">
                  <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="enter your email" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="enter your password" />
                </FormGroup>
                <button
                  style={{ width: "100px" }}
                  className="check_out_btn my-4"
                >
                  Login
                </button>
                <Link
                  style={{
                    textDecorationLine: "none",
                    color: "grey",
                  }}
                  to="/Singup"
                >
                  <motion.p whileTap={{ scale: 0.9 }}>
                    Don't have an account? Create an account
                  </motion.p>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Login;
