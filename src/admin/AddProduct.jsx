import React, { useState } from "react";
import { Container, Col, Row, Form, FormGroup } from "reactstrap";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// import { upload } from "@testing-library/user-event/dist/upload";
const AddProduct = () => {
  const [entertitle, setEntertitle] = useState("");
  const [enterShortDes, setEnterShortDes] = useState("");
  const [enterdescription, setEnterDescription] = useState("");
  const [entercategory, setEntercategory] = useState("");
  const [enterprice, setEnterPrice] = useState("");
  const [enterMRP, setMRP] = useState("");
  const [enterimg, setEnterImg] = useState("");
  const [loading, setloading] = useState(false);

  const addProduct = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `products/productsImages${Date.now() + entertitle}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterimg);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          toast.error("Upload failed");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await addDoc(docRef, {
              productName: entertitle,
              shortDesc: enterShortDes,
              description: enterdescription,
              category: entercategory,
              price: enterprice,
              imgUrl: downloadUrl,
              mrp:enterMRP,
            });
          });

          setEntertitle("");
          setEnterShortDes("");
          setEnterDescription("");
          setEntercategory("");
          setEnterPrice("");
          setMRP("");

          setEnterImg("");
          setloading(false);
          toast.success("Product added");
          // navigate('/dashboard/all-products');
        }
      );
    } catch (error) {
      toast.error(error.message);
      setloading(false);
    }
  };

  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   setloading(true);
  //   try {
  //     const docRef = await collection(db, "products");
  //     const StorageRef = ref(
  //       storage,
  //       `products/productsImages${Date.now() + entertitle}`
  //     );
  //     const uploadTask = uploadBytesResumable(StorageRef, enterimg);

  //     uploadTask.on(
  //       () => {
  //         toast.error("upload falied ");
  //       },
  //       () => {
  //         console.log(uploadTask,'dd')
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
  //           await addDoc(docRef, {
  //             productName: entertitle,
  //             shortDesc: enterShortDes,
  //             description: enterdescription,
  //             category: entercategory,
  //             price: enterprice,
  //             imgUrl: downloadUrl,
  //           });
  //         });
  //         setimg("");
  //         setShortDes("");
  //         setcategory("");
  //         setdescription("");
  //         settilte("");
  //         setprice("");
  //         setloading(false);
  //         toast.success("product added");

  //         navigate("/dashboard/all-products");
  //       }
  //     );
  //   } catch (error) {
  //     toast.error(error.message);
  //     setloading(false);
  //   }
  // };
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
                        onChange={(e) => setEntertitle(e.target.value)}
                        value={entertitle}
                        required
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Short Description</span>
                      <input
                        required
                        type="text"
                        onChange={(e) => setEnterShortDes(e.target.value)}
                        value={enterShortDes}
                        placeholder="short description"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Description</span>
                      <input
                        type="text"
                        required
                        onChange={(e) => setEnterDescription(e.target.value)}
                        value={enterdescription}
                        placeholder="description"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Price</span>
                      <input
                        type="number"
                        required
                        onChange={(e) =>setEnterPrice(e.target.value)}
                        value={enterprice}
                        placeholder="Price"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>MRP</span>
                      <input
                        type="number"
                        required
                        onChange={(e) =>setMRP(e.target.value)}
                        value={enterMRP}
                        placeholder="Price"
                      ></input>
                    </FormGroup>
                    <FormGroup className="form_grp">
                      <span>Category</span>
                      <select
                        onChange={(e) => setEntercategory(e.target.value)}
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
                        onChange={(e) => setEnterImg(e.target.files[0])}
                        type="file"
                      ></input>
                    </FormGroup>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit">
                      Add Product
                    </button>
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
