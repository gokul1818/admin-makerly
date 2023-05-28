import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Container, Form, FormGroup } from "reactstrap";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/addproduct.css";

const AddLimitedOfferForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();

    try {
      setloading(true);
      const storage = getStorage();
      const storageRef = ref(storage, `limitedOffers/${productName}`);
      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "limitedOffers"), {
        productName,
        description,
        originalPrice: parseFloat(originalPrice),
        discountedPrice: parseFloat(discountedPrice),
        endDate: new Date(endDate),
        imageUrl,
      });

      toast.success("Offer added");
      setProductName("");
      setDescription("");
      setOriginalPrice("");
      setDiscountedPrice("");
      setEndDate("");
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
        {loading ? (
          <h5>loading...</h5>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <FormGroup className="form_grp">
              <span>Product Name:</span>
              <input
                required
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form_grp">
              <span>Description:</span>
              <textarea
                value={description}
                required
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form_grp">
              <span>Original Price:</span>
              <input
                type="number"
                value={originalPrice}
                required
                onChange={(e) => setOriginalPrice(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form_grp">
              <span>Discounted Price:</span>
              <input
                type="number"
                value={discountedPrice}
                required
                onChange={(e) => setDiscountedPrice(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="form_grp">
              <span>End Date:</span>
              <input
                type="date"
                value={endDate}
                required
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="form_grp">
              <span>Image:</span>
              <input required type="file" onChange={handleImageChange} />
            </FormGroup>
            <FormGroup className="form_grp">
              <button type="submit">Add Limited Offer</button>
            </FormGroup>
          </Form>
        )}
      </Container>
    </section>
  );
};

export default AddLimitedOfferForm;
