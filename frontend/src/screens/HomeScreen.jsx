import { Row, Col, Image, Form } from "react-bootstrap";
import Product from "../components/Product";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productActions";
import { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { useState } from "react";
import { productSortKeys, sortingProducts } from "../utils/pSortKeysAndFn";
import "../style/homeScreen.css";

const HomeScreen = () => {
  const { keyword, pageNumber = 1 } = useParams();
  const dispatch = useDispatch();
  const { products, loading, error, page, pages } = useSelector(
    (state) => state.productList
  );
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (sortedProducts.length) {
      setSortedProducts([]);
    }
    dispatch(listProducts(keyword, pageNumber));
    if (pageNumber !== 1) {
      window.scrollTo(0, 1000);
    }
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <h2>Our Top Rated Products</h2> <ProductCarousel />
        </>
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {!keyword && (
        <Link to="/teams/hardwood-classics">
          <Image
            fluid
            alt="Hardwood Classics"
            src="https://store.nba.com/content/ws/all/c4d32bbb-2e16-439d-b5a8-40ae6607b11c__1600X617.jpg"
          />
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : products.length ? (
        <>
          <h1 className="my-4">Our Collection:</h1>
          <Row className="mt-4 mb-1">
            <Col>Sort By:</Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Control
                as="select"
                onChange={(e) =>
                  sortingProducts(e.target.value, products, setSortedProducts)
                }
              >
                {productSortKeys.map((key) => (
                  <option key={key.value} value={key.value}>
                    {key.content}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row>
          {!sortedProducts.length ? (
            <Row className="home-screen-products mt-3">
              {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="home-screen-products mt-3">
              {sortedProducts.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      ) : (
        <h1 className="mt-3">
          Search keyword came up with no results, try again
        </h1>
      )}
    </>
  );
};

export default HomeScreen;
