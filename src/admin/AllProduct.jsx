import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
// import produimg from "../assets/Makerly.png";
import "../styles/allproduct.css";
import useGetData from "../customhook/useGetData";
import { db } from "../firebase.config";

import { toast } from "react-toastify";
import { doc, deleteDoc } from "firebase/firestore";
const AllProduct = () => {
  const { data: productData, loading } = useGetData(`products`);
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("product deleted");
  };
  useEffect(() => {
    const shopdata = productData.map((item) => item);
    setProducts(shopdata);
  }, [productData]);

  const [products, setProducts] = useState([]);

console.log('products', products)  // console.log(productData)
  const handleChange = (e) => {
    e.preventDefault();
    const searchteam = e.target.value;
    const searchProducts = productData.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchteam.toLocaleLowerCase())
    );
    setProducts(searchProducts);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10">
            <div className="admin_search_box ">
              <input placeholder="search.."  onChange={handleChange} type="text" />
              <span>
                <i class="ri-search-2-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
            <table className="table">
              <thead className="product_tablehead">
                <tr>
                  <th>Image</th>
                  <th>Title</th>

                  <th>Category</th>
                  <th>Order List </th>

                  <th>MRP</th>

                  <th>Price</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h2 className="py-5">loading...</h2>
                ) : (
                  products.map((item) => (
                    <tr>
                      <td>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={item.imgUrl}
                        ></img>
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>{item.List }</td>

                      <td>{item.mrp}</td>

                      <td>{item.price}</td>
                      <td>
                        <div className="form_grp_d">
                          <button onClick={() => deleteProduct(item.id)}>
                            delete{" "}
                          </button>{" "}
                        </div>
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

export default AllProduct;
