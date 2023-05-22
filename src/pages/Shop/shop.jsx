import React, { useState,useEffect } from "react";
import Helmet from "../../components/helmet/helmet";
import CommonSection from "../../components/ui/Commonsection";
import { Container, Row, Col } from "reactstrap";
// import CommonSection from "../../components/ui/CommonSection";
import "../../styles/shop.css";
import product from "../../assets/data/products";
import ProductList from "../../components/ui/ProductList";
const Shop = () => {
  const [productdata, setproductdata] = useState(product);
  const handleFilter = (e) => {
    const filtervalue = e.target.value;
    if (filtervalue === "sofa") {
      const filteredproduct = product.filter(
        (item) => item.category === "sofa"
      );
      setproductdata(filteredproduct);
    }
    if (filtervalue === "mobile") {
      const filteredproduct = product.filter(
        (item) => item.category === "mobile"
      );
      setproductdata(filteredproduct);
    }
    if (filtervalue === "watch") {
      const filteredproduct = product.filter(
        (item) => item.category === "watch"
      );
      setproductdata(filteredproduct);
    }
    if (filtervalue === "wireless") {
      const filteredproduct = product.filter(
        (item) => item.category === "wireless"
      );
      setproductdata(filteredproduct);
    }
  };
  const handleSearch = (e) => {
    const searchteam = e.target.value;
    const searchProducts = product.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchteam.toLocaleLowerCase())
    );
    setproductdata(searchProducts);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  } );
  return (
    <Helmet title="shop ">
      <CommonSection title="product" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3" xs='6' >
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>filter by category</option>
                  <option value="sofa">sofa</option>
                  <option value="mobile">mobile</option>
                  <option value="watch">watches</option>
                  <option value="wireless">wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3" xs='6'>
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>

                  <option value="decending">High to Low</option>
                  <option value="ascending">Low to High</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6" xs='12'>
              <div className="search_box text-center mx-auto">
                <input
                  type="text"
                  placeholder="search..."
                  onChange={handleSearch}
                ></input>
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productdata.length === 0 ? (
              <h1 className="text-center fs-4">No products found</h1>
            ) : (
              // <ProductList data={productdata} />

              <ProductList data={productdata} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Shop;
