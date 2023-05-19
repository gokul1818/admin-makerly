import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/helmet";
import { motion } from "framer-motion";

import "../../styles/Login.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

 

  return (
    <Helmet>
      <section className="login_page mb-3">
        <Container>
          <Row>
            <Col lg="6  m-auto text-center form_box">
              <Form className="login_form  " >
                <h6 className=" fs-1 fw-1 my-4">Signup</h6>
                <FormGroup className="form_grp">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="name"
                    placeholder="enter your Username"
                  />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder="enter your email"
                  />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    placeholder="enter your password"
                  />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input
                    style={{ border: "none" }}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button
                  style={{ width: "200px" }}
                  className="check_out_btn my-4"
                >
                  Create Account
                </button>
                <Link
                  style={{
                    textDecorationLine: "none",
                    color: "grey",
                  }}
                  to="/Login"
                >
                  <motion.p whileTap={{ scale: 0.9 }}>
                    Already have an account? login
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
export default Signup;
