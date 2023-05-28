import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/addproduct.css";
import useGetData from "../customhook/useGetData";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const SwipperOffer = () => {
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const { data: ImagesOffer } = useGetData(`swipperImg`);
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "swipperImg", id));
    toast.success("Banner deleted");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    try {
      setloading(true);
      const storage = getStorage();
      const storageRef = ref(storage, `swipperImg/images${Date.now()}`);
      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "swipperImg"), {
        imageUrl,
      });

      toast.success("Offer added");
      setImage(null);
      setloading(false);
      console.log("Limited offer added to Firestore");
    } catch (error) {
      setloading(false);
      console.error("Error adding limited offer to Firestore:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            {loading ? (
              <h5>loading...</h5>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <FormGroup className="form_grp">
                  <span>Image:</span>
                  <input required type="file" onChange={handleImageChange} />
                </FormGroup>
                <FormGroup className="form_grp">
                  <button type="submit">Add Limited Offer</button>
                </FormGroup>
              </Form>
            )}
          </Col>
          <Col lg="6">
            <h2 className="text-center"> Offer Banner </h2>

            {ImagesOffer.map((item, index) => (
              <div key={index} className="swipperBanner">
                <img src={item.imageUrl}></img>
                <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>
                  delete{" "}
                </button>{" "}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SwipperOffer;
