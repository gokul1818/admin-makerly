import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../customhook/useGetData";
import { db } from "../firebase.config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
const Users = () => {
  const { data: userData, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("user deleted");
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="fw-bolder text-center">
            <h3>Users</h3>
          </Col>
          <Col lg="12" className="pt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Images</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="fw-1">loading...</h4>
                ) : (
                  userData?.map((user) => (
                    <tr key={user.uid}>
                      <td>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={user.photoURL}
                        ></img>
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button onClick={deleteUser} className=" ">delete</button>
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

export default Users;
