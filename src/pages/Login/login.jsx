import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../../components/helmet/helmet";
import { motion } from "framer-motion";
import "../../styles/Login.css";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setloading(false);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setloading(false);
      toast("login successfully");

      navigate("/dashboard");
    } catch (error) {
      setloading(false);
      toast(error.message);
    }
  };

  return (
    <Helmet>
      <section className="login_page mb-3">
        <Container>
          <Row>
            {loading ? (<Col lg="12" className="text-center">
              <h6>loading..</h6>
            </Col>): (
              <Col lg="6  m-auto text-center form_box">
              <Form className="login_form  " onSubmit={signIn}>
                <h6 className=" fs-1 fw-1 my-4"> Admin Login</h6>
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
                <button
                  style={{ width: "100px" }}
                  className="check_out_btn my-4"
                >
                  Login
                </button>
                {/* <Link
                  style={{
                    textDecorationLine: "none",
                    color: "grey",
                  }}
                  to="/Signup"
                >
                  <motion.p whileTap={{ scale: 0.9 }}>
                    Don't have an account? Create an account
                  </motion.p>
                </Link> */}
              </Form>
            </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Login;
