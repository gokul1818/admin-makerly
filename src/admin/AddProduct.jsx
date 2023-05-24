import React, { useState } from "react";
import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// import { upload } from "@testing-library/user-event/dist/upload";
const AddProduct = () => {
  const [entertitle, settilte] = useState("");
  const [enterShortDes, setShortDes] = useState("");
  const [enterdescription, setdescription] = useState("");
  const [entercategory, setcategory] = useState("");
  const [enterprice, setprice] = useState("");
  const [enterimg, setimg] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const docRef = await collection(db, "products");
      const StorageRef = ref(storage, `/productImages`);
      const uploadTask = uploadBytesResumable(StorageRef, enterimg);

      uploadTask.on(
        () => {
          toast.error("upload falied ");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await addDoc(docRef, {
              productName : entertitle,
              shortDesc: enterShortDes,
              description: enterdescription,
              category: entercategory,
              price: enterprice,
              imgUrl: downloadUrl,
            });
          });
          setloading(false);
          toast.success("product added");
          navigate("/dashboard/all-products");
        }
      );
    } catch (error) {
      toast.error(error.message);
      setloading(false);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col>
            {loading ? (
              <h2 className="text-center">loading...</h2>
            ) : (
              <>
                <h4>Add Product</h4>
                <Form onSubmit={addProduct}>
                  <div>
                    <FormGroup className="form_grp ">
                      <span>product title</span>
                      <input
                        type="text"
                        placeholder="Add your Product"
                        onChange={(e) => settilte(e.target.value)}
                        value={entertitle}
                        required
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Short Description</span>
                      <input
                        required
                        type="text"
                        onChange={(e) => setShortDes(e.target.value)}
                        value={enterShortDes}
                        placeholder="short description"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Description</span>
                      <input
                        type="text"
                        required
                        onChange={(e) => setdescription(e.target.value)}
                        value={enterdescription}
                        placeholder="description"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Price</span>
                      <input
                        type="number"
                        required
                        onChange={(e) => setprice(e.target.value)}
                        value={enterprice}
                        placeholder="Price"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Category</span>
                      <select
                        onChange={(e) => setcategory(e.target.value)}
                        value={entercategory}
                      >
                        <option value="chair">chair</option>
                        <option value="sofa">sofa</option>

                        <option value="watch">watch</option>
                        <option value="wireless">wireless</option>

                        <option value="mobile">mobile</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className="form_grp">
                      <span>Product Image</span>
                      <input
                        required
                        onChange={(e) => setimg(e.target.files[0])}
                        type="file"
                      ></input>
                    </FormGroup>
                  </div>
                  <div>
                    <button type="submit">Add Product</button>
                  </div>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
